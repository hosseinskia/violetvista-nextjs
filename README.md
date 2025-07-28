# VioletVista

VioletVista is a modern web application built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**, designed to deliver a seamless and responsive user experience across devices. It provides a robust dashboard for managing users, orders, products, analytics, notifications, reports, and settings, alongside public-facing pages for user engagement. VioletVista leverages Progressive Web App (PWA) capabilities for enhanced accessibility and is styled with a vibrant, gradient-based design system. Developing VioletVista has been a rewarding journey, blending creativity, collaboration, and a passion for impactful software.

## Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop with Tailwind CSS and dynamic viewport units.
- **PWA Support**: Installable on devices with offline capabilities via `manifest.json`.
- **Type-Safe Codebase**: Built with TypeScript for robust type checking and developer productivity.
- **Interactive Dashboard**: Manage users, orders, products, analytics, notifications, reports, and settings with real-time data and filtering.
- **Accessible UI**: ARIA attributes and semantic HTML ensure accessibility for all users.
- **Dynamic Charts**: Visualize data with interactive line, bar, and pie charts using Chart.js.
- **Error Handling**: Robust error boundaries and loading states for a smooth user experience.

## Pages

### Public Pages

- **Home (`/app/page.tsx`)**  
  The primary entry point featuring a hero section, features overview, about section, and contact form. It guides users to explore the platform or sign up.

- **Contact (`/app/contact/page.tsx`)**  
  A dedicated page with a responsive form and email link (`contact@example.com`) for user inquiries.

- **Privacy Policy (`/app/privacy/page.tsx`)**  
  Outlines VioletVista's data collection, usage, and protection policies to ensure transparency and compliance.

- **Terms and Conditions (`/app/terms/page.tsx`)**  
  Details the rules and guidelines for using the platform, ensuring users understand their responsibilities.

- **Login (`/app/login/page.tsx`)**  
  A secure login page with a form for user credentials and a link to the signup page for new users.

- **Signup (`/app/signup/page.tsx`)**  
  Allows new users to register with a form and provides a link to the login page for existing users.

### Dashboard Pages

- **Dashboard (`/app/dashboard/page.tsx`)**  
  A centralized hub displaying key metrics (users, orders, revenue, products, sessions), recent activity, and interactive charts for user growth and revenue by category.

- **Users (`/app/dashboard/users/page.tsx`)**  
  Displays a filterable table of users with details like name, email, role, status, and registration date. Includes links to view individual user details.

- **User Details (`/app/dashboard/users/[id]/page.tsx`)**  
  Shows detailed user information, including last login, orders placed, and total spent, with options to edit or delete the user.

- **Orders (`/app/dashboard/orders/page.tsx`)**  
  Presents a filterable table of orders with columns for ID, customer, date, total, items, and status. Includes links to view order details.

- **Order Details (`/app/dashboard/orders/[id]/page.tsx`)**  
  Displays detailed order information, including items, shipping address, payment method, and options to update or cancel the order.

- **Products (`/app/dashboard/products/page.tsx`)**  
  Lists products in a filterable table with columns for ID, name, price, stock, category, and SKU. Includes links to view product details.

- **Product Details (`/app/dashboard/products/[id]/page.tsx`)**  
  Shows detailed product information, including description and last updated date, with options to edit or delete the product.

- **Analytics (`/app/dashboard/analytics/page.tsx`)**  
  Features interactive charts for revenue, order volume, and user activity, with a time range filter (last 6 months or last month).

- **Notifications (`/app/dashboard/notifications/page.tsx`)**  
  Displays a filterable list of recent notifications by type (system, feedback, order, product, user).

- **Reports (`/app/dashboard/reports/page.tsx`)**  
  Allows users to generate reports for user activity, orders, or revenue, with a preview chart and export option.

- **Settings (`/app/dashboard/settings/page.tsx`)**  
  Provides a form to update account settings, including username, email, password, theme, and notification preferences.

## Components

- **Public Components**:

  - `Navbar.tsx`: Responsive navigation bar with a custom animated hamburger menu for mobile.
  - `Footer.tsx`: Displays copyright information and links to privacy, terms, and contact pages.
  - `HeroSection.tsx`, `FeaturesSection.tsx`, `AboutSection.tsx`, `ContactSection.tsx`: Modular sections for the home page with responsive layouts.

- **Dashboard Components**:
  - `Sidebar.tsx`: Collapsible sidebar for dashboard navigation, with active link highlighting.
  - `DataTable.tsx`: Generic, type-safe table component for displaying users, orders, and products.
  - `ChartCard.tsx`: Reusable chart component supporting line, bar, and pie charts via Chart.js.
  - `ActivityFeed.tsx`: Displays recent activity or notifications in a clean, responsive list.
  - `StatCard.tsx`: Shows key metrics with gradient styling for the dashboard.
  - `SettingsForm.tsx`: Form for managing account settings.
  - `DetailsWrapper.tsx`: Wrapper for detail pages with loading states.
  - `ErrorBoundary.tsx`: Catches and displays errors gracefully with a fallback UI.
  - `Spinner.tsx`: Animated loading indicator for async operations.

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


## Dependencies
- Core: `next@15.4.1`, `react@19.1.0`, `react-dom@19.1.0`
- Visualization: `chart.js@4.5.0`, `react-chartjs-2@5.3.0`
- Styling: `tailwindcss@4`, `@tailwindcss/postcss@4`
- TypeScript & Linting: `typescript@5`, `eslint@9`, `eslint-config-next@15.4.1`, `@types/node@24`, `@types/react@19`, `@types/react-dom@19`

---

## License

This project is licensed under the [MIT License](LICENSE).
