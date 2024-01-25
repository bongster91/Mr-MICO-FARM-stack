import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

import { miscCardsItems } from './types';
import { CustomButton } from '../../Styles/Components';
import useDarkTheme from '../../DarkModeTheme';
import '../styles.css';

function MiscCards() {
    const { isDarkMode } = useDarkTheme();

    return (
        <Box className={isDarkMode ? 'dark-sidebar-container' : 'sidebar-container'}>
            {
                miscCardsItems.map((card, index) => {
                    return (
                        <Card variant='outlined' key={index}>
                            <CardContent className={isDarkMode ? 'dark-misc-card' : 'misc-card'}>
                                <Typography variant='h5' component={'div'} >{card.title}</Typography>
                                <Typography variant='body1' component={'p'}>{card.sentence}</Typography>
                                <Typography variant='body1' component={'p'}>{card.paragraph}</Typography>
                                <br />
                                <Button className={isDarkMode ? 'dark-sidebar-button' : 'sidebar-button'}>
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