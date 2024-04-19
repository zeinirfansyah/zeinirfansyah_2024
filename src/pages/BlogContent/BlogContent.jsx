import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const BlogContent = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://creonexa.zeinirfansyah.me/wp-json/wp/v2/zeinirfansyah/${id}`
      )
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

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
          </div>
        )}
      </div>
    </>
  );
};
