import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

import { miscCardsItems } from './types';
import { CustomButton } from '../../Styles/Components';
import '../styles.css';

function MiscCards() {
    const theme = useTheme();

    return (
        <Box className='sidebar-container'>
            {
                miscCardsItems.map((card, index) => {
                    return (
                        <Card variant='outlined' key={index}className='misc-card'>
                            <CardContent>
                                <Typography variant='h5' component={'div'} >{card.title}</Typography>
                                <Typography variant='body1' component={'p'}>{card.sentence}</Typography>
                                <Typography variant='body1' component={'p'}>{card.paragraph}</Typography>
                                <br />
                                <Button 
                                    style={{
                                        outline: '1px solid black', 
                                        color: 'black',
                                        backgroundColor: theme.palette.primary.main,
                                        outlineColor: theme.palette.primary.main
                                    }}
                                >
                                    Continue
                                </Button>
                            </CardContent>
                        </Card>
                            
                    );
                })
            }
        </Box>
    );
}

export default MiscCards;