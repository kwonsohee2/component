import {useState} from 'react'; //리액트 패키지에서 useState함수 불러옴
//컴포넌트의 상태를 관리하는 함수useState(상태값이 바뀔때)사용
import {Header, Nav, Article, Create, Update} from "./components"; //components에서 {}안에 함수 불러옴

const App = () => { //App함수 정의
  const [mode, setMode] = useState('WELCOME'); // useState에 값 주기(content에 뭘 띄울지 flag)
  const [id, setId] = useState(null);          //  상태 배열이 없기 때문에 컴포넌트가 다시 렌더링될 때마다 실행(내가 선택한 topic의 id가 뭔지)
  const [nextId, setNextId] = useState(4);     // 배열 비구조화 할당을 통하여 각 원소 추출(추가할 topics key 값 관리)

  const [topics, setTopics] = useState([       // topics 초기값 결정
    {id: 1, title: 'html', body: 'html is ...'},
    {id: 2, title: 'css', body: 'css is ...'},
    {id: 3, title: 'js', body: 'javascript is ...'},
  ])

  const handleTopicClick = (topicId) => { // 상태를 읽기모드로 변경, id값을 업데이트(토픽을 클릭하면?)
    setMode('READ'); // mode상태를 READ로 변경(읽기 모드로 변경)
    setId(topicId);//id상태를 클릭한 토픽의 id값으로 설정(현재 클릭한 토픽의 key값으로 id 값 변)
  };

  const handleCreate = (title, body) => { //새로룬 토픽을 생성하고, 상태를 업데이트하며 읽기 모드로 변경하는 과정을 보여줌
    const newTopic={id:nextId,title:title,body:body};// 새로운 topic 생성...{id, title, body}
      const newTopics=[...topics,newTopic];// 새로운 토픽을 기존topics 배열 생성에 ...전개 연산자로 추가

      setTopics(newTopics);// 새로운 topics들을 기존 topics에 반영
    setMode('READ');// 생성 끝났으면 읽기 모드로 변경
    setId(nextId);// 읽기 모드로 전환할 현재 토픽 id값 지정
    setNextId(nextId+1);// nextId 값 변화 -> nextId값을 증가시켜
  };

  const handleUpdate = (title, body) => { //title,body로 topics값을 변경, 상태를 업데이트하여 읽기모드로 변경
    const updatedTopics = topics.map(topic => {
      if (topic.id === id) { //토픽의 id와 현재 선택한 id가 같다면,
        return { ...topic, title: title, body: body }; //업데이트한 새로운 객체를 반환
      }
      return topic; //아니면 기존의 topics상태를 업데이트
    });// 전달받은 title, body로 해당 topics 값을 변경한 새로운 topics 생성 

      setTopics(updatedTopics);// 업데이트된 topics를 기존 topics에 할당
      setMode('READ');// 업데이트 끝났으면 읽기모드로
  };

  let content = null;
  let contextControl = null; 
   let topic = null;

   switch (mode) {
    case 'WELCOME': // 입장 모드
      content = <Article title="Welcome" body="Hello, WEB"/>; // 컨텐츠 정의
      break;
    case 'READ': // 읽기 모드
      topic = topics.find((topic) => topic.id === id);
      content = <Article title={topic.title} body={topic.body}/>; // 컨텐츠 정의
      contextControl = <li> {/* 읽기 모드일 때만 보이는 update 버튼 */}
          <a href={'/update/' + id} onClick={(e)=>{ // onClick 이벤트 감지
              e.preventDefault(); // a 태그 기능 막기
              setMode('UPDATE');  // Update 모드로 변경
            }
          }> Update </a>
        </li>
      break;
    case 'CREATE': // 생성 모드
      content = <Create onCreate={handleCreate} />; // Article이 아니라 Create 컴포넌트 호출
      break;
    case 'UPDATE': // 업데이트 모드
      topic = topics.find((topic) => topic.id === id); // 뭘 업데이트 할 건데? 업데이트할 topic 탐색
      content = <Update title={topic.title} body={topic.body} onUpdate={handleUpdate}/> // Aricle이 아닌 Update 불러옴
      break;
    default: break;
  }
  
  return (
    <div>
      <Header 
        title="React" 
        onChangeMode={() => {setMode('WELCOME');}}
      />
      <Nav 
        topics={topics} 
        onChangeMode={handleTopicClick}
      />

      {content}

      <ul>
        <li>
          <a href="/create" onClick={(e)=>{
            e.preventDefault();
            setMode('CREATE');
          }}>Create</a>
        </li>
        {contextControl}
      </ul>
    </div>

  );
}

export default App;