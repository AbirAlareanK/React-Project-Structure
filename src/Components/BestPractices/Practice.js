// Stateless component => display data passed through props

import Card from '../UI/Card';
import { DiReact } from 'react-icons/di';
import Classes from './Practice.module.css';

const Practice = (props) => {
    const {title , paragraph} = props;
    return (
        <Card>
            <h4 className={Classes.header}>
                <DiReact className={Classes.icon} color="cadetblue" size="40px"/> 
                {title}</h4>
            <p className={Classes.paragraph} >{paragraph}</p>
        </Card>
    );
}


export default Practice;