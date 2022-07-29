import type {FC, ReactNode} from 'react';
import {
    AppBar,
    Toolbar,
    Box,
} from '@mui/material';
import AboutModal from './AboutModal';

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
                <AboutModal />
            </Toolbar>
        </AppBar>
    </header>
);

export default Header;