import Csv from '../components/Csv'
import Layout from '../components/Layout'

const ProfilePage = () => {
  return(
    <Layout loadSidebar={false}>
      <div className="row gutter dummy-height">
        <div className="col-12">        
          <h1>Upload Your Transaction</h1>
          <Csv/>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage