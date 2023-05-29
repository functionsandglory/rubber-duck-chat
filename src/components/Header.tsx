import type {FC, ReactNode} from 'react';
import {
    AppBar,
    Toolbar,
    Grid,
} from '@mui/material';
import AboutModal from './AboutModal';
import ShareButton from "./ShareButton";

type Props = {
    children?: ReactNode,
};

const Header: FC<Props> = ({children}) => {
    return (
        <AppBar
            position={"relative"}
            elevation={1}
        >
            <Toolbar variant="dense">
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
                        <ShareButton/>
                        <AboutModal/>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
};

export default Header;