// App03_ex1.js

const { Component } = require("react");

class App extends Component{
    state={
        index:0,
        msgs:[]
    };

    render(){
        return(
            <div className="container">
                <h1>문서 객체 동적으로 만들기</h1>
                <input type="text" onKeyUp={this.handleKeyUp}/>
                <ul>
                    {this.state.msgs}
                </ul>
            </div>
        );
    }
    // input 요소에 keyup 이벤트가 일어 날때 만다 호출되는 함수 
    handleKeyUp=(e)=>{
        console.log(e);
        //만일 Enter key 를 눌렀다면
        if(e.keyCode==13){
            //입력한 문자열 읽어오기(이벤트가 일어난 input 요소의 value 값)
            let msg=e.target.value; 
            //아래와 같이 배열에 아이템을 추가 한다고 해서 UI 가 update 되지는 않는다.
            //this.state.msgs.push(<li>msg</li>);

            //아이템이 추가된 새로운 배열을 얻어내서 setState() 해야 된다.
            let newArray = this.state.msgs.concat(<li key={this.state.index}>{msg}</li>);
            this.setState({
                msgs:newArray,
                index:this.state.index+1
            });
        }
    }
}

export default App;