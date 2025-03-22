import { FC, useState } from "react"
import { Chip, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FaceIcon from '@mui/icons-material/Face';

interface ChipData {
    key: number;
    label: string;
}

export const Skills: FC = () => {
    const [icon, setIcon] = useState<number | null>(null);
    const chipData: ChipData[] = [
        { key: 0, label: 'Golang' },
        { key: 1, label: 'Javascript' },
        { key: 2, label: 'Typescript' },
        { key: 3, label: 'C++' },
        { key: 4, label: 'Python' },
        { key: 5, label: 'Ruby' },
        { key: 6, label: 'Java' },
        { key: 7, label: 'Scala' },
        { key: 8, label: 'New Relic' },
        { key: 9, label: 'Splunk' },
        { key: 10, label: 'Docker' },
        { key: 11, label: 'MySQL' },
        { key: 12, label: 'PostgresQL' },
        { key: 13, label: 'Node.js' },
        { key: 14, label: 'GraphQL' },
        { key: 15, label: 'Rails' },
        { key: 16, label: 'Gin' },
        { key: 17, label: 'Git' },
        { key: 18, label: 'MongoDB' },
        { key: 19, label: 'Terraform' },
    ];
    return (
        <div >
            <Grid container spacing={3}>
                <Grid size={3} />
                <Grid size={6}>
                    <div className="center">
                        <Stack spacing={6} className="center">
                            <h2 className="headline-two white">My Skills</h2>
                            <Grid container spacing={3}>
                                <Grid size={2} />
                                <Grid size={8}>
                                    <Grid container spacing={{ xs: 6, md: 6 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                                        {chipData.map((data) => {
                                            return (
                                                <Grid key={data.key} size={{ xs: 3, sm: 3, md: 3 }} display="flex" justifyContent="center" alignItems="center">
                                                    <Chip
                                                        className="descriptionline wider white"
                                                        sx={{backgroundColor: 'white'}}
                                                        icon={icon != null && data.key == icon ? <FaceIcon /> : undefined}
                                                        label={data.label}
                                                        size={data.key == icon ? 'medium' : 'small'}
                                                        onMouseEnter={() => setIcon(data.key)}
                                                        onMouseLeave={() => setIcon(null)}
                                                    />
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                                </Grid>
                                <Grid size={2} />
                            </Grid>
                        </Stack>
                    </div>
                </Grid>
                <Grid size={3} />
            </Grid>
        </div>

    )

}