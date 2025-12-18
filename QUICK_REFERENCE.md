# 🚀 Quick Reference Card

## Start Servers

### Option 1: Double-click this file
```
START_SERVERS.bat
```

### Option 2: Manual start
**Terminal 1 (Laravel):**
```bash
cd c:\xampp\htdocs\Sensing-Nature-main
php artisan serve
```

**Terminal 2 (Next.js):**
```bash
cd c:\Users\win\Documents\Github\my-test
npm run dev
```

---

## Important URLs

| Service | URL |
|---------|-----|
| **Next.js Website** | http://localhost:3000 |
| **Laravel API** | http://localhost:8000/api |
| **Admin Panel** | http://localhost:8000/admin |
| **API Tester** | http://localhost:3000/api-tester.html |

---

## API Endpoints Quick List

```bash
# GET Requests (Fetch Data)
/api/hero                   # Hero section
/api/services               # All services
/api/services/{slug}        # Single service
/api/projects               # All projects
/api/projects/featured      # Featured projects only
/api/projects/{slug}        # Single project
/api/trainings              # All training
/api/trainings/{slug}       # Single training
/api/team                   # Team members
/api/about                  # About section
/api/portfolio              # Portfolio items
/api/settings               # App settings
/api/contact-info           # Contact info

# POST Requests (Submit Data)
/api/contact                # Contact form submission
```

---

## Add Content in Admin

1. Go to: http://localhost:8000/admin
2. Choose section (Services, Projects, etc.)
3. Click "Create"
4. Fill the form (English & Arabic)
5. Upload image (if needed)
6. Click "Save"
7. ✅ Done! Check website!

---

## Component Usage

### Services from API:
```jsx
import ServicesFromAPI from '@/components/ServicesFromAPI';
<ServicesFromAPI lang={lang} />
```

### Training:
```jsx
import TrainingSection from '@/components/TrainingSection';
<TrainingSection lang={lang} />
```

### Projects:
```jsx
import ProjectsSection from '@/components/ProjectsSection';
<ProjectsSection lang={lang} />              // All projects
<ProjectsSection lang={lang} featured={true} />  // Featured only
```

---

## Test Integration

1. Start both servers
2. Open: http://localhost:3000/api-tester.html
3. Click "Hero Section" button
4. Should see JSON data
5. ✅ If you see data = Working!
6. ❌ If error = Check Laravel is running

---

## Troubleshooting One-Liners

```bash
# Laravel not starting?
php artisan serve --port=8001

# Next.js error?
npm install

# API not working?
Check .env.local has: NEXT_PUBLIC_API_URL=http://localhost:8000/api

# CORS error?
Clear browser cache
```

---

## File Structure

```
Sensing-Nature-main/          (Laravel Backend)
├── app/
│   ├── Http/
│   │   └── Controllers/
│   │       └── Api/
│   │           └── ApiController.php  ← API Logic
│   └── Models/                        ← Database Models
├── routes/
│   └── api.php                        ← API Routes
└── config/
    └── cors.php                       ← CORS Config

my-test/                      (Next.js Frontend)
├── lib/
│   └── api.js                         ← API Service
├── components/
│   ├── ServicesFromAPI.jsx           ← Services Component
│   ├── TrainingSection.jsx           ← Training Component
│   ├── ProjectsSection.jsx           ← Projects Component
│   └── Contact.jsx                   ← Contact Form
├── app/
│   └── [lang]/
│       └── page.jsx                  ← Homepage
├── public/
│   └── api-tester.html               ← API Tester
└── .env.local                        ← API Configuration
```

---

## Database Tables

Content is stored in these tables:
- `hero_sections` - Hero content
- `services` - Services list
- `projects` - Projects/Portfolio
- `trainings` - Training programs
- `team_members` - Team info
- `about_sections` - About content
- `portfolios` - Portfolio items
- `contact_messages` - Form submissions
- `contact_infos` - Contact details
- `app_settings` - App settings

---

## Common Tasks

### Add New Service:
1. Admin → Services → Create
2. Fill name (EN/AR)
3. Fill descriptions
4. Upload icon
5. Save ✅

### Add New Project:
1. Admin → Projects → Create
2. Fill name (EN/AR)
3. Fill description
4. Upload image
5. Set date
6. Check "Featured" if needed
7. Save ✅

### View Contact Messages:
1. Admin → Contact Messages
2. See all submissions
3. View details
4. Respond to customer ✅

---

## Environment Variables

### Laravel (.env)
```env
APP_URL=http://localhost:8000
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

### Next.js (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

---

## Support Files

📄 **INTEGRATION_COMPLETE.md** - Full setup guide
📄 **README_INTEGRATION.md** - Integration overview
📄 **QUICK_REFERENCE.md** - This file
🔧 **api-tester.html** - Test API endpoints
🚀 **START_SERVERS.bat** - Quick server startup

---

## Status Check

✅ API Controller Created
✅ API Routes Configured
✅ CORS Enabled
✅ Next.js API Service Ready
✅ Components Connected
✅ Contact Form Working
✅ Bilingual Support Active
✅ Admin Panel Working
✅ Documentation Complete

---

## Production Deployment

### Laravel:
1. Set `.env` for production
2. Run: `php artisan config:cache`
3. Run: `php artisan route:cache`
4. Run: `php artisan optimize`
5. Deploy to server

### Next.js:
1. Update API URL in `.env.local`
2. Run: `npm run build`
3. Deploy to Vercel/Netlify

---

**🎉 Everything is Ready to Use!**

**Need help?** Check the full guides:
- INTEGRATION_COMPLETE.md
- README_INTEGRATION.md
