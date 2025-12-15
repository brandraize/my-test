# LCP Optimization Roadmap

## Current Status
- **LCP:** 3.5s → Target: < 2.5s (-1s needed)
- **FCP:** 2.0s → Target: < 1.8s 
- **CLS:** 0.327 → Target: < 0.1
- **Performance Score:** 73 → Target: 90+

---

## Phase 1: IMMEDIATE (Applied Now - Test in 5 min)

### ✅ Font Optimization
- Changed `display: swap` → `display: optional` (saves 200-400ms)
- Added font preload hint
- System font fallback improved

### ✅ Hero Section LCP Fixes
- Removed `contentVisibility` (was deferring paint)
- Removed `willChange` (unnecessary GPU layer)
- Added `contain: layout style paint` for optimal rendering

### ✅ Resource Loading
- Added preconnect to Google Fonts CDN
- Font preload for immediate text render
- Bootstrap loads post-first-paint via double RAF

### Expected Gains
- **LCP:** 3.5s → ~2.3s (-1.2s) ✅
- **FCP:** 2.0s → ~1.6s (-400ms)
- **CLS:** 0.327 → ~0.15 (stable critical CSS)

---

## Phase 2: SHORT-TERM (1 Week)

### 1. Image Optimization
```bash
# Run these commands to optimize all images
npm install sharp-cli -g

# Optimize all webp images
for file in public/**/*.webp; do
  sharp -i "$file" -o "${file%.webp}-opt.webp" --webp-quality 60 --webp-effort 6
done

# Replace originals
mv public/**/*-opt.webp public/**/
```

### 2. Code Splitting Enhancement
```jsx
// app/[lang]/page.jsx - Defer non-critical sections
const ServicesSection = dynamic(() => import("../../components/ServicesSection"), {
  loading: () => null,
  ssr: false, // Client-only for below fold
});
```

### 3. Add Service Worker for Caching
```javascript
// public/sw.js
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/logo.webp',
        '/_next/static/css/',
        '/_next/static/media/tajawal-latin-400-normal.woff2',
      ]);
    })
  );
});
```

### Expected Gains
- **LCP:** 2.3s → ~2.0s (-300ms)
- **Unused CSS:** 31KB → 10KB (-21KB)
- **Unused JS:** 47KB → 20KB (-27KB)

---

## Phase 3: LONG-TERM (1 Month)

### 1. Server Configuration (Nginx)
```nginx
# /etc/nginx/sites-available/sensingnatures.com
server {
    # Enable HTTP/2
    listen 443 ssl http2;
    
    # Aggressive caching
    location /_next/static/ {
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
    
    # Preload critical resources
    location / {
        add_header Link "</logo.webp>; rel=preload; as=image";
        add_header Link "</fonts/tajawal.woff2>; rel=preload; as=font; crossorigin";
    }
    
    # Brotli compression
    brotli on;
    brotli_comp_level 6;
    brotli_types text/css application/javascript;
}
```

### 2. CDN Implementation
```javascript
// next.config.mjs
const nextConfig = {
  images: {
    loader: 'cloudflare',
    domains: ['sensingnatures.com'],
    formats: ['image/avif', 'image/webp'],
  },
  assetPrefix: 'https://cdn.sensingnatures.com',
};
```

### 3. Build Optimization
```javascript
// next.config.mjs - Add webpack optimizations
webpack: (config, { dev, isServer }) => {
  if (!dev && !isServer) {
    // Tree shake unused code
    config.optimization.usedExports = true;
    
    // Aggressive minification
    config.optimization.minimize = true;
    
    // Split chunks optimally
    config.optimization.splitChunks = {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: 10,
        },
        common: {
          minChunks: 2,
          priority: 5,
          reuseExistingChunk: true,
        },
      },
    };
  }
  return config;
},
```

### Expected Gains
- **LCP:** 2.0s → ~1.8s (-200ms) ✅ TARGET MET
- **FCP:** 1.6s → ~1.2s (-400ms)
- **Performance:** 73 → 92+

---

## Testing Commands

### Before/After Comparison
```bash
# Run Lighthouse 5 times and average
for i in {1..5}; do
  lighthouse https://sensingnatures.com/en --only-categories=performance --output json --output-path="./lighthouse-$i.json" --chrome-flags="--headless"
done

# Calculate average
node -e "
const fs = require('fs');
const scores = [1,2,3,4,5].map(i => 
  JSON.parse(fs.readFileSync(\`lighthouse-\${i}.json\`)).categories.performance.score
);
console.log('Average:', scores.reduce((a,b)=>a+b)/5 * 100);
"
```

### Monitoring Dashboard
```javascript
// app/[lang]/layout.jsx - Add Web Vitals reporting
export function reportWebVitals(metric) {
  if (metric.label === 'web-vital') {
    console.log(metric); // Replace with analytics
    
    // Send to Google Analytics
    window.gtag?.('event', metric.name, {
      value: Math.round(metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }
}
```

---

## Success Metrics

| Metric | Before | Phase 1 | Phase 2 | Phase 3 | Target |
|--------|--------|---------|---------|---------|--------|
| LCP | 3.5s | 2.3s | 2.0s | 1.8s | <2.5s ✅ |
| FCP | 2.0s | 1.6s | 1.4s | 1.2s | <1.8s ✅ |
| CLS | 0.327 | 0.15 | 0.08 | 0.05 | <0.1 ✅ |
| Performance | 73 | 81 | 87 | 92 | 90+ ✅ |

---

## Next Steps

1. **Deploy current changes** (5 min)
2. **Run Lighthouse test** (2 min)
3. **Verify LCP < 2.5s** 
4. **If still slow, move to Phase 2**
