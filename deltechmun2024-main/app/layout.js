import "./globals.css";
import Navbar from "./homepage/Navbar";
import Footer from "./homepage/footer";
import Provider from "./components/utils/provider";
import ClientOnly from "./components/utils/clientOnly";
import { Toaster } from "@/app/components/ui/toaster";

export const metadata = {
  title: "DelTech MUN",
  description:
    "DelTech MUN and Debating society, the oldest debating society in DTU, is a collection of discussing enthusiasts spread out across both verticals of the University, the Main Campus, and the University School of Management & Entrepreneurship (East Campus).",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/dlt_a_(white).png" />
      </head>
      <body>
        <Provider>
          <ClientOnly>
            <Navbar></Navbar>
          </ClientOnly>
          <main>{children}</main>
          <Footer></Footer>
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
