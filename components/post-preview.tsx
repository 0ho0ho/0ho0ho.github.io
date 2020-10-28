import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import Author from "../types/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({ title, coverImage, date, excerpt, slug }: Props) => {
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <a className="hover:shadow-medium transition-shadow duration-200">
        <div className="border-solid border rounded-xl border-gray-400 p-5">
          <div className="flex">
            <div className="inline-block">
              <h3 className="text-2xl mb-3 leading-snug font-bold text-gray-800">
                <p>{title}</p>
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-gray-700">
                {excerpt}
              </p>
              <div className="text-lg mb-4 text-gray-500">
                <DateFormatter dateString={date} />
              </div>
            </div>
            <div className="inline-block w-2/5 relative">
              <CoverImage slug={slug} title={title} src={coverImage} />
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PostPreview;
