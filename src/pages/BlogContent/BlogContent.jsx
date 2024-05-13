import { Link } from "react-router-dom";
import { usePost } from "../../hooks/usePost";
import { useBlogState } from "../../store/blogState";

export const BlogContent = () => {
  const { posts } = useBlogState();
  const post = usePost();

  const currentIndex = posts.findIndex((p) => p.id === post?.id);

  const nextPostId =
    currentIndex < posts.length - 1 ? posts[currentIndex + 1].id : null;
  const prevPostId = currentIndex > 0 ? posts[currentIndex - 1].id : null;

  return (
    <>
      <div className="blog max-w-4xl mx-auto px-4 py-12">
        {post && (
          <div className="flex flex-col gap-4">
            <header
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              className="flex flex-col justify-between"
            >
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                {post.title.rendered}
              </h1>
              <div className="flex flex-col">
                <span className="text-dimGray">Author: Zein Irfansyah</span>
                <span className="text-dimGray">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    timeZone: "Asia/Jakarta",
                  })}
                </span>
              </div>
            </header>
            <hr data-aos="zoom-in-up" data-aos-duration="1000" />
            <div
              data-aos="zoom-in-up"
              data-aos-duration="800"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              className="blog-content"
            />
            <div className="flex justify-between gap-6 my-7">
              {nextPostId && (
                <Link to={`/blog/${nextPostId}`} className="btn">
                  Previous
                </Link>
              )}
              {prevPostId && (
                <Link to={`/blog/${prevPostId}`} className="btn">
                  Next
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
