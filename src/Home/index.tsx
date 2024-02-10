import { useTypewriter } from "react-simple-typewriter"
import React, { useEffect, useState } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css';


import { Button, Text, Title, Introduction, Images, TextHover, CelContainer, Mensage } from "./styles"


import image1 from "../images/fork.png"
import image2 from "../images/computer.png"
import image3 from "../images/code.png"

const Home = () => {
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
        return null;
    }

    return (
        <>
            <CelContainer>
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
                        <Mensage>Para uma melhor experiencia, utilize um computador! Obrigado!</Mensage>
                    </div>
                        <Images data-aos="zoom-in">
                            <img src={image1} />
                            <img src={image2} />
                            <img src={image3} />
                        </Images>
                </Introduction>
                <Button data-aos="zoom-in" onMouseOver={() => setNumeroBotao(1)} onMouseLeave={() => setNumeroBotao(0)}>Sobre mim</Button>
                <Button data-aos="zoom-in" onMouseOver={() => setNumeroBotao(2)} onMouseLeave={() => setNumeroBotao(0)}>Habilidades</Button>
                <Button data-aos="zoom-in" onMouseOver={() => setNumeroBotao(3)} onMouseLeave={() => setNumeroBotao(0)}>Projetos</Button>
                <Button data-aos="zoom-in" onMouseOver={() => setNumeroBotao(4)} onMouseLeave={() => setNumeroBotao(0)}>Pensamentos</Button>

                {alteraTexto()}
            </CelContainer>
        </>
    )
}

// data-aos="zoom-in-right"


export default Home;
