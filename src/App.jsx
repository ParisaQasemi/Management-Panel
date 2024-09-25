import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./component/layout/Sidebar";
import Mainbar from "./component/layout/Mainbar";
import { useState } from "react";


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  }

  return (
    <BrowserRouter>
      <div className="bg-gradient-to-bl from-[#0d081d] via-[#181682] to-[#293ec9] text-white 
       min-h-screen">
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <Mainbar toggleSidebar={toggleSidebar}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
