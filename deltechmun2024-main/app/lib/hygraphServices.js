import { GraphQLClient, gql } from "graphql-request";

export class Service {
  client;
  constructor() {
    this.client = new GraphQLClient(process.env.NEXT_PUBLIC_API_HYGRAPH, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`,
      },
    });
  }
  async getBlogs() {
    try {
      const query = gql`
        query MyQuery {
          blogs(orderBy: createdAt_DESC) {
            author {
              name
              email
              photo {
                url
              }
            }
            categories {
              ... on Category {
                id
                name
              }
            }
            createdAt
            excerpt
            id
            thumbnail {
              url
            }
            title
          }
        }
      `;
      return await this.client.request(query);
    } catch (error) {
      console.log("Hygraph serive :: getBlogs :: error", error);
    }
  }

  async getTargetBlog(id) {
    try {
      const query = gql`
        query MyQuery {
          blog(where: { id: "${id}" }) {
            author {
              name
              email
              bio
              photo {
                url
              }
            }
            createdAt
            title
            description
            thumbnail {
              url
            }
          }
        }
      `;

      return await this.client.request(query);
    } catch (error) {
      console.log("Hygraph serive :: getBlogDetails :: error", error);
      return false;
    }
  }
  async getTargetAuthor(email) {
    try {
      const query = gql`
        query MyQuery {
          author(where: { email: "${email}" }) {
            bio
            email
            name
            photo {
              url
            }
            posts {
              id
              excerpt
              thumbnail {
                url
              }
              updatedAt
              title
            }
          }
        }
      `;

      return await this.client.request(query);
    } catch (error) {
      console.log("Hygraph serive :: getTargetAuthor :: error", error);
      return false;
    }
  }

  async deleteBlog(id) {
    try {
      const mutation = gql`
      mutation MyMutation {
        deleteBlog(where: {id: "${id}"}) {
          id
        }
      }
`;
      return await this.client.request(mutation);
    } catch (error) {
      console.log("Hygraph serive :: deleteBlog :: error", error);
      return false;
    }
  }

  async createBlog(email, formValue) {
    try {
      const originalString = JSON.stringify(formValue.description);
      const correctedString = JSON.stringify(originalString, null, 1);
      const { publishAsset } = await this.uploadAsset(formValue.thumbnail);
      const mutation = gql`
      mutation MyMutation {
        createBlog(
          data: {title: "${formValue.title}", excerpt: "${formValue.excerpt}", 
          author: {connect: {email: "${email}"}}, 
          thumbnail: {connect: {id: "${publishAsset.id}"}},
          description: ${correctedString},
          categories: {connect:[ ${formValue.category
            .map((category) => `{Category: {name: "${category}"}}`)
            .join(",")}
          ]}
        }) {
          id
        }
      }
      `;
      const { createBlog } = await this.client.request(mutation);
      return await this.client.request(gql`
      mutation MyMutation {
        publishBlog(where: {id: "${createBlog.id}"}, to: PUBLISHED) {
          id
        }
      }
      `);
    } catch (error) {
      console.log("Hygraph serive :: createBlog :: error", error);
    }
  }
  //   async updateBlog(id, formValue) {
  //     try {
  //       const originalString = JSON.stringify(formValue.description);
  //       const correctedString = JSON.stringify(originalString, null, 1);
  //       const { publishAsset } = await this.uploadAsset(formValue.thumbnail);
  //       const mutation = gql`
  //       mutation MyMutation {
  //         updateBlog(
  //           data: {title: "${formValue.title}",
  //           excerpt: "${formValue.excerpt}",
  //           author: {connect: {email: "${email}"}},
  //           categories: {connect: ${formValue.categories
  //             .map(
  //               (category) => `{Category: {where: {name: "${category.name}"}}}`
  //             )
  //             .join(",")}
  //           },
  //           thumbnail: {connect: {id: "${publishAsset.id}"}},
  //           description: ${correctedString}
  //         }, where: {id: "${id}"}) {
  //           id
  //         }
  //       }
  // `;
  //       return await this.client.request(mutation);
  //     } catch (error) {
  //       console.log("Hygraph serive :: updateBlog :: error", error);
  //     }
  //   }

  async createAuthor(email, name) {
    try {
      const mutation = gql`
      mutation MyMutation {
        createAuthor(
        data: {name: "${name}", email: "${email}", bio: "DelTech MUN pride member, ready to take onto ant challenge of the world."}
      ) {
        id
        bio
        email
        name
      }
      publishAuthor(where: {email: "${email}"}, to: PUBLISHED) {
        id
      }
    }
      `;
      return await this.client.request(mutation);
    } catch (error) {
      console.log("Hygraph serive :: createAuthor :: error", error);
    }
  }

  async updateProfile(email, formValue) {
    try {
      let id = "";
      if (formValue.dp.name != "") {
        const { publishAsset } = await this.uploadAsset(formValue.dp);
        id = publishAsset.id;
      }
      const mutation = gql`
      mutation MyMutation {
        updateAuthor(
          data: {
            ${
              formValue.name == "" ? `` : "name:" + `"${formValue.name}"` + ", "
            } 
            ${formValue.bio == "" ? `` : "bio:" + `"${formValue.bio}"` + ", "} 
            ${id == "" ? `` : "photo: {connect: {id:" + `"${id}"` + "}}"}
          }
          where: {email: "${email}"}
        ) {
          id
          name
          bio
          photo {
            url
          }
        }
        
        publishAuthor(where: {email: "${email}"}, to: PUBLISHED) {
          id
        }
      }
`;
      return await this.client.request(mutation);
    } catch (error) {
      console.log("Hygraph serive :: updateAuthor :: error", error);
    }
  }
  async uploadAsset(file) {
    try {
      const form = new FormData();
      form.set("fileUpload", file);
      let response = await fetch(
        `${process.env.NEXT_PUBLIC_API_HYGRAPH}/upload`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`,
          },
          body: form,
        }
      );
      response = await response.json();

      const mutation = gql`
      mutation MyMutation {
        publishAsset(where: {id: "${response.id}"}, to: PUBLISHED) {
          id
        }
      }
`;
      return await this.client.request(mutation);
    } catch (error) {
      console.log("Hygraph serive :: uploadAsset :: error", error);
    }
  }
}

const service = new Service();
export default service;
