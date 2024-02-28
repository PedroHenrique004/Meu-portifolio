import { Button, Container, Li, List} from "./styles"
import { useState } from "react"

import house from "../../images/home.png"
import github from "../../images/github.png"
import linkedin from "../../images/linkedin.png"
import whatsapp from "../../images/whatsapp.png"
import arrow from "../../images/arrow.png"
import uparrow from "../../images/uparrow.png"
import React from "react"

     
const Links = () => {
    const [estaAberto, setEstaAberto] = useState(false)

    return (
        <Container>
            {estaAberto === false ?
                <Button onClick={() => setEstaAberto(true)}><img src={arrow} alt="Seta para abrir a aba minhas redes"/></Button> 
                : <List>
                    <li><a href="/"><img src={house} alt="Home" /></a></li>
                    <li><a href="https://github.com/PedroHenrique004" target="blank"><img src={github} alt="GitHub" /></a></li>
                    <li><a href="https://www.linkedin.com/in/pedrosantos004/" target="blank"><img src={linkedin} alt="Linkedin" /></a></li>
                    <li><a href="https://wa.me/5561985458497" target="blank"><img src={whatsapp} alt="Whatsapp" /></a></li>
                    <Li onClick={() => setEstaAberto(false)}><img src={uparrow} alt="Seta para fechar a aba minhas redes"/></Li>
                </List> 
            }
        </Container>
    )
}

export default Links
          
