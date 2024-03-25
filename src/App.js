import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [listName, setListName] = useState(['1번 제목', '2번 제목', '3번 제목']);
  let [favNum, setFavNum] = useState(0);

  function favPlus() {
    setFavNum(favNum++);
  }
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>Blog</h4>
      </div>

      <button onClick={()=>{
        let copy = [...listName];
        copy[0] = '1번 제목 수정'
        setListName(copy)
      }}>글수정</button>
      <div className='list'>
        <h4>{listName[0]} <span onClick={() => setFavNum(favNum+1)} >👍</span> {favNum} </h4>
        <p>{new Date().toLocaleDateString()}</p>
      </div>
      <div className='list'>
        <h4>{listName[1]}</h4>
        <p>{new Date().toLocaleDateString()}</p>
      </div>
      <div className='list'>
        <h4>{listName[2]}</h4>
        <p>{new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
}

export default App;
