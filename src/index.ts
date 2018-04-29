import * as express from 'express';
import * as cors from 'cors';
import * as morgan from 'morgan';

const app = express();
app.use(cors());
app.use(morgan('combined'));


app.listen(8081, () => console.log('Server on 111'));
