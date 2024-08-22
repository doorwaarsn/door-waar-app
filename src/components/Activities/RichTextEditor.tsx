import React from "react";
import { CKEditor, CKEditorContext } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const RichTextEditor = () => {
  return (
    <CKEditor
      editor={ClassicEditor}
      data="<p>Hello from CKEditor&nbsp;5!</p>"
      onReady={(editor) => {
        console.log("Editor is ready to use!", editor);
      }}
      onChange={(event) => {
        console.log(event);
      }}
      onBlur={(event, editor) => {
        console.log("Blur.", editor);
      }}
      onFocus={(event, editor) => {
        console.log("Focus.", editor);
      }}
    />
  );
};

export default RichTextEditor;
