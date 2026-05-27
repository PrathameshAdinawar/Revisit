//Socketio doesn't work directly on express
// we use http from node:http
import http from 'node:http';
import path from 'node:path';

import express from 'express';
import { Server } from 'socket.io';

import { publisher, subscriber, redis } from './redis-conection'
import { channel } from 'node:diagnostics_channel';


const CHECKBOXES_SIZE = 100;

const state = {
    checkboxes: new Array(CHECKBOXES_SIZE).fill(false),
}

async function main() {

    //PORT
    const PORT = process.env.PORT ?? 8000;

    //express is function
    const app = express();

    //app in createServer() is imp
    const server = http.createServer(app);

    const io = new Server();
    io.attach(server);


    await subscriber.subscribe('internal-server:checkbox:change');

    subscriber.on('message',(channel,messsage)=>{

        if(channel === 'internal-server:checkbox:change'){

            const {index, checked} = JSON.parse(messsage);
            state.checkboxes[index] = checked;
            io.emit('server:checkbox:change',{index, checked});
        }
    })

    //Socket.io handler
    io.on('connection', (socket) => {
        console.log(`Socket connected`, { id: socket.id })

        socket.on('client:checkbox:change', async (data) => {
            console.log(`[Socket:${socket.id}]:client:checkbox:change`, data);
            // io.emit('server:checkbox:change',data)
            // state.checkboxes[data.index] = data.checked;

            await publisher.publish(
                'internal-server:checkbox:change',
                JSON.stringify(data),
            );

        });
    });



    //express handlers
    // path is an inbuilt package of node which helps to keep the private files private
    // if the file that is asked via the port number if it is public provide else do not
    // and by default finds the index.js
    app.use(express.static(path.resolve('./public')));

    //route that shows my server is healthy
    app.get('/health', (req, res) => res.json({ healthy: true }));
   
    app.get('/checkboxes',(req,res)=>{
        return res.json({checkboxes: state.checkboxes});
    })


    server.listen(PORT, () => {
        console.log(`Server is running on  http://localhost:${PORT}`);
    });
}

main();


//In Terminal we are using curl it is CLI utility to make API calls