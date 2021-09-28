import { Footer } from "./secciones/00-home/Footer";
import { Libro } from "./secciones/00-home/Libro";
import { TopBar } from "./secciones/00-home/TopBar";



function App() {
  
  return (
    <div className="App" >

      <TopBar/>
      <div style={{height: "85vh"}} className="position-relative overflow-hidden">
        <Libro/>
      </div>

      <Footer/>

    </div>
  );
}

export default App;
