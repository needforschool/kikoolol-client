import { AppProps } from "next/app";
import GlobalStyle from "@components/Layout/GlobalStyle";

import "remixicon/fonts/remixicon.css";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
