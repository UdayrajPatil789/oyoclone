const Header2 = () => {
    const List = [
      {
        name: "Banglore",
      },
      {
        name: "Culcutta",
      },
      {
        name: "Mumbai",
      },
      {
        name: "Delhi",
      },
      {
        name: "Hyderabad",
      },
    ];
    return (
      <div>
        <div className="flex px-10 py bg-gray-100 justify-between h-6">
          {
              List.map((e)=>{
                  return(
                      <span key={e.name} >{e.name}</span>
                  )
              })
          }
        </div>
      </div>
    );
  };
  
  export default Header2;