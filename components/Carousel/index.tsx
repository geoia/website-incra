import React from 'react';
import Image from 'next/image';
import Carousel from 'react-material-ui-carousel';
import { Typography, Grid } from '@mui/material';

import photoLourdes from '../../public/images/photo-lourdes.svg';
import photoMarcus from '../../public/images/photo-marcus.svg';
import photoRafael from '../../public/images/photo-rafael.svg';
import photoAllan from '../../public/images/photo-allan.svg';
import photoMatheus from '../../public/images/photo-matheus.svg';
import photoThiago from '../../public/images/photo-thiago.svg';

export default function CrouselParticipant(props: { tam: any }) {
  var items = [
    {
      name: 'Lourdes Oshiro Igarashi',
      course: 'Engenharia de Software',
      photo: photoLourdes,
    },
    {
      name: 'Marcus Vinícius Gajozo',
      course: 'Sistemas de Informações',
      photo: photoMarcus,
    },
    {
      name: 'Thiago Aparecido Alves Corrêa',
      course: 'Ciência da Computação',
      photo: photoThiago,
    },
    {
      name: 'Rafael Torres Nantes',
      course: 'Engenharia de Computação',
      photo: photoRafael,
    },
    {
      name: 'Allan Menchik da Cunha',
      course: 'Engenharia de Computação',
      photo: photoAllan,
    },
    {
      name: 'Matheus Nantes da Silva',
      course: 'Engenharia de software',
      photo: photoMatheus,
    },
  ];

  return (
    <Carousel indicators={false} navButtonsAlwaysVisible={true} sx={{ width: '100%' }}>
      {items.map((item, i, array) => (
        <Item key={i} ind={i} array={array} tamTela={props.tam} />
      ))}
    </Carousel>
  );
}

function Item(props: { array: string | any[]; ind: any; tamTela: any }) {
  const order: number[] = [];
  const sizeArray = props.array.length;
  let ind = props.ind;
  for (let i = 0; i < sizeArray; i++) {
    if (ind === sizeArray) {
      ind = 0;
    }
    order.push(ind++);
  }

  if (props.tamTela == 2) {
    return (
      <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid sx={{ display: 'flex', gap: 2 }}>
          <Grid>
            <Image src={props.array[order[0]].photo} alt="" width={150} height={150} />
            <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
              {props.array[order[0]].name}
            </Typography>
            <Typography variant="body1" sx={{ color: '#FFF' }}>
              {props.array[order[0]].course}
            </Typography>
          </Grid>
          <Grid>
            <Image src={props.array[order[1]].photo} alt="" width={150} height={150} />
            <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
              {props.array[order[1]].name}
            </Typography>
            <Typography variant="body1" sx={{ color: '#FFF' }}>
              {props.array[order[1]].course}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid sx={{ display: 'flex', gap: 2 }}>
        <Grid>
          <Image src={props.array[order[0]].photo} alt="" width={150} height={150} />
          <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
            {props.array[order[0]].name}
          </Typography>
          <Typography variant="body1" sx={{ color: '#FFF' }}>
            {props.array[order[0]].course}
          </Typography>
        </Grid>
        <Grid>
          <Image src={props.array[order[1]].photo} alt="" width={150} height={150} />
          <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
            {props.array[order[1]].name}
          </Typography>
          <Typography variant="body1" sx={{ color: '#FFF' }}>
            {props.array[order[1]].course}
          </Typography>
        </Grid>
        <Grid>
          <Image src={props.array[order[2]].photo} alt="" width={150} height={150} />
          <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
            {props.array[order[2]].name}
          </Typography>
          <Typography variant="body1" sx={{ color: '#FFF' }}>
            {props.array[order[2]].course}
          </Typography>
        </Grid>
        <Grid>
          <Image src={props.array[order[3]].photo} alt="" width={150} height={150} />
          <Typography variant="subtitle1" sx={{ color: '#FFF' }}>
            {props.array[order[3]].name}
          </Typography>
          <Typography variant="body1" sx={{ color: '#FFF' }}>
            {props.array[order[3]].course}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
