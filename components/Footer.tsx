import {FC, ReactNode} from 'react';
import {Box, Toolbar} from '@mui/material';

type Props = {
    children?: ReactNode,
};

const Footer: FC<Props> = ({children}) => (
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }}>
        <Box sx={{
            width: {
                xs: '100%',
                sm: '600px',
                md: '800px',
            }
        }}>
            {children}
        </Box>
    </Box>
);

export default Footer;