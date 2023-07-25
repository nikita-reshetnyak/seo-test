import {Helmet} from "react-helmet";
// const seo = {
//     title: 'Косметика для лица',
//     description: 'Лучшая косметика, используй хоть для лица, хоть для пяток'
// };
const SEO = ({seo}) => {

 return (
    <Helmet>
        <title>{seo?.title}</title>
        <meta name="description" content={seo?.description} />
    </Helmet>
 )
};
export default SEO;
