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
                    <li><Button><a href="#">Meus Riscos Ocupacionais</a></Button></li>
                    <li><Button><a href="#">Meus Exames Periódicos</a></Button></li>
                    <li><Button><a href="#">Minha Ordem de Serviço</a></Button></li>
                </ul>
            </Section>

            <Section title="Canal de Comunicação">
                <ul>
                    <li><Button><a href="#">Meus Riscos Ocupacionais</a></Button></li>
                    <li><Button><a href="#">Meus Exames Periódicos</a></Button></li>
                    <li><Button><a href="#">Minha Ordem de Serviço</a></Button></li>
                </ul>
            </Section>

            <Section title="ISO 450001">
                <ul>
                    <li><Button><a href="#">Meus Riscos Ocupacionais</a></Button></li>
                    <li><Button><a href="#">Meus Exames Periódicos</a></Button></li>
                    <li><Button><a href="#">Minha Ordem de Serviço</a></Button></li>
                </ul>
            </Section>

            <Section title="Projetos em Andamento">
                <ul>
                    <li><Button><a href="#">Meus Riscos Ocupacionais</a></Button></li>
                    <li><Button><a href="#">Meus Exames Periódicos</a></Button></li>
                    <li><Button><a href="#">Minha Ordem de Serviço</a></Button></li>
                </ul>
            </Section>

            <Section title="O que a Digiboard faz para garantir a Saúde e Segurança Ocupacional do Trabalho?">
                <ul>
                    <li><Button><a href="#">Meus Riscos Ocupacionais</a></Button></li>
                    <li><Button><a href="#">Meus Exames Periódicos</a></Button></li>
                    <li><Button><a href="#">Minha Ordem de Serviço</a></Button></li>
                </ul>
            </Section>

            <Section title="Comunicado do Mês">
                <ul>
                    <li><Button><a href="#">Meus Riscos Ocupacionais</a></Button></li>
                    <li><Button><a href="#">Meus Exames Periódicos</a></Button></li>
                    <li><Button><a href="#">Minha Ordem de Serviço</a></Button></li>    
                    
                </ul>
            </Section>

            <Section title="Certificações">
                <ul>
                    <li><Button><a href="#">Meus Riscos Ocupacionais</a></Button></li>
                    <li><Button><a href="#">Meus Exames Periódicos</a></Button></li>
                    <li><Button><a href="#">Minha Ordem de Serviço</a></Button></li>
                </ul>
            </Section>

            <Section title="">
                <img src="/Imagens/Logo_Digiboard.png" alt="" />
            </Section>
           
        </Container>            
    )
}