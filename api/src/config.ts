export const config = {
	app: {
		port: process.env.PORT,
	},
	db: {
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
        name: process.env.DB_NAME,
        username: process.env.DB_USERNAME,
        pw: process.env.DB_PASSWORD
	},
};