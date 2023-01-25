import { Grid, Link } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import styles from "../styles/components/Header.module.css";
import logo from "../images/logo-geoia.png";
import Image from "next/image";
import { InsertEmoticon } from '@mui/icons-material';

const FooterInstitucional = () => {
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
                    <a
                        href="https://www.ufms.br/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Universidade Federal de Mato Grosso do Sul{' '}
                        <span className={styles.logo}>
                            <Image src="/ufms.svg" alt="UFMS Logo" width={100} height={100} />
                        </span>
                    </a>
                </Grid>
            </Grid>

        </Box>
    );
  }
  
  export default FooterInstitucional;