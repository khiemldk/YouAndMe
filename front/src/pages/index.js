import { Layout, Login } from 'components'

export default function Home(props) {
  return (
    <Layout>
      <Login {...props} />
    </Layout>
  )
}

Home.getInitialProps = async ({ pathName, ctx, query }) => {
  return {
    pathName,
  }
}