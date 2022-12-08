// App04_ex1.js 

import { Component } from "react";

class App extends Component{
    state={
        weapon:"sword"
    }

    render(){

        return (
            <div className="container">
                <h3>무엇으로 공격할지 선택하세요</h3>
                <select value={this.state.weapon} onChange={this.handleChange}>
                    <option value="gun">총</option>
                    <option value="sword">칼</option>
                    <option value="arrow">활</option>
                </select>
                <p> <strong>{this.state.weapon}</strong> 으로 공격합니다.</p>
            </div>
        );
    }
    handleChange = (e)=>{
        //선택된 value 값을 읽어와서 weapon state 값을 변화 시킨다.
        this.setState({
            weapon:e.target.value
        });
    } 

}

export default App;