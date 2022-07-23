import {Box} from '@mui/material';
import {FC} from "react";
import {cyan} from "@mui/material/colors";

type Props = {
    message: string,
}

const SentMessage: FC<Props> = ({message}) => {
  return (
      <Box sx={{
          ml: 'auto',
          mb: 1,
          width: '300px',
          backgroundColor: cyan[100],
          p: 1,
          borderRadius: (theme) => theme.spacing(1)
      }}>
          {message}
      </Box>
  );
};

export default SentMessage;