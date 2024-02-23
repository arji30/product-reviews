## Stackup Bounty Project - Product Reviews

## Overview:
Product Reviews is a web application developed using Next.js and NextAuth.js, leveraging Affinidi Vault Login for user authentication. The project allows users to browse a list of products and submit reviews for the products they select. By integrating Affinidi Vault Login, users can seamlessly authenticate and provide reviews with pre-filled information, enhancing user experience and security.

## Features:
1. **Authentication with Affinidi Vault Login:** Users can securely login to the application using their Affinidi Vault credentials, ensuring a seamless and secure authentication process.
  
2. **Product Selection:** Users can browse through a list of available products and select the product they want to review.

3. **Pre-filled Form:** Upon selecting a product, users are presented with a pre-filled form containing their name, phone number, email, country, and postal code, retrieved from their Affinidi Vault profile. This feature streamlines the review submission process, saving users time and effort.

4. **Review Submission:** Users can write their review in the provided text field and submit the form, users then have the option to go back to select another product to review.


## How to use the website:

1. **Login page:** Going to [https://product-reviews-stackup.vercel.app](https://product-reviews-stackup.vercel.app/) will open up the login page with a Login button to login using affinidi vault.
2. **Home page:** After successful login, the homepage is shown which has the current logged in user's name on the right hand side of the navbar, with a logout button for logging out. The page shows a list of products, clicking on any of them will lead to the respective product review page.
3. **Product Review page:** The product review page has a form which is prefilled with information from Affinidi Vault, the product is shown to the right of this form. The topmost field is the review field which is kept empty, after writing the review, the submit button can be used to submit the review.
4. **Submission page:** This page shows a success message and a button to go back to the homepage which contains the product list, if the user needs to review another product.
5. **Navbar:** User can use the logout button on the navbar to logout anytime and return to the login page.


## Tech Stack:
- **Frontend:** Next.js is used for building the frontend of the application. Next.js provides server-side rendering, enabling fast page loads and improved SEO. Additionally, it offers features like automatic code splitting and hot module replacement for enhanced developer experience.
  
- **Authentication:** NextAuth.js is utilized for authentication purposes. It offers built-in support for various authentication providers, simplifying the integration of authentication into the application.

- **Hosting:** The application is hosted on Vercel, a cloud platform optimized for deploying serverless functions and static sites. Vercel provides seamless deployment and scalability, ensuring high availability and performance of the application.

## Workflow:

1. **Setting up the project:**
   - Initialising next-js project and installing the necessary packages.
   - Setting up Affinidi Vault Login configuration using Affinidi Portal- a new configuration with the necessary presentation definition and identity token mapping was created, redirect URL was set to match the hosted site URL
   - Client id, client secret and affinidi_issuer from the newly created configuration is then stored in the .env file.

3. **User Authentication:**
   - Users access the application and are presented with the option to login using Affinidi Vault.
   - Upon successful authentication, users are redirected to the main dashboard.
   - The authentication and the fetching of user-information is mainly referenced from the [affinidi-nextjs-nextauth](https://github.com/affinidi/reference-app-affinidi-vault/tree/main/samples/affinidi-nextjs-nextauthjs) sample repo.
   - Some changes were made in the auth-options.ts file to fetch more information from Affinidi Vault. You can find the files for authentication [here](https://github.com/arji30/product-reviews/tree/main/src/lib/auth)
   - The [useAuthentication](https://github.com/arji30/product-reviews/blob/main/src/lib/hooks/use-authentication.ts) function is used throughout the project to get the logged in user's information.

4. **Product Selection and Review Submission:**
   - Users browse the list of available products and select the product they want to review.
   - Upon selection, the review form is displayed with pre-filled information retrieved from the user's Affinidi Vault profile.
   - Users write their review in the provided text field and submit the form.
   - Users are then redirected to a page to show that their submission was successful.

## Future Enhancements:

1. **Product Rating System:** Introduce a rating system for products, allowing users to provide ratings along with their reviews.

2. **Social Sharing:** Enable users to share their reviews on social media platforms, increasing the visibility of the products and the application.

2. **Database Storage:** Setup a database to store the product review form data once the user submits a review successfully, currently this data is not stored.


## Conclusion:
Product Reviews is a web application developed using Next.js, NextAuth.js, and hosted on Vercel, offering a seamless and secure platform for users to submit reviews for various products. By integrating Affinidi Vault Login, the application provides a convenient and secure authentication experience, enhancing user trust and satisfaction, making it easier to review products.
