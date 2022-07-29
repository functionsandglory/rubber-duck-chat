import React, {useState, FC} from 'react'
import {
    IconButton,
    Dialog,
    DialogContent,
    DialogTitle,
    Typography,
    Grid,
    Link,
} from '@mui/material';
import {Info} from '@mui/icons-material';
import DuckAvatar from './DuckAvatar';

const AboutModal: FC = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <React.Fragment>
            <IconButton onClick={() => setOpen(true)}>
                <Info/>
            </IconButton>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                fullWidth
            >
                <DialogTitle>About</DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item sm={'auto'} xs={12}>
                            <Grid item container justifyContent={'center'}>
                                <DuckAvatar size={100}/>
                            </Grid>
                        </Grid>
                        <Grid item sm xs={12}>
                            <Typography variant={'body1'} gutterBottom>
                                Hello, I am Dr. Bill Quack! I graduated from Duckmouth University with a Masters in
                                Counseling in 2004.
                            </Typography>
                            <Typography variant={'body1'} gutterBottom>
                                I enjoy long swims around the pond and I love to go bread tasting.
                            </Typography>
                            <Typography variant={'body1'} gutterBottom>
                                I typically split my time between Florida for the winter and Maine for the summer.
                            </Typography>
                            <Typography variant={'body1'} gutterBottom>
                                I am excited for the opportunity to listen to you!
                            </Typography>
                        </Grid>
                        <Grid item
                              container
                              justifyContent={'center'}
                              alignContent={'center'}
                              direction={'column'}
                              textAlign={'center'}
                        >
                            <Grid item>
                                <Link
                                    color={'secondary'}
                                    underline={'none'}
                                    target={'_blank'}
                                    href={'https://en.wikipedia.org/wiki/Rubber_duck_debugging'}
                                >
                                    What is rubber duck debugging?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link
                                    color={'secondary'}
                                    underline={'none'}
                                    target={'_blank'}
                                    href={'https://functionsandglory.dev'}
                                >
                                    Built by Functions and Glory
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}

export default AboutModal;