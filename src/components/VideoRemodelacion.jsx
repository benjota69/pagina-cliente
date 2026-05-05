import { useRef, useState } from "react";

export default function VideoRemodelacion() {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    const togglePlay = () => {
        if (playing) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setPlaying(!playing);
    };

    return (
        <section className="flex flex-col items-center w-full py-16 gap-6 bg-[#0D0D0D]">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-center mb-4 text-white">
                    Nuestro trabajo
                </h2>
                <p
                    className="text-sm md:text-base max-w-md mx-auto mb-6 text-center"
                    style={{ color: "rgba(255,255,255,0.45)", letterSpacing: "0.06em" }}
                >
                    Mira la transformación
                </p>
            </div>

            <div className="p-1.5 rounded-2xl bg-gradient-to-b from-[#E6B800] to-[#B8932F] shadow-lg">
                <div className="relative w-72 sm:w-96 md:w-[28rem] rounded-2xl overflow-hidden shadow-xl">
                    <video
                        ref={videoRef}
                        src="https://pub-d3e9a28001554fa1a4c3dbb29e0ff924.r2.dev/videoremodelacion.mp4"
                        muted
                        loop
                        playsInline
                        className="w-full rounded-2xl"
                    />

                    {/* Overlay solo si NO esta reproduciendo */}
                    {!playing && (
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-5 cursor-pointer"
                            onClick={togglePlay}
                        >
                            <p className="text-white text-xs">2026</p>
                            <h2 className="text-white text-xl font-semibold">Casa en remodelacion</h2>
                            <span className="btn btn-sm btn-outline text-white w-fit mt-2">
                                Play
                            </span>
                        </div>
                    )}

                    {/* Boton de pausa cuando esta reproduciendo */}
                    {playing && (
                        <button
                            onClick={togglePlay}
                            className="absolute bottom-4 left-4 btn btn-sm btn-outline text-white"
                        >
                            Pausar
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}