import { useState } from "react";

const DiaryEditor = () => {
  const [state,setState] = useState({
    author: "",
    content: "",
  })
  
  const [author, setAuthor] = useState("");
  //일기의 제목 핸들링
  const [content, setContent] = useState("");
  //일기의 본문 핸들링

  return (
  <div className="DiaryEditor">
    <h2>오늘의 일기</h2>
    <div>
      <input
      name="author"
       value={author}
      onChange={(e) => {
        console.log(e.target.value);
        console.log(e.target.name);
        setAuthor(e.target.value);
      }}
      />
    </div>
    <div>
      <textarea 
        value={content}
        onChange={(e)=> {
          setContent(e.target.value);
        }}
      />
    </div>
  </div>
  );
};

export default DiaryEditor;