import { BigContainer, TextContainer } from "../../components/Containers/styles"
import Links from "../../components/Links"
import { Li } from "../SobreMim/styles"
import { HabilityCont, List, ListIcons, Skill, SubTitle } from "./styles"

import bootstrap from "../../images/bootstrap.png"
import css from "../../images/css-3.png"
import github from "../../images/github.png"
import html from "../../images/html-5.png"
import sass from "../../images/icons8-atrevimento-64.png"
import git from "../../images/icons8-git-64.png"
import gulp from "../../images/icons8-gulp-an-open-source-javascript-toolkit-by-fractal-innovations-64.png"
import react from "../../images/biblioteca.png"
import ts from "../../images/icons8-typescript-64.png"
import javascript from "../../images/js.png"
import uparrow from "../../images/uparrow.png"

const Habilidades = () => {
    const rolarParaTopo = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            <BigContainer>
                <TextContainer>
                    <Links />
                    <section>
                    <h1 style={{marginTop: "24px"}}>Minhas principais Hard Skills</h1>
                        <ListIcons>
                            <HabilityCont><img src={html} alt="html" title="HTML" /><span>HTML</span></HabilityCont>
                            <HabilityCont><img src={css} alt="css" title="CSS" /><span>CSS</span></HabilityCont>
                            <HabilityCont><img src={bootstrap} alt="bootstrap" title="Bootstrap" /><span>Bootstarp</span></HabilityCont>
                            <HabilityCont><img src={javascript} alt="javascript" title="JavaScript" /><span>Javascript</span></HabilityCont>
                            <HabilityCont><img src={git} alt="git" title="Git" /><span>Git</span></HabilityCont>
                            <HabilityCont><img src={github} alt="github" title="GitHub" /><span>GitHub</span></HabilityCont>
                            <HabilityCont><img src={sass} alt="sass" title="Sass" /><span>Sass</span></HabilityCont>
                            <HabilityCont><img src={gulp} alt="gulp" title="Gulp" /><span>Gulp</span></HabilityCont>
                            <HabilityCont><img src={ts} alt="ts" title="TypeScript" /><span>Typescript</span></HabilityCont>
                            <HabilityCont><img src={react} alt="react" title="React" /><span>React</span></HabilityCont>
                        </ListIcons>
                        <SubTitle>Tenho conhecimento também em tecnologias como Vue.js, Less, Grunt, JQuery, Java, C e mais</SubTitle>
                    </section>    
                    <section>
                        <h1>Minhas Soft Skills</h1>
                        <List>
                            <tr>
                                <Skill><span>Trabalho em equipe</span></Skill>
                                <td>Trabalhar em equipe é uma das minhas grandes paixões. Acredito que quando unimos nossas habilidades e conhecimentos, somos capazes de alcançar resultados incríveis. A colaboração permite que aprendamos uns com os outros, superemos desafios e alcancemos objetivos comuns. Quanto mais trabalho em equipe, mais percebo o quão valioso é cada membro e como cada um contribui para o sucesso do grupo. É gratificante ver como a cooperação pode transformar ideias individuais em realizações coletivas</td>
                            </tr>
                        </List>
                        <List>
                            <tr>
                                <Skill><span>Comunicação</span></Skill>
                                <td>Gosto muito de conversar e interagir com as pessoas, quanto mais tenho contatos com novas pessoas mais sinto que melhoro a eficiencia e a clareza da minha comunicação, facilitando o trabalho em equipe, entendimentos das funções atribuidas a mim e a resolução de problemas em grupo </td>
                            </tr>
                        </List>
                        <List>
                            <tr>
                                <Skill><span>Colaboração</span></Skill>
                                <td>Aprendi durante essa jornada que um trabalho flui melhor em equipe e as equipes fluem melhor quando existe empatia nelas, foco sempre em ser um bom ouvinte, em respeitar as opinões dos colegas e tentar aprender com elas</td>
                            </tr>
                        </List>
                        <List>
                            <tr>
                                <Skill><span>Resolução de problemas</span></Skill>
                                <td>Como ressaltei, sempre gostei de matématica por sua lógica nos problemas e carrego esse amor comigo até hoje, umas das maiores felicidades que exite é quando um problema complicado a primeira vista é resolvido com uma lógica bem elaborada por trás </td>
                            </tr>
                        </List>
                        <List>
                            <tr>
                                <Skill><span>Flexibilidade</span></Skill>
                                <td>O mundo da tecnologia é repleto de mundanças, a qualquer momento pode surgir uma nova tendência no mercado e por isso a minha habilidade de conseguir me adaptar e aprender a utilizar novas ferramentas é um aspecto muito importante e que valorizo muito </td>
                            </tr>
                        </List>
                        <List>
                            <tr>
                                <Skill><span>Autogerenciamento</span></Skill>
                                <td>Organizar o tempo é essencial, por isso aprendi a estabelecer metas claras, valorizando a urgencia delas e sempre buscando cumprir meus prazos</td>
                            </tr>
                        </List>
                    </section>
                    <Li onClick={rolarParaTopo}>
                        <img src={uparrow} alt="Voltar ao topo"/>
                    </Li>
                </TextContainer>
            </BigContainer>
        </>
    )   
}

export default Habilidades