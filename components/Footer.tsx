import {FC, ReactNode} from 'react';
import {Box, Toolbar} from "@mui/material";
import NewMessageForm from "./NewMessageForm";

type Props = {
    children?: ReactNode,
};

const Footer: FC<Props> = ({children}) => (
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
                {children}
            </Box>
        </Toolbar>
    </footer>
);

export default Footer;