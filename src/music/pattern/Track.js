import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import * as Tone from 'tone'

export function Track({ beatNum, play, bpm }) {

    const [beats, setBeats] = useState([]);

    useEffect(() => {
        Tone.Transport.stop();
    })

    useEffect(() => {
        let array = [];
        for (let i = 0; i < beatNum; i++) {
            array.push({ id: uuidv4(), active: false })
        }
        setBeats(array);
    }, [beatNum])

    useEffect(() => {
        play ?  playTrack() : stopTrack();
    }, [play])

    const selectBeat = (beat) => {
        const index = beats.findIndex(x => x.id === beat.id);
        if (index > -1) beats[index].active = !beats[index].active;
        setBeats([...beats])
    }

    const stopTrack = () => {
        Tone.Transport.stop(); 
        Tone.Transport.cancel();
    }

    const playTrack = () => {
        const synth = new Tone.MetalSynth({
            harmonicity: 12,
            resonance: 800,
            modulationIndex: 20,
            envelope: {
                decay: 0.4,
            },
            volume: -15

        }).toDestination();

        const beatsArray = document.querySelectorAll(".beat");
        let y = 0;

        const loop = new Tone.Loop(((time) => {
            synth.triggerAttackRelease("C4", "16n", time);
            Tone.Draw.schedule(() => {
                if (beatsArray[y]) {
                    beatsArray[y].classList.add("active");

                    setTimeout(() => {
                        beatsArray.forEach(beat => {
                            beat.classList.remove("active");
                        });
                    }, 10000 / bpm);
                }
            }, time);

            y++;
            if (y === beatNum) y = 0;
        })).start(0);

        loop.interval = "2n";
        Tone.Transport.bpm.value = bpm;
        Tone.Transport.start()
    }

    return (
        <div style={{ backgroundColor: 'rgba(0,0,0, 0.2)', borderBottom: '1px solid #2a5629' }}
            className="w-full h-12 rounded-lg p-2 space-x-2">
            {
                beats.map(b => (
                    <button id={b.id} key={b.id} onClick={() => selectBeat(b)}
                        className={"beat " + (!!b.active && "active")} >
                    </button>
                ))
            }
        </div>
    )
}