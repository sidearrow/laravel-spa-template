import React from 'react';
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core';

export const Header: React.FC = () => {
  return (
    <>
      <AppBar>
        <Toolbar variant="dense">
          <Typography>管理画面サンプル</Typography>
          <Button color="inherit">ログイン</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
