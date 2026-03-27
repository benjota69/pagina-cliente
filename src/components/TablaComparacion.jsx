export default function TablaComparacion() {
  return (
    <section id="tablacomparacion" className="py-16 bg-base-200">
      <div className="max-w-6xl mx-auto px-2">
        <h2 className="text-3xl font-bold text-center mb-8">
          Comparación de Servicios
        </h2>

        <div className="overflow-x-auto rounded-2xl border border-[#C9A84C33] bg-[#1a1a14]">
          <table className="table w-full min-w-180 text-base md:text-lg">
            <thead>
              <tr className="bg-[#141410] text-base md:text-lg">
                <th className="w-55" style={{ color: '#8B8378' }}>Aspecto</th>
                <th style={{ color: '#8B8378' }}>Servicio común</th>
                <th style={{ color: '#C9A84C' }}>Nuestro servicio</th>
              </tr>
            </thead>

            <tbody>
              {[
                { aspecto: 'Tiempo de entrega', comun: 'Retrasos / sin fecha clara', nuestro: 'Plan de trabajo y fechas' },
                { aspecto: 'Terminaciones', comun: 'Bordes irregulares', nuestro: 'Cortes limpios y prolijos' },
                { aspecto: 'Limpieza', comun: 'Manchas / desorden', nuestro: 'Protección + limpieza final' },
                { aspecto: 'Materiales', comun: 'Pintura barata / sin asesoría', nuestro: 'Marcas recomendadas + asesoría' },
                { aspecto: 'Garantía', comun: 'Sin respaldo', nuestro: 'Garantía por escrito' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-[#ffffff05] border-b border-[#ffffff0a] last:border-0">
                  <td style={{ color: '#d4c9b8' }}>{row.aspecto}</td>

                  <td>
                    <div className="flex items-center gap-2" style={{ color: '#6b6560' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                      {row.comun}
                    </div>
                  </td>

                  <td>
                    <div className="flex items-center gap-2" style={{ color: '#C9A84C' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {row.nuestro}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}