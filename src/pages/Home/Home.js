import { VTitle } from '../../css/htmlElements.style';
import RocketFamily from '../../img/spacex-rocket-family.png';
import SpaceXLogo   from '../../img/spacex.svg';

import {VImage, VContainer} from './Home.style';

const Home = () => {
    return ( 
        <VContainer>
            <VTitle>
                Serviço de busca de lançamentos dos foguetes da empresa 
                <VImage src={SpaceXLogo} alt="Logo da empresa SpaceX" width="230"/>
            </VTitle>
            <VImage src={RocketFamily} alt="Foguete" height="90vh"/>
        </VContainer>
     );
}
 
export default Home;