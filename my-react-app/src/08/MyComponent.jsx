import { useState } from "react";

export default function MyComponent_08(){
  let age_1 = 0
  let name_1 = "Guest"
  let isEmployed_1 = false

  const [name,setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed,setIsEmployed] = useState(false);

  const updateName = () => {
    setName("홍길동");
    name_1 ="홍길동"
  }
  const incrementAge = () => {
    setAge(age+1);
    age_1 += 1;
  }
  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  }
  
  return(
    <div>
      <span>Name_1: {name_1}</span> <span>Name: {name}</span>
      <button className="border-1" onClick={updateName}>Set Name</button><br/>

      <span>Age_1: {age_1}</span> <span>Age: {age}</span> 
      <button className="border-1" onClick={incrementAge}>Increment Age</button><br/>

      <span>Is employed: {isEmployed?"yes":"no"}</span>
      <button className="border-1" onClick={toggleEmployedStatus}>Toggle Status</button>
    </div>
  )
}



