# 🚀 Deployment Guide - GitHub Pages

## Prerequisites
- GitHub repository set up
- Domain `nirmendelson.com` configured

## Quick Deploy
```bash
npm run deploy
```

## Manual Steps (if needed)

### 1. Build the project
```bash
npm run build
```

### 2. Deploy to GitHub Pages
```bash
npx gh-pages -d dist
```

### 3. Configure GitHub Pages
- Go to your repository Settings
- Navigate to Pages section
- Set source to "Deploy from a branch"
- Select `gh-pages` branch
- Set custom domain to `nirmendelson.com`
- Check "Enforce HTTPS"

### 4. DNS Configuration
Add these records to your domain provider:
```
Type: CNAME
Name: @
Value: yourusername.github.io
```

## Troubleshooting
- If images don't load, check that they're in the `public/` folder
- Ensure `base: '/'` is set in `vite.config.js`
- Verify `homepage` field in `package.json`

## Post-Deployment
- Wait 5-10 minutes for changes to propagate
- Check your domain: https://nirmendelson.com
- Verify all images and routes work correctly
