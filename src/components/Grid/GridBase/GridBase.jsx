import React from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from './GridBase.style';

const GridBase = ({ FirstChildren, SecondChildren, ThirdChildren}) => {
    const { grid, root } = useStyles();
    return (
        <Grid container className={root} spacing={1}>
            <Grid className={grid} item xs={4}>
                <FirstChildren/>
            </Grid>
            <Grid className={grid} item xs={4}>
                <SecondChildren/>
            </Grid>
            <Grid className={grid} item xs={4}>
                <ThirdChildren/>
            </Grid>
        </Grid>
    );
}

export default GridBase;