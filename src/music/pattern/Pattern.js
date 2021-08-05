import { useEffect, useState } from "react"
import { Track } from "./Track";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { MdAddBox } from "react-icons/md";

export function Pattern() {

    const [instruments, setInstruments] = useState([{ id: 0, instrument: "Synth" }]);
    const [beatNum, setBeatNum] = useState(0);

    const updateBeatNum = (bt) => {
        setBeatNum(bt);
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

    return (
        <div className="card bg-violet h-64 border--pink flex flex-col space-y-3">
            <div className="flex items-center justify-between pb-2">
                <button className="text-3xl text-white">
                    <MdAddBox />
                </button>
                <div className="flex items-center">
                    <button onClick={() => decrementBeatNum()}><AiFillCaretLeft /></button>
                    <input value={beatNum} onChange={(e) => updateBeatNum(e.target.value)} style={{ backgroundColor: 'rgba(0,0,0, .2)' }}
                        type="text" step="1" className="w-12 p-1 px-2 font-bold text-white text-center" />
                    <button onClick={() => incrementBeatNum()}>
                        <AiFillCaretRight />
                    </button>
                </div>
            </div>
            {
                instruments.map(i => <div key={i.id} className="flex items-center">
                    <span className="text-pink font-bold mr-4">{i.instrument}</span>
                    <Track instrument={i} beatNum={beatNum} /> </div>)
            }
        </div>
    )
}