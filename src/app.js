import express from 'express';
import router from './routers/index.js'

import "./core/db.js";
const app = express();
const port =3000;


app.use(express.json());
//app.use(helmet());
app.use('/',router);

app.listen(port, ()=> {
     console.log(`Server listening on port ${port}`);
})
