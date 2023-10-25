import { Container } from './styles';

import { Header } from '../../Components/Header';
import { Section } from '../../Components/Section';
//import { Button } from "../../Components/Button";

export function Details(){
    return(
        <Container>
            <Header />

            <Section title="Dados Pessoais">
                <ul>
                    <li><button><a href="#">Meus Riscos Ocupacionais</a></button></li>
                    <li><button><a href="#">Meus Exames Periódicos</a></button></li>
                    <li><button><a href="#">Minha Ordem de Serviço</a></button></li>
                </ul>    
            </Section> 

            <Section title="ISO 45001">
                <ul>
                    <li><button><a href="#">O que é a ISO 45001?</a></button></li>
                    <li><button><a href="#">Politica do SGI</a></button></li>
                    <li><button><a href="#">Partes Interessantes</a></button></li>
                    <li><button><a href="#">Matriz de Responsabilidades</a></button></li>
                    <li><button><a href="#">Objetivos e Metas</a></button></li>
                    <li><button><a href="#">Manual do Prestador de Serviço</a></button></li>
                </ul>
            </Section>

            <Section title="Canal desvio de SSO">
                <ul>
                    <li><button><a href="#">Notificar Desvio SSO ou Denúncia</a></button></li>
                    <li><button><a href="#">Acompanhamento</a></button></li>
                </ul>
            </Section>

            <Section title="Projetos em Andamento">
                <ul>
                    <li><button><a href="#">NR-12</a></button></li>
                    <li><button><a href="#">NR-17</a></button></li>
                </ul>
            </Section>

            <Section title="Certificações">
                <div id='certificacoes'>
                    <ul>
                        <li><img src="../../../Imagens/Logo_Digiboard.png" alt="" /></li>
                        <li><img src="../../../Imagens/Logo_Digiboard.png" alt="" /></li>
                        <li><img src="../../../Imagens/Logo_Digiboard.png" alt="" /></li>
                    </ul>
                </div>
            </Section>

            <Section title="Comunicados">
                <ul>
                    <li><button><a href="#">Comunicados do Mês</a></button></li>
                </ul>
                <p>
                    Ajude-nos a localizar vazamentos de água nas depências da empresa.<br/> 
                    Clicando no Botão Notificar Desvio de SSO ou Denúncia e <br/>informe o local para 
                    correção do problema.
                </p>
            </Section>

            <Section>
                
            </Section>
        </Container>            
    )
}