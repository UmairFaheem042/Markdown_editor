import React, { useState } from "react";
import OutputCode from "./components/OutputCode";
import Wrapper from "./components/Wrapper";

const App = () => {
  const [title, setTitle] = useState("README");
  const [markdown, setMarkdown] = useState("# Hello World");

  function handleChangeTitle(e){
    setTitle(e.target.value)
  }

  function handleChange(e) {
    setMarkdown(e.target.value);
  }

  function handleDownload() {
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = title ? `${title}.md` : 'README.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  return (
    <div className="App">
      <Wrapper label={title} onChangeTitle={handleChangeTitle}>
        <textarea value={markdown} onChange={handleChange} />
      </Wrapper>
      <Wrapper label={"👁️ OUTPUT"}>
        <OutputCode rawData={markdown} />
      </Wrapper>
      <button className="downloadBtn" onClick={handleDownload}>
        Download File
      </button>
    </div>
  );
};

export default App;
