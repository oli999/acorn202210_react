// App06.js

import { Component } from "react";

class App extends Component{
    state={
        msg:""
    }

    render(){
        return (
            <div className="container">
                <h1>form 요소들 사용해 보기</h1>
                {/* form 안에 있는 submit 버튼을 누르면 submit 이벤트가 발생한다. */}
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="msg">메세지 입력</label>
                    <input type="text" id="msg" onChange={(e)=>{
                        this.setState({
                            msg:e.target.value
                        });
                    }} value={this.state.msg}/>
                    <button type="submit">전송</button>   
                </form>
                <p>현재 입력한 내용 : <strong>{this.state.msg}</strong></p>
            </div>
        );
    }
    //form 에 submit 이벤트가 발생하면 호출되는 함수 
    handleSubmit = (e)=>{
        e.preventDefault();//폼 제출 막기
        alert(this.state.msg+" 를 전송합니다.");
    }
}

export default App;