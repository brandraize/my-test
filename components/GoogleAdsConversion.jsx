"use client";
import { useEffect } from 'react';

/**
 * Google Ads Conversion Tracking Component
 * This tracks conversion events for leads/form submissions
 * Use this component on your thank you/success pages
 */
export default function GoogleAdsConversion({ conversionLabel = 'oZUpCKnWw8obEPf_1etB' }) {
  useEffect(() => {
    // Wait for gtag to be available
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': `AW-17674108919/${conversionLabel}`
      });
      console.log('✅ Google Ads conversion tracked');
    } else {
      // Retry after a short delay if gtag isn't loaded yet
      const timer = setTimeout(() => {
        if (window.gtag) {
          window.gtag('event', 'conversion', {
            'send_to': `AW-17674108919/${conversionLabel}`
          });
          console.log('✅ Google Ads conversion tracked (delayed)');
        }
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [conversionLabel]);

  return null;
}
