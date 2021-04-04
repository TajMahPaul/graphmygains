import { RouteOptions } from "fastify";

interface Router {
  path?: string;
  routes: RouteOptions[];
}

export default Router;
