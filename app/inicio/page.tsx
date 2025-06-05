export default function Home() {
  return (
    <main className="font-raleway">
      {/* Navbar */}
      <nav className="bg-[#D1FAFF] py-3 px-6 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-8" />
          <span className="text-sky-900 text-xl font-semibold">Tu<span className="text-sky-600">/veterinaria</span></span>
        </div>
        <div className="space-x-4 text-sm text-[#4BB5E7] hidden md:flex">
          <a
            href="#"
            className="px-3 py-1 rounded font-medium transition-colors hover:bg-[#4EB5E6] hover:text-white"
          >
            Inicio
          </a>
          <a
            href="#testimonios"
            className="px-3 py-1 rounded font-medium transition-colors hover:bg-[#4EB5E6] hover:text-white"
          >
            Testimonios
          </a>
          <a
            href="#servicios"
            className="px-3 py-1 rounded font-medium transition-colors hover:bg-[#4EB5E6] hover:text-white"
          >
            Servicios
          </a>
          <a
            href="#quienes-somos"
            className="px-3 py-1 rounded font-medium transition-colors hover:bg-[#4EB5E6] hover:text-white"
          >
            ¿Quiénes somos?
          </a>
          <a
            href="#contacto"
            className="px-3 py-1 rounded font-medium transition-colors hover:bg-[#4EB5E6] hover:text-white"
          >
            Contáctanos
          </a>
        </div>
        <button className="md:hidden text-sky-900 focus:outline-none">☰</button>
      </nav>

      {/* Hero section */}
    <section
      className="relative h-[500px] flex items-center justify-start px-6 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('./perro-bg.jpg')" }}
    >
      {/* Overlay degradado */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, #4BB5E7cc 40%, transparent 100%)",
          zIndex: 1,
        }}
      />
    
    <div className="relative z-10 max-w-lg font-raleway">
      <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 font-raleway">
        Más que estilo, es bienestar: tu mascota merece lo mejor.
      </h1>
      <p className="mb-6 text-md md:text-lg font-light font-raleway">
        Somos los expertos en grooming y baños para consentir, cuidar y embellecer a tu mascota.
      </p>
      <button className="bg-[#00ffa3] text-black font-semibold py-2 px-5 rounded shadow border border-black hover:bg-[#00e693] hover:brightness-105 transition-colors font-raleway">
        ¡Agenda tu baño hoy!
      </button>
    </div>
    </section>

      {/* Testimonios */}
    <section id="testimonios" className="bg-white py-12 px-4 text-center">
        <h2 className="text-3xl font-bold text-sky-900 mb-8">Testimonios de nuestros clientes</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
            { 
                nombre: "Nancy Zavalaga", 
                texto: "¡A mi perrita la dejaron hermosa! Muy amables y profesionales.", 
                estrellas: 5,
                imagen: "https://randomuser.me/api/portraits/women/44.jpg"
            },
            { 
                nombre: "Gerhard Romero", 
                texto: "Muy buena atención y resultados, recomendado.", 
                estrellas: 5,
                imagen: "https://randomuser.me/api/portraits/men/32.jpg"
            },
            { 
                nombre: "María Pérez", 
                texto: "El lugar está súper limpio y mi gato salió feliz.", 
                estrellas: 5,
                imagen: "https://randomuser.me/api/portraits/women/68.jpg"
            }
            ].map((testimonio, i) => (
            <div key={i} className="bg-sky-50 p-6 rounded-lg shadow flex flex-row items-center text-left">
                <div className="flex flex-col items-center mr-6">
                <img 
                    src={testimonio.imagen} 
                    alt={testimonio.nombre} 
                    className="w-20 h-20 object-cover mb-3 rounded-lg shadow"
                />
                <div className="text-sky-900 text-xl mb-2">
                    {'★'.repeat(testimonio.estrellas)}
                </div>
                </div>
                <div>
                <p className="text-sky-900 mb-4">“{testimonio.texto}”</p>
                <p className="mt-2 font-semibold text-sky-900">{testimonio.nombre}</p>
                </div>
            </div>
            ))}
        </div>
    </section>
    {/* Servicios */}
    <section id="servicios" className="bg-[#d4f4fa] py-12 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-10">
            {/* Imagen lado izquierdo */}
            <div className="flex-1 relative h-72 md:h-auto md:min-h-[350px] mb-8 md:mb-0 overflow-hidden rounded-none">
                <img
                    src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=80"
                    alt="Perro en grooming"
                    className="absolute inset-0 w-full h-full object-cover rounded-none shadow-none"
                />
            </div>
            <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
                <h2
                    className="font-bold mb-4"
                    style={{
                        color: "#46ABDF",
                        fontSize: "33.98px",
                        textAlign: "center",
                    }}
                >
                    ¡Tú manejas tu tiempo!
                </h2>
                <p
                    className="mb-6"
                    style={{
                        color: "#023E8A",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "18.77px",
                        lineHeight: 1.5,
                        maxWidth: 400,
                    }}
                >
                    Cuando eliges tu corte o baño, podrás ver la hora en la que tu mascota estará lista para regresar a casa.

                    !Siempre exactos!
                </p>
                <button className="bg-white text-black font-semibold py-3 px-8 rounded border border-black shadow hover:bg-gray-100 self-center md:self-start">
                    ¡Agenda tu cita hoy!
                </button>
            </div>
        </div>
    </section>
    {/* Profesionales certificados */}
    <section
      id="quienes-somos"
      className="py-12 px-4 flex flex-col md:flex-row items-center"
      style={{ backgroundColor: "#4EB5E6" }}
    >
    <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
      <h2
        className="font-bold mb-4"
        style={{
        color: "#D1FAFF",
        fontSize: "33.98px",
        fontFamily: "'Raleway', sans-serif",
        textAlign: "center",
        }}
      >
        Profesionales certificados
      </h2>
        <p
            className="mb-6"
            style={{
                color: "#023E8A",
                fontSize: "18.77px",
                fontFamily: "'Poppins', sans-serif",
                lineHeight: 1.5,
                maxWidth: 500,
            }}
        >
            Tus mascotas están bajo el cuidado de nuestro personal, 100% certificados por la JNMV de El Salvador.
            <br />
            <br />
            ¡Los cuidamos porque son familia!
        </p>
        <button
            className="bg-white text-[#023E8A] font-semibold py-2 px-6 rounded-sm shadow hover:bg-gray-100 border border-[#023E8A]"
        >
            ¿Corte, baño o ambos?
        </button>
      </div>
    <div className="flex-1 h-64 md:h-80 w-full mt-8 md:mt-0 md:ml-8 rounded-none overflow-hidden">
      <img
        alt="Perro feliz"
        src="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80"
        className="w-full h-full object-cover rounded-none shadow-none"
      />
    </div>
    </section>

      {/* Cita inspiradora */}
      <section className="bg-white py-12 px-4 text-center">
        <blockquote className="text-sky-900 text-lg italic max-w-2xl mx-auto">
          “El perro es el único ser que te amará, mucho más que a sí mismo.”
          <footer className="mt-2 text-sm not-italic">— Sócrates</footer>
        </blockquote>
      </section>

      {/* Footer profesional */}
      <footer id="contacto" className="bg-[#00204A] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
          <div className="space-y-4">
            <img src="./logo.png" alt="Logo" className="h-10" />
          </div>
          <div>
            <h3 className="font-semibold mb-2 underline">Útil</h3>
            <ul className="space-y-1 text-[#D1FAFF]">
              <li><a href="#" className="hover:underline">Inicio</a></li>
              <li><a href="#" className="hover:underline">Agenda tu cita</a></li>
              <li><a href="#" className="hover:underline">Historia</a></li>
              <li><a href="#testimonios" className="hover:underline">Testimonios</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 underline">Help</h3>
            <ul className="space-y-1 text-[#D1FAFF]">
              <li><a href="#" className="hover:underline">Contáctanos</a></li>
              <li><a href="#" className="hover:underline">Preguntas frecuentes</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 underline">Privacy</h3>
            <ul className="space-y-1 text-[#D1FAFF]">
              <li><a href="#" className="hover:underline">Privacidad</a></li>
              <li><a href="#" className="hover:underline">Información de dominio</a></li>
              <li><a href="#" className="hover:underline">Información de salud</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
