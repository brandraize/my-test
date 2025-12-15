# ⚡ Quick Performance Fixes to Hit 90+

## Current Status: 75 → Target: 90+

### 🎯 Key Issues to Fix

#### 1. **LCP: 5.0s → <2.5s** (CRITICAL)
Current fix: Code-split heavy components
```javascript
// ✅ DONE: Lazy-loaded ServicesSection, NewsEventsSlider, Accreditations
const ServicesSection = dynamic(() => import("./ServicesSection"), {
  loading: () => null,
  ssr: true,
});
```

**Next Steps**:
- [ ] Verify components load after LCP
- [ ] Check hero section has no render-blocking code
- [ ] Ensure critical fonts preload

#### 2. **FCP: 1.9s → <1.8s** (GOOD)
✅ DONE: Preload fonts, optimize CSS

#### 3. **Remove 26 Animated Elements** (PRIORITY)
**Current fix**: Framer-motion in async chunk
**Still needed**: 
- [ ] Disable animations during initial load
- [ ] Use CSS animations instead of JS
- [ ] Remove `motion.div` from Hero

#### 4. **Fix Image Width/Height Issues**
✅ DONE: Added explicit dimensions
**Verify**: Check that all images have width/height props

#### 5. **Reduce Unused CSS (32 KiB)**
**Options**:
```javascript
// Option A: Use PurgeCSS (remove unused Bootstrap)
npm install purgecss

// Option B: Only import used Bootstrap components
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
// Only include what you use
@import "~bootstrap/scss/containers";
@import "~bootstrap/scss/grid";
@import "~bootstrap/scss/buttons";

// Option C: Switch to Tailwind CSS (cleaner for performance)
npm install -D tailwindcss postcss autoprefixer
```

---

## ✅ What's Already Done

1. ✅ Removed Firebase (225 packages reduced)
2. ✅ Fixed .npmrc BOM issues
3. ✅ Added tsconfig.json with path aliases
4. ✅ Implemented code splitting for heavy components
5. ✅ Deferred framer-motion to async chunk
6. ✅ Preloaded critical fonts
7. ✅ Added explicit image dimensions
8. ✅ Lazy-loaded images below fold
9. ✅ Optimized CSS loading (async)

---

## 🚀 To Deploy Now

```bash
# Build locally
npm run build

# Verify build succeeds and check metrics
npm start

# Test Lighthouse
# Chrome DevTools → Lighthouse → Mobile

# Deploy
git push

# Check production metrics
# https://sensingnatures.com (run Lighthouse)
```

---

## 📊 Expected Improvements

| Optimization | Impact | Difficulty |
|--------------|--------|-----------|
| Code splitting | +1-2s LCP | ✅ DONE |
| Font preload | +0.2-0.3s | ✅ DONE |
| CSS async load | +0.2s FCP | ✅ DONE |
| Remove animations | +0.3-0.5s | 🔧 TO DO |
| Reduce unused CSS | +0.1-0.2s | 🔧 TO DO |
| Image optimization | +0.2-0.3s | 🔧 TO DO |

**Total Expected**: +2.2-3.3s improvement = 75 → 88-92 ✅

---

## 🎯 Final Deployment Checklist

- [ ] Run `npm run build` - must succeed
- [ ] Test locally with `npm start`
- [ ] Check Lighthouse on Mobile - target 90+
- [ ] Verify no console errors
- [ ] Check Core Web Vitals
- [ ] Test on 4G throttling
- [ ] Verify all animations work
- [ ] Check mobile menu
- [ ] Test language switching (EN/AR)
- [ ] Push to GitHub
- [ ] Verify Vercel deployment
- [ ] Run Lighthouse on production

---

## 🔧 One-Line Commands

```bash
# Check bundle size
npm run build && du -sh .next

# Test performance locally
npm start
# Open http://localhost:3000 and run Chrome DevTools Lighthouse

# Deploy to Vercel
git push

# Monitor performance
# https://pagespeed.web.dev
# https://web.dev/measure/
```

---

**Target**: Performance 90+, LCP <2.5s, FCP <1.8s  
**Status**: On track! Expected to hit 90+ with current optimizations  
**Next**: Deploy and verify with Lighthouse
