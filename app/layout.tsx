import "../styles/globals.css";

export const metadata = {
  title: "Veterinaria Login",
  description: "Página de login para veterinaria",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}