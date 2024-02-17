import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import GlobalStyle from "./styles";
import AboutMe from "./Pages/SobreMim";
import Pensamentos from "./Pages/Pensamentos";
import Habilidades from "./Pages/Habilidades";
import path from "path";
import Projetos from "./Pages/Projetos";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/aboutMe',
      element: <AboutMe />,
    },
    {
      path: '/thoughts',
      element: <Pensamentos />,
    },
    {
      path: '/habilidades',
      element: <Habilidades />
    },
    {
      path: '/projetos',
      element: <Projetos />
    }
  ])

  return (
    <>
      <GlobalStyle />
      <div className="App fundo">
        <div className="container">
          <RouterProvider router={router}/>
        </div>
      </div>
    </>
  )
}

export default App;
