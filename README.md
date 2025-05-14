# Naviio Prototypes

This repository contains prototypes for the Naviio dashboard with KPI visualizations and metrics tracking.

## Local Development

To run this project locally:

```bash
# Install dependencies
npm install

# Serve locally
npx serve
```

Then open http://localhost:3000 in your browser.

## Deployment

### Option 1: Automated Deployment with GitHub Actions (Recommended)

This repository is configured to automatically deploy to StaticDeploy whenever changes are pushed to the `main` branch.

1. Add the StaticDeploy API token to your GitHub repository secrets:
   - Go to your repository on GitHub
   - Navigate to Settings > Secrets and variables > Actions
   - Create a new repository secret named `STATICDEPLOY_API_TOKEN` with your StaticDeploy API token

2. Push your changes to the `main` branch:
```bash
git push origin main
```

3. GitHub Actions will automatically build and deploy your site to public.ka-ve.io

You can check the status of the deployment in the "Actions" tab of your GitHub repository.

### Option 2: Manual Deploy to public.ka-ve.io

If you need to deploy manually, you can use the provided script:

1. Make sure you have the necessary credentials for StaticDeploy
2. Run the deployment script:

```bash
./deploy-to-ka-ve.sh
```

This script will:
- Check if the StaticDeploy API is accessible
- Install dependencies
- Build the static bundle
- Prompt for your StaticDeploy API token if needed
- Deploy the bundle to public.ka-ve.io

After successful deployment, your site will be available at https://public.ka-ve.io/

### Option 3: Local StaticDeploy for Testing

If you want to test deployment locally before pushing to production:

1. Run the setup script:

```bash
./setup-staticdeploy.sh
```

This will:
- Install StaticDeploy CLI globally if not already installed
- Start a local StaticDeploy instance with in-memory storage
- Provide instructions for updating your configuration

2. Update your `staticdeploy-config.json` to use localhost:
```json
{
  "hosts": ["localhost:3000"],
  "configuration": {
    "BASE_URL": "/",
    "API_URL": "http://localhost:3000/api",
    "ENVIRONMENT": "development"
  }
}
```

3. Run the deployment script:
```bash
./deploy-to-ka-ve.sh
```

4. Access your local deployment at http://localhost:3000/

## Project Structure

- `index.html` - Main dashboard entry point
- `styles.css` - All styles for the dashboard
- `script.js` - JavaScript functionality and KPI data
- `staticdeploy-config.json` - Configuration for StaticDeploy
- `scripts/prepare-bundle.js` - Script to prepare static files for deployment
- `deploy-to-ka-ve.sh` - Deployment script
- `.github/workflows/deploy.yml` - GitHub Actions workflow for automated deployment

## Adding New Prototypes

To add new prototypes:

1. Create a new directory for your prototype
2. Add all necessary HTML, CSS, and JS files
3. Update the main index.html to link to your new prototype
4. Commit and push to GitHub - the deployment will happen automatically 