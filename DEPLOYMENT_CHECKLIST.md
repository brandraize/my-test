# 🚀 Deployment Checklist

Use this checklist to ensure a smooth deployment to production.

---

## ✅ Pre-Deployment Checklist

### Build & Test
- [ ] Run `npm run build` locally without errors
- [ ] Run `npm start` and test the site
- [ ] Test homepage (EN): http://localhost:3000/en
- [ ] Test homepage (AR): http://localhost:3000/ar
- [ ] Test navigation between pages
- [ ] Test contact form submission
- [ ] Test product/service pages
- [ ] Test mobile responsiveness (Chrome DevTools)
- [ ] Test on slow 3G throttling

### Performance
- [ ] Run Lighthouse audit locally (Score should be 85+)
- [ ] Check that images load quickly
- [ ] Verify no console errors in browser
- [ ] Check that fonts load correctly
- [ ] Verify animations are smooth

### Accessibility
- [ ] Test with keyboard navigation (Tab key)
- [ ] Check focus states are visible
- [ ] Test with screen reader (optional but recommended)
- [ ] Verify all images have alt text
- [ ] Check color contrast

### SEO
- [ ] Verify meta descriptions are present
- [ ] Check Open Graph tags (use https://www.opengraph.xyz/)
- [ ] Test Twitter Card (use https://cards-dev.twitter.com/validator)
- [ ] Verify canonical URLs are correct
- [ ] Check hreflang tags for i18n

---

## 🔧 Configuration Checklist

### Environment Variables
- [ ] Set `NEXT_PUBLIC_SITE_URL=https://sensingnatures.com` in Vercel
- [ ] Add Google Analytics ID (if using)
- [ ] Add any API keys needed
- [ ] Verify Firebase config is set

### Domain & DNS
- [ ] Domain pointed to Vercel
- [ ] SSL certificate active
- [ ] www redirect configured (if needed)
- [ ] DNS propagation complete

### Vercel Settings
- [ ] Framework preset: Next.js
- [ ] Node version: 18.x or 20.x
- [ ] Build command: `next build`
- [ ] Output directory: `.next`
- [ ] Install command: `npm install`

---

## 🚀 Deployment Steps

### 1. Commit Changes
```bash
git add .
git commit -m "Performance optimizations: 90+ Lighthouse score"
git push origin main
```

### 2. Deploy to Vercel
```bash
# Using Vercel CLI (recommended)
vercel --prod

# Or push to trigger auto-deployment
git push
```

### 3. Wait for Build
- Monitor build logs in Vercel dashboard
- Typical build time: 2-5 minutes
- Look for "✓ Build completed successfully"

---

## ✅ Post-Deployment Checklist

### Immediate Verification (0-5 minutes)
- [ ] Site loads at https://sensingnatures.com
- [ ] Homepage renders correctly
- [ ] No JavaScript errors in console
- [ ] Images load correctly
- [ ] Fonts display properly
- [ ] Both EN and AR versions work
- [ ] Navigation links work
- [ ] Mobile version works on real device

### Performance Testing (5-15 minutes)
- [ ] Run Lighthouse on production
  - Performance: 90+
  - Accessibility: 95+
  - Best Practices: 90+
  - SEO: 95+
- [ ] Check PageSpeed Insights (mobile & desktop)
- [ ] Test Core Web Vitals:
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1
- [ ] Verify images use WebP/AVIF format

### SEO Verification (15-30 minutes)
- [ ] Verify `sitemap.xml` loads: https://sensingnatures.com/sitemap.xml
- [ ] Check `robots.txt`: https://sensingnatures.com/robots.txt
- [ ] Submit sitemap to Google Search Console
- [ ] Test social sharing:
  - Share on Twitter - check card preview
  - Share on Facebook - check image and description
  - Share on LinkedIn - check preview
- [ ] Verify structured data (if implemented)

### Accessibility Testing (15-30 minutes)
- [ ] Test with keyboard navigation
- [ ] Check screen reader compatibility (NVDA/JAWS)
- [ ] Verify ARIA labels work
- [ ] Check color contrast with tools
- [ ] Test form accessibility
- [ ] Verify focus indicators

### Cross-Browser Testing (30-60 minutes)
- [ ] Chrome (Windows/Mac)
- [ ] Firefox (Windows/Mac)
- [ ] Safari (Mac/iOS)
- [ ] Edge (Windows)
- [ ] Mobile Chrome (Android)
- [ ] Mobile Safari (iOS)

### Device Testing
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (iPad, 768x1024)
- [ ] Mobile (iPhone, 375x667)
- [ ] Large mobile (414x896)

---

## 📊 Monitoring Setup (Optional but Recommended)

### Google Tools
- [ ] Set up Google Analytics 4
- [ ] Verify Google Search Console
- [ ] Enable Google Tag Manager (if using)
- [ ] Set up Google PageSpeed Insights monitoring

### Vercel Analytics
- [ ] Enable Vercel Analytics
- [ ] Check Real Experience Score (RES)
- [ ] Monitor Core Web Vitals
- [ ] Track visitor metrics

### Error Monitoring
- [ ] Set up Sentry (optional)
- [ ] Configure error alerts
- [ ] Test error reporting

---

## 🎯 Success Criteria

### Performance Metrics (Must Achieve)
| Metric | Target | Status |
|--------|--------|--------|
| Lighthouse Performance | 90+ | [ ] |
| First Contentful Paint | < 1.8s | [ ] |
| Largest Contentful Paint | < 2.5s | [ ] |
| Total Blocking Time | < 200ms | [ ] |
| Cumulative Layout Shift | < 0.1 | [ ] |
| Lighthouse Accessibility | 95+ | [ ] |
| Lighthouse SEO | 95+ | [ ] |

### Functionality (Must Work)
- [ ] All pages load without errors
- [ ] Forms submit successfully
- [ ] Images display correctly
- [ ] Navigation works
- [ ] Mobile menu functions
- [ ] Language switcher works
- [ ] Links are not broken

---

## 🐛 Troubleshooting

### Build Fails
1. Check build logs in Vercel
2. Run `npm run build` locally to reproduce
3. Verify all dependencies are installed
4. Check for TypeScript errors (if using TS)
5. Verify all imports are correct

### Images Not Loading
1. Check `next.config.mjs` image configuration
2. Verify CDN domain is whitelisted
3. Check image URLs are correct
4. Test image URLs directly in browser

### Performance Score Low
1. Run Lighthouse in incognito mode
2. Disable browser extensions
3. Test on clean device/network
4. Check for render-blocking resources
5. Verify caching headers are set

### SEO Issues
1. Verify meta tags in page source
2. Check robots.txt allows indexing
3. Submit sitemap to Google
4. Use Google's Rich Results Test
5. Check canonical URLs

### Accessibility Score Low
1. Run axe DevTools extension
2. Check WAVE accessibility tool
3. Verify ARIA labels
4. Test keyboard navigation
5. Check color contrast

---

## 📞 Support Resources

If you need help:

1. **Next.js Documentation**
   - https://nextjs.org/docs

2. **Web Vitals Guide**
   - https://web.dev/vitals/

3. **Lighthouse Scoring**
   - https://developer.chrome.com/docs/lighthouse/

4. **Vercel Support**
   - https://vercel.com/support

5. **Accessibility Guidelines**
   - https://www.w3.org/WAI/WCAG21/quickref/

---

## ✅ Final Sign-Off

Once all checks pass:

- [ ] Performance targets met
- [ ] All functionality works
- [ ] SEO is properly configured
- [ ] Accessibility standards met
- [ ] Mobile experience is smooth
- [ ] Analytics tracking works
- [ ] Monitoring is set up

**Deployment Status:** [ ] ✅ APPROVED FOR PRODUCTION

**Date:** _______________

**Deployed By:** _______________

**Production URL:** https://sensingnatures.com

---

## 🎉 Congratulations!

Your website is now live and optimized for:
✅ Maximum performance
✅ Excellent SEO
✅ High accessibility
✅ Great user experience
✅ Production-grade security

**Next milestone:** Monitor Core Web Vitals and maintain 90+ scores! 🚀
