import { useState } from "react";

export default function Counter(){
//   useState(0) 는 배열을 반환하는데, 첫 번째 요소는 현재 상태값이고, 두 번째 요소는 상태를 업데이트하는 함수입니다.
//   그리고 이 배열을 구조 분해 할당을 사용하여 count와 setCount라는 변수에 할당합니다.
//   setCount 함수는 count 상태를 업데이트하는 데 사용됩니다. 예를 들어, setCount(count + 1)과 같이 호출하면 count의 값을 1 증가시킵니다.
//   업데이트와 동시에 컴포넌트가 다시 렌더링되어 변경된 count 값을 화면에 표시하게 됩니다.

  const [count,setCount] = useState(0);
  const increment = () =>{
    setCount(count + 1);
  }
  const decrement = () => {
    setCount(count - 1);
  }
  const reset = () => {
    setCount(0);
  }
  return(
    <div>
      <p>{count}</p>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

