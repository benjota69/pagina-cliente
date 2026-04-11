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
        <div className="flex flex-col items-center w-full py-12 gap-6">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-center mb-8">
                    Nuestro trabajo
                </h2>
                <p
                    className="text-sm md:text-base max-w-md mx-auto mb-6 text-center"
                    style={{ color: "rgba(232,217,160,0.5)", letterSpacing: "0.06em" }}
                >
                    Mira la transformación
                </p>
            </div>

            <div className="p-1 rounded-2xl bg-gradient-to-b from-yellow-400 to-yellow-700">
                <div className="relative w-72 sm:w-80 rounded-2xl overflow-hidden shadow-xl">
                    <video
                        ref={videoRef}
                        src="https://pub-d3e9a28001554fa1a4c3dbb29e0ff924.r2.dev/videoremodelacion.mp4"
                        muted
                        loop
                        playsInline
                        className="w-full rounded-2xl"
                    />

                    {/* Overlay solo si NO está reproduciendo */}
                    {!playing && (
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-5 cursor-pointer"
                            onClick={togglePlay}
                        >
                            <p className="text-white text-xs">2026</p>
                            <h2 className="text-white text-xl font-semibold">Casa en Remodelación</h2>
                            <span className="btn btn-sm btn-outline text-white w-fit mt-2">
                                ▶ Play
                            </span>
                        </div>
                    )}

                    {/* Botón de pausa cuando está reproduciendo */}
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
        </div>
    );
}