import { Stack, IconButton } from "@mui/material"
import Grid from "@mui/material/Grid2";
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { FC } from "react"
interface ProjectsPaperProps {
    title: string
}

const ProjectsPaper: FC<ProjectsPaperProps> = ({ title }) => {
    return (
            <Stack spacing={6} className="center">
                <h2 className="headerline white">{title}</h2>
                <p className="titleline white">
                    Lorem ipsum dolor sit amet
                </p>
                <Grid container spacing={9}>
                    <Grid size={3} />
                    <Grid size={6}>
                        <Grid container>
                            <Grid size={1.5} />
                            <Grid size={3}>
                                <IconButton>
                                    <GitHubIcon />
                                </IconButton>
                            </Grid>
                            <Grid size={3} />
                            <Grid size={3}>
                                <IconButton>
                                    <ArrowOutwardIcon />
                                </IconButton>
                            </Grid>
                            <Grid size={1.5} />

                        </Grid>
                    </Grid>
                    <Grid size={3} />
                </Grid>
            </Stack>
    )
}

export default ProjectsPaper