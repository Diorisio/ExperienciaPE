import Footer from "./Footer"
import Header from "./Header"


function MyApp({ Component, pageProps }) {
  return <>
  <Header></Header>
  <Component {...pageProps} />
  <Footer></Footer>
  </>
}

export default MyApp
