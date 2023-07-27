import {Helmet} from "react-helmet-async";

const SEO = ({seo,id}) => {

 return (
    <Helmet>
        <title>{seo?.title}</title>
        <meta name="description" content={seo?.description} />
        <link rel="canonical" href={`/card/${id}`} />
    </Helmet>
 )
};
export default SEO;
