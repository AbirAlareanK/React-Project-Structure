import SplitContent from '../Components/UI/SplitContent';
import BestPractices from './BestPractices/BestPractices';
import FolderDescriptions from './ProjectStructure/FolderDescriptions';

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