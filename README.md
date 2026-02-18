
# Smail
A lightweight, React-like mail app. No bundler required — uses in-repo React, ReactDOM, and router libraries. Open `index.html` in your browser or serve with a static server to explore:
- Mail list, mail details, and about pages
- Responsive UI with custom components and CSS

## Quick Start
1. Open `index.html` in your browser, or serve the folder with a static server:
   - Windows (recommended):
     - `npx http-server -p 8080`
     - or `python -m http.server 8080`
2. Use hash routes in the URL:
   - `#/mail` — Mail list
   - `#/mail/:mailId` — Mail details
   - `#/about` — About page

## Features
- Mail list with read/unread status, filters, and search
- Mail details view with actions (delete, mark as read/unread, reply)
- Compose new mail
- Simple client-side routing (hash-based, via in-repo React Router)
- Responsive layout with custom sidebar and header
- In-repo React-like libraries (no build step required)

## Prerequisites
- Git (optional)
- Node.js (recommended for running a local static server) or Python (for `python -m http.server`)

## Installation
1. Clone the repository:
   `git clone <repo_url>`
2. Change directory:
   `cd <repo_folder>`
3. (Optional) Install utilities:
   - For `http-server`: `npm install -g http-server`

## Project Structure

- `index.html` — App entry, loads in-repo React, ReactDOM, router, Babel, and styles
- `app.js` — App bootstrap, renders the root component
- `RootCmp.jsx` — Main App component, sets up routes

### Components (`cmps/`)
- `AppHeader.jsx` — Top navigation bar
- `LeftSideBar.jsx` — Main sidebar navigation
- `MailHeader.jsx` — Mail list header (filters/search)
- `MailList.jsx` — Mail list display
- `MailPreview.jsx` — Single mail preview in list
- `NewMail.jsx` — Compose new mail
- `RightSideBar.jsx` — Extra actions/info
- `UserMsg.jsx` — User feedback messages

### Pages (`pages/`)
- `Home.jsx` — Landing page
- `About.jsx` — About the app
- `MailIndex.jsx` — Mail list page
- `MailDetails.jsx` — Single mail details page

### Services (`services/`)
- `mail.service.js` — Mail data and logic
- `async-storage.service.js` — Local storage helpers
- `event-bus.service.js` — App-wide event bus
- `util.service.js` — Utility functions

### Libraries (`lib/`)
- `react.js`, `react-dom.js` — In-repo React/DOM
- `react-router.js`, `react-router-dom.js` — In-repo router
- `babel.js`, `babel-preset.js`, `loadBabelModules.js` — Babel for JSX
- `animate.css` — Animations

### Styles & Assets (`assets/`)
- `css/main.css` — Main stylesheet
   - `basics/` — Base and helper CSS
   - `cmps/` — Component-specific CSS
   - `pages/` — Page-specific CSS
   - `setup/` — Typography, variables
- `fonts/` — Custom fonts (Lato, Roboto)
- `img/` — App images (logo, icons, avatars)

## Usage
- Start a static server and open [http://localhost:8080](http://localhost:8080)
- Navigate using the hash routes listed above

## Testing
- No bundled test runner included by default. If you add tests:
   - Node: `npm test`
   - Python: `pytest`

## Contributing
- Fork the repo, create a feature branch, and open a pull request.
- Follow existing code style and add tests for new behavior.

## Configuration
- No environment variables required for basic usage.
- If present, copy example env: `cp .env.example .env`
- Edit environment variables as needed

## License
Free license