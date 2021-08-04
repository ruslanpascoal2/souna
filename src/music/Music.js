import * as Tone from 'tone'
import { Notes } from './Notes';
import { NoteBar } from './NoteBar';
import { useState, useEffect } from 'react';
export function Music() {
    let synth;
    let now;
    const [currentNote, setCurrentNote] = useState("C5");


    useEffect(() => {
        setCurrentNote()
        console.log(currentNote);
    }, [currentNote]);

    const playRandom = () => {
        synth = new Tone.Synth().toDestination();
        now = Tone.now()
        const notes = 8;
        const interval = 1;
        
        for (let i = 0; i < notes; i++) {
            const rand = Notes[getRandomInt(0, Notes.length - 1)];
            setCurrentNote(rand);
            console.log(currentNote);
            synth.triggerAttackRelease(rand, "8n", now + (interval * i));
        }
    }

    const stop = () => {
        
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <button onClick={() => playRandom()}>play</button>
            <button onClick={() => stop()}>stop</button>
            <section className="flex items-center">
                <NoteBar note={currentNote} />
            </section>
        </div>
    )
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

