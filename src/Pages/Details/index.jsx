import { Container } from './styles';

import { Header } from '../../Components/Header';
import { Section } from '../../Components/Section';
import { Links } from '../../Components/Links';

export function Details(){
    return(
        <Container>
            <Header />

            <Section title="Dados Pessoais">
                <Links/>    
            </Section>
            
           
        </Container>            
    )
}