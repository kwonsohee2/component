import React, { useState } from "react";
//기존 내용을 업데이트하기 위해 렌더링함 사용자가 입력한 내용을 업데이트할 수 있다.
//사용자가 폼을 제출하면, props.onUpdate함수가 호출되어 내용의 업데이트를 수행함
function Update(props){
  const [title, setTitle] = useState(props.title); //props.tile로 초기화
  const [body, setBody] = useState(props.body); //props.body로 초기화
  return (
  <article>
    <h2>Update</h2>
    <form action="/create_process" method="post"
      onSubmit={function(e){
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;
        props.onUpdate(title, body); 
    }}
    >
      <p><input type="text" name="title" placeholder="title" value={title}  onChange={event=>{
        setTitle(event.target.value);
      }}/>
      </p>
      <p>
        <textarea name="body" placeholder="body" value={body} onChange={event=>{
        setBody(event.target.value);
      }}></textarea>
        </p>
        <p>
        <input type="submit" value="Update" ></input>
        </p>
    </form>
  </article>
  );
}

export default Update;