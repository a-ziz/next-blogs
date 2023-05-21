import "@styles/globals.css";
import Navbar from "@components/Navbar";
import Provider from "@components/Provider";

export const metadata = {
  title: "Blogs with NextJS",
  description: "Post blogs and find useful tips and tricks",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="main__background" />
        </div>
        <main className="app">
          <Provider />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
