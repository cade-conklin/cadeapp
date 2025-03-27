import { FC } from "react"
import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const About: FC = () => {
    return (
        <div >
            <Grid container spacing={3}>
                <Grid size={3} />
                <Grid size={6}>
                    <div className="center">
                        <Stack spacing={6} className="center">
                            <h1 className="headline-two gray">About Me</h1>
                            <br></br>
                            <p className="titleline white">Experienced Fullstack Software Engineer implementing customer solutions. I excel in collaborative, agile development, and leading projects. My passion lies in delivering tailored, cutting-edge technology solutions to elevate the user experience.</p>
                            <br></br>
                            <h2 className="headerline white">Where I have worked</h2>
                            <Grid container spacing={3}>
                                <Grid size={2}/>
                                <Grid size={3}>
                                    <img src='src/assets/adobe.svg' style={{height: '50px', width: '50px'}}></img>
                                </Grid>
                                <Grid size={1}/>
                                <Grid size={3} style={{height: '100px', width: '100px'}}>
                                    <img src='https://newrelic.com/themes/custom/erno/assets/mediakit/new_relic_logo_vertical_white.svg'></img>
                                </Grid>
                                <Grid size={2}/>
                            </Grid>
                        </Stack>
                    </div>
                </Grid>
                <Grid size={2} />
            </Grid>

        </div>

    )

}