import { Container } from './styles';

import { Header } from '../../Components/Header';
import { Section } from '../../Components/Section';
//import { Button } from "../../Components/Button";

export function Details(){
    return(
        <Container>
            <Header />

            <div id='caixaPai'>

                <div className='caixaFilho'>
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

                        <Section title="Certificações">
                            <div id='certificacoes'>
                                <ul>
                                    <li><img src="../../../Imagens/iso_14001.jpg" alt="iso 14001" /></li>
                                    <li><img src="../../../Imagens/iso_45001.jpg" alt="iso 45001" /></li>
                                    <li><img src="../../../Imagens/iso_9001.jpg" alt="iso 9001" /></li>
                                </ul>
                            </div>
                        </Section>
                </div>

                <div className='caixaFilho'>
                        <Section title="Projetos em Andamento">
                            <ul>
                                <li><button><a href="#">NR-12</a></button></li>
                                <li><button><a href="#">NR-17</a></button></li>
                            </ul>
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
                </div>    

                <div id='caixaFilho3'>
                    <Section title="Saúde e Segurança Ocupacional do Trabalho">
                            <ul>
                                <li><button><a href="#">Atendimento as NR`s</a></button></li>
                                <li><button><a href="#">Consultores Técnicos</a></button></li>
                                <li><button><a href="#">Programas de Vacinação</a></button></li>
                                <li><button><a href="#">Equipe de Saúde e Segurança</a></button></li>
                                <li><button><a href="#">Simulação de Emergências</a></button></li>
                                <li><button><a href="#">Programa HDD</a></button></li>
                                <li><button><a href="#">Campanhas de Saúde</a></button></li>
                                <li><button><a href="#">Ginástica Elaboral</a></button></li>                                <li><button><a href="#">Controle Potabilidade de Água</a></button></li>
                                <li><button><a href="#">SIPAT</a></button></li>
                                <li><button><a href="#">Treinamentos</a></button></li>
                            </ul>       
                    </Section>                 
                </div>
                
                <div id='caixaFilho4'>
                    <img src="../../../Imagens/voce_sabia.png" alt="Você sabia?" />
                </div>

            </div>
        </Container>            
    )
}