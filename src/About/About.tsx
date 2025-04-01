import { FC } from "react"
import { Button, Divider, Stack } from "@mui/material";

export const About: FC = () => {
    return (
        <div className="center">
            <Stack spacing={6} className="center">
                <h1 className="headline-two gray">About Me</h1>
                <p className="titleline white" style={{maxWidth: '80%'}}>Experienced Fullstack Software Engineer implementing customer solutions. I excel in collaborative, agile development, and leading projects. My passion lies in delivering tailored, cutting-edge technology solutions to elevate the user experience.</p>
                <h2 className="headerline white">Where I have worked</h2>
                <Stack
                    direction="row"
                    spacing={{xs: 1, sm: 6, m: 8}}
                    sx={{
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                    divider={<Divider orientation="vertical" flexItem />}
                >
                    <Button size={'small'} >
                        <img src='https://cconklin-website.s3.us-east-1.amazonaws.com/assets/adobe.svg' className="logos-large" />
                    </Button>
                    <Button size={'small'} >
                        <img src='https://newrelic.com/themes/custom/erno/assets/mediakit/new_relic_logo_vertical_white.svg' className="logos-large" />
                    </Button>
                </Stack>
            </Stack>
        </div>

    )

}