import * as fs from 'node:fs';
import path from 'node:path';
import express from 'express';
import cors from 'cors'
import PinoHttp from "pino-http";
import swaggerUI from 'swagger-ui-express';


import routes from './routes/routes.js';
import cookieParser from 'cookie-parser';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';
export async function setupServer() {
    const SWAGGER_DOCUMENT = JSON.parse(
        fs.readFileSync(path.join('docs', 'swagger.json'), 'utf-8'),
    );
    try {
    const app = express();
    const PORT = process.env.PORT || 3000;

    app.use(cors({origin: '*'}));
    app.use(PinoHttp());
    app.use(cookieParser());
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(SWAGGER_DOCUMENT));
    app.use('/photos', express.static(path.resolve('src', 'uploads', 'photos')));
    app.use('/', routes);

    
    app.use('', notFoundHandler);
    app.use(errorHandler);

    app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Server started on port ${PORT}`);
    });

    } catch (error) {
        console.error(error);
    }

}





