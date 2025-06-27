# Creating a New Google AI API Key

Follow these steps to create a new API key with a fresh quota:

1. **Create New Google Cloud Project**
   - Go to: https://console.cloud.google.com/projectcreate
   - Name it something like "flowconai-chat-2"
   - Click "Create"

2. **Enable Generative Language API**
   - Go to: https://console.cloud.google.com/apis/library/generativelanguage.googleapis.com
   - Make sure your new project is selected in the top dropdown
   - Click "Enable"

3. **Create New API Key**
   - Go to: https://makersuite.google.com/app/apikey
   - Click "Create API key"
   - Select your new project
   - Copy the new API key

4. **Update Your Environment**
   - Replace the API key in `.env.local`
   - Restart Vercel dev server (Ctrl+C then `vercel dev`)

This gives you a fresh 60 requests/minute quota.