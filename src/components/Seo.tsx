import { Helmet } from "react-helmet-async";

type Props = { title: string; description: string; path?: string; jsonLd?: object | object[]; };

export const Seo = ({ title, description, path = "/", jsonLd }: Props) => {
  const ld = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={path} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={path} />
      <meta property="og:type" content="website" />
      {ld.map((obj, i) => (<script key={i} type="application/ld+json">{JSON.stringify(obj)}</script>))}
    </Helmet>
  );
};
export default Seo;