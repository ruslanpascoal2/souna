import * as Tone from 'tone'
import { useEffect } from 'react';
export function Music() {
    let synth;
    let now;

    useEffect(() => {
        synth =  new Tone.Synth().toDestination();
        now = Tone.now()
    })

    const notes_3 = ["C3", "D3", "E3", "F3", "G3", "A3", "B3"];
    const notes_4 = ["C4", "D4", "E4", "F4", "G4", "A4", "B4"];

    const play = (note) => {
        synth.triggerAttackRelease(note, "8n");
    }

    return (
        <div className="space-y-3 flex flex-col items-center justify-center">
            <div>
                {
                    notes_3.map(x => {
                        return (
                            <button style={{background: "#ddd"}} className="mr-3 px-4" key={x} onClick={() => play(x)}>
                                <span>{x}</span>
                            </button>
                        )
                    })
                }
            </div>
            <div>
                {
                    notes_4.map(x => {
                        return (
                            <button style={{background: "#eee"}} className="mr-3 px-4" key={x} onClick={() => play(x)}>
                                <span>{x}</span>
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

