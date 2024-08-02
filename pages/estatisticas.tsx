import React from 'react';
import Head from 'next/head';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import Menu from '../components/MainMenu';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

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
              overflow: hidden;
            }
          `}
        </style>
      </Head>
      <Menu />
      <Grid container sx={{ height: '100vh', minHeight: '100vh', backgroundColor: '#0F1C3C', padding: 2, marginTop: '0rem' }} spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6">Lorem ipsum</Typography>
              <LineChart width={400} height={200} data={dataLine}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6">Informações</Typography>
              <BarChart width={400} height={200} data={dataBar}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="uv" fill="#8884d8" />
              </BarChart>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6">Tabela</Typography>
              <table>
                <thead>
                  <tr>
                    <th>Table Header Cell</th>
                    <th>Table Header Cell</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Table Cell</td>
                    <td>Table Cell</td>
                  </tr>
                  <tr>
                    <td>Table Cell</td>
                    <td>Table Cell</td>
                  </tr>
                  <tr>
                    <td>Table Cell</td>
                    <td>Table Cell</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ height: '85%' }}>
            <CardContent>
              <Typography variant="h6">Lorem ipsum</Typography>
              <PieChart width={200} height={200}>
                <Pie data={dataPie} cx="50%" cy="50%" outerRadius={60} fill="#8884d8" dataKey="value">
                  {dataPie.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
