import * as fastify from 'fastify';
import Router from './interfaces/routes.interface';
import { config } from './config';

class App {
	public app: fastify.FastifyInstance;
	public port: string | number;
	public env: string;

	constructor(routes: Router[]) {
		this.app = fastify.default({ logger: true });
		this.port = config.app.port || 3000;
		this.env = process.env.NODE_ENV || 'dev';
	
		// this.initializeMiddlewares();
		this.initializeRoutes(routes);
		// this.initializeSwagger();
	}

	public listen = async (): Promise<void> => {
		try {
			await this.app.listen(this.port);
		} catch (err) {
			this.app.log.error(err);
			process.exit(1);
		}
	};

	public getServer() {
		return this.app;
	}

	// TODO: Work on middle wares
	// private initializeMiddlewares() {
	// 	if (this.env === 'production') {
	// 	  this.app.use(morgan('combined', { stream }));
	// 	  this.app.use(cors({ origin: 'your.domain.com', credentials: true }));
	// 	} else if (this.env === 'development') {
	// 	  this.app.use(morgan('dev', { stream }));
	// 	  this.app.use(cors({ origin: true, credentials: true }));
	// 	}
	
	// 	this.app.use(hpp());
	// 	this.app.use(helmet());
	// 	this.app.use(compression());
	// 	this.app.use(express.json());
	// 	this.app.use(express.urlencoded({ extended: true }));
	// 	this.app.use(cookieParser());
	//   }

	private initializeRoutes(routers: Router[]) {
		routers.forEach(router => {
			router.routes.forEach(route => {
				this.app.route(route);
			});
		});
	}
}


export default App;
