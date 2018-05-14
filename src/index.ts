import * as express from 'express';
import * as cors from 'cors';
import * as morgan from 'morgan';
import config from './config';

const app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(config.port, () => console.log('Server is running at port', config.port));
