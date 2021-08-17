import { Keyboard } from './components/Keyboard';

export function Music() {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen">
            <section className="h-full w-full p-10 flex justify-center">
                <Keyboard />
            </section>
        </div>
    )
}


