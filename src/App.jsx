import DataView from "./DataView/DataView.jsx";

function App({db}) {
    const sts= {
        display:"flex",
        flexDirection:"column",
        alignItems:'center',
        gap:"50px",
        justifyContent:"space-around",
    }
  return (
    <div style={sts} className="App">
        {db.map((item,index)=><DataView key={index} item={item} />)}

    </div>
  )
}

export default App
