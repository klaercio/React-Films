import { useEffect, useState } from 'react';
import {ButtonUp} from './style';

export default function ButtonToTop() {

    const [visibleButton, setVisibleButton] = useState();

    useEffect(() => {
        if (window.scrollY > 7000) {
            setVisibleButton(true);
        } else {
            setVisibleButton(false);
        }
    }, [window.scrollY]);

    return (
        <ButtonUp style={{visibility: visibleButton? 'visible': 'hidden'}} onClick={() => {window.scroll(0, 0), setVisibleButton(false)}}/>
    );
}