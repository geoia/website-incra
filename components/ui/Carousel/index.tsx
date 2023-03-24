import React from 'react';
import Image from 'next/image';
import Carousel from 'react-material-ui-carousel'
import { Typography, Grid } from '@mui/material'

import photoLourdes from '../../../images/photo-lourdes.svg';
import photoMarcus from '../../../images/photo-marcus.svg';
import photoRafael from '../../../images/photo-rafael.svg';
import photoAllan from '../../../images/photo-allan.svg';
import photoMatheus from '../../../images/photo-matheus.svg';

export default function CrouselParticipant() {
    var items = [
        {
            name: "Lourdes Oshiro Igarashi",
            course: 'Engenharia de Software',
            photo: photoLourdes,
        },
        {
            name: "Marcus Vinícius Gajozo",
            course: "Sistemas de Informações",
            photo: photoMarcus,
        },
        {
            name: "Rafael Torres Nantes",
            course: "Engenharia de Computação",
            photo: photoRafael,
        },
        {
            name: "Allan Menchik da Cunha",
            course: "Engenharia de Computação",
            photo: photoAllan,
        },
        {
            name: "Matheus Nantes da Silva",
            course: "Engenharia de software",
            photo: photoMatheus,
        },
    ]

    return (
        <Carousel indicators={false} navButtonsAlwaysVisible={true} duration={0} sx={{ width: 1000 }}>
            {
                items.map((item, i, array) => <Item key={i} ind={i} item={item} array={array} />)
            }
        </Carousel>
    )
}

function Item(props: { array: string | any[]; ind: any; item: {}}) {

    const order = [];
    const sizeArray = props.array.length;
    let ind = props.ind;

    for (let i = 0; i < sizeArray; i++) {
        if (ind === sizeArray) {
            ind = 0;
        }
        order.push(ind++);
    }

    return (
        <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid sx={{ display: 'flex', gap: 2, }}>
                <Grid>
                    <Image src={props.array[order[0]].photo} alt="" width={150} height={150} />
                    <Typography variant='subtitle1' sx={{ color: '#FFF' }}>{props.array[order[0]].name}</Typography>
                    <Typography variant='body1' sx={{ color: '#FFF' }}>{props.array[order[0]].course}</Typography>
                </Grid>
                <Grid>
                    <Image src={props.array[order[1]].photo} alt="" width={150} height={150} />
                    <Typography variant='subtitle1' sx={{ color: '#FFF' }}>{props.array[order[1]].name}</Typography>
                    <Typography variant='body1' sx={{ color: '#FFF' }}>{props.array[order[1]].course}</Typography>
                </Grid>
                <Grid>
                    <Image src={props.array[order[2]].photo} alt="" width={150} height={150} />
                    <Typography variant='subtitle1' sx={{ color: '#FFF' }}>{props.array[order[2]].name}</Typography>
                    <Typography variant='body1' sx={{ color: '#FFF' }}>{props.array[order[2]].course}</Typography>
                </Grid>
                <Grid>
                    <Image src={props.array[order[3]].photo} alt="" width={150} height={150} />
                    <Typography variant='subtitle1' sx={{ color: '#FFF' }}>{props.array[order[3]].name}</Typography>
                    <Typography variant='body1' sx={{ color: '#FFF' }}>{props.array[order[3]].course}</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}