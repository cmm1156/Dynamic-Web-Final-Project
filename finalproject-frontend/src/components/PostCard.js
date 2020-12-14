import React from "react";

function PostCard({ postData }) {
  return (
    <div className="RecipeCard">
      <h2>{postData.postName}</h2>
      <h3>
        <a href={`/user/${postData.postAuthorId}`}>By {postData.postAuthor}</a>
      </h3>
      <h3>Info:</h3>
      <ul>
        {postData.info &&
          postData.info.map((infoItem, i) => (
            <li key={i}>
              {infoItem.name} -- {infoItem.amount}
            </li>
          ))}
      </ul>
      <h3>Steps:</h3>
      <ul>
        {postData.steps &&
          postData.steps.map((step, i) => (
            <li key={i}>
              {step.stepNumber} -- {step.stepInstruction}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default PostCard;
