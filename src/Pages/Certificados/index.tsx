import { BigContainer, TextContainer } from "../../components/Containers/styles"
import { Li } from "../SobreMim/styles"

import uparrow from "../../images/uparrow.png"
import { CertificadosList } from '../../components/Accordion' 
import { CertContainer } from "./styles"
import Links from "../../components/Links"

const Certificados = () => {

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
                    {CertificadosList.map((certificado, index) => (
                            <CertContainer key={index}>
                                <img src={certificado.imagem} alt={certificado.title}/>
                                <div>
                                    <h2>{certificado.title}</h2>
                                    <p>{certificado.resume}</p>
                                </div>
                            </CertContainer>                   
                    ))}

                    <Li onClick={rolarParaTopo}>
                        <img src={uparrow} alt="Voltar ao topo"/>
                    </Li>    
                </TextContainer>
            </BigContainer>
        </>
    )
}

export default Certificados
