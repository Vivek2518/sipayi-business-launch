import { ReactNode } from "react";
import Header, { HeaderNav } from "./Header";
import Footer, { FooterProps } from "./Footer";

const Layout = ({
  children,
  nav,
  footer,
}: {
  children: ReactNode;
  nav?: HeaderNav;
  footer?: FooterProps;
}) => (
  <div className="flex flex-col min-h-screen">
    <Header nav={nav} />
    <main className="flex-1 min-w-0">{children}</main>
    <Footer {...footer} />
  </div>
);

export default Layout;
