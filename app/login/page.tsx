import Image from 'next/image'

export default function LoginPage() {
  return (
    <div className="flex min-h-screen h-screen w-full">
      {/* Imagen lado izquierdo */}
      <div className="relative w-1/2 h-full hidden md:block">
        <Image
          src="/perro.jpg"
          alt="Perro con toalla"
          fill
          className="object-cover w-full h-full"
          style={{ objectPosition: 'center', zIndex: 0 }}
          priority
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-40" />
      </div>
      {/* Login lado derecho */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-white">
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2
            className="text-center mb-6 font-bold"
            style={{
              color: '#2A588A',
              fontSize: '40px',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            BIENVENIDO A <br />
            <span style={{ color: '#2A588A', fontFamily: 'Montserrat, sans-serif' }}>
              TU VETERINARIA
            </span>
          </h2>
          <form className="flex flex-col space-y-4">
            <div>
              <label className="block text-sm font-medium">Usuario</label>
              <input
                type="text"
                placeholder="Ingresa tu usuario"
                className="w-full p-2 rounded bg-white border"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Contraseña</label>
              <input
                type="password"
                placeholder="Ingresa tu contraseña"
                className="w-full p-2 rounded bg-white border"
              />
              <a
                href="#"
                className="text-xs text-blue-700 float-right mt-1 hover:underline"
              >
                ¿Has olvidado tu contraseña?
              </a>
            </div>
            <button className="bg-sky-500 text-white py-2 rounded hover:bg-sky-600">
              Iniciar sesión
            </button>
            <button
              type="button"
              className="bg-sky-300 text-white py-2 rounded hover:bg-sky-400"
            >
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
