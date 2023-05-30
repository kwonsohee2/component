const Article = (props) =>{ //Article의 함수 정의 시작
    return (
        <article> 
            <h2>{props.title}</h2>{/*Welcome*/}
            {props.body} {/*Hello, Web*/}
        </article>
    );
  };
  
  
  export default Article;