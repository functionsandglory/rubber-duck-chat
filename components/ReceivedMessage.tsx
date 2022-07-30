import {FC} from 'react';
import {Grid} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import MessageComponent, {Direction} from './Message';
import DuckAvatar from './DuckAvatar';
import {Message} from '../store/messages-slice'

type Props = {
    message: Message,
};

const ReceivedMessage: FC<Props> = ({message}) => {
    const theme = useTheme();

    return (
        <Grid
            container
            spacing={1}
            alignItems={'flex-end'}
            sx={{
                mb: 2,
            }}
        >
            <Grid
                item
                xs={'auto'}
            >
                <DuckAvatar size={50}/>
            </Grid>
            <Grid
                item
                xs
                sx={{
                    mr: 3
                }}
            >
                <MessageComponent
                    message={message}
                    color={theme.palette.primary.main}
                    direction={Direction.LEFT}
                />
            </Grid>
        </Grid>
    )
};

export default ReceivedMessage;