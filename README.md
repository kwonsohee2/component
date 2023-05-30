# component

component 구현

1.get메소드와 post메소드의 차이점

우선, get은 데이터를 읽거나 검색할 때 사용되는 메소드이고 요청을 전송할 때 필요한 데이터를 body에 담지 않고, 쿼리스트링을 통해 전송한다.  post는 이러한 get과 달리 전송해야 될 데이터를 HTTP메시지의 Body에 담아서 전송합니다.그리고 body의 제한 없다는 점이 있다.

-->코드 재사용에서 효율적임
---------------------------------------------------------------------------------------
2. p태그말고 br태그도 있다!

```javascript
<p><input type="text" name="title" placeholder="title"></input></p>
              <p>
                <textarea name="body" placeholder="body"></textarea>
              </p>
              <p>
                <input type="submit" value="Create"></input>
              </p>
```
<h6>위에 부분은 create를 눌렀을 경우, title과 body부분으로 되어 있는데 그 두 부분의 간격을 띄우기 위해서 p태그를 사용함<h6>
---------------------------------------------------------------------------------------
3. Nav.js에서 onChangePage이 부분 오류 수정
```javascript
export default function Nav(props) {
  var lists = [];
  var i = 0;
  while (i < props.topics.length) {
    var data = props.topics[i];
    lists.push(
      <li key={data.id}>
        <a
          id={data.id}
          href={"/content/" + data.id}
          onClick={(e) => {
            e.preventDefault();
            props.onChangePage(e.target.id); //이 부분에서 올바르지 않은 
            함수 사용으로 인하여 오류 발생한 것으로 보임.
          }}
        >
          {data.title}
        </a>
      </li>
    );
    i = i + 1;
  }

```
---------------------------------------------------------------------------------------
