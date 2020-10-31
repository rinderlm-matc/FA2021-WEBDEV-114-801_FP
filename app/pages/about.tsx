import Layout from '../components/Layout'
import Link from 'next/link'

const AboutPage = () => {
  return(
    <Layout loadSidebar={ true }>
      <h1>About</h1>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </Layout>
  );
};

export default AboutPage
