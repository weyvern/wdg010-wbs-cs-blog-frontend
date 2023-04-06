import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_BLOG_API}/posts`);
        setPosts(data);
      } catch (error) {
        toast.error("Hey, sorry. Something went wrong!!");
      }
    };
    getPosts();
  }, []);

  return (
    <div className="row">
      {posts.map((post) => (
        <div className="col-md-4 mb-4" key={post._id}>
          <div className="card">
            <img
              className="card-img-top"
              src={post.image}
              alt={post.title}
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{`${post.body.substr(0, 50)}...`}</p>
              <Link to={`/posts/${post._id}`} className="btn btn-primary">
                More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
