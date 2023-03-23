import React from 'react';
import Image from 'next/image';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Box, Typography, Grid } from '@mui/material'

import photoLourdes from '../../../images/photo-lourdes.svg';
import photoMarcus from '../../../images/photo-marcus.svg';
import photoRafael from '../../../images/photo-rafael.svg';
import photoAllan from '../../../images/photo-allan.svg';

export default function CrouselParticipant(props) {
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
    ]

    return (
        <Carousel duration={0} sx={{width:'900px'}}>
            {
                items.map((item, i, array) => <Item key={i} item={item} data={array} />)
            }
        </Carousel>
    )
}

function Item(props) {

    return (
        <Grid item sx={{display: 'flex', gap: 10, width:'100%'}}>
            <Box>
                <Image src={props.array[0].photo} alt="" />
                <Typography variant='subtitle1' sx={{ color: '#FFF' }}>{props.array[0].name}</Typography>
                <Typography variant='body1' sx={{ color: '#FFF' }}>{props.array[0].course}</Typography>
            </Box>
            <Box>
                <Image src={props.item.photo} alt="" />
                <Typography variant='subtitle1' sx={{ color: '#FFF' }}>{props.item.name}</Typography>
                <Typography variant='body1' sx={{ color: '#FFF' }}>{props.item.course}</Typography>
            </Box>
            <Box>
                <Image src={props.item.photo} alt="" />
                <Typography variant='subtitle1' sx={{ color: '#FFF' }}>{props.item.name}</Typography>
                <Typography variant='body1' sx={{ color: '#FFF' }}>{props.item.course}</Typography>
            </Box>
            <Box>
                <Image src={props.item.photo} alt="" />
                <Typography variant='subtitle1' sx={{ color: '#FFF' }}>{props.item.name}</Typography>
                <Typography variant='body1' sx={{ color: '#FFF' }}>{props.item.course}</Typography>
            </Box>
        </Grid>
    )
}
// import React from 'react';
// import Image from 'next/image';
// import { Paper, Button, Box, Typography, Grid } from '@mui/material'
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';

// export default function CrouselParticipant() {
//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={3}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       ...
//     </Swiper>
//   );
// };