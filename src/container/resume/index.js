import React from "react";

function Resume(props) {
  const src =
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
  return (
    <iframe
      src={"http://docs.google.com/gview?url=" + src + "&embedded=true"}
      // style="width:100%; height:1000px;"
      frameborder="0"
      title="Resume of Seym"
      className="pdf-viewer"
      // onLoad={this.loadListener}
    ></iframe>
  );
}

export default Resume;
