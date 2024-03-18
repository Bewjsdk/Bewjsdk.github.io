import Author from "./Author";
import Content from "./Content";
import pic from "/images/illustration-article.svg";
import userPic from "/images/image-avatar.webp";

function BlogCard() {
  return (
    <div className="blog-card">
      <img src={pic} alt="Picture for blog card" />
      <Content />
      <Author avatar={userPic} name="Greg Hooper" />
    </div>
  )
}

export default BlogCard