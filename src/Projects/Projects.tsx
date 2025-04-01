import { FC } from "react"
import ProjectsPaper from "./ProjectsPaper";
import { Divider, Stack } from "@mui/material";

const Projects: FC = () => {
    return (
        <div className="center">
            <Stack spacing={6} className="center">
                <h1 className="headline-two gray">What I am working on</h1>
                <Stack
                    direction="row"
                    spacing={{xs: 1, sm: 2, m: 8}}
                    sx={{
                        justifyContent: "space-around",
                        alignItems: "center",
                    }}
                    divider={<Divider orientation="vertical" flexItem />}
                >
                    <ProjectsPaper title='Git Remember' />
                    <ProjectsPaper title='Cade GPT' />
                    <ProjectsPaper title='Grocery List' />
                </Stack>
            </Stack>
        </div>
    )
}

export default Projects