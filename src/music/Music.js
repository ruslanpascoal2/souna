import * as Tone from 'tone'
import { useState, useEffect } from 'react';
import { Keyboard } from './components/Keyboard';
export function Music() {
    const [currentNote, setCurrentNote] = useState("C5");


    useEffect(() => {
        setCurrentNote()
    }, [currentNote]);

    const play = () => {

    }

    const stop = () => {
        Tone.Transport.stop();
    }

    return (
        <div className="flex flex-col items-center justify-center">

            { <div className="flex flex-row space-x-4">
                <button className="text-pink" onClick={() => play()}>play</button>
                <button className="text-pink" onClick={() => stop()}>stop</button>
            </div>

            
            }
            <section className="px-4 py-8">
                 {/* <Pattern />  */}
                <Keyboard />
            </section>

        </div>
    )
}

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

