import type {FC} from 'react';
import {
    Box,
    AppBar,
    Toolbar,
} from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import Messages from './Messages';

const Chat: FC = () => (
    <Box sx={{
        height: '100%',
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
        <Box component={'main'} sx={{
            flex: 1,
            p: 2,
            minHeight: '0',
            overflowY: 'auto',
        }}>
            <Box sx={{
                margin: '0 auto',
                width: {
                    xs: '100%',
                    sm: '600px',
                    md: '800px',
                }
            }}>
                <Messages/>
            </Box>
        </Box>
       <footer>
           <Toolbar sx={{
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
                    <Footer/>
               </Box>
           </Toolbar>
       </footer>
    </Box>
);

export default Chat;