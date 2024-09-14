# NextJS 14 + Firebase Auth

A template for NextJS and Firebase authentication

## Run Locally

Clone the project

```bash
  git clone git@github.com:eabalderama/nextjs-firebase-auth.git
```

Go to the project directory

```bash
  cd nextjs-firebase-auth
```

Install dependencies

```bash
  npm install
```

Start the development server

```bash
  npm run dev
```

## Firebase

To run this project, you will need to create a [Firebase Project](https://console.firebase.google.com/)

Enable the authentication in the dashboard and copy the firebase config in the project settings

### Enabling Sign-In Methods

In the Authentication Section, go to the Sign-In Method tab and enable both Google and Github Sign-in. For the Github Sign-In you need to create an OAuth App in [github settings](https://github.com/settings/developers), copy the client id and client secret and paste it in the Sign-In Method in Firebase

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

### Minimum Required Environmment Variables

Firebase API KEY

`NEXT_PUBLIC_API_KEY`

Firebase auth domain

`NEXT_PUBLIC_AUTH_DOMAIN`
