import {FC} from 'react';
import {
    Grid,
} from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import Messages from './Messages';
import NewMessageForm from './NewMessageForm';
import Title from './Title';
import {useEffect, useRef} from "react";
import useMessages from "../hooks/use-messages";

const App: FC = () => {
    const containerRef = useRef<HTMLElement>();
    const {messages} = useMessages();

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [messages]);

    return (

        <Grid
            container
            direction={'column'}
            sx={{
                height: '100%',
                backgroundColor: 'grey.100'
            }}
        >
            <Grid
                item
            >
                <Header>
                    <Title/>
                </Header>
            </Grid>
            <Grid
                component={'main'}
                ref={containerRef}
                item
                container
                justifyContent={'center'}
                xs
                sx={{
                    overflowY: 'auto'
                }}
            >
                <Content>
                    <Messages/>
                </Content>
            </Grid>
            <Grid
                item
                container
                justifyContent={'center'}
            >
                <Footer>
                    <NewMessageForm/>
                </Footer>
            </Grid>
        </Grid>
    )
};

export default App;