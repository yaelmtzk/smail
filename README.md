# SnailApp

A small React-like mail app (no bundler required — uses in-repo libs). Open the app in a browser to explore the mail list, mail details, and about pages.

## Quick start
1. Open `index.html` in your browser, or serve the folder with a static server:
   - Windows (recommended): install a static server and run from project folder
     - npx http-server -p 8080
     - or python -m http.server 8080
2. Use hash routes in the URL:
   - `#/mail`, `#/mail/:mailId`, `#/about`

## Features
- Mail list with read/unread status and filters
- Mail details view with actions (delete, mark, reply)
- Simple client-side routing (hash-based)
- In-repo React-like libs (no build step required)

## Prerequisites
- Git (optional)
- Node.js (recommended for running a local static server) or Python (for python -m http.server)

## Installation
1. Clone the repository:
   git clone <repo_url>
2. Change directory:
   cd <repo_folder>
3. (Optional) Install utilities:
   - npm (for http-server): npm install -g http-server

## Project structure (key files)
- `index.html` — app entry (loads in-repo libs)
- `app.js` — app bootstrap
- `RootCmp.jsx` — main App component / routing
- `cmps/` — UI components (AppHeader, LeftSideBar, MailList, MailPreview, MailHeader, RightSideBar, UserMsg)
- `pages/` — pages (Home, About, MailIndex, MailDetails)
- `services/` — app services (mail.service.js, async-storage.service.js, event-bus.service.js)
- `lib/` — included libs (react, react-dom, react-router, babel helpers, etc.)
- `assets/` — CSS, images, fonts
- `.vscode/` — editor settings

## Usage
- Start a static server and open http://localhost:8080
- Navigate using the hash routes listed above

## Testing
- No bundled test runner included by default. If you add tests:
  - Node: npm test
  - Python: pytest

## Contributing
- Fork the repo, create a feature branch, and open a pull request.
- Follow existing code style and add tests for new behavior.

## Configuration
- If present, copy example env:
  cp .env.example .env
- Edit environment variables as needed

## License
Specify a license (e.g., MIT). Replace this line with the chosen license file reference.

## Support
Open an issue in the repository or contact: support@example.com
// ...existing code...