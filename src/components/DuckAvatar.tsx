import {FC} from 'react';
import {Avatar} from '@mui/material';
import Image from 'next/image';
import rubberDuck from '../../public/rubber-duck-therapist.png'

type Props = {
    size?: number,
}

const DuckAvatar: FC<Props> = ({size}) => {
    return <Image
        src={rubberDuck.src}
        alt={'Rubber Duck Therapist'}
        width={size}
        height={size}
    />
};

export default DuckAvatar;