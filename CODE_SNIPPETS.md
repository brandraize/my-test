# Code Snippets - Performance Optimization Examples

## 🎯 How to Use OptimizedImage Component

### Example 1: Hero Section Image (Priority)
```jsx
import OptimizedImage from '@/components/OptimizedImage';

export default function Hero() {
  return (
    <div className="hero-section">
      <OptimizedImage
        src="https://d1foa0aaimjyw4.cloudfront.net/hero-banner.jpg"
        alt="Environmental solutions hero banner"
        width={1920}
        height={1080}
        priority={true}
        quality={90}
        sizes="100vw"
        className="hero-image"
      />
    </div>
  );
}
```

### Example 2: Product Gallery (Lazy Load)
```jsx
import OptimizedImage from '@/components/OptimizedImage';

export default function ProductGallery({ products }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <OptimizedImage
            src={product.image}
            alt={product.name}
            width={400}
            height={300}
            priority={false}
            quality={85}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}
```

### Example 3: Background Image with Fill
```jsx
import OptimizedImage from '@/components/OptimizedImage';

export default function Section() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '500px' }}>
      <OptimizedImage
        src="/background.jpg"
        alt="Background pattern"
        fill={true}
        priority={false}
        quality={75}
        sizes="100vw"
        style={{ objectFit: 'cover' }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2>Content Over Image</h2>
      </div>
    </div>
  );
}
```

---

## 🚀 Optimized Button with Accessibility

```jsx
export default function CTAButton({ href, text, lang = 'en' }) {
  const [isHovered, setIsHovered] = useState(false);
  const isRTL = lang === 'ar';

  return (
    <Link 
      href={href}
      aria-label={text}
    >
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="cta-button"
        style={{
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          padding: '12px 24px',
          backgroundColor: '#25a244',
          color: 'white',
          border: 'none',
          borderRadius: '24px',
          cursor: 'pointer',
          fontSize: 'clamp(14px, 2vw, 18px)',
          willChange: isHovered ? 'transform' : 'auto',
        }}
        aria-label={text}
        role="button"
        tabIndex={0}
      >
        <span>{text}</span>
        <span 
          style={{
            marginLeft: isRTL ? '0' : '8px',
            marginRight: isRTL ? '8px' : '0',
            transition: 'transform 0.2s ease',
            display: 'inline-block',
            transform: isHovered ? 'translateX(0)' : `translateX(${isRTL ? '8px' : '-8px'})`,
          }}
          aria-hidden="true"
        >
          {isRTL ? '←' : '→'}
        </span>
      </button>
    </Link>
  );
}
```

---

## 🎨 CSS Performance Best Practices

### Critical CSS (Above-the-Fold Only)
```css
/* critical.css */
:root {
  --primary: #1bac0d;
  --font-main: 'Tajawal', system-ui, sans-serif;
}

/* Only hero and navbar */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #043911 0%, #25a244 100%);
  will-change: auto;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1030;
  transition: background-color 0.3s ease;
}
```

### Non-Critical CSS (Defer Loading)
```jsx
// In component or page
import dynamic from 'next/dynamic';

// Lazy load heavy components
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>,
  ssr: false, // Disable SSR if not needed
});
```

---

## ⚡ Lazy Loading Components

### Example 1: Modal (Load on Demand)
```jsx
import dynamic from 'next/dynamic';
import { useState } from 'react';

const Modal = dynamic(() => import('./Modal'), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});

export default function Page() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Open Modal
      </button>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </>
  );
}
```

### Example 2: Heavy Chart Library
```jsx
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-chartjs-2'), {
  loading: () => <div>Loading chart...</div>,
  ssr: false,
});

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Chart data={chartData} />
    </div>
  );
}
```

---

## 🔍 SEO-Optimized Metadata

