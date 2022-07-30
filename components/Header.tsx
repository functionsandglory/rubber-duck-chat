import type {FC, ReactNode} from 'react';
import {
    AppBar,
    Toolbar,
    Grid
} from '@mui/material';
import AboutModal from './AboutModal';

type Props = {
    children?: ReactNode,
};

const Header: FC<Props> = ({children}) => (
    <AppBar
        position={"relative"}
    >
        <Toolbar>
            <Grid
                container
                alignItems={'center'}
            >
                <Grid
                    item
                    xs
                >
                    {children}
                </Grid>
                <Grid
                    item
                    xs={'auto'}
                >
                    <AboutModal/>
                </Grid>
            </Grid>
        </Toolbar>
    </AppBar>
);

export default Header;