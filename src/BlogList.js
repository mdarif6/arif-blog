export default function BlogList(props) {
  return (
    <div className="blog-list">
      <h2>{props.title} </h2>
      {props.blogs.map((blog) => {
        return (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written By {blog.author}</p>
          </div>
        );
      })}
    </div>
  );
}
