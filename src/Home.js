// import { useState, useEffect } from "react"; // this are hooks
import BlogList from "./Bloglist";
import useFetch from "./useFetch";

// use sfc for the template
const Home = () => {
    const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
    
    return (
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs = {blogs} title = "All Blogs!" />} 
            {/* here {} curly braces are for dynamic value 
            here {blogs} this are prop value*/}
            {/*  below is for filtering the blogs */}
            {/* <BlogList blogs = {blogs.filter((blog) => blog.author === 'rachel')} title = "Rachel's Blogs"/>  */}

        </div>
      ); 
}
 
export default Home;