import type {FC, ReactNode} from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    IconButton
} from '@mui/material';
import {Info} from '@mui/icons-material';

type Props = {
    children?: ReactNode,
};

const Header: FC<Props> = ({children}) => (
    <header>
        <AppBar position={"relative"}>
            <Toolbar>
                <Box sx={{
                    flex: 1,
                }}>
                    {children}
                </Box>
                <IconButton>
                    <Info/>
                </IconButton>
            </Toolbar>
        </AppBar>
    </header>
);

export default Header;