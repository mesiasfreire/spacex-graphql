import { Link } from 'react-router-dom'

import { VImage } from '../../pages/Home/Home.style';
import { VMenu, VMenuItems,VMenuContainer } from './SideBar.style';
import SpaceXLogo   from '../../img/spacex.png';


const SideBar = () => {
    return (
    <VMenu>
        <Link to="/">
            <VImage src={SpaceXLogo} alt="Logo da empresa SpaceX" width="200" />
        </Link>
        <VMenuItems>
        <Link to="/lancamentos"><li> Lançamentos</li></Link>
            <li>Foguetes</li>
            <li>Novo Lancamento</li>
        </VMenuItems>
        <VMenuContainer>
            Novos lançamentos:<span>3</span>
        </VMenuContainer>
    </VMenu>
    );
}
export default SideBar;
