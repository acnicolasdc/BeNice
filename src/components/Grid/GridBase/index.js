import GridBase from './GridBase';
import GridEmpy from '../GridEmpy';

GridBase.Item = GridEmpy;

GridBase.defaultProps = {
    FirstChildren: GridEmpy,
    SecondChildren: GridEmpy,
    ThirdChildren: GridEmpy
};


export default GridBase;