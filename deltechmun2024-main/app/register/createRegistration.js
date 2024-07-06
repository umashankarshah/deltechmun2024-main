import { GraphQLClient, gql } from "graphql-request";

export const client = new GraphQLClient(process.env.NEXT_PUBLIC_API_HYGRAPH
);


const obj = `
$name: String!
$email: String!
$age: String!
$phone: String!
$college: String!
$currentYear: String!
$munAttended: String!
`;
const data = `
name: $name
email: $email
age: $age
phone: $phone
college: $college
currentYear: $currentYear
munAttended: $munAttended
`;
export const createRegistration = gql`
mutation MyMutation (${obj}){
    createRegistration(
      data: {${data}}
    ) {
      id
    }
  }
  
`;
