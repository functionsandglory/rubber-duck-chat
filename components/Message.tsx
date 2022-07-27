import {FC} from 'react';
import {Box, Typography} from '@mui/material';
import {useTheme} from '@mui/system';
import moment from 'moment';
import {Message} from '../store/messages-slice';

export enum Direction {
    LEFT = 'left',
    RIGHT = 'right'
}

type Props = {
    message: Message,
    color: string,
    direction: Direction
};

const Message: FC<Props> = ({message, color, direction= Direction.RIGHT}) => {
    const theme = useTheme();
    const borderRadiusSize = theme.spacing(2);

    const borderRadius = direction === Direction.LEFT
        ?  `${borderRadiusSize}  ${borderRadiusSize} ${borderRadiusSize} 0`
        :  `${borderRadiusSize} ${borderRadiusSize} 0 ${borderRadiusSize}`

    return (
        <Box sx={{
            display: 'inline-block',
            p: 1,
            maxWidth: '300px',
            backgroundColor: color,
            borderRadius: borderRadius,
        }}>
            <Typography>
                {message.message}
            </Typography>
            <Typography variant={'body2'} textAlign={'right'} color={'text.secondary'}>
                {moment(message.sentOn).format('M/D/YY h:mma')}
            </Typography>
        </Box>
    )
};

export default Message;