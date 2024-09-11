import { BrowserRouter } from "react-router-dom";
import "./App.css";
import GDINRoutes from "./routes";
import { AuthProvider } from "./contexts/auth/auth.provider";
import { UserProvider } from "./contexts/users/users.provider";
import { ThemeProvider } from "./layout/ThemeContext";
import { DepartmentProvider } from "./contexts/Department/department.provider";
import { CommentProvider } from "./contexts/Comment/Comment.provider";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
          <DepartmentProvider>
            <CommentProvider>
              <ThemeProvider>
                <GDINRoutes />
              </ThemeProvider>
            </CommentProvider>
          </DepartmentProvider>
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
