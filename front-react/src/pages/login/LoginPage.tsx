import React, { useState } from 'react';
import { TextField, Grid, Button } from '@material-ui/core';
import { api } from '../../api';

export const LoginPage: React.FC = () => {
  const [input, setInput] = useState({ userId: '', password: '' });
  const [isLoginFail, setIsLoginFail] = useState(false);

  const handleClickLoginBtn = () => {
    (async () => {
      const res = await api.postLogin(input.userId, input.password);
      //setIsLoginFail(true);
    })();
  };

  return (
    <>
      <Grid container spacing={2} justify="center">
        <Grid item xs={6}>
          <TextField
            label="ユーザーID"
            onChange={(e) => {
              setInput({ ...input, ...{ userId: e.target.value } });
            }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} justify="center">
        <Grid item xs={6}>
          <TextField
            label="パスワード"
            type="password"
            onChange={(e) => {
              setInput({ ...input, ...{ password: e.target.value } });
            }}
          />
        </Grid>
      </Grid>
      {isLoginFail && <div>login fail</div>}
      <Grid container spacing={2} justify="center">
        <Grid item xs={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClickLoginBtn}
            fullWidth
          >
            ログイン
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
