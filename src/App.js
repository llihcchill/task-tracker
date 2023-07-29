// the "from" syntax pretty much names the file
// example: const header = Header.header()
import Header from "./components/Header";

function App() {

  // the <div className="App"> can be any one html element,
  // it could be a fragment (<> </>) or a <div> like it is
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
