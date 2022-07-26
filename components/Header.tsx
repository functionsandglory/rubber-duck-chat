import type {FC, ReactNode} from 'react';
import {AppBar, Toolbar} from '@mui/material';

type Props = {
    children?: ReactNode,
};

const Header: FC<Props> = ({children}) => (
    <header>
        <AppBar position={"relative"}>
            <Toolbar>
                {children}
            </Toolbar>
        </AppBar>
    </header>
);

export default Header;