import { AppShell } from "@/components";
import { StyledComponentsRegistry } from "@/style/registry";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Tasty Plates",
  description: "A delicious journey through culinary delights",
  icons: {
    icon: "app/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <StyledComponentsRegistry>
          <AppShell>{children}</AppShell>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
