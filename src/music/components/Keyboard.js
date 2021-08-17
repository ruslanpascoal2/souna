import './Keyboard.scss';
import { keys } from "../Notes";
import * as Tone from 'tone'
import { useEffect, useRef } from 'react';
import { distinctUntilChanged, fromEvent, map } from 'rxjs';
import roland from "./roland.png";
import {
    isMobile
} from "react-device-detect";

export function Keyboard() {
    const synth = useRef(new Tone.AMSynth().toDestination());

    useEffect(() => {
        fromEvent(document, "keydown").pipe(
            map(x => x.key),
            distinctUntilChanged()
        )
            .subscribe((ev) => {
                playNote(null, ev)
            })

        fromEvent(document, "keyup").pipe(
            distinctUntilChanged()
        )
            .subscribe(() => stop())
    }, [])

    const playNote = (note, keyPressed) => {
        let _note;

        if (keyPressed) {
            let match = keys.find(x => x.keyMap === keyPressed);
            _note = match ? match.note : null;
        }
        else {
            _note = note;
        }

        if (!_note) return;
        synth.current = new Tone.AMSynth().toDestination();
        synth.current.triggerAttack(_note, "8n");
    }

    const stop = () => {
        synth.current.dispose();

    }

    return (
        <div
            onKeyDown={(event) => playNote(event)}
            id="keyboard" className="card flex justify-center flex-col items-center" style={isMobile ? keyboardStyles.generalMobile : keyboardStyles.general}>
            <div style={isMobile ? keyboardStyles.controlSectionMobile : keyboardStyles.controlSection} className="flex">
                <div className="flex flex-col" style={{ width: "30%", borderRight: "2px solid #8d8d8d" }}>
                    <div style={isMobile ? { padding: "1rem" } : { padding: "3rem" }}>
                        <img alt="" src={roland} style={isMobile ? keyboardStyles.rolandLogo.mobile : keyboardStyles.rolandLogo} />
                    </div>
                    <div style={{ height: "6px", width: "100%", background: "#8e8e8e" }}></div>
                </div>
                <div className="flex flex-col" style={{ width: "70%", }}>
                    <div style={isMobile ? { padding: "1rem" } : { padding: "3rem" }}>
                        <div style={isMobile ? { height: "30px" } : { height: "50px" }}></div>
                    </div>
                    <div style={{ height: "6px", width: "100%", background: "rgb(245 129 35 / 40%)" }}></div>
                </div>
            </div>
            <div className="flex" style={keyboardStyles.keysSection}>
                <div style={keyboardStyles.keys}>
                    {
                        keys.map(x => <div key={x.note} className="key-wrapper">
                            <div
                                onMouseUp={stop}
                                onMouseDown={() => playNote(x.note)}
                                onTouchEnd={stop}
                                onTouchStart={() => playNote(x.note)}
                                style={keyboardStyles.keys.key} className="key">
                            </div>
                            {
                                x.blackKeyNext &&
                                <div className="black-key"
                                    onMouseUp={stop} onMouseDown={() => playNote(x.blackKeyNext)}
                                    onTouchEnd={stop}
                                    onTouchStart={() => playNote(x.blackKeyNext)}
                                    style={keyboardStyles.keys.blackKeys}></div>
                            }
                        </div>)
                    }
                </div>
            </div>
        </div>

    )
}

const keyboardStyles = {
    general: {
        backgroundColor: "rgb(32 32 32)",
        height: "500px",
        width: "900px",
        paddingTop: "0"
    },
    generalMobile: {
        backgroundColor: "rgb(32 32 32)",
        height: "300px",
        maxHeight: "80%",
        width: "100%",
        paddingTop: "0"
    },
    controlSection: {
        backgroundColor: "rgb(88 88 88)",
        width: "90%",
        height: "50%",
        borderLeft: "4px solid #222",
        borderRight: "4px solid #222",
        borderBottom: "30px solid #252423",
        borderBottomLeftRadius: "4px",
        borderBottomRightRadius: "4px"
    },
    controlSectionMobile: {
        backgroundColor: "rgb(88 88 88)",
        width: "90%",
        height: "60%",
        borderLeft: "4px solid #222",
        borderRight: "4px solid #222",
        borderBottom: "20px solid #252423",
        borderBottomLeftRadius: "4px",
        borderBottomRightRadius: "4px"
    },
    rolandLogo: {
        filter: "opacity(0.5)",
        height: "50px",
        mobile: {
            filter: "opacity(0.5)",
            height: "30px"
        }
    },
    keysSection: {
        backgroundColor: "rgb(32 32 32)",
        width: "90%",
        height: "50%",
        padding: "0 8px"
    },
    keys: {
        display: "flex",
        width: "100%",
        key: {
            background: "#fff",
            width: "100%",
            height: "100%",
            borderRight: "2px solid #ebebeb",
            borderBottom: "10px solid #a1a1a1",
            borderRadius: "2px",
            position: "relative",
            cursor: 'pointer'
        },
        blackKeys: {
            background: "#111",
            zIndex: "100",
            width: "50%",
            height: "60%",
            borderRight: "2px solid #ebebeb",
            borderBottom: "10px solid rgb(106 106 106)",
            borderRadius: "2px",
            position: "absolute",
            right: "-27%",
            top: "0%",
            cursor: 'pointer',
        }
    }
}