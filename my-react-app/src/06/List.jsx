export default function List({category="Category", items=[]}){
    return (
      <>
        <h2 className="text-4xl font-bold text-gray-800 mb-2.5 text-center border-1 rounded-md bg-blue-400 m-10 p-5">
          {category}
        </h2>
        <ul>
          {items.map(item => (
            <li key={item.id} 
                className="text-3xl list-none text-gray-700 text-center m-0 
                           hover:text-gray-500 hover:cursor-pointer">
              {item.name}
            </li>
          ))}
        </ul>
      </>
    )
  }
  
  