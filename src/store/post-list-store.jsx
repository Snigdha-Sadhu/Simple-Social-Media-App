import { useReducer } from "react";
import { createContext } from "react";

export const PostList = createContext({
    postList: [],
    addpost: () => { },
    deletepost: () => { },

});
const PostListReducer = (currPostList, action) => {
    let newpostlist = currPostList;
    if (action.type === "delete-post") {
        newpostlist = currPostList.filter(
            (post) => post.id !== action.playload.postid
        );

    } else if (action.type === "add-post") {
        newpostlist = [action.playload, ...currPostList];
    }

    return newpostlist;
};
const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(PostListReducer, defaultpostlist);
    const addpost = (userId, posttitle, postbody, reactions, tags) => {
        dispatchPostList({
            type: "add-post",
            playload: {
                id: Date.now(),
                title: posttitle,
                body: postbody,
                reactions: reactions,
                userId: userId,
                tags: tags,
            }
        })
        console.log(`${userId}${posttitle}${postbody}${reactions}${tags}`);

    };

    const deletepost = (postid) => {
        dispatchPostList({
            type: "delete-post",
            playload: {
                postid,
            },
        });
    };

    return (
        <PostList.Provider
            value={
                {
                    postList,
                    addpost,
                    deletepost,

                }
            }

        >
            {children}
        </PostList.Provider>
    );
};
const defaultpostlist = [
    {
        id: "1",
        title: "going to Mumbai",
        body: "hi friends,i am going to Mumbai for my vacations.hope to enjoy a lot.peace out.",
        reactions: 2,
        userId: "user-9",
        tags: ["vacation", "Mumbai", "enjoying"],
    },
    {
        id: "2",
        title: "going to Delhi",
        body: "hi friends,i am going to Delhi for my Mission.hope to enjoy a lot.peace out.",
        reactions: 15,
        userId: "user-9",
        tags: ["vacation", "Delhi", "enjoying"],
    },

]
export default PostListProvider;