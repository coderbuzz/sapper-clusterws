import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import morgan from 'morgan';
import * as sapper from '../__sapper__/server.js';

import ClusterWS from 'clusterws';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

new ClusterWS({
	port: PORT, // specify port of the application
	worker: Worker, // Worker function must be provided
	workers: dev ? 1 : require('os').cpus().length,
	restartWorkerOnFail: true
}); 

function Worker() { 

	// Get websocket server
	const wss = this.wss
	// Get http/https server
	const server = this.server

	// Listen on connections to websocket server
	wss.on('connection', (socket, req) => { })

	server.on('request',
		polka() // You can also use Express
			.use(
				morgan('dev'),
				compression({ threshold: 0 }),
				sirv('static', { dev }),
				sapper.middleware()
			)
			.handler);
}
