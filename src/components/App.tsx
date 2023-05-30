import {FC} from 'react';
import {
    Grid,
    Snackbar,
    Alert,
} from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import Messages from './Messages';
import NewMessageForm from './NewMessageForm';
import Title from './Title';
import {useEffect, useRef} from "react";
import useMessages from "../hooks/use-messages";
import {useAppDispatch} from "../store/store";

const App: FC = () => {
    const containerRef = useRef<HTMLElement>();
    const {messages, isError, toggleIsError} = useMessages();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <>
            <Snackbar open={isError}
                      autoHideDuration={4000}
                      onClose={() => dispatch(toggleIsError(false))}
                      anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
            >
                <Alert severity="error">Something went wrong</Alert>
            </Snackbar>
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
        </>
    )
};

export default App;