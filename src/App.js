import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id: 1,
    author: "이정환",
    content: "하이1",
    emotion: 5,
    created_date: new Date().getTime()
  },
  {
    id: 2,
    author: "이정환",
    content: "하이2",
    emotion: 5,
    created_date: new Date().getTime()
  },
  {
    id: 3,
    author: "이정환",
    content: "하이3",
    emotion: 5,
    created_date: new Date().getTime()
    //new Date() - 현재시간 받기 getTime() - 시간을 받아서 밀리세컨즈로 변경 가능함.
  }
];


function App() {
  return (
    <div className="App">
      <DiaryEditor/>
      {/* 자식 요소로 추가 */}
      <DiaryList diaryList={dummyList} />
      {/* 자식 요소로 추가 */}
    </div>
  );
};

export default App;
