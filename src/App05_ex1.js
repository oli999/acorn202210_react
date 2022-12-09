// App05_ex1.js

import "./css/custom.css"
//모듈화된 css
import styles from "./css/custom.module.css";

import { Component } from "react";
//여기서 import 한 cn 은 function 으로 생각하고 사용하면 된다.
import cn from "classnames";
import binder from "classnames/bind";
// classname binder 를 이용해서 모듈화된 css 를 바인딩해서 그 참조값을 cx 에 대입
const cx=binder.bind(styles);

class App extends Component{

    state={
        btnColor:'btn-primary',
        isChecked:false
    }

    render(){
        return (
            <div className="container">
                <h3>모듈화된 css 사용의 불편함 해결하기</h3>
                <div className="box bg-yellow">box</div>
                <div className={'box bg-yellow'}>box2</div>
                {/* cn( 적용할 클래스를 문자열로 나열 ) */}
                <div className={cn('box', 'bg-yellow')}>box3</div>
                {/* cn({})  object 를 전달해서 true, false 를 활용해서 클래스를 적용할지 말지를 결정 */}
                <div className={cn({box:true, 'bg-yellow':true})}>box4</div>
                <div className={cn('box',{'bg-yellow':true})}>box4</div>
                
                <h2>동적으로 class 를 적용하는 예제</h2>
                <select name="color" onChange={this.onColorChange} 
                        value={this.state.btnColor}>
                    <option value="btn-primary">primary</option>
                    <option value="btn-info">info</option>
                    <option value="btn-success">success</option>
                </select>
                <input type="checkbox" checked={this.state.isChecked}
                    onChange={this.onCheckChange}/>
                <br/>
                <button className={cn('btn', this.state.btnColor,{'btn-lg':this.state.isChecked})}>색상이 바뀌는 버튼</button>

                <h2>모듈화된 css 를 좀더 편하게 사용하기</h2>
                <p className={styles["text-red"]}>p1 입니다.</p>
                <p className={cx('text-red')}>p2 입니다.</p>
                <p className={cx('text-blue', 'text-bold', 'text-big')}>p3 입니다.</p>
                <p className={cx('text-blue', {'text-bold':true})}>p4 입니다.</p>
            </div>
        );
    }
    onCheckChange=(e)=>{
        //이벤트가 일어난 요소의 checked 값 (true or false) 를 얻어와서 
        const isChecked=e.target.checked;
        //상태값에 반영한다. 
        this.setState({isChecked:isChecked});
    }

    //select 요소가 change 되었을때 호출되는 함수 
    onColorChange=(e)=>{
        //이벤트가 일어난 요소의 value 값을 읽어온다. 
        const selectedColor=e.target.value;
        //상태값을 바꿔줘서 UI 가 업데이트 되도록한다. 
        this.setState({btnColor:selectedColor});
    }
}

export default App;