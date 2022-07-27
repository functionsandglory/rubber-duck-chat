import {FC} from 'react';
import {Typography, Badge} from '@mui/material';

const Title:FC = () => {
    return (
        <Badge color={'success'} variant={'dot'}>
            <Typography variant={'h6'} component={'h1'} fontWeight={'bold'}>
                Dr. Quack
            </Typography>
        </Badge>
    );
};

export default Title