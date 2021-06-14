import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
export default function Home() {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isPending && <div>Loading..............</div>}
      {blogs && <BlogList blogs={blogs} title="This is My Blog !" />}
    </div>
  );
}
