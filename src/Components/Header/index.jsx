import { Container, Profile } from "./styles";
import LogoDigiboard from '../../../Imagens/LogoDigiboard.png';

export function Header(){
    return(
        <Container>
            <Profile>
                <img 
                    src={ LogoDigiboard } 
                    alt="logo digiboard" 
                />
            </Profile>
        </Container>
    );
}