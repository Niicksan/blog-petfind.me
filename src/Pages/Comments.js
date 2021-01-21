import Comment from "./Comment";

const Comments = ({ comments }) => {

  return (
    <div className="main-posts" >
        {comments.map(comment => (
            <Comment 
                key={comment.id}
                name={comment.name}
                body={comment.body}
                author={comment.email}
            />
        ))}
    </div>
  );
};

export default Comments;