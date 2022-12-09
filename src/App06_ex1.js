// App06_ex1.js

import { Component } from "react";

class App extends Component{
    state={
        id:'',
        pwd:'',
        isSave:false  //체크박스의 체크 여부 
    }
    //input 요소에 변화가 생겼을때 호출되는 함수 
    handleChange=(e)=>{
        //이벤트가 일어난 폼요소의 name 속성의 value 얻어오기  
        const name=e.target.name; //"id" or "pwd" or "isSave"
        // value 를 미리 얻어내기 (체크박스인 경우에는 체크 여부를 얻어낸다 )
        const value=e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        //ECMA6 문법을 활용하면 아래와 같이 된다. 
        this.setState({
            [name]:value
        });
    }
    //폼에 submit 이벤트가 발행했을때 호출되는 함수 
    handleSubmit=(e)=>{
        e.preventDefault();

    }
    render() {
        return (
            <div className="container">
                <h1>React form 테스트</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="id">아이디</label>
                        <input type="text" value={this.state.id} onChange={this.handleChange} className="form-control" name="id" id="id" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">비밀번호</label>
                        <input type="text" value={this.state.pwd} onChange={this.handleChange} className="form-control" name="pwd" id="pwd" />
                    </div>
                    <div className="form-group">
                        <label>
                            <input onChange={this.handleChange} checked={this.state.isSave} name="isSave" type="checkbox"/> 아이디 저장
                        </label>
                    </div>
                    <button className="btn btn-primary" type="submit">로그인</button>
                </form>
                <p> 아이디 : <strong>{this.state.id}</strong></p>
                <p> 비밀번호 : <strong>{this.state.pwd}</strong></p>
                <p> 아이디 저장할지 여부 : <strong>{this.state.isSave.toString()}</strong></p>
            </div>
        );
    }
}

export default App;