import knex from '../../config/knex.config';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const resultado = await knex
    // knex.raw permite colocar o mesmo usado no SQL
    .select(knex.raw(''))
    // devemos definir qual tabela
    .from('queimadas_novembro_2022')
    // podemos colocar a condição usando a construção a sintaxe do 'knex' ou 'raw'
    .where(knex.raw(''));

  res.status(200).json({ TODO: true });
}
