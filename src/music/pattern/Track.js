import { useEffect, useState } from "react"

export function Track({beatNum}) {

    const [beats, setBeats] = useState([]);
    
    useEffect(() => {
        let array = [];
        for (let i = 0; i < beatNum; i++) {
            array.push({id: i, active: false})
        }
        setBeats(array);
    }, [beatNum])

    const selectBeat = (beat) => {
        const index = beats.findIndex(x => x.id === beat.id);
        if(index > -1) beats[index].active = !beats[index].active;
        setBeats([...beats])
    }

    return (
        <div style={{ backgroundColor: 'rgba(0,0,0, 0.2)', borderBottom: '1px solid #2a5629' }} className="w-full h-12 rounded-lg p-2 space-x-2">
            {
                beats.map(b => (
                    <button key={b.id} onClick={() => selectBeat(b)}
                        className={"beat " + (!!b.active && "active")} >
                    </button>
                ))
            } 
        </div>

    )
}