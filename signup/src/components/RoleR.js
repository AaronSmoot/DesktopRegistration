import * as React from "react";
import { Paper, Avatar, TextField, Checkbox, Button, Typography, Link} from "@mui/material";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const paperStyle={
  padding: "20px",
  height: "111vh",
  width: 333,
  margin: "20px auto"
 }
 export const paperStylee={
  padding: "20px",
  height: "111vh",
  width: 500,
  margin: "20px auto"
 }
 export const btnstyle={
  borderradius: '25',
 }
 
export function RoleR() {
  const [role, setRole] = React.useState('');

  const handleChange=(event)  => {
    setRole(event.target.value);
  
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
        <Box>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Roles</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={role}
          label="Role"
          onChange={handleChange}
        >
          <MenuItem value={10}>Donor</MenuItem>
          <MenuItem value={20}>NCC Staff</MenuItem>
          <MenuItem value={30}>Case Manager</MenuItem>
        </Select>
        </FormControl>
        </Box>
        <p></p>
        <Button style={btnstyle} Variant="contained" color="success">Register</Button>
      </Paper>
      <p></p>
      <Paper elevation={10} style={paperStylee} align="center">
        <h1>Verification</h1>
        <h2>Put the code that has been sent to your email and phone down below</h2>
      </Paper>
    </Grid></>
  );
  }
}
export default RoleR;