import { Container } from "../Section/styles";
import { Button } from "../Button";

export function Links() {
    return(
        <Container>
            
            <ul>
                <li><Button><a href="#">Meus Riscos Ocupacionais</a></Button></li>
                <li><Button><a href="#">Meus Exames Periódicos</a></Button></li>
                <li><Button><a href="#">Minha Ordem de Serviço</a></Button></li>
            </ul>
        </Container>
    )
}