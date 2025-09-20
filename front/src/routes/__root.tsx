import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { useAuthStore } from "../store/authStore";

const RootLayout = () => {
  const { user } = useAuthStore();
  return (
    <>
      {user && (
        <div>
          <div className="p-2 flex gap-2">
            <Link to="/" className="[&.active]:font-bold">
              Home
            </Link>{" "}
            <Link to="/register" className="[&.active]:font-bold">
              Register
            </Link>
          </div>
          <hr />
        </div>
      )}
      <Outlet />
      <TanStackRouterDevtools initialIsOpen={false}/>
    </>
  );
};
export const Route = createRootRoute({ component: RootLayout });
