import Seo from '../components/Seo';
import PolicyDocument from '../components/PolicyDocument';
import { privacyPolicy } from '../data/legal';

const PATH = '/legal/politica-de-privacidade';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Seo path={PATH} />
      <PolicyDocument policy={privacyPolicy} />
    </>
  );
}
