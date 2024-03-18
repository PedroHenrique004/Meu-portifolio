import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react"

import Links from "../../components/Links"
import { Imagem, Imagens, Li } from "./styles"
import sinusi1 from "../../images/sinusi.jpg"
import sinusi2 from "../../images/sinusi2.jpg"
import sinusi3 from "../../images/sinusi3.jpg"
import uparrow from "../../images/uparrow.png"
import { BigContainer, TextContainer } from '../../components/Containers/styles';

const AboutMe = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    const rolarParaTopo = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    
    return (
        <>
            <BigContainer>
                <TextContainer > 
                    <Links />
                    <h2 >Quem sou eu?</h2>
                    <p >Meu nome é Pedro. Quando era criança, eu era bastante tímido com pessoas desconhecidas, mas sempre fui mais descontraído com meus amigos e família. Isso durou por muito tempo, até que mudei para a igreja onde estou hoje e entrei no ensino médio na mesma época. Estudei no Colégio Ideal de Brasília, onde todo ano, no mês de julho, acontece o evento chamado Sinusi. Nesse evento, grupos de pessoas são sorteados com seus respectivos países e ficam responsáveis por fazer apresentações, debater e disputar partidas de diversos esportes com os outros grupos. Devido à quarentena, só participei no terceiro ano do ensino médio. Sabendo que seria a última Sinusi, decidi que iria participar. Fomos às salas de aula reunindo aqueles que, a princípio, não queriam participar ou que tinham sido excluídos dos grupos maiores e populares. Para ganhar, fui obrigado a desenvolver habilidades de comunicação, liderança e, principalmente, perder a timidez. Acabei fazendo muitos amigos que estão comigo até hoje.
                    </p>
                    <h3 >Spoiler: ganhamos e foi incrível!</h3>
                    <Imagens >
                        <Imagem src={sinusi1} alt="Dia do título" />
                        <Imagem src={sinusi2} alt="Campeões da queimada" />
                        <Imagem src={sinusi3} alt="Trabalhando para nossas apresentações" />
                    </Imagens>
                    <h2>O que eu faço?</h2>
                    <p> 
                    Como um apaixonado pelo desenvolvimento de software, estou atualmente cursando Engenharia de Software pela Universidade Católica de Brasília e simultaneamente me especializando através do curso de Desenvolvedor Full-stack Java pela EBAC. Essa combinação de estudos acadêmicos e práticos está expandindo minha compreensão tanto do back-end quanto do front-end. Minha paixão pela lógica e resolução de problemas me guiou para a programação ainda no ensino médio. Desde então, dedico-me a aprofundar meus conhecimentos e habilidades técnicas, visando sempre oferecer soluções inovadoras e eficazes.
                    </p>
                    <h2>Por que Programação?</h2>
                    <p >Desde pequeno, sempre fui apaixonado pela lógica. A matemática era o meu ponto forte, e eu podia passar a tarde fazendo exercícios de cálculo sem reclamar. Em 2012, meu pai comprou um computador para trabalhos e acabei conhecendo o mundo dos jogos e da tecnologia. Então, essas duas paixões surgiram, mas eu não tinha noção de que seriam a carreira que eu escolheria seguir. Com o passar do tempo, especificamente em 2018, conheci a área da programação. Logicamente, fiquei apaixonado e sabia que meu futuro estava ali. Infelizmente, eu era muito jovem para poder começar a estudar, achava que só na faculdade eu seria capaz de criar programas e sites incríveis. A ideia de que o mundo da programação era uma área de fácil emprego e muito dinheiro era alta, mesmo antes da quarentena. Quando comecei a estudar no final de 2022, percebi que não eram todas essas maravilhas assim tão fácil. É necessário muito esforço, dedicação e persistência para não desistir, mas hoje amo muito estudar esse mundo da programação e percebo que o esforço vale muito a pena.
                    </p>
                    <Li onClick={rolarParaTopo}>
                        <img src={uparrow} alt="Voltar ao topo"/>
                    </Li>
                </TextContainer>
            </BigContainer>
           
            
        </>
    )
}




export default AboutMe;
