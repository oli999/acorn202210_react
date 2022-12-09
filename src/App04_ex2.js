// App04_ex2.js 

import { Component } from "react";

class App extends Component{
    state={
        selectedList:[]
    }
    //선택한 메뉴를 출력할 데이터를 담을 배열 (처음엔 선택한게 없어서 비어 있다)
    selected=[];

    render(){
        //체크박스를 출력할 데이터를 담은 배열
        let menu=[
            {id:1, name:"김밥"},
            {id:2, name:"라면"},
            {id:3, name:"떡복기"},
            {id:4, name:"만두"},
            {id:5, name:"우동"}
        ];
        
        // data 를 이용해서 UI 를 만들어 내기 (만들어낸 UI 는 배열에 저장된 상태로 리턴된다.)
        const newArray=menu.map((item)=>{
            //item 은 {id:x, name:x} 형태의 object 이다.
            return <label key={item.id}><input type="checkbox" onChange={(e)=>{
                //체크 박스를 체크하거나 해제하면 호출되는 함수 

                //만일 체크 했다면
                if(e.target.checked){
                    //필드에 선언된 selected 배열에 item 추가 
                    this.selected.push(item);
                }else{//체크를 해제 했다면
                    //삭제할 item 이 몇번째 index 에 있는지 찾아서 
                    const index=this.selected.indexOf(item);
                    //필드에 선언된 selected 배열에서 해당 인덱스 삭제
                    this.selected.splice(index, 1);
                }
                //state 를 변화 시켜서 UI 가 업데이트 되게 한다. 
                this.setState({
                    selectedList:this.selected.map( item => <li key={item.id}>{item.name}</li>)
                });
            }}/> {item.name} </label>;
        });

        return (
            <div className="container">
                <h3>먹고 싶은 분식 메뉴를 체크 하세요</h3>
                {newArray}
                <h3>선택된 메뉴 목록입니다.</h3>
                <ul>
                    {this.state.selectedList}
                </ul>
            </div>
        );
    }
}

export default App;