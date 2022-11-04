import knex from '../../config/knex.config';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  req.query
  const resultado = await knex
    .raw('SELECT ST_AsGeoJSON(ST_Transform(wkb_geometry, 4326), 6) FROM inferencia_out_2021 WHERE ST_Contains(ST_MakeEnvelope(-58,-22,-57,-21, 4326), ST_Transform(wkb_geometry, 4326))')
    // // knex.raw permite colocar o mesmo usado no SQL
    // .select('*')
    // // devemos definir qual tabela
    // .from('funciona_pf')
    // // podemos colocar a condição usando a construção a sintaxe do 'knex' ou 'raw'
    // //.where(knex.raw(''));

  res.status(200).json({ resultado });
}
