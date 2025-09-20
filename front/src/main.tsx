import "./index.css";

import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { routeTree } from "./routeTree.gen";
import { GlobalStyles, StyledEngineProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const queryClient = new QueryClient();

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <StyledEngineProvider enableCssLayer>
          <SnackbarProvider maxSnack={3} preventDuplicate>
            <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
            <RouterProvider router={router} />
          </SnackbarProvider>
        </StyledEngineProvider>
      </QueryClientProvider>
    </StrictMode>
  );
}
