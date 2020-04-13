import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  'filter-wrapper': {
    maxWidth: '1150px',
    margin: '0 auto',

    '& form': {
      margin: `${theme.spacing(5)}px 0 ${theme.spacing(2)}px`,
    },
  },
}));
