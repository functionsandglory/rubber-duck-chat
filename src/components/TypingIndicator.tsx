import {FC} from "react";
import {Typography} from "@mui/material";

const TypingIndicator:FC = () => {
    return (
        <Typography
            textAlign={'left'}
            color={'text.secondary'}
        >
            Typing...
        </Typography>
    );
}

export default TypingIndicator;