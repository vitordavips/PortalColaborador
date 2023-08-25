import { Container } from './styles';

import { Button } from '../../Components/Button';

export function Details(){
    return(
        <Container>
            <h1>Olá, Mundo!</h1>
            <Button title="Meu Botão" loading/>
        </Container>            
    )
}