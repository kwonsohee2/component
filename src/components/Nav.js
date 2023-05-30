export default function Nav(props) { //props.topics기반으로 네비게이션 생성
    var lists = []; //list배열 변수 선언과 동시에 초기화
    var i = 0; //변수 선언
    while (i < props.topics.length) { //토픽의 길이만큼 반복
      var data = props.topics[i]; //props.topics요소들 data변수에 할당
      lists.push(
        <li key={data.id}>
          <a
            id={data.id}
            href={"/content/" + data.id}
            onClick={(e) => { //클릭 이벤트
              e.preventDefault(); //클릭 이벤트의 기본 동작 막음
              props.onChangePage(e.target.id); //페이지 변경을 처리
            }}
          >
            {data.title}
          </a>
        </li>
      );
      i = i + 1;
    }
    return (
      <nav>
        <ul>
         {lists} {/*리스트 내용들을 출력*/}
        </ul>
      </nav>
    );
  }