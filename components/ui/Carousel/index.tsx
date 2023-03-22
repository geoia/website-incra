import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

import photoLourdes from '../images/photo-lourdes.svg';
import photoMarcus from '../images/photo-marcus.svg';
import photoRafael from '../images/photo-rafael.svg';
import photoAllan from '../images/photo-allan.svg';

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
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}