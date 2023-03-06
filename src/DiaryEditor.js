import { useState } from "react";

const DiaryEditor = () => {
  const [state,setState] = useState({
    author: "",
    content: "",
  })
  //author, content 두개의 객체를 State로 합쳐주기.

  return (
  <div className="DiaryEditor">
    <h2>오늘의 일기</h2>
    <div>
      <input
      name="author"
      value={state.author}
      onChange={(e) => {
        setState({
          ...state,
          author : e.target.value,
          //content : state.content,
        });
      }}
      />
    </div>
    <div>
      <textarea 
        value={state.content}
        onChange={(e)=> {
          setState({
            ...state,
            content : e.target.value,
            //author : state.author,
          });
        }}
      />
    </div>
  </div>
  );
};

export default DiaryEditor;