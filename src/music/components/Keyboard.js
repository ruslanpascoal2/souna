import './Keyboard.scss';

export function Keyboard() {

    const keys = [
        { note: "C2", blackKeyNext: true },
        { note: "D2", blackKeyNext: true },
        { note: "E2", blackKeyNext: false },
        { note: "F2", blackKeyNext: true },
        { note: "G2", blackKeyNext: true },
        { note: "A2", blackKeyNext: true },
        { note: "B2", blackKeyNext: false },
        { note: "C3", blackKeyNext: true },
        { note: "D3", blackKeyNext: true },
        { note: "E3", blackKeyNext: false },
        { note: "F3", blackKeyNext: true },
        { note: "G3", blackKeyNext: true },
        { note: "A3", blackKeyNext: true },
        { note: "B3", blackKeyNext: false }
    ];

    return (
        <div className="card flex justify-center flex-col items-center" style={keyboardStyles.general}>
            <div style={keyboardStyles.controlSection} className="flex">
                <div className="flex flex-col" style={{ width: "30%", borderRight: "2px solid #8d8d8d" }}>
                    <div className="p-6">
                        <img src="roland.png" style={{ filter: 'opacity(0.5)', height: "50px" }}></img>
                    </div>
                    <div style={{ height: "6px", width: "100%", background: "#8e8e8e" }}></div>
                </div>
                <div className="flex flex-col" style={{ width: "70%", }}>
                    <div className="p-6">
                        <div style={{ height: "50px" }}></div>
                    </div>
                    <div style={{ height: "6px", width: "100%", background: "rgb(245 129 35 / 40%)" }}></div>
                </div>
            </div>
            <div className="flex" style={keyboardStyles.keysSection}>
                <div style={keyboardStyles.keys}>
                    {

                        keys.map(x => <div key={x.note} className="key-wrapper">
                            <div style={keyboardStyles.keys.key} className="key"></div>
                            {
                                x.blackKeyNext && <div className="black-key" style={keyboardStyles.keys.blackKeys}></div>
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