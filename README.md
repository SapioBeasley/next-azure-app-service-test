# Next.js 14 App Deployment to Azure App Service using GitHub Actions

This README outlines the steps taken to successfully deploy a Next.js 14 application to Azure App Service using GitHub Actions, based on the guide provided in [this Medium article](https://medium.com/@dileepa.mabulage/deploying-a-next-js-14-app-to-azure-app-service-using-github-actions-f5119a56e9f4).

## Prerequisites

Before starting, ensure you have the following:

- A Next.js 14 application.
- An Azure account with an App Service created.
- GitHub repository set up for your Next.js application.

## Step 1: Create and Configure the Azure App Service

1. **Create an Azure App Service:**

   - Log in to your Azure portal.
   - Navigate to "App Services" and click "Create".
   - Fill in the necessary details:
     - Subscription: Choose your subscription.
     - Resource Group: Create a new one or use an existing one.
     - Name: Provide a unique name for your App Service.
     - Runtime Stack: Choose Node.js 18 LTS.
     - Region: Select the region closest to your users.
   - Click "Review + create" and then "Create".

2. **Configure the App Service:**

   - Navigate to the App Service you created.
   - Go to "Deployment Center" under the "Deployment" section.
   - Select "GitHub Actions" as your deployment method.
   - Choose your GitHub repository and branch.

3. **Set Environment Variables:**
   - In the App Service, go to "Settings" -> "Configuration".
   - Add the required environment variables, such as `NEXT_PUBLIC_API_URL`, `DATABASE_URL`, etc.
   - Save and apply your settings.

## Step 2: Set Up GitHub Actions for CI/CD

1. **Create a GitHub Action Workflow:**

   - In your GitHub repository, navigate to the "Actions" tab.
   - Click "New Workflow" and then "Set up a workflow yourself".
   - Name your workflow file (e.g., `azure-deploy.yml`).

2. **Add the Deployment Workflow:**

   - Copy the following content into your workflow file:

3. **Set the Publish Profile Secret:**

   - In Azure, navigate to your App Service -> "Deployment Center" -> "Settings".
   - Click on "Get Publish Profile" and download the file.
   - In GitHub, go to "Settings" -> "Secrets and Variables" -> "Actions".
   - Create a new secret named `APP_PUBLISH_PROFILE`.
   - Paste the contents of the publish profile file into this secret.

4. **Commit and Push:**
   - Commit the workflow file to your repository and push it to the `main` branch.

## Step 3: Monitor the Deployment

- Once you push to the `main` branch, GitHub Actions will automatically trigger the deployment process.
- You can monitor the workflow progress under the "Actions" tab in your GitHub repository.
- Upon successful deployment, your Next.js 14 app should be live on Azure App Service.

## Conclusion

Following these steps, your Next.js 14 application will be successfully deployed to Azure App Service using GitHub Actions. For further details or troubleshooting, refer to the original [Medium article](https://medium.com/@dileepa.mabulage/deploying-a-next-js-14-app-to-azure-app-service-using-github-actions-f5119a56e9f4).
