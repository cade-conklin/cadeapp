import { FC, useEffect } from "react"
import { useInView } from "react-intersection-observer";
import {  Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";

interface HomeProps {
    onSetIsHome: (isHome: boolean) => void;
}

export const Home: FC<HomeProps> = ({ onSetIsHome }) => {
    const { ref, inView } = useInView({
        threshold: 0,
    });
    useEffect(() => {
        onSetIsHome(inView)
    }, [inView])
    return (
        <Grid ref={ref} container spacing={3} >
            <Grid size={3} />
            <Grid size={6}>
                <div className="center">
                    <Stack spacing={6} className="inset center">
                        <h1 className="headline-two white">Cade Conklin</h1>
                        <h3 className="headerline gray">
                            Software Development Engineer
                        </h3>
                        <p className="titleline white">
                            Front-End |  Back-End | Full-Stack
                        </p>

                    </Stack>
                </div>
            </Grid>
            <Grid size={2} />
        </Grid>

    )

}