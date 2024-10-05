import { Route, Routes } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { HomePage } from "../pages/HomePage/HomePage";
import { NewsPage } from "../pages/NewsPage/NewsPage";
import { OurFriends } from "../pages/OurFriends/OurFriends";
import { NoticesPage } from "../pages/NoticesPage/NoticesPage";
import { Login } from "../pages/Login/Login";
import { Registration } from "../pages/Registration/Registration";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="notices" element={<NoticesPage />} />
        <Route path="friends" element={<OurFriends />} />
        <Route path="register" element={<Registration />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" />
        <Route path="add-pet" />
      </Route>

      <Route path="*" />
    </Routes>
  );
};
