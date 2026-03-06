import express from 'express';
import { PORT } from './config';
import { cardsRouter } from './routers/cards.router';

const server = express();

server.get('/', (request, response) => {
  response.send('Hi world!');
});

server.use('/cards', cardsRouter);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
