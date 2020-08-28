import { createMuiTheme } from '@material-ui/core';

export const muiTheme = createMuiTheme({
  props: {
    MuiFormControl: {
      margin: 'dense',
    },
    MuiTextField: {
      variant: 'outlined',
      fullWidth: true,
    },
  },
});
