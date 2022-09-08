import DataView from "./DataView/DataView.jsx";

function App({db}) {

  return (
    <div className="App">
        <DataView db={db} />
    </div>
  )
}

export default App
