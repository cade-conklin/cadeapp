import { FC, useState } from "react"
import { Button, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";

interface ChipData {
    key: number;
    label: string;
    src: string;
}

export const Skills: FC = () => {
    const [icon, setIcon] = useState<number | null>(null);
    const chipData: ChipData[] = [
        { key: 15, label: 'Golang', src: 'https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_White.svg' },
        { key: 1, label: 'Javascript', src: 'src/assets/javascript-logo-svgrepo-com.svg' },
        { key: 2, label: 'Typescript', src: 'src/assets/ts-logo-256.svg' },
        { key: 3, label: 'C++', src: 'src/assets/c.svg' },
        { key: 4, label: 'Python', src: 'src/assets/python-5.svg' },
        { key: 5, label: 'Ruby', src: 'src/assets/ruby.svg' },
        { key: 6, label: 'Java', src: 'src/assets/java-4.svg' },
        { key: 7, label: 'Scala', src: 'src/assets/scala-4.svg' },
        { key: 8, label: 'New Relic', src: 'https://newrelic.com/themes/custom/erno/assets/mediakit/new_relic_logo_vertical_white.svg' },
        { key: 9, label: 'Splunk', src: 'src/assets/splunk.svg' },
        { key: 10, label: 'Docker', src: 'src/assets/docker-4.svg' },
        { key: 11, label: 'MySQL', src: 'src/assets/mysql-logo-pure.svg' },
        { key: 12, label: 'PostgresQL', src: 'src/assets/postgresql.svg' },
        { key: 13, label: 'Node.js', src: 'src/assets/nodejs-1.svg' },
        { key: 14, label: 'GraphQL', src: 'src/assets/graphql-logo-2.svg' },
    ];
    return (
        <div >
            <Grid container spacing={3}>
                <Grid size={3} />
                <Grid size={6}>
                        <Stack spacing={6} className="center">
                            <h2 className="headline-two white">My Skills</h2>
                            <Grid container spacing={3}>
                                <Grid size={2} />
                                <Grid size={8}>
                                    <Grid container spacing={{ xs: 6, md: 6 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                        {chipData.map((data) => {
                                            return (
                                                <Grid key={data.key} className={'skills-large'} size={{ xs: 3, sm: 3, md: 3 }} display="flex" justifyContent="center" alignItems="center" onMouseEnter={() => setIcon(data.key)} onMouseLeave={() => setIcon(null)}>
                                                    <Button size={'small'} >  
                                                        <img className={icon && data.key == icon ? 'skills-large' : 'skills-small'} src={data.src}/>
                                                    </Button>
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                                </Grid>
                                <Grid size={2} />
                            </Grid>
                        </Stack>
                </Grid>
                <Grid size={3} />
            </Grid>
        </div>

    )

}