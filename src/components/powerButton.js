import { useState } from "react";
import PowerOn from '../assets/images/powerOn.png';
import PowerOff from '../assets/images/powerOff.png';

const PowerButton = ()=>
{
    const [on, setOn] = useState(false);

    const togglePower = ()=>
    {
        setOn(!on);
    }

    return(
        <section className="powerButton">
            <img src={on ? PowerOn : PowerOff} width={70} alt='ligado/desligado' />
            <button onClick={()=>togglePower()}>
                {on ? 'Desligar' : 'Ligar'}
            </button>
        </section>
    );
}

export default PowerButton;