# Next.js 14 App Deployment to Azure App Service using Azure DevOps Pipelines

This README outlines the steps taken to successfully deploy a Next.js 14 application to Azure App Service using Azure DevOps Pipelines.

## Prerequisites

Before starting, ensure you have the following:

- A Next.js 14 application.
- An Azure account with an App Service created.
- An Azure DevOps account with a repository set up for your Next.js application.

## Next.js Configuration Updates

Before deploying your Next.js application, ensure that the following updates are made to your `next.config.js` file to optimize the application for deployment on Azure App Service:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  output: 'standalone',
};

export default nextConfig;
```

- **`reactStrictMode: true`**: Ensures your application runs in React's strict mode, helping you identify potential problems.
- **`distDir: 'build'`**: Changes the default output directory from `.next` to `build`.
- **`output: 'standalone'`**: Configures the application to be built as a standalone output, bundling all necessary files for deployment.

## Step 1: Create and Configure the Azure App Service

1. **Create an Azure App Service:**

   - Log in to your Azure portal.
   - Navigate to "App Services" and click "Create".
   - Fill in the necessary details:
     - **Subscription**: Choose your subscription.
     - **Resource Group**: Create a new one or use an existing one.
     - **Name**: Provide a unique name for your App Service.
     - **Runtime Stack**: Choose Node.js 18 LTS or the version your app requires.
     - **Region**: Select the region closest to your users.
   - Click "Review + create" and then "Create".

2. **Configure the App Service:**

   - Navigate to the App Service you created.
   - Go to "Deployment Center" under the "Deployment" section.
   - Choose "Azure Repos" if you plan to link directly, but this step will be automated using Azure DevOps pipelines.

3. **Set Environment Variables:**
   - In the App Service, go to "Settings" -> "Configuration".
   - Add the required environment variables, such as `NEXT_PUBLIC_API_URL`, `DATABASE_URL`, etc.
   - Save and apply your settings.

## Step 2: Set Up Azure DevOps Pipeline for CI/CD

1. **Create a New Pipeline:**

   - In your Azure DevOps project, go to "Pipelines" -> "Create Pipeline".
   - Choose "Azure Repos Git" or "GitHub" based on where your repository is hosted.
   - Authenticate and select your repository.
   - Choose to start with an empty pipeline or existing YAML file.

2. **Add the Pipeline YAML Configuration:**

   - Replace the existing content with the following pipeline configuration:

3. **Save and Run the Pipeline:**

   - Commit the pipeline YAML file to your repository.
   - The pipeline will automatically trigger on a push to the `main` branch, or you can manually run it.

## Step 3: Monitor the Deployment

- You can monitor the pipeline's execution in the "Pipelines" tab in Azure DevOps.
- Upon successful deployment, your Next.js 14 app should be live on Azure App Service.

## Step 4: Configure the Azure App Service (Post-Deployment)

After deployment, ensure the following configurations are set:

1. **Environment Variables**: Verify all required environment variables are set in the Azure App Service.
2. **Node.js Version**: Ensure the correct Node.js version is selected in the App Service configuration.
3. **Startup Command**: If necessary, configure a custom startup command in the App Service (e.g., `node server.js`).
4. **Monitoring and Scaling**: Set up monitoring, logging, and scaling options as required.

## Conclusion

Following these steps, your Next.js 14 application will be successfully deployed to Azure App Service using Azure DevOps Pipelines. This setup ensures continuous integration and deployment, allowing your application to be automatically built and deployed with every change to your `main` branch.
