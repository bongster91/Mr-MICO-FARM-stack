import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material';

const theme = useTheme();


export const CustomButton = styled(Button)`
    outline: '1px solid black', 
    color: 'black',
    backgroundColor: ${theme.palette.primary.main},
    outlineColor: ${theme.palette.primary.main}
`

