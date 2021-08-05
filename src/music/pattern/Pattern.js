import { useEffect, useState } from "react"
import { Track } from "./Track";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { MdAddBox, MdPlayArrow, MdStop } from "react-icons/md";
import * as Tone from 'tone'
export function Pattern() {


    const [instruments, setInstruments] = useState([{ id: 0, instrument: "Synth" }]);
    const [beatNum, setBeatNum] = useState(8);
    const [bpm, setBpm] = useState(100);
    const [play, setPlay] = useState(false);

    const updateBeatNum = (bt) => {
        setBeatNum(bt);
    }

    const updateBpm = (bt) => {
        setBpm(bt);
    }


    const incrementBeatNum = () => {
        setBeatNum((prev) => {
            console.log(prev);
            return prev + 1;
        })
    }

    const decrementBeatNum = () => {
        setBeatNum((prev) => {
            console.log(prev);
            return prev - 1;
        })
    }

    const playPattern = () => {
         setPlay((prev) => {
             return !prev;
         });
    }

    return (
        <div className="card bg-violet h-64 border--pink flex flex-col space-y-3">
            <div className="flex items-center ml-auto pb-2 text-sm rounded-lg p-2 px-4" style={{ background: 'rgba(0,0,0,0.2)' }}>
                <button onClick={playPattern} className="text-2xl text-pink mr-3">
                    { play ? <MdStop /> :<MdPlayArrow />}
                </button>
                <div className="flex items-center mr-4">
                    <button onClick={() => decrementBeatNum()}><AiFillCaretLeft /></button>
                    <input value={beatNum} onChange={(e) => updateBeatNum(e.target.value)} style={{ backgroundColor: 'rgba(0,0,0, .2)' }}
                        type="text" step="1" className="w-12 p-1 px-2 font-bold text-white text-center" />
                    <button onClick={() => incrementBeatNum()}>
                        <AiFillCaretRight />
                    </button>
                </div>
                <input value={bpm} onChange={(e) => updateBpm(e.target.value)} style={{ backgroundColor: 'rgba(0,0,0, .2)' }}
                        type="text" step="1" className="w-12 p-1 px-2 font-bold text-white text-center" />
            </div>
            {
                instruments.map(i => <div key={i.id} className="flex items-center">
                    <span className="text-pink font-bold mr-4">{i.instrument}</span>
                    <Track bpm={bpm} play={play} instrument={i} beatNum={beatNum} /> 
                    </div>
                    )
            }
        </div>
    )
}