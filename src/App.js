import { useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const App = () => {
  const [data, setData] = useState([]);
  //useState
  //DiaryEditor 컴포넌트와 DiaryList 컴포넌트가 함께 사용할 일기 data를 State로 가지고 있다
  //그리고 그 일기 데이터는 빈배열로 시작, 일기 변화 함수인 setData 
  //그래서 그 Data를 전달하면 밑에 DiaryList도 랜더가 되고 추가/삭제/수정 가능
  const dataId = useRef(0);
  //useRef

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current
    };
    dataId.current += 1;
    setData([newItem, ...data]);
    //새로 올라온 일기를 추가[newItem], 그 이후에 내려주기
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />      
      <DiaryList diaryList={data} />

    </div>
  );
};
export default App;
