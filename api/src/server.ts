import * as fastify from 'fastify';
import knex from 'knex';
import routes from './routes';
import { config } from './config';
const env = process.env.NODE_ENV;

const app = fastify.default({ logger: true });

routes.forEach(route => {
	app.route(route);
});

const start = async (): Promise<void> => {
	try {
		await app.listen(config.app.port);
	} catch (err) {
		app.log.error(err);
		process.exit(1);
	}
};
start();

export default app;

// Configure DB
if (env !== 'test') {
	mongoose
		.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => app.log.info('MongoDB connected...'))
		.catch(err => app.log.error(err));
}