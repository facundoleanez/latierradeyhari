import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { LibroPortada } from "./components/LibroPortada";
import { Footer } from "./secciones/00-home/Footer";
import { Libro } from "./secciones/00-home/Libro";
import { TopBar } from "./secciones/00-home/TopBar";



function App() {

  const handle = useFullScreenHandle();
  
  return (
    <div className="App" >

      <TopBar/>

      <div className="img-hover text-center p-5" onClick={handle.enter}>
        <LibroPortada />
      </div>
      
      <FullScreen handle={handle} >
        {handle.active && <Libro />}
      </FullScreen>
      

      <Footer/>

    </div>
  );
}

export default App;
