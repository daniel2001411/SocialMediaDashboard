# React Social Dashboard Application

A modern, responsive social media analytics dashboard built with React.js. This application features statistics tracking, activity visualization, and a social post feed, emphasizing component reusability, clean design, and data-driven UI.

---

## Table of Contents

- [Demo](#demo)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Project Structure](#project-structure)  
- [Getting Started](#getting-started)  
- [Usage](#usage)  
- [Folder Overview](#folder-overview)  
- [Component Breakdown](#component-breakdown)  
- [Styling](#styling)  
- [Development](#development)  
- [Performance Considerations](#performance-considerations)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Demo

*Dashboard UI showcasing user stats, activity charts, and recent social media posts.*

---

## Features

- Responsive and modular dashboard layout with sidebar navigation  
- Social media statistics cards with dynamic trends and icons  
- Multi-line activity overview chart using Chart.js  
- Recent post feed with engagement (likes, comments, shares)  
- User profile summary widget with editable profile button  
- Global search functionality in the header  
- Notification badge and user avatar display  
- Clean and consistent design system using CSS variables  

---

## Tech Stack

- **Frontend Framework:** React.js (Functional Components)  
- **Styling:** CSS3 with CSS Variables  
- **Charts:** Chart.js integrated with react-chartjs-2  
- **Icons:** React Icons (Feather Icons)  
- **Build Tool:** Create React App  
- **Package Manager:** npm or yarn  

---

## Project Structure


social-dashboard/
├── public/
│ └── index.html # HTML template
├── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Page container components
│ ├── data/ # Static data files for stats, posts, and chart data
│ ├── styles/ # Global and component-scoped CSS files
│ ├── App.js # Root app component
│ └── index.js # Application entry point

---

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)  
- npm or yarn package manager  

### Installation

Clone the repository and install dependencies:


npm install
or
yarn install

### Running the Application

Start the development server:


npm start
or
yarn start

The app will be available at `http://localhost:3000` by default.

### Building for Production

To build the optimized production bundle:


npm run build
or
yarn build

---

## Usage

The app renders a dashboard with the following main sections:

- **Sidebar:** Navigation menu with active state and logout button  
- **Header:** Search input, notification bell with badge, and user avatar  
- **Left Column:**  
  - Stats cards showing Followers, Likes, Views, Comments  
  - Activity chart tracking Posts, Engagement, and New Followers  
  - Recent posts feed with author info, content, and social actions  
- **Right Column:** User profile card with stats and edit profile button  

The dashboard automatically consumes static data files from the `data/` folder.

---

## Folder Overview

- `components/` - Stateless and reusable UI components such as `Header`, `Sidebar`, `StatsCard`, `ActivityChart`, `Post`, and `UserProfile`.  
- `pages/` - Contains the main `Dashboard.jsx` that composes all components into the UI.  
- `data/` - Static JavaScript data modules containing mock data for statistics, posts, and activity chart.  
- `styles/` - CSS files including global variables in `main.css` and component-specific styles organized in subfolders.  
- `public/` - Static files including the HTML template and asset images.  

---

## Component Breakdown

- **Header.jsx** - Top navigation with search bar, notifications, and user avatar.  
- **Sidebar.jsx** - Left side navigation menu with icons and active highlighting.  
- **StatsCard.jsx** - Displays individual statistics with trend arrows and icons.  
- **ActivityChart.jsx** - Renders a multi-series line chart showing activity data over months using Chart.js.  
- **Post.jsx** - Social media post cards showing author, time, content, and social interaction buttons.  
- **UserProfile.jsx** - User profile widget with avatar, username, stats, and 'Edit Profile' button.  

---

## Styling

- Uses CSS Variables for theming and consistent colors.  
- Layout made with Flexbox and CSS Grid for responsive arrangement.  
- Component-specific styling to prevent leakage and ensure modularity.  
- Breakpoints included for mobile-friendly stacking and adjustments.  

---

## Development

### Scripts

- `npm start` - Starts development server  
- `npm run build` - Builds production bundle  

### Dependencies

- `react`  
- `react-dom`  
- `react-chartjs-2` and `chart.js` for data charts  
- `react-icons` for Feather icon set  

---

## Performance Considerations

- Utilizes React keys in list rendering for efficient reconciliation.  
- Component reusability minimizes code duplication.  
- CSS scoped styling reduces render-blocking styles.  

---

## Contributing

Contributions are welcome! Please fork the repository and open a pull request with your improvements.

---

## License

This project is open source and free to use under the MIT License.

---

*Built with ❤️ using React.js and Chart.js.*



