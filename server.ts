import express from 'express';
import connectToDB from './src/config/database';
import AppRouter from './src/routes';

const app = express();
const router = new AppRouter(app);
app.set('port',process.env.PORT || 4200);

router.init();


connectToDB();
const port = app.get('port');

app.listen(port,()=> console.log(`Server is running on port ${port}`));