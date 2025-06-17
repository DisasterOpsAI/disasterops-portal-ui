#  DisasterOps – Frontend

This is the **frontend** for **DisasterOps**, an AI-powered disaster response coordination platform. The web app connects First Responders, Volunteers, Affected Individuals, and Government Admins in one intuitive interface to enable rapid and intelligent disaster response.

Built with **React + Vite**, it provides high-speed development, hot module reloading, and modern tooling. The backend and AI-agent services are maintained in separate repositories.


##  High-Level Overview

The frontend enables:

-  **Role-based dashboards** (Admin, Responder, Volunteer, Affected Individual)
-  **Help request submission** via text and image
-  **AI-driven instructions** from backend agent service
-  **Map-based visualizations** for location-aware task views
-  **Real-time updates** for responders and admins
-  **Offline mode support** for disaster conditions


##  Technologies Used

| Component         | Tech                        |
|------------------|------------------------------|
| Framework         | React 18 + Vite             |
| Styling           | Tailwind CSS + ShadCN UI    |
| Routing           | React Router                |
| Firebase Integration | Firebase SDK (Firestore, Auth, Storage, Realtime) |
| State Management  | Redux |
| API Integration   | Axios + REST from backend   |


## Folder Structure

```
disasterops-frontend/
├── public/                  # Static files (favicon, index.html)
└── src/
├── assets/                  # Images, icons, fonts
├── components/              # Reusable UI components
├── pages/                   # Route views (Login, Dashboard, etc.)
├── api/                     # API wrappers for backend communication
├── hooks/                   # Custom React hooks
├── contexts/                # React context providers (auth, role)
├── styles/                  # Tailwind/global styles
├── App.jsx                  # Root app component
└── main.jsx                 # ReactDOM entrypoint
```

##  Setup Instructions

### 1. Fork the repository to your own GitHub account.

### 2. Clone your fork locally:
```bash
   git clone https://github.com/your-username/disasterops-portal-ui.git
   cd disasterops-portal-ui
```

### 2. Install Dependencies
```
pnpm install
```

### 3. Start the Server
```
pnpm run dev
```

## React + Vite Info

This project uses Vite for high-speed development and React 18 for the UI.

Fast Refresh Plugins
-@vitejs/plugin-react – uses Babel
-@vitejs/plugin-react-swc – uses SWC

We’re using @vitejs/plugin-react.

## Development Commands
```
pnpm run dev        # Start dev server
pnpm run lint       # Lint files
pnpm run format     # Prettier formatting
```

## Developer Notes
- Connects to backend (disasterops-core-api) for APIs
- Uses Firebase Realtime Database for real-time features
- Map support (Google Maps, Leaflet) can be added in future
- Offline caching support under development
- Keep .env (e.g., for base API URL) in the root (use .env.example)

## Contributing

We welcome contributions! Please:

- Fork the repo
- Create a feature branch
- Follow the linting/formatting conventions
- Open a pull request


## License

MIT – See `LICENSE` file for details.
