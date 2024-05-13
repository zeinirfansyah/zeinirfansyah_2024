import { usePosts } from '../../hooks/usePosts';
import { ContentCard } from './components/ContentCard';
import { Link } from 'react-router-dom';

export const Blog = () => {
  const { posts, isLoading, error, featuredMedia } = usePosts();

  function removeTagsAndEntity(text) {
    const regex = /<[^>]*>|\[&hellip;\]/g;
    return text.replace(regex, '');
  }

  function truncateString(str, num) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + '...';
  }

  return (
    <div id="blogContentList" className="bg-gradient-to-b from-antiFlashWhite to-white">
      <div className="max-w-7xl mx-auto px-4 py-7">
        <div className="flex flex-wrap justify-center items-center gap-4 min-h-[70vh]">
          {isLoading ? (
            <p>Loading posts...</p>
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : posts.length > 0 ? (
            posts.map((post, index) => (
              <div key={post.id} data-aos="zoom-in-up" data-aos-duration="1000">
                <Link to={`/blog/${post.id}`}>
                  <ContentCard
                    image={featuredMedia[index]}
                    date={new Date(post.date).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                      timeZone: 'Asia/Jakarta',
                    })}
                    title={post.title.rendered}
                    excerpt={truncateString(removeTagsAndEntity(post.excerpt.rendered), 100)}
                    author="Zein Irfansyah"
                  />
                </Link>
              </div>
            ))
          ) : (
            <p>No posts found.</p>
          )}
        </div>
      </div>
    </div>
  );
};
