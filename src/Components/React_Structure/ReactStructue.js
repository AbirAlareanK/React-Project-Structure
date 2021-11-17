import SplitContent from '../../UI/SplitContent';
import BestPractices from './BestPractices';
import FolderDescriptions from './FolderDescriptions';

const ReactStructure = () => {

    return (
        <SplitContent
            left={
                <FolderDescriptions />
            }
            right={
                <BestPractices />
            }
        />

    );
}

export default ReactStructure;