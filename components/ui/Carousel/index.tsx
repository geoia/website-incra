import React from 'react';
import Image from 'next/image';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Box, Typography} from '@mui/material'

import photoLourdes from '../../../images/photo-lourdes.svg';
import photoMarcus from '../../../images/photo-marcus.svg';
// import photoRafael from '../images/photo-rafael.svg';
// import photoAllan from '../images/photo-allan.svg';

export default function CrouselParticipant(props)
{
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
        }
    ]

    return (
        <Carousel animation="slide">
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Box>
            <Image src={props.item.photo} alt="" />
            <Typography variant='subtitle1' sx={{color: '#FFF'}}>{props.item.name}</Typography>
            <Typography variant='body1'sx={{color: '#FFF'}}>{props.item.course}</Typography>
        </Box>
    )
}