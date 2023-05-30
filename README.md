# component

component 구현

1.get메소드와 post메소드의 차이점

우선, get은 데이터를 읽거나 검색할 때 사용되는 메소드이고 요청을 전송할 때 필요한 데이터를 body에 담지 않고, 쿼리스트링을 통해 전송합니다.  post는 이러한 get과 달리 전송해야 될 데이터를 HTTP메시지의 Body에 담아서 전송합니다.그리고 body의 제한 없습니다. 

---------------------------------------------------------------------------------------
2. 불필요한 p태그 줄이기

```javascript
<p><input type="text" name="title" placeholder="title"></input></p>
              <p>
                <textarea name="body" placeholder="body"></textarea>
              </p>
              <p>
                <input type="submit" value="Create"></input>
              </p>
```

---------------------------------------------------------------------------------------
3. 
