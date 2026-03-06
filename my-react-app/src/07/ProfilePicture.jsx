export default function ProfilePicture(){

    const imgurl = './src/assets/profile.png';
    const handleClick = (e) => {
      // console.log("OUCH!");
      e.target.style.display = "none";
    }
    const handleClick1 = (e) => {
      document.getElementById("image").style.display = "block"
    }
    
    return(
    <>
      <img src={imgurl} onClick={(e)=>handleClick(e)}></img>
      <button onClick={() => handleClick1()}>Click me 😁</button>
    </>
    )
  }
  