import Home from "./Home";
import GlobalStyle from "./styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App fundo">
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  )
}

export default App;
