import { AppProps } from "next/app";
import GlobalStyle from "@components/Layout/GlobalStyle";

import "remixicon/fonts/remixicon.css";
import Footer from "@components/Footer";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;
