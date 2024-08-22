import React from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import Login from "../app/Auth/Login";
import Register from "../app/Auth/Register";
import Layout from "../layout/Layout";
import { useNavigationPaths } from "./pages";

const PrivateRoutes = () => {
  const token = localStorage.getItem("token");


  return token ? <Outlet /> : <Navigate to="/" />;
};

const GDINRoutes: React.FC = () => {
  // const navigationPaths = useNavigationPaths();
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        {useNavigationPaths.map((nav) => (
          <Route
            key={nav.path}
            path={nav.path + "/*"}
            element={
              // nav.path.split("/")[2] === "profile" &&
              // nav.path.split("/")[3] === "myinfo" ? (
              //   <Layout>
              //     <ProfileLayout>{nav.element}</ProfileLayout>
              //   </Layout>
              // ) : (
              <Layout>{nav.element}</Layout>
              // )
            }
          />
        ))}
      </Route>
      <Route key="/" path="/" element={<Login />} />
      <Route key="/register" path="/register" element={<Register />} />
    </Routes>
  );
};

export default GDINRoutes;
