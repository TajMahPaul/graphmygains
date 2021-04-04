import { RouteOptions } from 'fastify';
import IndexController from '../controllers/index.controller';
import Router from '../interfaces/routes.interface';

class IndexRoute implements Router {
  public path = '/';
  public indexController = new IndexController();
  public routes : RouteOptions[];

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    
    this.routes = this.contructRoutes();
  }

  private contructRoutes(){
    const index: RouteOptions = {
      method: 'GET',
      url: `${this.path}`,
      handler: this.indexController.index,
    };

    return [index]

  }
}

export default IndexRoute;