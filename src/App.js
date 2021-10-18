import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Footer } from "./secciones/00-home/Footer";
import { Libro } from "./secciones/00-home/Libro";
import { TopBar } from "./secciones/00-home/TopBar";



function App() {

  const handle = useFullScreenHandle();
  return (
    <div className="App" >

      <TopBar/>

      <button className="btn btn-dark position-absolute justify-content-center" onClick={handle.enter} style={{zIndex:4}}>
        Enter fullscreen
      </button>
      
      <FullScreen handle={handle} >
        <Libro />
      </FullScreen>
      

      <Footer/>

    </div>
  );
}

export default App;
