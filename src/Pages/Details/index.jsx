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
                    <li><Button title="Meus Dados"/></li>
                </ul>
            </Section>
           
        </Container>            
    )
}