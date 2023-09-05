import { Container } from './styles';

import { Header } from '../../Components/Header';
import { Button } from '../../Components/Button';
import { Section } from '../../Components/Section';

export function Details(){
    return(
        <Container>
            <Header />

            <Section title="Dados Pessoais">
                <ul>
                    <li><a href="#">Meus Dados</a></li>
                    <li><Button><a href="#"></a><Button/></li>
                </ul>
            </Section>
           
        </Container>            
    )
}