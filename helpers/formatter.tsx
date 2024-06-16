import numeral from 'numeral';

export function number(value: number) {
  if (value < 0.01) return numeral(value).format('0,0.[000]');
  if (value < 0.001) return numeral(value).format('0,0.[0000]');
  return numeral(value).format('0,0.[00]');
}
export function area(value: number) {
  const km2 = value / 1e6;
  return km2 > 0.01 ? number(km2) + ` km²` : number(value) + ` m²`;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { number, area };
