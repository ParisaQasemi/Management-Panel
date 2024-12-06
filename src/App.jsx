import "./App.css";
import "animate.css";
import { useLocation } from "react-router-dom";
import AdminLayout from "./layout/auth/AdminLayout";
import AuthLayout from "./layout/auth/AuthLayout";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const location = useLocation();

  return (
    <Provider store={store}>
      <div
        className="min-h-screen
        bg-gradient-to-bl from-[#0d081d] via-[#181682] to-[#293ec9] text-white "
      >
        {location.pathname.includes("/auth") ? <AuthLayout /> : <AdminLayout />}
      </div>
    </Provider>
  );
}

export default App;
