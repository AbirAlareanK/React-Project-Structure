import Classes from './Description.module.css'

const Description = (props) => {
    const {title , paragraph} = props;
    return (
        <section className={Classes.des}>
            <h4 className="header">{title}</h4>
            <p className="paragraph" >{paragraph}</p>
        </section>
    );
}


export default Description;