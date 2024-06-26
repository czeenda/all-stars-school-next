'use client'
import { useEffect } from 'react';

import { Inter } from "next/font/google";
//import { useEffect } from 'react';

import "./globals.css";
import "./scss/index.scss"
import "./scss/styles.scss"
//import 'bootstrap/dist/js/bootstrap.bundle.min';
//import { fromJSON } from "postcss";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min');
  }, []);


  return (
    <>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </>
  );
}
