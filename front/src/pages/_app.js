import "antd/dist/antd.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import 'styles/_mixins.scss';
import 'styles/_styles.scss';
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    document.documentElement.style
      .setProperty('--clickSearch', `-284px`);
  }, [router.pathname])

  return <Component {...pageProps} />
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps }
}

export default MyApp
