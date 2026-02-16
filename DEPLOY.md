# Deploying to Vercel

Since this project relies on a binary (`yt-dlp`), there are special considerations for deployment.

## Prerequisites
1.  **GitHub Account**: You need to push this code to a GitHub repository.
2.  **Vercel Account**: Sign up at [vercel.com](https://vercel.com) (free).

## Steps to Deploy

### 1. Push Code to GitHub
Create a new repository on GitHub and push all files, **including the `yt-dlp-linux` binary**.

**Important**: Standard `.gitignore` often ignores binaries. Ensure `yt-dlp-linux` is NOT ignored.
Check your `.gitignore` file and make sure it does NOT contain `yt-dlp` or `yt-dlp-linux`.

### 2. Import into Vercel
1.  Go to your Vercel Dashboard.
2.  Click "Add New..." -> "Project".
3.  Select your GitHub repository.
4.  **Framework Preset**: Next.js (should be auto-detected).
5.  **Root Directory**: `./` (default).
6.  Click **Deploy**.

## Troubleshooting Vercel Issues

### "Command not found" or "Permission denied"
The code tries to automatically set executable permissions (`chmod 755`), but if it fails, the deployment might break.

### 50MB Function Limit
Vercel Serverless Functions have a size limit. The `yt-dlp` binary is ~35MB. Combined with Next.js code, checks if it exceeds 50MB zip size. If deployment fails due to size:
- Use a lighter alternative or
- Deploy to a VPS (like DigitalOcean, specialized render setups) instead of serverless.

### "Instagram is blocking access"
Data center IP addresses (like Vercel's AWS/GCP servers) are flagged by Instagram. 
- **Symptom**: The app deploys, but downloads fail with "Instagram is blocking access".
- **Fix**: There is no easy fix for free hosting IPs. You would need to use residential proxies or host on a residential connection (like your own computer via `localtunnel`).
