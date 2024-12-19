import { useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: String;
  body: String;
};

const PostPage = () => {
  const [posts, setPost] = useState<Post[]>([]);

  const handleClick = async () => {
    const getData = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonData = await getData.json();
    setPost(jsonData);
    console.log(jsonData);
  };
  return (
    <div>
      <section>
        <h1>PostPage</h1>
        <button onClick={handleClick}>Click Me</button>
        {posts.map((responseData, id) => {
          return (
            <div key={id}>
              <h3>{responseData.title} </h3>
              <h5>{responseData.body} </h5>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default PostPage;
