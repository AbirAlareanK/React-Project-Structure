import practicesData from '../../bestpractices.json';
import Practice from '../../Components/BestPractices/Practice';
const BestPractices = () => {
    
    return (
        <>  
            <h2 style={{fontSize:"24px", padding:"25px"}}>React Best Practices</h2>
            {practicesData.map(prac => (
                <Practice key = {prac.text} title={prac.title} paragraph={prac.paragraph} />
            ))}
        </>
    );
}


export default BestPractices;