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
                    <p >Sou o Pedro, quando criança eu era um garoto bem timido com pessoas desconhecidas, 
                    mas com meus amigos e familía sempre fui mais descontraído, isso durou por bastante tempo,
                    até que mudei para a igreja onde estou hoje e entrei na mesma época no ensimo médio,
                    estudei no colégio Ideal de Brasília onde todo ano no mês de Julho acontece o evento chamado Sinusi, onde grupos de pessoas se reunem,
                    são sorteadas com seus respectivos países e ficam responsáveis por fazer apresentações, debater, disputar partidas de diversos esportes com os outros grupos
                    , e por causa da quarentena apenas no 3 ano do ensino médio participei, seria a última Sinusi então decidi que iria participar, fomos nas salas de colegas reunindo aqueles que a princípio
                    não queriam participar ou que tinham sido excluídos dos grupos maiores e populares, afim de ganhar fui obrigado a desenvolver habilidades de comunicação, liderança e principalemente, perder a timidez. Acabei fazendo muitos amigos que até hoje estão comigo.
                    </p>
                    <h3 >Spoiler: ganhamos e foi incrível!</h3>
                    <Imagens >
                        <Imagem src={sinusi1} alt="Dia do título" />
                        <Imagem src={sinusi2} alt="Campeões da queimada" />
                        <Imagem src={sinusi3} alt="Trabalhando para nossas apresentações" />
                    </Imagens>
                    <h2>O que eu faço?</h2>
                    <p> 
                        Atualmente sou estudante do curso de Engenharia de Software na Universidade Católica de Brasília, sou também um desenvolvedor web, busco me tornar um Engenheiro de Software
                        atraves dos meus estudos, através da EBAC- Escola Britânica de artes e tecnologias possuo conhecimentos para atuar como desenvolvedor Full-stack Java. Também estudo teclado no meu 
                        tempo livre,gosto de escrever alguns textos de pensamentos que tenho quando estouentediado, academia hoje em dia faz parte de mim e busco sempre conhecer novas pessoas, afinal, quanto mais pessoas eu conheço mais eu aprendo e entendo as diversas formas de ver o mundo e seus
                        problemas e soluções. 
                    </p>
                    <h2>Por que Programação?</h2>
                    <p >Desde pequeno sempre fui apaixonado pela lógica, matemática era meu ponto forte, podia passar a tarde fazendo exercícios de cálculo sem reclamar,
                        em 2012 meu pai comprou um computador para trabalhos e acabei conhecendo o mundo dos jogos e da tecnologia, então essas 2 paixões surgiram mas eu não tinha noção 
                        de que seriam a carreira que eu escolheria seguir, com o passar do tempo, em 2018 especificamente conheci a área da programação, logicamente fiquei apaixonado e sabia
                        que meu futuro estava ali, infelizmente eu era novo ainda para poder começar a estudar, achava que só na faculdade eu seria capaz de criar programas e sites super incríveis, 
                        a ideia de o mundo da programação ser uma área de fácil emprego e muito dinheiro era alta mesmo antes da quarentena, quando começei a estudar no final de 2022 percebi que 
                        não eram todas essas maravilhas assim tão fácil, é necessário muito esforço, dedicação e persistência para não desistir, mas hoje amo muito estudar esse mundo da programação e 
                        percebo que o esforço vale muito a pena.
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
