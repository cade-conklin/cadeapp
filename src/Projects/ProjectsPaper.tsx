import { Stack, IconButton } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { FC } from "react"
interface ProjectsPaperProps {
    title: string
}

const ProjectsPaper: FC<ProjectsPaperProps> = ({ title }) => {
    return (
        <Stack spacing={3} className="center">
            <h2 className="headerline white">{title}</h2>
            <p className="titleline white" style={{maxWidth: '60%'}}>
                Lorem ipsum dolor sit amet
            </p>
            <Stack direction={'row'}>
                <IconButton>
                    <GitHubIcon />
                </IconButton>
                <IconButton>
                    <ArrowOutwardIcon />
                </IconButton>
            </Stack>

        </Stack>
    )
}

export default ProjectsPaper