import { Container } from './styles';

import { Button } from '../../Components/Button';


export function Details(){
    return(
        <Container>
            <h1>Dados Pessoais</h1>
            <Button title="Meus Riscos Ocupacionais" />
            <Button title="Meus Exames Periódicos" />
            <Button title="Minha Ordem de Serviço" />
        </Container>            
    )
}