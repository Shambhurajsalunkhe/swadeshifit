# 🚀 Deployment Guide - SwadeshiFit

## Deployment Options

### 1. Vercel (Recommended) ⚡

**Steps:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel auto-detects Vite
6. Click "Deploy"

**Build Settings:**
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

**Live in 2 minutes!** ✨

### 2. Netlify 🌐

**Steps:**
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import from Git"
4. Select repository
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"

**Bonus:** Netlify provides free SSL and CDN

### 3. GitHub Pages 📄

**Steps:**
1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/swadeshifit",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Update `vite.config.js`:
   ```js
   export default defineConfig({
     base: '/swadeshifit/',
     // ... rest of config
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### 4. Firebase Hosting 🔥

**Steps:**
1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login and initialize:
   ```bash
   firebase login
   firebase init hosting
   ```

3. Configure:
   - Public directory: `dist`
   - Single-page app: Yes
   - GitHub auto-deploy: Optional

4. Build and deploy:
   ```bash
   npm run build
   firebase deploy
   ```

### 5. AWS S3 + CloudFront ☁️

**Steps:**
1. Build the project:
   ```bash
   npm run build
   ```

2. Create S3 bucket
3. Enable static website hosting
4. Upload `dist` folder contents
5. Set bucket policy for public access
6. (Optional) Add CloudFront for CDN

### 6. Docker 🐳

**Create `Dockerfile`:**
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Build and run:**
```bash
docker build -t swadeshifit .
docker run -p 80:80 swadeshifit
```

## Pre-Deployment Checklist ✅

### 1. Code Quality
- [ ] No console.log statements
- [ ] No commented code
- [ ] All imports used
- [ ] No unused variables
- [ ] Proper error handling

### 2. Performance
- [ ] Images optimized
- [ ] Code split where needed
- [ ] Lazy loading implemented
- [ ] Bundle size checked

### 3. SEO & Meta
- [ ] Meta tags in index.html
- [ ] Open Graph tags
- [ ] Favicon added
- [ ] robots.txt created
- [ ] sitemap.xml generated

### 4. Security
- [ ] Environment variables secured
- [ ] API keys not exposed
- [ ] HTTPS enabled
- [ ] CORS configured

### 5. Testing
- [ ] All pages load correctly
- [ ] Forms work properly
- [ ] Navigation functional
- [ ] Responsive on all devices
- [ ] Dark mode works
- [ ] No console errors

## Environment Variables

For production, create `.env.production`:

```env
VITE_API_URL=https://api.swadeshifit.com
VITE_APP_ENV=production
```

## Build Optimization

### 1. Analyze Bundle Size
```bash
npm run build
npx vite-bundle-visualizer
```

### 2. Optimize Images
- Use WebP format
- Compress images
- Use CDN for images
- Implement lazy loading

### 3. Code Splitting
```jsx
// Lazy load pages
const Dashboard = lazy(() => import('./pages/Dashboard'));
```

### 4. Minification
Vite automatically minifies in production build.

## Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as shown
4. Wait for SSL certificate

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS
4. Enable HTTPS

## Monitoring & Analytics

### Add Google Analytics
```html
<!-- In index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Error Tracking
Consider adding:
- Sentry for error tracking
- LogRocket for session replay
- Hotjar for user behavior

## Performance Tips

1. **Enable Compression**
   - Gzip/Brotli on server
   - Vercel/Netlify do this automatically

2. **Cache Strategy**
   - Set proper cache headers
   - Use service workers (PWA)

3. **CDN**
   - Use CDN for static assets
   - Vercel/Netlify include CDN

4. **Lazy Loading**
   - Images
   - Routes
   - Heavy components

## Post-Deployment

### 1. Test Everything
- [ ] All pages accessible
- [ ] Forms submit correctly
- [ ] Images load
- [ ] Charts render
- [ ] Dark mode works
- [ ] Mobile responsive

### 2. Performance Check
- Run Lighthouse audit
- Check Core Web Vitals
- Test loading speed
- Verify mobile performance

### 3. SEO Check
- Submit to Google Search Console
- Create sitemap
- Check meta tags
- Verify social sharing

## Continuous Deployment

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## Troubleshooting

### Build Fails
- Check Node version (use 16+)
- Clear node_modules and reinstall
- Check for syntax errors
- Verify all dependencies installed

### 404 on Refresh
Add `_redirects` file (Netlify) or `vercel.json`:

**Netlify `_redirects`:**
```
/*    /index.html   200
```

**Vercel `vercel.json`:**
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

### Slow Loading
- Optimize images
- Enable compression
- Use CDN
- Implement code splitting

## Cost Estimates

- **Vercel:** Free for hobby projects
- **Netlify:** Free tier (100GB bandwidth)
- **GitHub Pages:** Free
- **Firebase:** Free tier available
- **AWS S3:** ~$1-5/month for small sites

## Recommended: Vercel

For this project, Vercel is recommended because:
- ✅ Zero configuration
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Instant deployments
- ✅ Preview deployments
- ✅ Free for personal projects
- ✅ Excellent performance

## Final Steps

1. Build the project:
   ```bash
   npm run build
   ```

2. Test the build locally:
   ```bash
   npm run preview
   ```

3. Deploy to your chosen platform

4. Share your live URL! 🎉

---

**Your SwadeshiFit app is ready to go live!** 🚀

Need help? Check the platform-specific documentation or reach out to the community.
