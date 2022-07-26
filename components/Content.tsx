import {useRef, useEffect, FC, ReactNode} from 'react';
import useMessages from '../hooks/use-messages';
import {Box} from '@mui/material';

type Props = {
    children?: ReactNode
}

const Content: FC<Props> = ({children}) => {
    const containerRef = useRef<HTMLElement>();
    const {messages} = useMessages();

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <Box
            ref={containerRef}
            component={'main'}
            sx={{
            flex: 1,
            p: 2,
            minHeight: '0',
            overflowY: 'auto',
        }}>
            <Box sx={{
                margin: '0 auto',
                width: {
                    xs: '100%',
                    sm: '500px',
                }
            }}>
                {children}
            </Box>
        </Box>
    )
};

export default Content;