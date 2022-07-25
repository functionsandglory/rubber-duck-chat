import {FC, ReactNode} from 'react';
import {Box} from "@mui/material";

type Props = {
    children?: ReactNode
}

const Content: FC<Props> = ({children}) => (
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
            {children}
        </Box>
    </Box>
);

export default Content;