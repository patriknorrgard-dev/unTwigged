import { createRouter, createRootRoute, createRoute } from "@tanstack/react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ProjectPage from "./pages/ProjectPage";
import App from "./App";
import UserPortfolioPage from "./pages/UserPortfolioPage";

const rootRoute = createRootRoute({
  component: App,
})

// Create child routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
})

const projectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projects',
  component: ProjectPage,
})

const projectUserRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projects/$username',
  component: ProjectPage,
})

const portfolioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/portfolio',
  component: PortfolioPage,
})

const portfolioUserRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/portfolio/$username',
  component: UserPortfolioPage,
})

// Collecting the route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  projectRoute,
  portfolioRoute,
  projectUserRoute,
  portfolioUserRoute
])

// Create an instance of the router
export const router = createRouter({ routeTree })

// Register types (so that the router works with TS without crutches)
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}