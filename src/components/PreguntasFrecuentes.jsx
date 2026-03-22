
export default function PreguntasFrecuentes() {
    return (
        <section id="preguntasfrecuentes" className="py-20 px-6">
            <div>
                <h2 className="text-4xl font-bold text-center mb-8">
                    Preguntas Frecuentes
                </h2>
                <p
                    className="text-sm md:text-base max-w-md mx-auto mb-6 text-center"
                    style={{ color: "rgba(232,217,160,0.5)", letterSpacing: "0.06em" }}
                >
                    Aquí podrás encontrar las preguntas más frecuentes que se hacen nuestros clientes
                </p>
            </div>
            <div className="collapse collapse-arrow w-full max-w-3xl mx-auto px-4 bg-base-100 border-base-300 border mb-4">
                <input type="checkbox" />
                <div className="collapse-title font-semibold">¿Cuanto se demora mi revisión de cotización?</div>
                <div className="collapse-content text-sm">
                    Normalmente se demora de 4 - 24 horas la revisión de cotización y de terreno. Por favor paciencia.
                </div>
            </div>
            <div className="collapse collapse-arrow w-full max-w-3xl mx-auto px-4 bg-base-100 border-base-300 border mb-4">
                <input type="checkbox" />
                <div className="collapse-title font-semibold">How do I create an account?</div>
                <div className="collapse-content text-sm">
                    Click the "Sign Up" button in the top right corner and follow the registration process.
                </div>
            </div>
            <div className="collapse collapse-arrow w-full max-w-3xl mx-auto px-4 bg-base-100 border-base-300 border mb-4">
                <input type="checkbox" />
                <div className="collapse-title font-semibold">How do I create an account?</div>
                <div className="collapse-content text-sm">
                    Click the "Sign Up" button in the top right corner and follow the registration process.
                </div>
            </div>
            <div className="collapse collapse-arrow w-full max-w-3xl mx-auto px-4 bg-base-100 border-base-300 border mb-4">
                <input type="checkbox" />
                <div className="collapse-title font-semibold">How do I create an account?</div>
                <div className="collapse-content text-sm">
                    Click the "Sign Up" button in the top right corner and follow the registration process.
                </div>
            </div>
        </section>


    );
}