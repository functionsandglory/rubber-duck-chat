import type {FC} from 'react';
import {
    Box, Typography,
} from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import Messages from './Messages';
import NewMessageForm from './NewMessageForm';

const App: FC = () => (
    <Box sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'grey.100'
    }}>
       <Header>
           <Typography variant='h6' color='inherit' component='div'>
               Dr. Quack
           </Typography>
       </Header>
       <Content>
           <Messages/>
       </Content>
        <Footer>
            <NewMessageForm/>
        </Footer>
    </Box>
);

export default App;