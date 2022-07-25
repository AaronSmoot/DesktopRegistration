import React from "react";
import { Paper, Avatar, TextField, Checkbox, Button, Typography, Link} from "@mui/material";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from '@mui/material/Stack';

export const paperStyle={
  padding: "20px",
  height: "111vh",
  width: 333,
  margin: "20px auto"
 }
 export const btnstyle={
  borderradius: '25',
 }
 
function RoleR() {
  return (
    <><img src="https://www.gannett-cdn.com/presto/2020/12/22/PWIL/5e319983-90c3-4bf2-aef7-055592da7a36-122220-drive_thru_food_bank-wb177403.jpg?width=1320&height=880&fit=crop&format=pjpg&auto=webp" alt="Outside HopeCenter" width="400" height="500" align="left"></img><img src="https://th.bing.com/th/id/A3PJEnD64gQ8i9g480x360?&rs=1&pid=ImgDet" alt="Inside HopeCenter" width="400" height="500" align="right"></img><Grid>
      <Paper elevation={10} style={paperStyle} align="center">
        <h1>Sign Up</h1>
        <TextField label="First Name" placeholder="Enter First Name" fullWidth required></TextField>
        <p></p>
        <TextField label="Last Name" placeholder="Enter Last Name" fullWidth required></TextField>
        <p></p>
        <TextField label="Phonenumber" placeholder="Enter Phonenumber" type="Phonenumber" fullWidth required></TextField>
        <p></p>
        <TextField label="Email" placeholder="Enter Email Address" fullWidth required></TextField>
        <p></p>
        <TextField label="Password" placeholder="Enter Password" type="Password" fullWidth required></TextField>
        <p></p>
        <TextField label="Confirm Password" placeholder="Confirm Password" type="Confirm Password" fullWidth required></TextField>
        <p></p>
        <Stack spacing={3} direction="row">
          <Button style={btnstyle} variant="contained">Donor</Button>
          <Button style={btnstyle} variant="contained">NCC Staff</Button>
          <Button style={btnstyle} variant="contained">Case Manager</Button>
        </Stack>
        <p></p>
        <Button style={btnstyle} Variant="contained" color="success">Register</Button>
      </Paper>
    </Grid></>
  );
  }
export default RoleR;