import MathIcon from '../../Images/icons/math.png';
import ReactIcon from '../../Images/icons/react.png'; 
import EarthIcon from '../../Images/icons/earth.png';
import ChemistryIcon from '../../Images/icons/chemistry.png';
import SigmaIcon from '../../Images/icons/sigma.png';
import EggIcon from '../../Images/icons/egg.png';
import logo from '../../Images/logo-koma.png'
import HistoryIcon from '../../Images/icons/history.png';

import '../../Styles/PlanetCircle.css';
import '../../Styles/stars.css';
import '../../Styles/flags.css';


export default function KomaSphere() {
    

    return(
        <div align='center' className='planet'>

                      <div className="profileImage">

                        <img className="introImage" src={logo} alt="profile"/>
                        <div className="ringCircle innerCircle">
                          
                        <a href='/history'>
                        <img className="planetCircle" src={HistoryIcon} alt=""/>
                        </a>
                        
                          <img className="planetCircle" src={MathIcon} alt="science"/>
                         
                        </div>
                        <div className="ringCircle outerCircle">
                          <a href='/react'>
                          <img className="planetCircle" src={ReactIcon} alt="" />
                          </a>

                          <img className="planetCircle" src={ReactIcon} alt=""/>  

                          <a href='/secret'>
                          <img className="planetCircle" src={EggIcon} alt="egg"/>
                          </a>

                          <img className="planetCircle" src={EarthIcon} alt=""/>
                          
                          <img className="planetCircle" src={SigmaIcon} alt=""/>
                         
                          <img className="planetCircle" src={ChemistryIcon} alt="science"/>
                        </div>
                      </div>

                      </div>
    )
}