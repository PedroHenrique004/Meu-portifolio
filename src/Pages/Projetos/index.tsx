import { useState } from "react"
import { BigContainer, TextContainer } from "../../components/Containers/styles"
import Links from "../../components/Links"
import { Button, LinksContainer, ProjectContainer, ProjectText } from "./styles"
import { BackProjects, ExtraProjects, FrontProjects } from "../../components/Accordion"
import { Li } from "../SobreMim/styles"
import uparrow from "../../images/uparrow.png"

type Props = {
    ativo? : boolean
}

const Projetos = () => {
    const [selecionado, setSelecionado] = useState(1)
    const [ativo, setAtivo] = useState(true)

    const ClickDoBotao = (numero: number) => {
        setSelecionado(numero)
        setAtivo(true)
    }

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
                    <p>* Sou aluno da EBAC no curso desenvolvedor full-stack Java, por isso, tenho projetos tanto no Front-end quanto no Back-end, basta clicar nos nomes e você verá os projetos daquela área</p>
                    <Button ativo={ativo && selecionado === 1} onClick={() => ClickDoBotao(1)}><h2>Front-end</h2></Button>
                    <Button ativo={ativo && selecionado === 2} onClick={() => ClickDoBotao(2)}><h2>Back-end</h2></Button> 
                    <Button ativo={ativo && selecionado === 3} onClick={() => ClickDoBotao(3)}><h2>Experiências extras</h2></Button>  

                    {selecionado === 2 
                    ?
                        BackProjects.map((projeto) => (
                            <ProjectContainer key={projeto.title}>
                                <a href={projeto.link} target="blank"><img src={projeto.imagem} alt={projeto.title} /></a>
                                <ProjectText>
                                    <h2>{projeto.title}</h2>
                                    <p>{projeto.resume}</p>
                                    <a href={projeto.link} target="blank">Ver Projeto</a>
                                </ProjectText>
                            </ProjectContainer>
                        ))
                    : selecionado === 3
                    ?
                        ExtraProjects.map((projeto) => (
                            <>
                                <ProjectContainer key={projeto.title}>
                                    <a href={projeto.link} target="blank"><img src={projeto.imagem} alt={projeto.title} /></a>
                                    <ProjectText>
                                        <h2>{projeto.title}</h2>
                                        <p>{projeto.resume}</p>
                                    </ProjectText>
                                </ProjectContainer>
                                <LinksContainer>
                                    <a href="https://www.figma.com/file/C1ixxq8o55q2p9JlJRRapT/Prototipação---TESTE?type=design&node-id=0-1&mode=design&t=Vwj0hjZvoC" target="blank">Telas do projeto</a>
                                    <a href={projeto.link} target="blank">Testar projeto</a>
                                    <a href="https://drive.google.com/file/d/1Wpb9qLxpL7mq1ZYMba0r-Q9G1v4BDjGt/view?usp=sharing" target="blank">Drive da nossa apresentação</a>
                                    <a href="https://www.linkedin.com/feed/update/urn:li:activity:7169152315659042817/" target="blank">Leia mais</a>
                                </LinksContainer>
                            </>
                        ))
                    :
                        FrontProjects.map((projeto) => (
                            <ProjectContainer key={projeto.title}>
                                <a href={projeto.link} target="blank"><img src={projeto.imagem} alt={projeto.title} /></a>
                                <ProjectText>
                                    <h2>{projeto.title}</h2>
                                    <p>{projeto.resume}</p>
                                    <a href={projeto.link} target="blank">Ver Projeto</a>
                                </ProjectText>
                            </ProjectContainer>
                        ))
                        
                    }

                    <Li onClick={rolarParaTopo}>
                        <img src={uparrow} alt="Voltar ao topo"/>
                    </Li>    
                </TextContainer>
            </BigContainer>
        </>
    )
}


export default Projetos
