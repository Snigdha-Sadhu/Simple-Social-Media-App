import Post from "./Post"
import { PostList as PostListdata } from "../store/post-list-store";
import { useContext } from "react";
function Postlist() {
    const { postList } = useContext(PostListdata);

    return (
        <>
            {postList.map((post) => (
                <Post key={post.id} post={post} />

            ))}
            {console.log(postList)};
        </>

    );

} export default Postlist;