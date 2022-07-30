import {FC, ReactNode} from 'react';
import {Grid} from '@mui/material';

type Props = {
    children?: ReactNode
}

const Content: FC<Props> = ({children}) => {
    return (
        <Grid
            item
            sx={{
                p: 2,
                width: {
                    xs: '100%',
                    sm: '500px',
                }
            }}
        >
            {children}
        </Grid>
    )
};

export default Content;