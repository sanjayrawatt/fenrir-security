# Fenrir Security - Frontend Assessment

A production-grade React application for security scanning and vulnerability management. Built as part of the Frontend Engineer technical assessment for Fenrir Security Private Limited.

## Live Demo

**URL:** [https://fenrir-security-eta.vercel.app/](https://fenrir-security-eta.vercel.app/)

## Features

### Screen 1 - Login

- Split-layout design with dark gradient left panel
- Sign-up form with validation
- Social login options (Apple, Google, Meta)
- Responsive design for all screen sizes

### Screen 2 - Dashboard

- Organization-level vulnerability stats (Critical, High, Medium, Low)
- Interactive scan table with search and filter
- Status chips and severity badges
- Progress indicators for running scans
- Row click navigation to scan details

### Screen 3 - Active Scan Detail

- Circular progress indicator with step tracker
- Live scan console with terminal-style output
- Tab switching between Activity Log and Verification Loops
- Finding log with vulnerability cards
- Real-time status bar with sub-agents and operations count

### Global Features

- Dark/Light mode toggle with localStorage persistence
- Responsive sidebar with mobile hamburger menu
- Smooth transitions and animations
- Production-ready UI components

## Tech Stack

- **Framework:** Vite + React 18
- **Styling:** Tailwind CSS v4
- **Routing:** React Router v6
- **Icons:** Lucide React
- **State:** React Context + useState

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd fenrir-security

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

The production build will be output to the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components (Button, Input, Badge, Card)
│   ├── layout/          # Layout components (Sidebar, AppLayout)
│   └── scan/            # Scan-related components (SeverityBadge, StatusChip, etc.)
├── pages/               # Main application pages
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   └── ScanDetail.jsx
├── context/             # React Context providers
│   └── ThemeContext.jsx
├── data/                # Mock data
│   └── mockData.js
└── App.jsx              # Main application with routing
```

## Design System

### Colors

- **Primary:** Teal (#0CC8A8)
- **Critical:** Red (#EF4444)
- **High:** Orange (#F97316)
- **Medium:** Yellow (#EAB308)
- **Low:** Green (#22C55E)
- **Dark Background:** #0F0F0F to #1A1A1A
- **Light Background:** #FFFFFF to #F5F5F5

### Typography

- **Font:** Inter (Google Fonts)
- **Base Size:** 14px
- **Weights:** 300, 400, 500, 600, 700

## Responsive Breakpoints

- **Mobile:** < 768px (sidebar collapses to hamburger menu)
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## Known Limitations

- Mock data is used instead of a real backend API
- Authentication is simulated (no actual user session management)
- Some interactive features show alerts instead of full implementations

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

This project was created for assessment purposes.
