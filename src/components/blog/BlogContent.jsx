import { useEffect, useState } from "react";
import axios from "axios";
import { ContentCard } from "../ui/ContentCard";

export const BlogContent = () => {
  const [posts, setPosts] = useState([]);
  const [featuredMedia, setFeaturedMedia] = useState([]);

  const fetchPosts = () => {
    axios
      .get("https://creonexa.zeinirfansyah.me/wp-json/wp/v2/zeinirfansyah")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchFeaturedMedia = async (post) => {
    if (
      !post._links ||
      !post._links["wp:featuredmedia"] ||
      !post._links["wp:featuredmedia"][0]
    ) {
      return null;
    }

    try {
      const res = await axios.get(post._links["wp:featuredmedia"][0].href);
      return res.data.source_url;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    const get_links = async () => {
      const mediaUrls = await Promise.all(posts.map(fetchFeaturedMedia));
   
      setFeaturedMedia(mediaUrls);
    };

    get_links();
    
  }, [posts]);

  function removeTagsAndEntity(text) {
    const regex = /<[^>]*>|\[&hellip;\]/g;
    return text.replace(regex, "");
  }

  function truncateString(str, num) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  }

  return (
    <div className="max-w-7xl mx-auto px-4 ">
      <div className="flex flex-wrap gap-4">
        {posts.map((post, index) => (
          <div key={post.id} className="flex justify-center">
            <ContentCard
              image={featuredMedia[index]}
              date={post.date}
              title={post.title.rendered}
              excerpt={truncateString(
                removeTagsAndEntity(post.excerpt.rendered),
                100
              )}
              author="Zein Irfansyah"
            />

          </div>
        ))}
      </div>
    </div>
  );
};
