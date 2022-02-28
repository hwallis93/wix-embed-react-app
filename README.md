# wix-embed-react-app

This project is a template for embedding a React app into a [Wix](https://www.wix.com/) website. It is designed for use with Wix's "Embed a Widget" option and is written in TypeScript.

It provides:
  - A build command whose output you can copy straight into your Wix editor
  - An environment for testing locally, including:
    - Rendering the app in an iframe
    - Sending messages between the app and the window it's embedded in

## Usage

- Clone or fork this project
- Install dependencies with `npm install`
- Write your React app, starting from `src/index.tsx`
  - This should include updating `app.tsx` with the name of your website instead of `"https://mysite.com"`
- Test locally with `npm start`
- Embed into your Wix site:
  - Run `npm run build`
  - From the Wix editor, click Add > Embed > Custom embeds > Embed a Widget
  - Click the created `#html` element and select "Enter Code"
  - Copy the contents of `build/index.html` into the "Add your code here" section of the popup.
  - Click `Apply`





