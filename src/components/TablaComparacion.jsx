export default function TablaComparacion() {
  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-6xl mx-auto px-2">
        <h2 className="text-3xl font-bold text-center mb-8">
          Comparación de Servicios
        </h2>

        {/* esto es lo RESPONSIVE */}
        <div className="overflow-x-auto rounded-2xl border bg-base-100">
          <table className="table w-full min-w-180 text-base md:text-lg">
            <thead>
              <tr className="bg-base-300 font-bold text-base md:text-lg">
                <th className="w-55">Aspecto</th>
                <th className="text-error">Servicio común</th>
                <th className="text-green-800">Nuestro servicio</th>
              </tr>
            </thead>

            <tbody>
              <tr className="hover:bg-base-300 font-bold">
                <td className="font-bold">Tiempo de entrega</td>
                
                <td>
                    <div className="flex items-center gap-2">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 shrink-0 text-red-800">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                        Retrasos / sin fecha clara
                    </div>
                </td>

                <td>
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 shrink-0 text-green-800">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        Plan de trabajo y fechas
                    </div>
                </td>
              </tr>

              <tr className="hover:bg-base-300 font-bold">
                <td className="font-bold">Terminaciones</td>
                 
                <td>
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 shrink-0 text-red-800">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                        Bordes irregulares   
                    </div>
             
                </td>
                <td>
                    <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 shrink-0 text-green-800">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    Cortes limpios y prolijos 
                    </div>        
                </td>
              </tr>

              <tr className="hover:bg-base-300 font-bold">

                <td className="font-bold">Limpieza</td>

                <td>
                    <div className="flex items-center gap-2">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 shrink-0 text-red-800">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    Manchas / desorden
                    </div>
                
                </td>

                <td>
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 shrink-0 text-green-800">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                    Protección + limpieza final
                    </div>  
                </td>

              </tr>

              <tr className="hover:bg-base-300 font-bold">

                <td className="font-bold">Materiales</td>

                <td>
                    <div className="flex items-center gap-2">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 shrink-0  text-red-800">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    Pintura barata / sin asesoría
                    </div>
                
                </td>

                <td>
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 shrink-0 text-green-800">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                    Marcas recomendadas + asesoría
                    </div>  
                </td>

              </tr>

              <tr className="hover:bg-base-300 font-bold">

                <td className="font-bold">Garantía</td>

                <td>
                    <div className="flex items-center gap-2">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 shrink-0  text-red-800">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    Sin respaldo
                    </div>
                
                </td>

                <td>
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 shrink-0 text-green-800">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                    Garantía por escrito
                    </div>  
                </td>

              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}