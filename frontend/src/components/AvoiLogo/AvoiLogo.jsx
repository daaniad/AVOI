import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import logo from "../../assets/Images/avoi.png"

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
  }));

export default function Logo() {
    return (
        <Box sx={{ width: '100%', marginRight: 2}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <img src={logo} width="96px"/>
        </Grid>
      </Grid>
    </Box>
    )
}