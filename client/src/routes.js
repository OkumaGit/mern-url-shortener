import { Routes, Route, Navigate } from "react-router-dom";
import { LinksPage } from "./pages/LinksPage";
import { CreatePage } from "./pages/CreatePage";
import { DetailPage } from "./pages/DetailPage";
import { AuthPage } from "./pages/AuthPage";
import { NewPage } from "./pages/NewPage";

export const useRoutes = (isAuthenticated) => {
  console.log("🛣️ useRoutes called with isAuthenticated:", isAuthenticated);
  if (isAuthenticated) {
    console.log("✅ Returning authenticated routes");
    return (
      <Routes>
        <Route path="/links" element={<LinksPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/newpage" element={<NewPage />} />
        <Route path="*" element={<Navigate to="/create" />} />
      </Routes>
    );
  } else
    return (
      <Routes>
        {/* <Route path="/create" element={<CreatePage />} /> */}
        <Route path="/" element={<AuthPage />} />
        <Route path="/newpage" element={<NewPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
};
