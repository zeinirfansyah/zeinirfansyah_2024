import { BlogContent } from "../components/blog/BlogContent"

export const Blog = () => {
  return (
    <>
      <div className="Blog">
        <div id="blogContent" className="bg-gradient-to-b from-antiFlashWhite to-white">
            <BlogContent />
        </div>
      </div>
    </>
  )
}
