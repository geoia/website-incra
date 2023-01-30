import { Button, Grid, Link, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import styles from "../styles/components/Header.module.css";
import logo from "../images/logo-geoia.png";
import Image from "next/image";
import { InsertEmoticon } from '@mui/icons-material';

export default function HeaderInstitucional() {
    return(
        <Box
        sx={{
            backgroundColor: 'white',
            height: 80,
            display: "flex",
            flexDirections: "row",
            padding: "0 2em",
            
        }}>
            <Grid container alignItems="center">
                <Grid item>
                    <Image src={logo} alt="logo"
                        width={180}
                        height={55}>
                    </Image>
                </Grid>
            </Grid>
            <Grid container alignItems="center" justifyContent="end" spacing={7}>
            </Grid>
        </Box>
    );
  }