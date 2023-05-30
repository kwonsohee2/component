import { useState } from "react"; //리액트에서 useState함수 불러옴옴
//사용자가 제목과 본문을 입력하고 생성 버튼을 클릭하면, props.onCreate함수
//호출로 새로운 내용을 생성함
const Create = (props) => { //Create함수 정의 시작
      console.log('Content render');
      return (
        <article>
            <h2>Create</h2>
            <form action="/create_process" method="post"
              onSubmit={function(e){ //이벤트 객체 e를 매개변수로 받음
                e.preventDefault(); //이벤트의 기본 동작 막음
                const title=e.target.title.value;
                const body=e.target.body.value;
                props.onCreate(title,body);
              }}
            >
              <p><input type="text" name="title" placeholder="title"></input></p>
              <p>
                <textarea name="body" placeholder="body"></textarea>
              </p>
              <p>
                <input type="submit" value="Create"></input>
              </p>
            </form>
        </article>
      );
    }

export default Create;