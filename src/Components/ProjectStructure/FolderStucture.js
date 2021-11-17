import Classes from './FolderStructure.module.css';

const FolderStructure = (props) => {
    return (
        <div className={Classes.pre}>
            <span className={Classes.fsc}>
                {props.children}
            </span>
        </div>
    );
}

export default FolderStructure;