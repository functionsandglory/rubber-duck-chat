import type {FC} from 'react';
import Image from 'next/image';
import therapistRubberDuck from '../public/therapist-rubber-duck.png';

const Home: FC = () => {
    return (
        <Image src={therapistRubberDuck} alt={"Therapist Rubber Duck"} height={200} width={200}/>
    );
}

export default Home;
