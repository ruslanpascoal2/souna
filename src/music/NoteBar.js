import { useEffect, useState } from "react";

export function NoteBar({ note }) {
    const [cnote, setNote] = useState(note);

    useEffect(() => {
        setNote(note);
        console.log(note);
    },[note])

    return (
        <div className="h-60 w-14">
            {cnote}
        </div>
    )
}