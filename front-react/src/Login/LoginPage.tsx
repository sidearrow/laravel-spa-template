import React, { useState } from 'react';
import { TextField, Grid, Button } from '@material-ui/core'
import { config } from './../config'

export const LoginPage: React.FC = () => {
  const [input, setInput] = useState({ userId: '', password: '' });

  const handleClickLoginBtn = () => {
    fetch(`${config.apiBaseUrl}/login`, { method: 'POST', body: JSON.stringify(input), headers: { 'Content-Type': 'application/json' } })
  };

  return (
    <div>
      <Grid container spacing={2} justify="center">
        <Grid item xs={4}>
          <TextField label="ユーザーID" variant="outlined" onChange={(e) => { setInput({ ...input, ...{ userId: e.target.value } }) }} fullWidth />
        </Grid>
      </Grid>
      <Grid container spacing={2} justify="center">
        <Grid item xs={4}>
          <TextField label="パスワード" variant="outlined" type="password" onChange={(e) => { setInput({ ...input, ...{ password: e.target.value } }) }} fullWidth />
        </Grid>
      </Grid>
      <Grid container spacing={2} justify="center">
        <Grid item xs={2}>
          <Button variant="contained" color="primary" onClick={handleClickLoginBtn} fullWidth>ログイン</Button>
        </Grid>
      </Grid>
    </div>
  );
};
