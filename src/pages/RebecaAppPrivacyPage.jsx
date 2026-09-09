import Seo from '../components/Seo';
import PolicyDocument from '../components/PolicyDocument';
import { rebecaAppPolicy } from '../data/legalRebecaApp';

// URL informada na ficha do app na Google Play. Precisa continuar respondendo
// enquanto o app estiver publicado — nao renomear.
const PATH = '/legal/rebeca-medina-advocacia/politica-de-privacidade';

export default function RebecaAppPrivacyPage() {
  return (
    <>
      <Seo path={PATH} />
      <PolicyDocument policy={rebecaAppPolicy} />
    </>
  );
}
