import { Container } from './styles';

import { Header } from '../../Components/Header';
import { Section } from '../../Components/Section';
//import { Links } from '../../Components/Links';
import { Section } from '../../Components/Section';

export function Details(){
    return(
        <Container>
            <Header />

            <Section title="Dados Pessoais">
                <ul>
                    <li>item1</li>
                    <li>item2</li>
                </ul>
            </Section>
            
            
           
        </Container>            
    )
}