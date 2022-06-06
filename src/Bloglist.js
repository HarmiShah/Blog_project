// const BlogList = (props) => {
//     const blogs = props.blogs;
//     const title = props.title;

import { Link } from "react-router-dom";

// instead of props we can directly use it like below
const BlogList = ({blogs, title}) => {
    
    return ( 
        <div className="blog-list">
            {/* <h2>{ title }</h2> */}
             {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to = {`/blogs/${blog.id}`}>
                        {/* ` ` this is java script template feature ....template string */}
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                    </Link>                   
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;