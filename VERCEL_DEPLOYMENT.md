# Vercel Deployment Guide - Frontend

Your backend is live at `https://admin.sensingnatures.com` ✅

Now deploy your Next.js frontend to Vercel with the production API.

## What's Been Updated

✅ **API URL Changed**: `.env.local` now points to `https://admin.sensingnatures.com/api`
✅ **CORS Configured**: Laravel backend allows requests from `sensingnatures.com`

## Option 1: Deploy via Vercel CLI (Recommended)

### 1. Install Vercel CLI
```bash
npm i -g vercel
```

### 2. Login to Vercel
```bash
vercel login
```

### 3. Set Environment Variables
```bash
cd C:\Users\win\Documents\Github\my-test

# Set production environment variable
vercel env add NEXT_PUBLIC_API_URL
# When prompted, enter: https://admin.sensingnatures.com/api
# Select: Production
```

### 4. Deploy to Production
```bash
vercel --prod
```

### 5. Link Custom Domain
```bash
vercel domains add sensingnatures.com
vercel domains add www.sensingnatures.com
```

## Option 2: Deploy via Vercel Dashboard

### 1. Push Code to GitHub/GitLab
```bash
cd C:\Users\win\Documents\Github\my-test
git add .
git commit -m "Update API URL for production"
git push origin main
```

### 2. Connect to Vercel
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: .next

### 3. Add Environment Variables
In Vercel dashboard → Settings → Environment Variables:

| Name | Value | Environment |
|------|-------|-------------|
| `NEXT_PUBLIC_API_URL` | `https://admin.sensingnatures.com/api` | Production |

### 4. Deploy
Click "Deploy" button

### 5. Add Custom Domain
1. Go to Settings → Domains
2. Add `sensingnatures.com`
3. Add `www.sensingnatures.com`
4. Follow DNS instructions (you may need to update your DNS records)

## DNS Configuration for Vercel

Update your DNS records at Hostinger:

### For Apex Domain (sensingnatures.com)
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 14400
```

### For www Subdomain
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 14400
```

**Note**: Keep your existing `A` record for `admin` pointing to `31.97.150.161`

## Verification Steps

### 1. Test API Connection
```bash
# Test from your local machine
curl https://sensingnatures.com/api/test
```

### 2. Check Frontend
- Visit `https://sensingnatures.com`
- Open browser DevTools → Network tab
- Check API calls go to `admin.sensingnatures.com`

### 3. Test Admin Panel
- Visit `https://admin.sensingnatures.com/admin`
- Login with your admin credentials

## Update Backend CORS (Upload to VPS)

You've already updated the CORS file locally. Now upload it to VPS:

### Method 1: Via Git (Recommended)
```bash
# On VPS
ssh root@31.97.150.161
cd /var/www/admin.sensingnatures.com
git pull origin main
php artisan config:cache
php artisan cache:clear
```

### Method 2: Direct Edit on VPS
```bash
ssh root@31.97.150.161
nano /var/www/admin.sensingnatures.com/config/cors.php
```

Update the `allowed_origins` array:
```php
'allowed_origins' => [
    'https://sensingnatures.com',
    'https://www.sensingnatures.com',
    'http://localhost:3000', // For local development
],
```

Then clear cache:
```bash
cd /var/www/admin.sensingnatures.com
php artisan config:cache
php artisan cache:clear
```

## Environment Variables Summary

### Frontend (.env.local for development)
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

### Frontend (Vercel production)
```env
NEXT_PUBLIC_API_URL=https://admin.sensingnatures.com/api
```

### Backend (.env on VPS)
```env
APP_URL=https://admin.sensingnatures.com
FRONTEND_URL=https://sensingnatures.com
```

## Troubleshooting

### CORS Errors
If you see CORS errors in browser console:
```bash
# On VPS
ssh root@31.97.150.161
cd /var/www/admin.sensingnatures.com
php artisan config:clear
php artisan cache:clear
php artisan config:cache
```

### 404 on API Calls
Check that:
- API URL in Vercel env vars is correct
- Backend is running: `https://admin.sensingnatures.com/api`
- DNS propagation is complete (use [whatsmydns.net](https://www.whatsmydns.net))

### Build Failed on Vercel
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Check Node.js version compatibility

## Quick Commands

```bash
# Rebuild and redeploy on Vercel
vercel --prod --force

# Check deployment status
vercel ls

# View logs
vercel logs

# Check environment variables
vercel env ls
```

## Final Architecture

```
┌─────────────────────────────────────┐
│   https://sensingnatures.com        │
│   (Next.js Frontend - Vercel)       │
└──────────────┬──────────────────────┘
               │ API Requests
               ▼
┌─────────────────────────────────────┐
│ https://admin.sensingnatures.com/api│
│   (Laravel Backend - VPS)           │
└─────────────────────────────────────┘
```

## Success Checklist

- [ ] Environment variables set in Vercel
- [ ] Custom domain added to Vercel project
- [ ] DNS records updated for Vercel
- [ ] CORS updated on Laravel backend
- [ ] Frontend deployed successfully
- [ ] API calls work from production
- [ ] Admin panel accessible
- [ ] SSL certificates working on both domains

---

## Next Deployment

For future updates:

**Frontend (Next.js):**
```bash
git add .
git commit -m "Update feature"
git push origin main
# Vercel auto-deploys on push
```

**Backend (Laravel):**
```bash
ssh root@31.97.150.161
cd /var/www/admin.sensingnatures.com
git pull origin main
composer install --no-dev
php artisan migrate --force
php artisan config:cache
php artisan cache:clear
```
