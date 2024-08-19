import { Helmet } from "react-helmet-async";

// prop type 
type IProps = {
  title: string;
}
const SEOCom = ({ title }: IProps) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title ? `${title} - Minatas resources` : 'Minatas Resources - Microlending & Finance'}</title>
      <meta name="description" content="Minatas Resources - Microlending & Finance" />
      <meta name="keywords" content="Minatas Resources - Microlending & Finance" />
      <meta name="robots" content="INDEX,FOLLOW" />
    </Helmet>
  );
};

export default SEOCom;