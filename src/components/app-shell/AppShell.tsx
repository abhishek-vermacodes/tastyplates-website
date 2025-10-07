
// import { Header } from "../header";
import { Footer } from "../footer";



export const AppShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <Header/> */}
      {children}
      <Footer />
    </>
  );
};
