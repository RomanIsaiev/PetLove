import { Route, Routes } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { HomePage } from "../pages/HomePage/HomePage";
import { NewsPage } from "../pages/NewsPage/NewsPage";
import { OurFriends } from "../pages/OurFriends/OurFriends";
import { NoticesPage } from "../pages/NoticesPage/NoticesPage";
import { Login } from "../pages/Login/Login";
import { Registration } from "../pages/Registration/Registration";
import { ProfilePage } from "../pages/ProfilePage/ProfilePage";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import { AddPetPage } from "../pages/AddPetPage/AddPetPage";

export const App = () => {
  const isAuthenticated = !!localStorage.getItem("userData");
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="notices" element={<NoticesPage />} />
        <Route path="friends" element={<OurFriends />} />
        <Route path="register" element={<Registration />} />
        <Route path="login" element={<Login />} />
        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="add-pet" element={<AddPetPage />} />
        </Route>
      </Route>

      <Route path="*" />
    </Routes>
  );
};
