import type { Metadata } from "next";
import { Style } from "@repo/ui";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Style>
          <>{children}</>
        </Style>
      </body>
    </html>
  );
}
