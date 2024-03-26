import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [listName, setListName] = useState(['1번 제목', '2번 제목', '3번 제목']);
  let [favNum, setFavNum] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [inputText, setInputText] = useState("");

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>Blog</h4>
      </div>

      {/* <button onClick={()=>{
        let copy = [...listName];
        copy[0] = '1번 제목 수정'
        setListName(copy)
      }}>글수정</button>
      <div className='list'>
        <h4>{listName[0]} <span onClick={() => setFavNum(favNum+1)} >👍</span> {favNum} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{listName[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={()=>{setModal(!modal)}} >{listName[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}
      
      {
        listName.map((function(a, i) {
          return (
            <div className='list' key={i} value={i}>
            <h4 onClick={()=>{
              setModal(!modal)
              setTitle(i)
            }}>
              { listName[i] } <span onClick={(e) => {
              e.stopPropagation();
              let copy = [...favNum];
              copy[i] = copy[i] + 1;
              setFavNum(copy)
            }} >👍</span> {favNum[i]} </h4>
            <p>2월 17일 발행</p>
            <button
              onClick={()=>{
                let deleteData = [...listName];
                deleteData.splice(i, 1);
                setListName(deleteData);
              }}
            >글 삭제</button>
          </div>)
        }))
      } 

      <input onChange={(e)=>{
        setInputText(e.target.value);
      }}
      value={inputText}
      />
      <button
        onClick={()=> {
          setListName([inputText, ...listName]);
          setInputText("")
        }}
      >추가</button>

      

      {
        modal == true
        ? <Modal listName={listName} title={title} />
        : null
      }
      
    </div>
  );
}

function Modal({listName, title}) {
  return (
    <div className='modal'>
      <h4>{listName[title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  )
}

export default App;
