import type {FC} from 'react';
import {
    Box,
} from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import Messages from './Messages';
import NewMessageForm from './NewMessageForm';
import Title from './Title';

const App: FC = () => (
    <Box sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'grey.100'
    }}>
       <Header>
          <Title/>
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