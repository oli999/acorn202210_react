// components/FriendComponent.js

const { Component } = require("react");

class FriendComponent extends Component{

    render(){
        // 부모 component 에서 전달된 props
        const friends=this.props.friends;
        // 배열에 저장된 아이템을 이용해서 jsx 배열을 얻어낸다.
        const list=friends.map((item, index)=>{
            return (
                <li key={index}>
                    {item} 
                    <button onClick={()=>{
                        let newName=prompt(item+" 의 새로운 이름을 입력하세요");
                        //props 로 전달된 updateClicked 라는 함수를 호출하면서 수정할 인덱스, 새 이름 전달
                        this.props.updateClicked({
                            index,
                            newName
                        });

                    }}>수정</button>
                    <button onClick={()=>{
                        //props 로 전달된 deleteClicked 라는 함수 호출하면서 인덱스 값 전달하기 
                        this.props.deleteClicked(index);
                    }}>삭제</button>
                </li>
            );
        });
        return(
            <ul>
                {list}
            </ul>
        );
    }
}

export default FriendComponent;