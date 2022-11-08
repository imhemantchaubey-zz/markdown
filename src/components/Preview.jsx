import React from "react";

export default function Preview(props) {
  return (
    <div className="card markdown mb-5">
      <div className="card-header">
        <i className="fas fa-search"></i> Preview
      </div>
      <div className="card-body">
        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: props.contentPreview,
          }}
        />
      </div>
    </div>
  );
}
