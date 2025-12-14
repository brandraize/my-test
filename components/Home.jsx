// app/[lang]/page.js - SERVER COMPONENT
import Home from '../../components/Home';

// Static metadata generation
export function generateMetadata({ params }) {
  const { lang = 'en' } = params;
  
  const metadata = {
    en: {
      title: "Sensing Nature | Environmental & Geological Solutions",
      description: "Innovative environmental, geological, geophysical & meteorological solutions",
    },
    ar: {
      title: "استشعار الطبيعة | حلول بيئية وجيولوجية",
      description: "حلول بيئية وجيولوجية وجيوفيزيائية وأرصاد جوية مبتكرة",
    }
  };
  
  const meta = metadata[lang] || metadata.en;
  
  return {
    title: meta.title,
    description: meta.description,
    robots: 'index, follow',
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'website',
    },
  };
}

// Server component export
export default async function Page({ params }) {
  const { lang = 'en' } = await params;
  
  // Add cache headers
  const headers = new Headers();
  headers.set('Cache-Control', 'public, max-age=3600, s-maxage=86400');
  
  return <Home lang={lang} />;
}