import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import guitarimage from "../../Assets/unsplash_Wt7XT1R6sjU.png"
import girlimage from "../../Assets/unsplash_K_b41GaWC5Y.png"
import CloseIcon from '@mui/icons-material/Close';

function YouCanDo() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                mt: 2,
            }}
        >
            <Typography
                variant="h5"
                component="h5"
                sx={{ fontWeight: "600", textAlign: "center" }}
            >
                See what You can do
            </Typography>
            <Typography
                sx={{ color: "grey", textAlign: "center", width: "380px", mt: 2 }}
            >
                We provide complete features and certainly no less competitive with
                other video applications
            </Typography>
            <Container sx={{ width: 1100 }}>
                <Grid container spacing={4} sx={{ mt: 2, }}>
                    <Grid item xs={12} md={6} >
                        <Box sx={{ position: 'relative' }}>
                            <Box component="img" src={girlimage} width={450} height={450} />
                            <Stack sx={{ mt: 1, ml: 1 }}>
                                <Typography variant='h6' component='h6' sx={{ fontWeight: '500' }}>
                                    Creativity with Filters</Typography>
                                <Typography sx={{ fontSize: '18px', color: "#ADAFB5", width: '250px' }}>
                                    Customize amazing filters
                                    according to your creativity</Typography>
                            </Stack>
                            <Paper sx={{ width: 300, height: 350, borderRadius: '16px', opacity: '0.5', position: 'absolute', top: 0, left: -50 }}>
                                <Typography variant='h6' component='h6' sx={{ fontWeight: '600', color: "black" }}>
                                    Blur
                                </Typography>
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Box component="img" src={guitarimage} width={450} height={450} />
                            <Stack sx={{ mt: 1, ml: 1 }}>
                                <Typography variant='h6' component='h6' sx={{ fontWeight: '500' }}>
                                    Speech to text Included</Typography>
                                <Typography sx={{ fontSize: '18px', color: "#ADAFB5", width: '300px' }}>
                                    Turn dialogue into captions the
                                    with automatic transcriptions.</Typography>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default YouCanDo