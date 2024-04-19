import { useEffect, useState } from "react";
import axios from "axios";
import { useBlogState } from "../store/blogState";

export const usePosts = () => {
  const {
    posts,
    setPosts,
    featuredMedia,
    setFeaturedMedia,
    setLoading,
    setError,
  } = useBlogState();

  const [isFetchingFeaturedMedia, setIsFetchingFeaturedMedia] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://creonexa.zeinirfansyah.me/wp-json/wp/v2/zeinirfansyah"
        );
        const fetchedPosts = response.data;
        setPosts(fetchedPosts);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [setPosts, setLoading, setError]);

  // Fetch featured media only when posts are available
  useEffect(() => {
    if (posts.length > 0 && !isFetchingFeaturedMedia) {
      setIsFetchingFeaturedMedia(true);
      const fetchFeaturedMedia = async () => {
        const mediaPromises = posts.map(async (post) => {
          if (!post._links || !post._links["wp:featuredmedia"]) {
            return null;
          }
          const mediaResponse = await axios.get(post._links["wp:featuredmedia"][0].href);
          return mediaResponse.data.source_url;
        });

        const fetchedMedia = await Promise.all(mediaPromises);
        setFeaturedMedia(fetchedMedia);
        setIsFetchingFeaturedMedia(false);
      };

      fetchFeaturedMedia();
    }
  }, [posts, isFetchingFeaturedMedia, setFeaturedMedia]);

  return { posts, featuredMedia };
};
