import "./globals.css";
import { Providers } from "./providers"; // Certifique-se que está importando do caminho correto!


export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        <Providers>

          {children}
        </Providers>
      </body>
    </html>
  );
}
