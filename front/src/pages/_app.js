import "antd/dist/antd.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/_mixins.scss';
import 'styles/_styles.scss';

function MyApp({ Component, pageProps }) {
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
