import express from 'express';
import bodyParser from 'body-parser';

import connectToDB from './src/config/database';
import AppRouter from './src/routes';

const app = express();
const router = new AppRouter(app);

connectToDB();

app.set('port',process.env.PORT || 4200);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
router.init();

const port = app.get('port');

app.listen(port,()=> console.log(`Server is running on port ${port}`));