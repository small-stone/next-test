"use client";

import "./globals.css";
import "./index.css";
import { Inter } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const showBackButton = pathname !== "/";

  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen">{children}</main>
        <div className="fixed top-[25px] left-0 w-full  px-3 flex justify-between z-10 flex-row-reverse">
          <div className="header-icon">
            <Image src="/menu.svg" width={24} height={28} alt="back" />
          </div>
          {showBackButton && (
            <div className="header-icon" onClick={() => router.push("/")}>
              <Image src="/back.svg" width={24} height={28} alt="back" />
            </div>
          )}
        </div>
      </body>
    </html>
  );
}
