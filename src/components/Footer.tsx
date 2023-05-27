import {FC, ReactNode} from 'react';
import {Grid} from '@mui/material';

type Props = {
    children?: ReactNode,
};

const Footer: FC<Props> = ({children}) => (
    <Grid
        component={'footer'}
        item
        sx={{
            width: {
                xs: '100%',
                sm: '500px',
            }
        }}
    >
        {children}
    </Grid>
);

export default Footer;