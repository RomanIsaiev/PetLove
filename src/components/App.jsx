import { Route, Routes } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { HomePage } from "../pages/HomePage/HomePage";
import { NewsPage } from "../pages/NewsPage/NewsPage";
import { OurFriends } from "../pages/OurFriends/OurFriends";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="notices" />
        <Route path="friends" element={<OurFriends />} />
        <Route path="register" />
        <Route path="login" />
        <Route path="profile" />
        <Route path="add-pet" />
      </Route>

      <Route path="*" />
    </Routes>
  );
};
