const notes_2 = ["C2", "D2", "E2", "F2", "G2", "A2", "B2"];
const notes_3 = ["C3", "D3", "E3", "F3", "G3", "A3", "B3"];
const notes_4 = ["C4", "D4", "E4", "F4", "G4", "A4", "B4"];
const notes_5 = ["C5", "D5", "E5", "F5", "G5", "A5", "B5"];

export const keys = [
    { note: "C3", blackKeyNext: "C#3", keyMap: "z" },
    { note: "D3", blackKeyNext: "D#3", keyMap: "x" },
    { note: "E3", blackKeyNext: false, keyMap: "c" },
    { note: "F3", blackKeyNext: "F#3", keyMap: "v" },
    { note: "G3", blackKeyNext: "G#3", keyMap: "b" },
    { note: "A3", blackKeyNext: "A#3", keyMap: "n" },
    { note: "B3", blackKeyNext: false, keyMap: "m" },
    { note: "C4", blackKeyNext: "C#4", keyMap: "," },
    { note: "D4", blackKeyNext: "D#4", keyMap: "." },
    { note: "E4", blackKeyNext: false, keyMap: "a" },
    { note: "F4", blackKeyNext: "F#4", keyMap: "s" },
    { note: "G4", blackKeyNext: "G#4", keyMap: "d" },
    { note: "A4", blackKeyNext: "A#4", keyMap: "f" },
    { note: "B4", blackKeyNext: false, keyMap: "g" }
];

export const Notes = [...notes_2, ...notes_3, ...notes_4, ...notes_5];