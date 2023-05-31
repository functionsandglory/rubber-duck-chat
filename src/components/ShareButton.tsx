import {useState} from 'react';
import {Button, Snackbar} from '@mui/material';
import useMessages from "../hooks/use-messages";

const ShareButton = () => {
    const {copyMessagesToClipboard} = useMessages();
    const [open, setOpen] = useState(false);
    const handleShare = async () => {
        await copyMessagesToClipboard();
        setOpen(true);
    };

    return <>
        <Button variant="text" color="secondary" onClick={handleShare} disableRipple>Share</Button>
        <Snackbar
            open={open}
            onClose={() => setOpen(false)}
            autoHideDuration={2000}
            message="Chat copied to clipboard"
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        />
    </>

}

export default ShareButton;