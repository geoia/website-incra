import React from 'react';
import Head from 'next/head';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Box,
} from '@mui/material';
import FilterBar from '../components/ui/FilterBar';
import Menu from '../components/MainMenu';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const dataLine = [
  { name: 'Jan', uv: 400 },
  { name: 'Fev', uv: 300 },
  { name: 'Mar', uv: 200 },
  { name: 'Abr', uv: 278 },
  { name: 'Mai', uv: 189 },
  { name: 'Jun', uv: 239 },
  { name: 'Jul', uv: 349 },
  { name: 'Ago', uv: 200 },
  { name: 'Set', uv: 300 },
  { name: 'Out', uv: 400 },
  { name: 'Nov', uv: 200 },
  { name: 'Dez', uv: 300 },
];

const dataBar = [
  { name: 'Category 1', uv: 225 },
  { name: 'Category 2', uv: 256 },
  { name: 'Category 3', uv: 394 },
  { name: 'Category 4', uv: 43 },
  { name: 'Category 5', uv: 35 },
  { name: 'Category 6', uv: 37 },
  { name: 'Category 7', uv: 65 },
  { name: 'Category 8', uv: 101 },
];

const dataPie = [
  { name: 'Series 1', value: 60 },
  { name: 'Series 2', value: 50 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function Estatisticas() {
  return (
    <>
      <Head>
        <title>WegGis - Estatísticas</title>
        <style>
          {`
            html, body {
              height: 100%;
              margin: 0;

              background-color: #0F1C3C !important; 
            }
          `}
        </style>
      </Head>
      <Menu />
      <FilterBar />

      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: '#0F1C3C',
          padding: 2,
          marginTop: '0rem',
        }}
      >
        {/* First Row of Cards */}
        <Grid item xs={12} md={6} lg={4} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Card
            sx={{
              backgroundColor: '#509CBF',
              borderRadius: '25px',
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <CardContent sx={{ padding: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <Typography
                variant="h6"
                sx={{ color: 'white', marginBottom: 2, textAlign: 'center' }}
              >
                Gráfico de Linhas
              </Typography>
              <Box
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '15px',
                  padding: '15px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexGrow: 1,
                }}
              >
                <LineChart width={600} height={200} data={dataLine}>
                  <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={3} />
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                </LineChart>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={4} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Card
            sx={{
              backgroundColor: '#509CBF',
              borderRadius: '25px',
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <CardContent sx={{ padding: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <Typography
                variant="h6"
                sx={{ color: 'white', marginBottom: 2, textAlign: 'center' }}
              >
                Tabela de Dados
              </Typography>
              <Box
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '15px',
                  padding: '15px',
                  overflow: 'auto',
                  flexGrow: 1,
                }}
              >
                <Table
                  sx={{
                    '& .MuiTableCell-root': {
                      color: 'black',
                      borderColor: 'gray',
                    },
                  }}
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>Coluna 1</TableCell>
                      <TableCell>Coluna 2</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Dado 1</TableCell>
                      <TableCell>Dado 2</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Dado 3</TableCell>
                      <TableCell>Dado 4</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Dado 5</TableCell>
                      <TableCell>Dado 6</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={4} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Card
            sx={{
              backgroundColor: '#509CBF',
              borderRadius: '25px',
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <CardContent
              sx={{
                padding: 3,
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: 'white', marginBottom: 2, textAlign: 'center' }}
              >
                Informações
              </Typography>
              <Typography variant="body1" sx={{ color: 'white', textAlign: 'center' }}>
                Aqui você pode inserir quaisquer informações relevantes ou texto descritivo que
                deseje compartilhar.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Segunda Fileira */}
        <Grid item xs={12} md={6} lg={8} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Card
            sx={{
              backgroundColor: '#509CBF',
              borderRadius: '25px',
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              marginTop: 2,
            }}
          >
            <CardContent sx={{ padding: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <Typography
                variant="h6"
                sx={{ color: 'white', marginBottom: 2, textAlign: 'center' }}
              >
                Gráfico de Barras
              </Typography>
              <Box
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '15px',
                  padding: '15px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexGrow: 1,
                }}
              >
                <BarChart width={1000} height={200} data={dataBar}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="uv" fill="#8884d8" />
                </BarChart>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={4} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Card
            sx={{
              backgroundColor: '#509CBF',
              borderRadius: '25px',
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              marginTop: 2,
            }}
          >
            <CardContent
              sx={{
                padding: 3,
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: 'white', marginBottom: 2, textAlign: 'center' }}
              >
                Gráfico de Pizza
              </Typography>
              <Box
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '15px',
                  padding: '15px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexGrow: 1,
                }}
              >
                <PieChart width={200} height={200}>
                  <Pie
                    data={dataPie}
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {dataPie.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
