import React from "react";
import { Route, Switch} from "react-router-dom";
import Home from "./screens/Home/Home";
import PeliculasEnCartel from "./screens/PeliculasEnCartel/PeliculasEnCartel";
import PeliculasPopulares from "./screens/PeliculasPopulares/PeliculasPopulares";



function App() {
  return (
    <Switch>
      <Route path= "/" exact={true} component={Home}/>
      <Route path= "/peliculasencartel" component={PeliculasEnCartel}/>
      <Route path= "/peliculaspopulares" component={PeliculasPopulares}/>
    </Switch>
      
  );
}

export default App;
