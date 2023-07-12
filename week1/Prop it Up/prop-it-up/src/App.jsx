import './App.css'
import PersonCard from "./components/PersonCard"

function App() {

  return (
      <div>
        <PersonCard
          firstName={"Jane"}
          lastName={"Doe"}
          hairColor={"Black"}
          age={25}
        />
        <PersonCard
          firstName={"Jack"}
          lastName={"Jones"}
          hairColor={"Brown"}
          age={50}
        />
        <PersonCard
          firstName={"Brock"}
          lastName={"Hone"}
          hairColor={"Blonde"}
          age={34}
        />
        <PersonCard
          firstName={"Kevin"}
          lastName={"Heart"}
          hairColor={"Black"}
          age={30}
        />
        <button onClick={ () => alert("Alert!")}>Click Me</button>
      </div>
  )
}

export default App
