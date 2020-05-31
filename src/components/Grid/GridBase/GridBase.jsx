import React from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from './GridBase.style';

const GridBase = ({ FirstChildren, SecondChildren, ThirdChildren }) => {
    const { root } = useStyles();
    return (
        <Grid container className={root} spacing={1}>

<Grid>
                <FirstChildren/>
            </Grid>
            <Grid>
                <SecondChildren/>
            </Grid>
            <Grid>
                <ThirdChildren/>
            </Grid>

        </Grid>
    );
}

export default GridBase;