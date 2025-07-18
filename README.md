# VioletVista

VioletVista is a modern web application built with Next.js, designed to provide a seamless user experience across devices. Developing VioletVista has been a rewarding journey, filled with creativity, collaboration, and a passion for building something impactful. We hope you enjoy using the app as much as we enjoyed creating it!

## Pages

### Home (`/app/page.tsx`)
The home page serves as the primary entry point for users. It presents a structured layout with sections for introducing the platform, providing information about the company, and offering a contact form. The page is designed to guide users toward exploring the platform or signing up.

### Contact (`/app/contact/page.tsx`)
The contact page provides a dedicated space for users to reach out to the VioletVista team. It includes a form for submitting inquiries and an email link for direct communication, ensuring users can easily get in touch.

### Dashboard (`/app/dashboard/page.tsx`)
The dashboard page is a centralized hub for authenticated users, displaying key metrics and recent activity. It presents data in a clear, organized format, allowing users to monitor essential information at a glance.

### Login (`/app/login/page.tsx`)
The login page allows users to sign into their VioletVista accounts. It features a form for entering credentials and a link to the signup page for new users, facilitating secure access to the platform.

### Privacy Policy (`/app/privacy/page.tsx`)
The privacy policy page outlines how VioletVista collects, uses, and protects user data. It provides transparent information about data handling practices to inform users and ensure compliance with privacy standards.

### Signup (`/app/signup/page.tsx`)
The signup page enables new users to create an account. It includes a form for entering registration details and a link to the login page for existing users, streamlining the onboarding process.

### Terms and Conditions (`/app/terms/page.tsx`)
The terms and conditions page details the rules and guidelines for using the VioletVista platform. It informs users of their responsibilities and the platform's policies to ensure a clear understanding of usage terms.

## Setup and Installation
1. Clone the repository: `git clone https://github.com/hosseinskia/violetvista-nextjs.git`
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Access the application at `http://localhost:3000`

Ensure you have Node.js and npm installed. Place PWA icon files (`icon-192.png`, `icon-512.png`) in the `public/` directory for Progressive Web App functionality.

## Project Structure
- `/app`: Contains page components and global styles.
- `/components`: Reusable UI components like `Navbar`, `Footer`, and section-specific components.
- `/public`: Static assets, including `manifest.json` for PWA support.
- `next.config.ts`: Configuration for Next.js, including PWA settings.
- `package.json`: Project dependencies and scripts.
- `tsconfig.json`: TypeScript configuration for type safety and module resolution.

---

## License

This project is licensed under the [MIT License](LICENSE).