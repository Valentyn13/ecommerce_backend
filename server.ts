import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import connectToDB from './src/config/database';
import AppRouter from './src/routes';
import errorHandler from './src/middlewares/error.middleware';

const app = express();
app.use(cors());
const router = new AppRouter(app);

connectToDB();

app.set('port', process.env.PORT || 4200);
app.use(bodyParser.json({ limit: '500kb' }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false, limit: '500kb' }));

router.init();
app.use(errorHandler);
const port = app.get('port');

app.listen(port, () => console.log(`Server is running on port ${port}`));
