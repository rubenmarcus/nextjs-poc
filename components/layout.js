import Footer from "./footer";
import Header from "./header";
import Meta from "./meta";

export default function Layout({ headerData, preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Header data={headerData} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
