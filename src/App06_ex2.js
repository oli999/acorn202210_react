// App06_ex2.js

import { Component } from "react";

class App extends Component{
    //폼에 submit 이벤트가 발행했을때 호출되는 함수 
    handleSubmit=(e)=>{
        e.preventDefault();
        //폼에 입력한 값을 읽어온다
        const id=this.id.value;
        const pwd=this.pwd.value;
        const isSave=this.isSave.checked;
        const info=`아이디:${id} 비밀번호:${pwd} 저장여부:${isSave}`;
        this.info.innerText=info;
    }
    render() {
        return (
            <div className="container">
                <h1>React form 테스트</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="id">아이디</label>
                        <input ref={(ref)=>{this.id=ref;}} type="text"  className="form-control" name="id" id="id" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">비밀번호</label>
                        <input ref={(ref)=>{this.pwd=ref;}} type="text"className="form-control" name="pwd" id="pwd" />
                    </div>
                    <div className="form-group">
                        <label>
                            <input ref={(ref)=>{this.isSave=ref;}} name="isSave" type="checkbox"/> 아이디 저장
                        </label>
                    </div>
                    <button className="btn btn-primary" type="submit">로그인</button>
                </form>
                <p ref={(ref)=>{this.info=ref;}}></p>
            </div>
        );
    }
}

export default App;