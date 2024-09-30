// React and Next.js
import type { Metadata } from "next";
import { Saira } from "next/font/google";

// Styles
import "./globals.css";

// Components
import Theme from "@/components/theme";
import { Toaster } from "@/components/ui/toaster";

// Context
import { ThemeProvider } from "@/context/ThemeContext";
import { UserProvider } from "@/context/UserContext";
import { TodoProvider } from "@/context/TodoContext";

// Library
import { ViewTransitions } from "next-view-transitions";

const getSarai = Saira({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "TodoApp - FranciscoMelen10",
  description:
    "TodoApp made by FranciscoMelen10 with Next.js, Typescript, Tailwind CSS, and Shadcn.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={getSarai.className}>
          <UserProvider>
            <TodoProvider>
              <ThemeProvider>
                <main className="min-h-screen bg-slate-100 dark:bg-[#0c0c0c]">
                  {children}
                  <div className="fixed bottom-0 right-0 p-5">
                    <Theme />
                  </div>
                </main>
                <Toaster />
              </ThemeProvider>
            </TodoProvider>
          </UserProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
