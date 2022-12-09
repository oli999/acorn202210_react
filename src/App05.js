// App05.js

import { Component } from "react";
//css/custom.css 로딩하기
import "./css/custom.css";

/*
    [ 모듈화된 css 를 사용하는 방법]
    1. css 파일의 이름에 .moudle. 을 추가 한다.
    2. from 과 함께 import 해서 사용한다. 
*/
import styles from "./css/custom.module.css";

class App extends Component{
    state={
        obj:{
            color:"blue",
            border:"1px solid red",
            backgroundColor:"yellow"
        },
        isYellow:false
    }

    render(){
        const classes="box bg-yellow";
        return (
            <div className="container">
                <h1>css 적용 예제</h1>
                <button onClick={()=>{
                    this.setState({
                        obj:{
                            ...this.state.obj,
                            backgroundColor:"pink"
                        }
                    });
                }}>배경색 바꾸기</button>
                <p style={this.state.obj}>p1 입니다.</p>
                <div className="box bg-yellow">box</div>
                {/* 
                    jsx 에서  { 중괄호 내부 }   
                    중괄호 내부는 javascript 에서 사용하는 데이터가 참조 되어야 한다.
                    ex)  number, string, object, array, function 
                    number => 10, 20, 30
                    string => "abcd" , 'abcd' ,  `abcd`
                    object => { key:value }
                    array => [value1, value2, ...]
                    function =>  ()=>{}
                    - 데이터를 즉석에서 만들면서 참조할수도 있고, 이미 만들어진 데이터를 참조할수도 있다.
                */}
                <div className={"box bg-pink"}>box2</div>
                <div className={classes}>box3</div>
                <div className={`box bg-pink`}>box4</div>
                <div className={`box ${ true ? "bg-yellow":""}`}>box5</div>
                <div className={`box ${ false ? "bg-yellow":""}`}>box6</div>
                <div className={`box ${ true && "bg-yellow"} `}>box7</div>
                <div className={`box ${ this.state.isYellow ? "bg-yellow":""} `} onClick={()=>{
                    this.setState({
                        isYellow:!this.state.isYellow
                    });
                }}>box8</div>
                <p className={styles["text-red"]}>p 요소 입니다.</p>
                <p className={styles["text-bold"]}>p 요소 입니다.</p>
                <p calssName={`${styles["text-red"]} ${styles["text-bold"]}`}>p 요소 입니다.</p>
            </div>
        );
    }
}

export default App;