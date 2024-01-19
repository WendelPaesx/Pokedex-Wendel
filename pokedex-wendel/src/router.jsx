
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Pages/Home";

export default function Router(){
   return(
    <BrowserRouter>
      

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          
            
          <Route path="/">
            <Home />
            
          </Route>
        </Switch>
      
    </BrowserRouter>
  )
  
    

}

  
  function About() {
    return <h2>About</h2>;
  }
  




