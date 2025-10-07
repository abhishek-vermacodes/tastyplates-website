
// import { Footer } from "../footer";
import { Header } from "../header";

export const AppShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header/>
      {children}
      {/* <Footer /> */}
    </>
  );
};
