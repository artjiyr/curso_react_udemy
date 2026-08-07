import '../assets/TemplateExpressions.css'; //adição de css

const TemplateExpressions = () => {

    const name = "Arthur";
    const data = {
        age: 18,
        job: "Programador"
    }
    return(
        <div className="template-expressions">
            <h1>Olá, {name}!</h1>
            <p>Idade: {data.age}</p>
            <p>Sua profissão: {data.job}</p>
        </div>
    )
}

export default TemplateExpressions;