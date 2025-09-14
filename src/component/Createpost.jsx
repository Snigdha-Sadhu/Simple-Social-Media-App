import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
function Createpost() {
    const { addpost } = useContext(PostList);
    const userIdElement = useRef();
    const posttitleElement = useRef();
    const postbodyElement = useRef();
    const reactionsElement = useRef();
    const tagsElement = useRef();
    const handlesubmit = (event) => {
        event.preventDefault();
        const userId = userIdElement.current.value;
        const posttitle = posttitleElement.current.value;
        const postbody = postbodyElement.current.value;
        const reactions = reactionsElement.current.value;
        const tags = tagsElement.current.value.split(" ");
        userIdElement.current.value = "";

        postbodyElement.current.value = "";
        posttitleElement.current.value = "";
        reactionsElement.current.value = "";
        tagsElement.current.value = "";
        addpost(userId, posttitle, postbody, reactions, tags);
    };
    return (


        <form className="createlist" onSubmit={handlesubmit}>
            <div class="mb-3">
                <label for="userId" class="form-label">Enter Your UserId here</label>
                <input type="text"
                    ref={userIdElement}
                    class="form-control"
                    id="userId"
                    placeholder="userId" />
            </div>
            <div class="mb-3">
                <label for="title" class="form-label">post-title</label>
                <input type="text"
                    ref={posttitleElement}
                    class="form-control"
                    id="title"
                    placeholder="how are you feeling today.." />
            </div>
            <div class="mb-3">
                <label for="body" class="form-label">post content</label>
                <textarea
                    type="text"
                    ref={postbodyElement}
                    row="4"
                    class="form-control"
                    id="body"
                    placeholder="tell us more about it" />
            </div>
            <div class="mb-3">
                <label for="reactions" class="form-label">number of reactions</label>
                <input type="text"
                    ref={reactionsElement}
                    class="form-control"
                    id="reactions"
                    placeholder="how many people react your post" />
            </div>
            <div class="mb-3">
                <label for="tags" class="form-label">Enter your hashtags here</label>
                <input type="text"
                    ref={tagsElement} class="form-control"
                    id="tags"
                    placeholder="please enter tags using space" />
            </div>
            <button type="submit" class="btn btn-primary">post</button>
        </form>

    )
}
export default Createpost;