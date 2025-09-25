import { useState } from "react"; 
import Taskbar from "./TaskBar";
import Settings from "./settings";
import TaskTray from "./TaskTray";
import Home from "./Home";
import Gradient from "./gradient";
import Page from "./Page";
import "./home.css";
import "./Chunkard.css";
import "./MyButton.css";
import "./TaskBar.css";
import "./TaskTray.css";
import "./App.css";
import "./settings.css"
import "./gradient.css"
import "./Page.css"

let page : string = "home";

function App() {

  const [currentPage, setCurrentPage] = useState("home");

  return (
    <>
      <Taskbar />
      <Gradient />
      <TaskTray onPageChange={setCurrentPage}/>
      {currentPage === "home" && <Home />}
      {currentPage === "settings" && 
      <div>      
        <div><Settings /></div>
              <Page />
        </div>

      }
    </>
  );
}

export default App;
