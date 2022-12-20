import { useState } from "react";

import { Home } from "./screens/Home";
import { Login } from "./screens/Login";

import "./style/reset.css";
import "./style/index.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const userAuthenticated = () => setIsAuthenticated(true);

  return (
    <div className="wrapper">{isAuthenticated ? <Home /> :
     <Login  onClickButton={userAuthenticated}/>}
      
    
    </div>
  );
}

export default App;
