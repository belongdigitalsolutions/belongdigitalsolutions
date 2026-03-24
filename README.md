# BelongDigitalSolutions

Premium digital marketing agency website built with React, TailwindCSS, Bootstrap, Framer Motion, and Firebase.

## Tech Stack
- React 18 + Vite
- React Router
- TailwindCSS + Bootstrap
- Framer Motion
- Firebase (Firestore, Auth, Storage)
- Axios

## Architecture (MVC)
- Model: Firebase data layer in `src/services` and shared schemas in `src/data`.
- View: UI in `src/pages` and `src/components`.
- Controller: Data orchestration and state in `src/hooks` and form components.

## Local Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Ensure `.env` is configured (see `.env.example`).
3. Run the dev server:
   ```bash
   npm run dev
   ```

## Firebase Setup
1. Create a Firebase project.
2. Enable Firestore, Storage, and Email/Password Authentication.
3. Create an admin user in Firebase Auth and add that email to `VITE_ADMIN_EMAILS`.
4. Copy Firebase web config values into `.env`.

### Firestore Collections
- `contacts`
- `careers`
- `quotes`

## Admin Panel
- Route: `/admin`
- Authentication: Firebase Auth
- Access restricted to emails listed in `VITE_ADMIN_EMAILS`.

## Build
```bash
npm run build
```

## Preview
```bash
npm run preview
```