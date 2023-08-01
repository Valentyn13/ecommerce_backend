import express from 'express';
import connectToDB from './config/database';

const app = express();
app.set('port',process.env.PORT || 4200);

connectToDB()
const port = app.get('port');
app.get('/', (req,res) => {
    res.send('Root path enabled');
})


app.listen(port,()=> console.log(`Server is running on port ${port}`));