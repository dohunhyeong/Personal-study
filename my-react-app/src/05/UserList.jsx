import UserGreeting from "./UserGreeting"

export default function UserList() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="hong"/>
      <UserGreeting isLoggedIn={false}/>
      <UserGreeting/>
    </>
  )
}
