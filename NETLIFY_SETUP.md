# Netlify Deployment Setup Guide

## Environment Variables

Configure these environment variables in your Netlify dashboard:
**Site Settings > Environment Variables**

### Required Variables

```bash
# InstantDB Configuration
NEXT_PUBLIC_INSTANT_APP_ID=2935a123-9c03-4e77-8072-d370920ae7fc
INSTANT_SECRET_TOKEN=b1d7ae0d-0c31-470e-a458-0cab9809fa6c

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://codentmed-ips.netlify.app
```

### Optional Variables (Legacy)

```bash
# Supabase (if using in the future)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## Build Configuration

The `netlify.toml` file is already configured with:
- Build command: `npm run build`
- Node version: 18.20.8
- Next.js plugin for optimal performance
- Sitemap submission plugin

## Deployment Steps

1. **Connect Repository**
   - Go to Netlify dashboard
   - Click "Add new site" > "Import an existing project"
   - Connect to GitHub repository: `Jorge80H/Codentmed-ips`
   - Select branch: `main`

2. **Configure Environment Variables**
   - Go to Site Settings > Environment Variables
   - Add all variables listed above
   - Save changes

3. **Deploy**
   - Click "Deploy site"
   - Netlify will automatically build and deploy
   - Build should complete successfully in ~2-3 minutes

## Troubleshooting

### Build Fails with "non-zero exit code"

**Cause**: Missing environment variables or build errors

**Solution**:
1. Check that all environment variables are set in Netlify dashboard
2. Review build logs in Netlify for specific errors
3. Ensure Node version matches (18.20.8)

### Build succeeds but site doesn't work

**Cause**: InstantDB not properly initialized

**Solution**:
1. Verify `NEXT_PUBLIC_INSTANT_APP_ID` is set correctly
2. Check browser console for errors
3. Verify InstantDB dashboard shows the app is active

### i18n errors during build

**Cause**: Missing translation files or i18n configuration issues

**Solution**:
1. Ensure `public/locales/` directory exists with both `es/` and `en/` subdirectories
2. Check that `next-i18next.config.js` is properly configured
3. Verify `_app.tsx` imports the i18n config

## Post-Deployment

After successful deployment:

1. **Test the site**
   - Visit both `/es` and `/en` routes
   - Check that all pages load correctly
   - Verify forms work properly

2. **Configure Custom Domain** (when ready)
   - Go to Site Settings > Domain management
   - Add custom domain
   - Configure DNS records as instructed

3. **Enable HTTPS**
   - Netlify automatically provisions SSL certificate
   - Wait a few minutes for certificate to be issued

4. **Set up Monitoring**
   - Enable Netlify Analytics (optional, paid feature)
   - Set up Google Analytics using the tag in the site
   - Monitor build notifications

## Additional Resources

- [Netlify Next.js Documentation](https://docs.netlify.com/frameworks/next-js/)
- [InstantDB Documentation](https://instantdb.com/docs)
- [Project README](./README.md)
