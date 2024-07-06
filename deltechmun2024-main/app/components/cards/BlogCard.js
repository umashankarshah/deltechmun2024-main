import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const BlogCard = ({
  title,
  img,
  excerpt,
  slug,
  createdAt,
  authorName,
  authorPhoto,
}) => {
  return (
    <div
      className="w-[360px] bg-white rounded-tr-[50px] transform transition-all hover:-translate-y-1 duration-150 border border-[#C5C5C5] shadow-md 
    hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"
    >
      <Image
        height={192}
        width={360}
        src={img}
        alt="thumbnail"
        className="rounded-tr-[50px] h-48"
      />
      <div className="m-4 h-24 flex flex-col justify-evenly">
        <h5 className="mb-2 truncate font-serif text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="font-sans text-ellipsis line-clamp-3 text-sm font-normal text-gray-700">
          {excerpt}
        </p>
      </div>

      <hr className="mb-3 h-0.5 bg-neutral-200 " />
      <div className="px-5 pb-4 flex items-center justify-between">
        <Link
          className="py-3 px-4 text-sm font-merriweather truncate duration-500 text-[#1341EC] border-2 border-[#1341EC] rounded-xl
            hover:bg-gradient-to-t from-[#1341EC] to-[#142e8a] hover:text-[#fff]"
          href={`/blog/${slug}`}
          // href={slug}
        >
          Read more
          <FaArrowRight className="ml-1 !inline" />
        </Link>
        <div className="text-sm flex items-center">
          <Image
            height={40}
            width={40}
            src={authorPhoto}
            alt="Avatar"
            draggable="false"
            className="w-10 h-10 rounded-full ml-5"
          />

          <div className="ml-2 text-xs font-merriweather">
            <p className="text-gray-700">{authorName}</p>
            <p className="text-gray-600 font-sans">{createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
