
function App() {
  let myName="김구라";
  return (
    <div className='container'>
      <h1>인덱스 페이지 입니다.</h1>
      {/* myName 이라는 변수 안에 있는 내용 사용하기 */}
      <p>내이름은 <strong>{myName}</strong></p>
      <button className="btn btn-primary">눌러 보셈</button>
    </div>
  );
}

export default App;
