import { useState } from "react";
import { accordion } from "../../components/Accordion";
import { BigContainer, TextContainer } from "../../components/Containers/styles";
import Links from "../../components/Links";
import arrowLat from "../../images/latarrow.png"
import arrowdown from "../../images/arrow.png"
import { About, Content, Title } from "./styles";


const Pensamentos = () => {
    const [itemAtivo, setItemAtivo] = useState<number | null>(null)

    return (
        <>
            <BigContainer>
                <TextContainer>
                    <Links />
                    {accordion.map((item, index) => (
                        <Content key={index}>
                            {itemAtivo === index 
                            ? 
                                <>
                                    <Title>
                                        <button className="active" onClick={() => setItemAtivo(null)}><img src={arrowdown} alt={item.title}/></button>
                                        <h2>{item.title}</h2>
                                    </Title>
                                    <About>
                                        <p>{item.resume}</p>
                                        <a href={item.link} target="blank">Ler sobre</a>
                                    </About>
                                </>
                            :
                                <Title>
                                    <button onClick={() => setItemAtivo(index)}><img src={arrowLat} alt={item.title}/></button>
                                    <h2>{item.title}</h2>
                                </Title>
                            }
                        </Content>  
                    ))}  
                    <Content>
                        <Title>
                            <h2>Mais em breve...</h2>
                        </Title>
                    </Content>       
                </TextContainer> 
            </BigContainer>
        </>
    )
}

export default Pensamentos;

