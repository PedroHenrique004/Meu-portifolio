import { useTypewriter } from "react-simple-typewriter"
import { useEffect, useState } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css';


import { Button, Text, Title, Introduction, Images, TextHover, CelContainer, Mensage, ButtonDiv } from "./styles"


import image1 from "../../images/fork.png"
import image2 from "../../images/computer.png"
import image3 from "../../images/code.png"
import Links from "../../components/Links";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    const [text] = useTypewriter({
        words: ['Desenvolvedor', 'Pesquisador', 'Solucionador', 'Explorador', 'Eterno aprendiz','Programador'],
        typeSpeed: 120,
        deleteSpeed: 120,
    });

    const [numeroBotao, setNumeroBotao] = useState(0)

    const alteraTexto = () => {
        if (numeroBotao === 1) {
            return <TextHover>Aqui contarei um pouco da minha história e como cheguei no mundo da tecnologia</TextHover>
        }
        else if (numeroBotao === 2) {
            return <TextHover>Descubra minhas habilidades e as tecnologias que domino</TextHover>
        }
        else if (numeroBotao === 3) {
            return <TextHover>Conheça os projetos que desenvolvi e os problemas que resolvi</TextHover>
        }
        else if (numeroBotao === 4) {
            return <TextHover>Leia alguns artigos que escrevi sobre programação e tecnologia</TextHover>
        }
        else if (numeroBotao === 5) {
            return <TextHover>Aqui está minha lista de certificados</TextHover>
        }
        return null;
    }

    return (
        <>
            <CelContainer>
                <Links />
                <Introduction data-aos="zoom-in">
                    <div>
                        <Title>Olá!</Title>
                        <Text>
                            Me chamo Pedro Santos, <br />
                            sou um 
                                <span> {text} </span>
                                , <br />
                            e esse é o meu portifólio.
                        </Text>
                        <Mensage>Para uma melhor experiência, recomendo utilizar um computador! Obrigado!</Mensage>
                    </div>
                        <Images data-aos="zoom-in">
                            <img src={image1} />
                            <img src={image2} />
                            <img src={image3} />
                        </Images>
                </Introduction>
                <ButtonDiv>
                    <Button data-aos="zoom-in" onMouseOver={() => setNumeroBotao(1)} onMouseLeave={() => setNumeroBotao(0)} onClick={() => navigate('/aboutMe')}>Apresentação</Button>
                    <Button data-aos="zoom-in" onMouseOver={() => setNumeroBotao(2)} onMouseLeave={() => setNumeroBotao(0)} onClick={() => navigate('/habilidades')}>Habilidades</Button>
                    <Button data-aos="zoom-in" onMouseOver={() => setNumeroBotao(3)} onMouseLeave={() => setNumeroBotao(0)} onClick={() => navigate('/projetos')}>Projetos</Button>
                    <Button data-aos="zoom-in" onMouseOver={() => setNumeroBotao(4)} onMouseLeave={() => setNumeroBotao(0)} onClick={() => navigate('/pensamentos')} >Pensamentos</Button>
                    <Button data-aos="zoom-in" onMouseOver={() => setNumeroBotao(5)} onMouseLeave={() => setNumeroBotao(0)} onClick={() => navigate('/certificados')} >Certificados</Button>
                </ButtonDiv>

                {alteraTexto()}
            </CelContainer>
        </>
    )
}


export default Home;
