import React from "react";

import ReactMarkdown from "react-markdown";

const OutputCode = ({ rawData }) => {
  return <ReactMarkdown className="preview" children={rawData} />;
};

export default OutputCode;
