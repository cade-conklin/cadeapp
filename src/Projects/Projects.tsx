import Grid from "@mui/material/Grid2";
import { FC } from "react"
import ProjectsPaper from "./ProjectsPaper";
import { Stack } from "@mui/material";

const Projects: FC = () => {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid size={3} />
                <Grid size={6}>
                    <div className="center">
                        <Stack spacing={6} className="center">
                            <h1 className="headline-two gray">What I am working on</h1>
                            <Grid container spacing={3} className="inset center" >
                                <Grid size={1.5} />
                                <Grid size={3}>
                                    <ProjectsPaper title='Git Remember' />
                                </Grid>
                                <Grid size={3}>
                                    <ProjectsPaper title='Cade GPT' />
                                </Grid>
                                <Grid size={3}>
                                    <ProjectsPaper title='Grocery List' />
                                </Grid>
                                <Grid size={1.5} />
                            </Grid>
                        </Stack>
                    </div>
                </Grid>
                <Grid size={2} />
            </Grid>
        </div>
    )
}

export default Projects