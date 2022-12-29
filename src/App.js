import { RouterProvider } from "react-router-dom";
import "./App.css";
import {router} from './Routes/Routes'
function App() {
  return (
    <div className="App">
      <div className="blur" style={{top:'-18%',right:'0'}}></div>
      <div className="blur" style={{top:'36%', left:'-8rem'}}></div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
