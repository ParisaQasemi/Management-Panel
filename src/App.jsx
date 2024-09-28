import "./App.css";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Mainbar from "./component/layout/Mainbar/Mainbar";
import Sidebar from "./component/layout/SidebarGroupTitle/Sidebar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <BrowserRouter>
      <div
        className="bg-gradient-to-bl from-[#0d081d] via-[#181682] to-[#293ec9] text-white 
       min-h-screen"
      >
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Mainbar toggleSidebar={toggleSidebar} />
      </div>
    </BrowserRouter>
  );
}

export default App;
