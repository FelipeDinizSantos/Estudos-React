import { useState, useEffect } from "react";
import PowerOn from '../assets/images/powerOn.png';
import PowerOff from '../assets/images/powerOff.png';

const PowerButton = ()=>
{
    const [on, setOn] = useState(localStorage.getItem('isOn') === null || localStorage.getItem('isOn') === undefined ? false : Boolean(localStorage.getItem('isOn')));

    useEffect(()=>
    {
        console.log('Salvo no localStorage! Valor armazenado: ' + localStorage.getItem('isOn'));
    }, [on]); // Caso passe o array vazio, o efeito só sera chamado quando o cmponente for montado

    const togglePower = ()=>
    {
        if(on) localStorage.setItem('isOn', 'false');
        else localStorage.setItem('isOn', 'true');

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