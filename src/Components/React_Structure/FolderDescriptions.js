import FolderStructure from '../../UI/FolderStucture';
import FolderData from '../../folders.json';
import Card from '../../UI/Card';
import Description from './Description';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const FolderDescriptions = () => {
    return (
        <Row style={{backgroundColor: "aliceblue"}}>
            <h2>React Folder Structure</h2>
            {FolderData.map((folder , i) => (
                <div key={i} className="structure-content">
                    <Col md={12} lg={5}>
                        <Card>
                            <FolderStructure>
                                {folder.title}<br/>{folder.content.map((f,j) => 
                                    typeof(f)==="string" ?
                                    (<p key={j}>├── {f}<br/></p> ):
                                    (<div key={j}>
                                        <p>├── {f.subtitle}<br/></p>
                                        {Object.keys(f.subcontent).map((key, x)=>(
                                            <p style={{paddingLeft:"27px"}} key={x}>├── {f.subcontent[key]}<br/></p>
                                        ))}
                                    </div>)
                                )}
                            </FolderStructure>
                        </Card>
                    </Col>
                    <Col md={12} lg={6}>
                        <Description title={folder.head} paragraph={folder.paragraph} />
                    </Col>
                </div>
            ))}
        </Row>
    );
}


export default FolderDescriptions;