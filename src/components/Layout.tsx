import { ReactNode } from "react";
import Header from "./Header";
import Footer, { FooterProps } from "./Footer";

const Layout = ({
  children,
  footer,
}: {
  children: ReactNode;
  footer?: FooterProps;
}) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-1 min-w-0">{children}</main>
    <Footer {...footer} />
  </div>
);

export default Layout;
