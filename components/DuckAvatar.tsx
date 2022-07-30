import {FC} from 'react';
import {Avatar} from '@mui/material';
import rubberDuck from '../public/therapist-rubber-duck.png'

type Props = {
    size?: number,
}

const DuckAvatar: FC<Props> = ({size}) => {
    return <Avatar
        src={rubberDuck.src}
        alt={'Rubber Duck Therapist'}
        sx={{
            height: size,
            width: size,
        }}
    />
};

export default DuckAvatar;