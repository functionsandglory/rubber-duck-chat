import type {FC} from 'react';
import {
    Box,
    AppBar,
    Toolbar,
} from '@mui/material';
import Header from './Header';
import Footer from './Footer'

const Chat: FC = () => (
    <Box sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    }}>
        <header>
            <AppBar position={"static"}>
                <Toolbar>
                    <Header/>
                </Toolbar>
            </AppBar>
        </header>
        <main style={{flex: 1}}>
            body
        </main>
       <footer>
           <Toolbar sx={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
           }}>
               <Box sx={{
                    width: {
                        xs: '100%',
                        sm: '600px'
                    }
               }}>
                    <Footer/>
               </Box>
           </Toolbar>
       </footer>
    </Box>
);

export default Chat;