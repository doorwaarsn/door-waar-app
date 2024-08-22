import { BrowserRouter } from "react-router-dom";
import "./App.css";
import GDINRoutes from "./routes";
import { AuthProvider } from "./contexts/auth/auth.provider";
import { UserProvider } from "./contexts/users/users.provider";
import { ThemeProvider } from "./layout/ThemeContext";
import { DepartmentProvider } from "./contexts/Department/department.provider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
          <DepartmentProvider>
                  <ThemeProvider>
                    <GDINRoutes />
                  </ThemeProvider>
          </DepartmentProvider>
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
