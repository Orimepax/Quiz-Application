import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import router from './router/route.js'; 

/** import connection file */
import connect from './database/conn.js';

const app = express();

/** app middleware */
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

/** application port */
const port = process.env.PORT || 8080;


/** routes  */

app.use('/api', router);

app.get('/', (req, res) => {
    try {
        res.json("Get Request" )
    } catch(error){
        res.json( error )
    }
})

/** start server when we have valid connection */ 
connect().then(() => {
    try{
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${ port } `)
        })
    } catch(error){
    console.log("Can not connect to server");
    }

}).catch((error) => {
    console.log("Invalid Database Connection");
})


