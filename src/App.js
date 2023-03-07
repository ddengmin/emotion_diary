import { useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const App = () => {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

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
  };

  const onRemove = (targetId) => {
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };
  //setData를 통해 값을 전달, onEdit은 배열에서 수정해줘야 하기 때문에 
  //map이라는 내장함수를 이용한건데, 수정이 완료된 배열을 setData로 전달해야겠죵
  //수정대상이라면 newContent로 바뀌게 될거고, 그러지 않은 값은 원본값을 지키겠지.


  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
      {/* 객체로 전달하기 때문에 DiaryList.js에도 전달해주자  */}
    </div>
  );
};
export default App;
