import { useState } from "react";

export default function ProfilePicture(){

  const imgurl = './src/assets/karina.jpg';

  let displayVales = ""
  const styles = {display:displayVales}

  const handleClick = () => {
    displayVales ? displayVales = "" : displayVales = "none" 
    document.getElementById('dis').style.display = displayVales
  } 

  const [display,setDisplay] = useState("");
  const styles1 = {display:display}
  const handleClick1 = () => {
    setDisplay(display ? "" : "none" )
  }

  return(
    <>
    <img src={imgurl} style={styles} id="dis" width={200}></img>
    <button onClick={handleClick}>이미지1</button>
    <br/>
    <img src={imgurl} style={styles1} width = {200}></img>
    <button onClick={handleClick1}>이미지2</button>
    </>
  )
}
