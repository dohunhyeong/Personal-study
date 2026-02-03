import '../index.css'

export default function Card(){
  return(
    <>
    <div className="card flex flex-col items-center justify-center">
       <img className="card-image w-full max-width: 600px h-auto mx-auto" 
            src="https://placehold.co/600x600"/>
       <h2 className="card-title">Test</h2>
       <p className='card-text'>I make Youtube videos and play</p>
    </div>
    {/* <img src={profilePic}/> */}
    </>
  )
}
