import { Container } from './styles';

import { Header } from '../../Components/Header';
import { Button } from '../../Components/Button';


export function Details(){
    return(
        <Container>
            <Header />

            <h1>Dados Pessoais</h1>
            <Button title="Meus Riscos Ocupacionais" />
            <Button title="Meus Exames Periódicos" />
            <Button title="Minha Ordem de Serviço" />
        </Container>            
    )
}