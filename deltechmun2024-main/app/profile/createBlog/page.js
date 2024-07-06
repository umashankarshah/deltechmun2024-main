import BlogForm from "./blogForm";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import service from "@/app/lib/hygraphServices";

export default async function Page() {
  const session = await getServerSession(options);
  let { author } = await service.getTargetAuthor(session.user.email);
  if (author == null) {
    let { createAuthor } = await service.createAuthor(
      session.user.email,
      session.user.name
    );
    author = createAuthor;
  }
  return (
    <div>
      <BlogForm email={session.user.email} />
    </div>
  );
}
