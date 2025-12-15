export default function handler(req, res) {
  const heroCSS = `
    /* CRITICAL HERO CSS - INLINE THIS */
    .hero-section {
      background: linear-gradient(135deg, #043911 0%, #33750c 50%, #25a244 100%) !important;
      min-height: 720px !important;
      padding-top: 80px !important;
      contain: layout style paint !important;
    }
    .hero-title {
      color: white !important;
      font-size: clamp(1.75rem, 4vw, 3rem) !important;
      font-weight: bold !important;
      line-height: 1.2 !important;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3) !important;
    }
    .hero-description {
      color: #ffffff !important;
      font-size: clamp(0.95rem, 2vw, 1.3rem) !important;
      line-height: 1.5 !important;
      text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2) !important;
    }
  `;
  
  res.setHeader('Content-Type', 'text/css');
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  res.status(200).send(heroCSS);
}