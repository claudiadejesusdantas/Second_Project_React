import Subtitle from './Subtitle.jsx'
import Paragraph from './Paragraph.jsx'
import Photo from './Photo'

function Bio() {
    return (
        <header>
            <div className="subtitle">
                <Subtitle className="subtitle" text="Prazer, eu sou Claudia DJ Dantas" />
            </div>


            <Photo src="https://media-exp1.licdn.com/dms/image/C4D03AQElxiuhh_WKDA/profile-displayphoto-shrink_200_200/0/1659034585879?e=1674086400&v=beta&t=P-bqP1V46yHOpB_k0CVn6dCEIVlAoioLuLSqwNec4Jc" alt="foto Claudia" />


            <div className="paragrafo">
                <Paragraph text="Eu sou formada em RH, atualmente cursando tecnologia. Apaixonada por front-end, videogames, livros de romance e filmes de terror. Estudante do Reprograma e criadora de conteúdo do instagram @claudiadejesusdantastudy." />
            </div>
        </header>
    )
}

export default Bio