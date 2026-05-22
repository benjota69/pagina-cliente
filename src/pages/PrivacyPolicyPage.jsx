import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";

const sections = [
  {
    title: "1. Responsable del tratamiento",
    body: [
      "Esta Política de Privacidad regula el tratamiento de los datos personales recolectados a través del sitio web de Imperio Romano, orientado a solicitudes de cotización para servicios de pintura, yeso y terminaciones.",
      "El responsable del tratamiento es Michael Alejandro Matus Varas, persona natural prestadora de servicios, con domicilio o referencia en Región de Valparaíso. Para consultas, solicitudes de acceso, rectificación o eliminación de datos, puedes escribir a imperio.contacto@gmail.com.",
    ],
  },
  {
    title: "2. Datos que se recopilan",
    body: [
      "Según el formulario actualmente disponible en el sitio, se pueden recopilar los siguientes datos: nombre, teléfono o WhatsApp, correo electrónico opcional, comuna, fecha estimada de inicio, comentarios, tipo de servicio solicitado, tipo de propiedad, espacios a intervenir, metros aproximados y antecedentes de la solicitud de cotización.",
      "Actualmente este sitio no utiliza, según la configuración conocida al momento de esta política, herramientas de seguimiento comercial ni solicita datos personales sensibles para responder la cotización.",
    ],
  },
  {
    title: "3. Finalidad del tratamiento",
    body: [
      "Los datos personales se utilizan exclusivamente para responder solicitudes de cotización, evaluar el proyecto consultado, preparar una referencia de presupuesto y contactar al titular en relación con su solicitud.",
      "Los datos no se utilizarán para seguimiento comercial posterior no solicitado por el titular.",
    ],
  },
  {
    title: "4. Base de uso y consentimiento",
    body: [
      "El envío voluntario de datos a través del formulario constituye una autorización para tratarlos con la finalidad informada en esta política.",
      "El titular declara haber leído esta Política de Privacidad y aceptar el tratamiento de sus datos para fines de contacto y cotización al marcar la casilla correspondiente antes de enviar la solicitud.",
    ],
  },
  {
    title: "5. Proveedores y terceros",
    body: [
      "Para el funcionamiento del sitio pueden intervenir proveedores tecnológicos que procesan información bajo sus propias condiciones de servicio.",
      "En particular, el sitio utiliza EmailJS para la transmisión o envío de solicitudes de cotización y Cloudflare para alojamiento, seguridad, red y entrega de contenidos. Si en el futuro se incorporan nuevas integraciones técnicas, esta política podrá actualizarse.",
    ],
  },
  {
    title: "6. Conservación de los datos",
    body: [
      "Los datos de una cotización no concretada podrán conservarse por un plazo de hasta 12 meses, con el fin de responder adecuadamente la solicitud, revisar antecedentes del proyecto o atender consultas asociadas.",
      "Finalizado ese plazo, los datos deberán eliminarse o anonimizarse, salvo que exista una obligación legal o una necesidad administrativa justificada para conservarlos por más tiempo.",
    ],
  },
  {
    title: "7. Derechos del titular",
    body: [
      "La persona titular puede solicitar información sobre sus datos, pedir rectificación de antecedentes inexactos, requerir eliminación o formular consultas sobre el tratamiento realizado.",
      "Para ejercer estos derechos, debe enviarse una solicitud a imperio.contacto@gmail.com. Se recomienda indicar nombre, medio de contacto y una descripción clara de la solicitud.",
    ],
  },
  {
    title: "8. Seguridad y confidencialidad",
    body: [
      "Se adoptan medidas razonables para restringir el acceso a la información y evitar accesos no autorizados, pérdida, divulgación indebida o alteración de los datos personales.",
      "No obstante, ningún sistema es completamente infalible, por lo que no puede garantizarse una seguridad absoluta. En caso de cambios relevantes en las medidas o integraciones técnicas, esta política podrá ser modificada.",
    ],
  },
  {
    title: "9. Menores de edad",
    body: [
      "Este sitio no está dirigido intencionalmente a menores de edad. Si un representante legal considera que un menor entregó datos personales sin autorización, puede solicitar su revisión o eliminación escribiendo a imperio.contacto@gmail.com.",
    ],
  },
  {
    title: "10. Cambios a esta política",
    body: [
      "Esta Política de Privacidad puede actualizarse para reflejar cambios legales, operativos o técnicos del sitio. La versión vigente será la publicada en esta misma página.",
      "Última actualización: 21 de mayo de 2026.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0a0703] text-white">
      <Navbar />

      <main className="px-6 py-14 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-[32px] border border-[#E6B800]/15 bg-gradient-to-br from-[#171005] via-[#120d06] to-[#0f0a05] p-8 shadow-[0_20px_70px_rgba(0,0,0,0.32)] sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#E6B800]/85">
              Tratamiento de datos
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Política de Privacidad
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/65 sm:text-base">
              Este texto está pensado para un prestador de servicios independiente en Chile que recibe solicitudes de
              cotización mediante formulario web. Aquí se explica qué datos se recopilan, cómo se utilizan y qué
              derechos tiene cada persona usuaria sobre su información.
            </p>
          </div>

          <div className="mt-8 space-y-5">
            {sections.map((section) => (
              <section
                key={section.title}
                className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 shadow-[0_12px_36px_rgba(0,0,0,0.18)] sm:p-7"
              >
                <h2 className="text-xl font-bold text-white">{section.title}</h2>
                <div className="mt-4 space-y-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-sm leading-7 text-white/68 sm:text-[15px]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <WhatsappButton />
      <Footer />
    </div>
  );
}
