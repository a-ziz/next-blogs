import "@styles/globals.css";

export const metadata = {
  title: "Blogs with NextJS",
  description: "Post blogs and find useful tips and tricks",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
