import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { MiscCardsProps, miscCardsItems } from './types';

function MiscCards() {
    return (
        <Box>
            {
                miscCardsItems.map((card, index) => {
                    return (
                        <Card variant='outlined' key={index} style={{height: '400px'}}>
                            <CardContent>
                                <Typography variant='h4' component={'div'}>{card.title}</Typography>
                                <Typography variant='body1' component={'p'}>{card.sentence}</Typography>
                                <Typography variant='body1' component={'p'}>{card.paragraph}</Typography>
                                <br />
                                <Button style={{outline: '1px solid black'}}>Continue</Button>
                            </CardContent>
                        </Card>
                            
                    );
                })
            }
        </Box>
    );
}

export default MiscCards;