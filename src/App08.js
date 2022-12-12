
import React, { Component } from "react";
/*
const App = ()=>{
    //이 함수는 UI 가 업데이트 될때마다 여러번 호출되는 함수이다. 
    
    // 상태값으로 관리될 cafeList 는 jsx 로 구성된 글 목록을 담고 있는 배열
    const [cafeList, setCafeList]=React.useState([]);
    
    //아래에서 리턴한 UI 의 초기화 작업(준비작업)이 끝났을때 원하는 동작이 있으면 
    //아래의 useEffect() 안에 전달한 함수 안에서 작업을 하면 된다. 
    React.useEffect(()=>{
        //fetch 함수를 이용해서 tomcat 서버로 부터 json 문자열을 응답받는다
        fetch("http://localhost:8888/Step04_Final/cafe/ajax_list.jsp")
        .then((res)=>{
            //json 문자열이 응답되기 때문에 res.json() 을 리턴해준다.
            return res.json();
        })
        .then((data)=>{
            //data 는 array 이다 
            console.log(data);
            // hint : 배열의 map 함수를 활용해 보세요
            let newArray=data.map((item)=>{
                return (
                    <tr key={item.num}>
                        <td>{item.num}</td>
                        <td>{item.writer}</td>
                        <td>{item.title}</td>
                        <td>{item.viewCount}</td>
                        <td>{item.regdate}</td>
                    </tr>
                );
            });
            setCafeList(newArray);
        });
    }, []);

    return (
        <div className="container">
            <h1>글 목록 입니다.</h1>
            <table>
                <thead>
                    <tr>
                        <th>글번호</th>
                        <th>작성자</th>
                        <th>제목</th>
                        <th>조회수</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {cafeList}
                </tbody>
            </table>
        </div>
    );
}
*/

class App extends Component{
    //상태값 
    state={
        cafeList:[]
    }
    //컴포넌트가 준비가 되었을때 호출되는 함수
    componentDidMount = ()=>{
        //fetch 함수를 이용해서 tomcat 서버로 부터 json 문자열을 응답받는다
        fetch("http://localhost:8888/Step04_Final/cafe/ajax_list.jsp")
        .then((res)=>{
            //json 문자열이 응답되기 때문에 res.json() 을 리턴해준다.
            return res.json();
        })
        .then((data)=>{
            //data 는 array 이다 
            console.log(data);
            // hint : 배열의 map 함수를 활용해 보세요
            let newArray=data.map((item)=>{
                return (
                    <tr key={item.num}>
                        <td>{item.num}</td>
                        <td>{item.writer}</td>
                        <td>{item.title}</td>
                        <td>{item.viewCount}</td>
                        <td>{item.regdate}</td>
                    </tr>
                );
            });
            this.setState({
                cafeList:newArray
            });
        });        
    }

    render(){

        return (
            <div className="container">
                <h1>글 목록 입니다.</h1>
                <table>
                    <thead>
                        <tr>
                            <th>글번호</th>
                            <th>작성자</th>
                            <th>제목</th>
                            <th>조회수</th>
                            <th>작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.cafeList}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;