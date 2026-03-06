export default function Button(){

    // 인자값을 전달하지 않을 때 함수 호출
      const handleClick = () => console.log("Ouch!");
    
    //  인자값을 전달하는 경우 함수 호출
      const handleClick2 = (name) => console.log(`${name} stop clicking me`);
    
      let count = 0;
      const handleClick3 = (name)=>{
        if(count<3){
          count++;
          console.log(`${name} you clicked me ${count} times`);
        }else{
          console.log(`${name} stop clicking me!`);
        }
      }
    // 이벤트 객체를 인자값으로 전달하는 경우
      const handleClick4 = (e) => {
        // console.log(e)
        e.target.textContent = "OUCH! 😣";
      }
      return(
        <>
          <button onClick={handleClick}>Click me 😁</button>
          <button onClick={() => handleClick2("dohun")}>Click me 😁</button>
          <button onClick={() => handleClick3("dohun")}>Click me 😊</button>
          <button onClick={(e) => handleClick4(e)}>Click me 😊</button>
          {/* <button onDoubleClick={(e) => handleClick4(e)}>Click me 😊</button> */}
        </>
      )
    }
    