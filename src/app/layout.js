import "./globals.css";

export const metadata = {
  title: "Like",
  description: "like hero demo page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
