export default function Profile({user,key}) {
    return (
      <>  
      <div className="flex flex-col items-center justify-center">
        <h1>{user.name}</h1>
        <img
          className="rounded-full m-10 "
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
        </div>
      </>
    );
  } 
  