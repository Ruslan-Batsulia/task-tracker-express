import { Card } from '../types/cards';
import { sqliteALL, sqliteGET, sqliteRUN } from './db-connection';

export const createCard = async (card: Card): Promise<void> => {
  await sqliteRUN(
    `
    INSERT INTO cards (id, text)
    VALUES (?, ?);
  `,
    [card.id, card.text],
  );
};

export const updateCard = async (card: Card): Promise<void> => {
  await sqliteRUN(
    `
    UPDATE cards SET text = ?
    WHERE id = ?;
  `,
    [card.text, card.id],
  );
};

export const deleteCard = async (id: string): Promise<void> => {
  await sqliteRUN(
    `
    DELETE FROM cards
    WHERE id = ?;
  `,
    [id],
  );
};

export const getOneCard = async (id: string): Promise<Card | null> => {
  const data = await sqliteGET(
    `
    SELECT * FROM cards
    WHERE id = ?;
  `,
    [id],
  );

  if (isCard(data)) {
    return data;
  }

  return null;
};

export const getManyCards = async (): Promise<Card[]> => {
  const data = await sqliteALL(
    `
    SELECT * FROM cards;
  `,
  );

  if (!Array.isArray(data)) {
    console.error(`Unknown data format on getMany ${data}`);
    throw new Error('Unknown data format on getMany');
  }

  return data
    .map((one) => {
      if (isCard(one)) {
        return one;
      }

      return undefined;
    })
    .filter((one) => one !== undefined);
};

const isCard = (data: unknown): data is Card => {
  const card = data as Card;
  return Boolean(card && typeof card === 'object' && card.id && card.text);
};
