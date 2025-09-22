import React from "react";
import { Route, Switch} from "react-router-dom";
import Home from "./screens/Home/Home";
import PeliculasEnCartel from "./screens/PeliculasEnCartel/PeliculasEnCartel";
import PeliculasPopulares from "./screens/PeliculasPopulares/PeliculasPopulares";
import UnaPelicula from "./screens/UnaPelicula/UnaPelicula";
import UnaSerie from "./screens/UnaSerie/UnaSerie";
import TopSeriesRated from "./screens/TopSeriesRated/TopSeriesRated";
import SeriesPopulares from "./screens/SeriesPopulares/SeriesPopulares";
import NotFound from "./screens/NotFound/NotFound";
import Resultado from "./screens/Resultado/Resultado";
import Favoritos from "./screens/Favoritos/Favoritos";



function App() {
  return (

    <Switch>
      <Route path= "/" exact={true} component={Home}/>
      <Route path= "/peliculasencartel" component={PeliculasEnCartel}/>
      <Route path= "/peliculaspopulares" component={PeliculasPopulares}/>
      <Route path= "/seriespopulares" component={SeriesPopulares} />
      <Route path= "/topratedseries" component ={TopSeriesRated}/>
      <Route path="/resultado/:tipo/:busqueda" component={Resultado} />
      <Route path= "/pelicula/:id" component={UnaPelicula}/>
      <Route path= "/serie/:id" component={UnaSerie}/>
      <Route path="/favoritos" component={Favoritos} />
      <Route path= "/" component={NotFound}/>
    </Switch>
      
  );
}

export default App;
