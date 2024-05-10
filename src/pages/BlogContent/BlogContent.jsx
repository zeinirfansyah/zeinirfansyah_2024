import { Link } from "react-router-dom";
import { usePost } from "../../hooks/usePost";
import { useBlogState } from "../../store/blogState";

export const BlogContent = () => {
  const { posts } = useBlogState();
  const post = usePost();

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
              {posts.length > 0 ? (
                posts.map((post, index) => {
                  const currentIndex = index;

                  // Find next post index (if available)
                  const nextPostIndex =
                    currentIndex + 1 < posts.length ? currentIndex + 1 : null;

                  // Find previous post index (if available)
                  const prevPostIndex =
                    currentIndex > 0 ? currentIndex - 1 : null;
                  return (
                    <>
                      <div>
                        {prevPostIndex !== null && (
                          <Link
                            className="btn btn-primary mr-2"
                            to={`/blog/${posts[prevPostIndex].id}`}
                          >
                            Next Post
                          </Link>
                        )}

                        {nextPostIndex !== null && (
                          <Link
                            className="btn btn-primary"
                            to={`/blog/${posts[nextPostIndex].id}`}
                          >
                            Previous Post
                          </Link>
                        )}
                      </div>
                    </>
                  );
                })
              ) : (
                <p>No posts found.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
