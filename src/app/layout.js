import "./globals.css";

export const metadata = {
  title: "valverde.dv",
  description: "Portfólio de desenvolvedor Valverde",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
