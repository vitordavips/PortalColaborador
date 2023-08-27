import { Container, Profile, TextBlock } from "./styles";
import Logo_Digiboard from '../../../Imagens/Logo_Digiboard_.png';

export function Header(){
    return(
        <Container>
            <Profile>
                <img 
                    src={ Logo_Digiboard } 
                    alt="logo digiboard" 
                />

                
            </Profile>
            
            <TextBlock>
                <h1>Portal do Colaborador</h1>
            </TextBlock>
            

        </Container>
    );
}