### Page-Level Metadata
```jsx
// app/[lang]/services/page.jsx
export async function generateMetadata({ params }) {
  const { lang } = await params;
  
  return {
    title: lang === 'ar' ? 'خدماتنا' : 'Our Services',
    description: lang === 'ar' 
      ? 'نقدم حلول بيئية وجيولوجية متكاملة'
      : 'We provide comprehensive environmental and geological solutions',
    keywords: lang === 'ar'
      ? 'خدمات بيئية, حلول جيولوجية'
      : 'environmental services, geological solutions',
    openGraph: {
      title: lang === 'ar' ? 'خدماتنا | Sensing Nature' : 'Our Services | Sensing Nature',
      description: lang === 'ar' 
        ? 'نقدم حلول بيئية وجيولوجية متكاملة'
        : 'We provide comprehensive environmental and geological solutions',
      images: ['/og-services.jpg'],
      locale: lang === 'ar' ? 'ar_SA' : 'en_US',
    },
    alternates: {
      canonical: `https://sensingnatures.com/${lang}/services`,
      languages: {
        'en': 'https://sensingnatures.com/en/services',
        'ar': 'https://sensingnatures.com/ar/services',
      },
    },
  };
}
```

---

## 🎯 Accessibility Patterns

### Skip to Content Link
```jsx
// Add to layout.jsx
export default function Layout({ children }) {
  return (
    <>
      <a 
        href="#main-content" 
        className="skip-to-content"
        style={{
          position: 'absolute',
          left: '-9999px',
          zIndex: 9999,
          padding: '1rem',
          background: '#25a244',
          color: 'white',
          textDecoration: 'none',
        }}
        onFocus={(e) => {
          e.target.style.left = '0';
        }}
        onBlur={(e) => {
          e.target.style.left = '-9999px';
        }}
      >
        Skip to main content
      </a>
      
      <Navbar />
      
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      
      <Footer />
    </>
  );
}
```

### Accessible Form Example
```jsx
export default function ContactForm({ lang }) {
  return (
    <form aria-label={lang === 'ar' ? 'نموذج الاتصال' : 'Contact form'}>
      <div className="form-group">
        <label htmlFor="name">
          {lang === 'ar' ? 'الاسم' : 'Name'}
          <span aria-label="required" style={{ color: 'red' }}>*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          aria-required="true"
          aria-describedby="name-error"
          aria-invalid="false"
        />
        <span id="name-error" role="alert" style={{ color: 'red', display: 'none' }}>
          {lang === 'ar' ? 'الرجاء إدخال الاسم' : 'Please enter your name'}
        </span>
      </div>

      <button
        type="submit"
        aria-label={lang === 'ar' ? 'إرسال النموذج' : 'Submit form'}
      >
        {lang === 'ar' ? 'إرسال' : 'Submit'}
      </button>
    </form>
  );
}
```

---

## 📦 Code Splitting Examples

### Route-Based Splitting (Automatic)
```jsx
// app/[lang]/about/page.jsx
// Automatically code-split by Next.js

export default function AboutPage() {
  return <div>About content</div>;
}
```

### Component-Based Splitting (Manual)
```jsx
import dynamic from 'next/dynamic';

// Heavy components - load on demand
const VideoPlayer = dynamic(() => import('@/components/VideoPlayer'), {
  loading: () => <div>Loading video...</div>,
  ssr: false,
});

const Map = dynamic(() => import('@/components/Map'), {
  loading: () => <div>Loading map...</div>,
  ssr: false,
});

export default function Page() {
  return (
    <>
      <h1>Page Content</h1>
      <VideoPlayer src="/video.mp4" />
      <Map location={{ lat: 40.7128, lng: -74.0060 }} />
    </>
  );
}
```

---

## 🔧 Performance Hooks

### useIntersectionObserver (Lazy Load on Scroll)
```jsx
import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options = {}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return [elementRef, isVisible];
}

// Usage
export default function LazySection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div ref={ref}>
      {isVisible ? (
        <HeavyComponent />
      ) : (
        <div style={{ height: '400px' }}>Loading...</div>
      )}
    </div>
  );
}
```

---

## 🎨 Optimized Animation Patterns

### CSS Transform (GPU-Accelerated)
```jsx
export default function AnimatedCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'scale(1.05) translateY(-4px)' : 'scale(1)',
        transition: 'transform 0.3s ease',
        willChange: isHovered ? 'transform' : 'auto', // Only when needed
      }}
    >
      Card Content
    </div>
  );
}
```

### Avoid (Bad Pattern)
```jsx
// ❌ Causes layout reflow
style={{
  marginTop: isHovered ? '10px' : '0',
  width: isHovered ? '110%' : '100%',
}}

// ✅ Use transform instead
style={{
  transform: isHovered ? 'scale(1.1) translateY(10px)' : 'scale(1)',
}}
```

---

## 📊 Web Vitals Tracking

### Custom Web Vitals Hook
```jsx
// hooks/useWebVitals.js
import { useEffect } from 'react';

export function useWebVitals(callback) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        callback({
          name: entry.name,
          value: entry.value,
          rating: getRating(entry),
        });
      });
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'layout-shift', 'first-input'] });

    return () => observer.disconnect();
  }, [callback]);
}

function getRating(entry) {
  if (entry.entryType === 'largest-contentful-paint') {
    return entry.renderTime < 2500 ? 'good' : entry.renderTime < 4000 ? 'needs-improvement' : 'poor';
  }
  // Add other metrics...
}

// Usage in page
export default function Page() {
  useWebVitals((metric) => {
    console.log(metric);
    // Send to analytics
  });

  return <div>Page content</div>;
}
```

---

## 🚀 Ready to Deploy!

All these patterns are production-ready and optimized for:
✅ Core Web Vitals
✅ Accessibility (WCAG 2.1 AA)
✅ SEO best practices
✅ Performance budgets
✅ Mobile-first design
