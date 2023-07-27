import {Helmet} from "react-helmet-async";
import Cards from "../../components/Cards/Cards";

const ListPage = () => (
<>
<Helmet>
  <title>Вся косметика</title>
  <meta name="description" content="Большой выбор косметики"/>
  <link rel="canonical" href="/list" />
</Helmet>
<Cards />
</>

);
export default ListPage;
