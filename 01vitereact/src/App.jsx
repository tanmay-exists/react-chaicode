import Chai from "./chai"

function App() {
  const username = "brokenlimbs"
  return (
    // this "<> </>" is called fragment, only one element can be returned hence this one element = fragment is wrapping multiple elements in it and getting returned
    <>  
      <Chai/>
      <h1>chai aur react {username}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </>
  )
}

export default App
