export default function UserGreeting({isLoggedIn = false, username = "Guest"}){
  const welcomeMessage =  <h2 className="text-4xl bg-lime-400 rounded-full p-7 m-8">Welcome {username}</h2>
  const loginPrompt = <h2 className="text-4xl bg-pink-500 rounded-full p-7 m-8">Please log in to continue {username}</h2>

   return(
    <>
      {isLoggedIn && welcomeMessage} 
      {isLoggedIn || loginPrompt}
    </>
  )
  }
