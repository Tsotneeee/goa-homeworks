import Card from "./components/Card"
import { data } from "./Data/data.js"
import { useState } from "react";
function App() {
  const [people, setPeople] = useState(data);

  return (
    <>
      {people.map(el => <Card key={el.id} setPeople={setPeople} profile={el}/>)}
    </>
  )

}

export default App