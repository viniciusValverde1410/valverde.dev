import localFont from "next/font/local";
import "./globals.css";

const tektur = localFont({
  src: [
    {
      path: "../../public/fonts/Tektur-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Tektur-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-tektur",
});

export const metadata = {
  title: "valverde.dv",
  description: "Portfólio de desenvolvedor Valverde",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={tektur.className}>
        {children}
      </body>
    </html>
  );
}
