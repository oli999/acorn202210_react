
const drill = ()=>{
    console.log("구멍을 뚤어요!");
}

const sender = (msg)=>{
    console.log(msg+" 를 전송합니다.");
}

//두개의 함수를 object 에 담아서 
const obj={drill, sender}

//default 로 export 한다. 
export default obj;
