import React from "react";

const Tags = ({ tags }) => {
  return (
    <div className="tags">
      {tags.map((tag) => (
        <div key={tag} className="tag">
          <span>{tag}</span>
        </div>
      ))}
    </div>
  );
};

export default Tags;
