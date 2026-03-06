import express, { Response, Request } from 'express';
import { Card, CreateCardRequest, GetCardsResponse } from '../types/cards';
import { IdParams } from '../types/common';

export const cardsRouter = express.Router();

cardsRouter.get(
  '/',
  (request: Request<{}, {}>, response: Response<GetCardsResponse>) => {
    // TO DO: Return cards
  },
);

cardsRouter.get(
  '/:id',
  (request: Request<IdParams, {}>, response: Response<Card>) => {
    // TO DO: Return card
  },
);

cardsRouter.post(
  '/',
  (request: Request<{}, CreateCardRequest>, response: Response<Card>) => {
    // TO DO: Create card
  },
);

cardsRouter.put(
  '/:id',
  (request: Request<IdParams, Card>, response: Response<Card>) => {
    // TO DO: Update card
  },
);

cardsRouter.delete(
  '/:id',
  (request: Request<IdParams>, response: Response<void>) => {
    // TO DO: Delete card
  },
);
