import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/header";
import { useDirection } from "./hooks/useDirection";
import { useTheme } from "./contexts/themecontext";
import { routes } from "./config/routes/routes";
import Loading from "./components/base_components/loading";
import ProtectedRoute from "./hooks/useProtectedRoute";
import { RoutePath } from "./constants/routes.path";
import More from "./pages/More";

const App: React.FC = () => {
  useDirection();
  const { theme } = useTheme();

  return (
    <div
      className="min-h-screen transition-all duration-300 font-vazirmatn"
      data-theme={theme}
    >
      <Header />
      <main className="page">
        <Suspense fallback={<Loading />}>
          <Routes>
            {routes.map((route) => {
              const isProtected =
                route.path === RoutePath.profile ||
                route.path === RoutePath.dashboard;
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    isProtected ? (
                      <ProtectedRoute>
                        <More />
                      </ProtectedRoute>
                    ) : (
                      route.element
                    )
                  }
                />
              );
            })}
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
