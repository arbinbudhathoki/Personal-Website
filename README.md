# Portfolio Website - React

A modern, responsive portfolio website built with React and Vite, showcasing projects, skills, and experience.

## 🚀 Features

- **React-based**: Built with React 18 and modern hooks
- **Vite**: Fast build tool and development server
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Component-based**: Organized, reusable React components
- **Smooth Scrolling**: Enhanced navigation experience
- **Mobile Menu**: Hamburger menu for mobile devices
- **Accessible**: Semantic HTML and proper ARIA labels
- **Real-time Visitor Alerts**: Live visitor notifications with Pusher integration

## 📁 Project Structure

```
MyWebsite/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # React components
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Education/
│   │   ├── Experience/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── Navbar/
│   │   ├── Projects/
│   │   └── Skills/
│   ├── App.jsx             # Main App component
│   ├── App.css             # App styles
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   The app will automatically open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Configure Real-time Visitor Alerts

1. Create a `.env` file from `.env.example`
2. Add your Pusher credentials:
   ```
   VITE_PUSHER_KEY=your_pusher_key
   VITE_PUSHER_CLUSTER=your_pusher_cluster
   VITE_PUSHER_CHANNEL=visitor-alerts
   VITE_PUSHER_EVENT=new-visitor
   ```
3. Trigger a Pusher event (`new-visitor` by default) with a payload like:
   ```json
   {
     "location": "Dallas, TX",
     "page": "/"
   }
   ```
4. The alert widget appears in the bottom-right corner and shows the latest visitor events in real time.

### Configure Email Alert on Website View

Because this project is a static website, email is sent through a webhook provider.

1. Create a webhook URL using Zapier, Make, Pipedream, or a small serverless function
2. Add these values to your `.env`:
   ```
   VITE_VISITOR_ALERT_WEBHOOK_URL=https://your-webhook-url
   VITE_VISITOR_ALERT_COOLDOWN_MINUTES=60
   ```
3. Every new visitor session sends a POST request to your webhook with visit metadata (URL, referrer, browser, timezone, timestamp)
4. Configure your webhook workflow to send an email to your address when it receives the event

Example payload:
```json
{
  "event": "website_view",
  "message": "Someone viewed your website.",
  "page": "/",
  "fullUrl": "https://your-site.com/",
  "referrer": "direct",
  "userAgent": "Mozilla/5.0 ...",
  "language": "en-US",
  "timezone": "America/New_York",
  "viewedAt": "2026-04-15T22:10:00.000Z"
}
```

### Preview Production Build

```bash
npm run preview
```

## 📝 Customization

### Update Contact Information

Edit `src/components/Contact/Contact.jsx`:
```jsx
const contactLinks = [
  {
    icon: '📧',
    text: 'your.email@example.com',
    href: 'mailto:your.email@example.com'
  },
  // ... other links
]
```

### Update Project Links

Edit `src/components/Projects/Projects.jsx`:
```jsx
const projects = [
  {
    title: 'Your Project',
    description: 'Project description...',
    technologies: ['React', 'Node.js'],
    githubLink: 'https://github.com/yourusername/project' // Update this
  },
  // ... other projects
]
```

### Change Colors

Modify CSS variables in `src/index.css`:
```css
:root {
    --primary-color: #2563eb;  /* Change to your preferred color */
    --primary-dark: #1e40af;
    /* ... other variables */
}
```

### Add More Projects

Edit the `projects` array in `src/components/Projects/Projects.jsx`:
```jsx
{
  title: 'New Project',
  description: 'Description here...',
  technologies: ['Tech1', 'Tech2'],
  githubLink: 'https://github.com/...'
}
```

### Update Skills

Edit the `skillCategories` array in `src/components/Skills/Skills.jsx`:
```jsx
{
  title: 'Category Name',
  skills: ['Skill 1', 'Skill 2', 'Skill 3']
}
```

## 🎨 Styling

- **Global styles**: `src/index.css` - Contains CSS variables and base styles
- **Component styles**: Each component has its own CSS file in its folder
- **Responsive breakpoints**: 
  - Mobile: 480px
  - Tablet: 768px

## 📦 Dependencies

### Production
- `react` - React library
- `react-dom` - React DOM rendering
- `pusher-js` - Realtime channel client for visitor alerts

### Development
- `vite` - Build tool and dev server
- `@vitejs/plugin-react` - Vite plugin for React

## 🚢 Deployment

### GitHub Pages

The project is already configured for GitHub Pages deployment!

1. **If deploying to user/organization page** (e.g., `username.github.io`):
   - Repository name should be: `username.github.io` (replace `username` with your GitHub username)
   - The base path is already set to `/` by default
   - Skip to step 3

2. **If deploying to project page** (e.g., `username.github.io/repository-name`):
   - Create a `.env` file in the root directory:
     ```
     VITE_BASE_PATH=/repository-name/
     ```
   - Replace `repository-name` with your actual repository name
   - Make sure the path starts and ends with `/`

3. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```
   This will:
   - Build your project
   - Create/update the `gh-pages` branch
   - Push the build to GitHub

4. **Configure GitHub Pages in repository settings**:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Select branch: **gh-pages**
   - Select folder: **/ (root)**
   - Click **Save**

5. **Your site will be live at**:
   - User page: `https://username.github.io`
   - Project page: `https://username.github.io/repository-name`

**Note**: After deployment, it may take a few minutes for GitHub Pages to update. Clear your browser cache if you don't see changes immediately.

### Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Drag and drop the `dist` folder or connect to Git

### Vercel

1. Import your Git repository
2. Vercel will auto-detect Vite
3. Deploy!

### Other Platforms

Upload the `dist` folder contents to any static hosting service.

## 🐛 Troubleshooting

### Port Already in Use

If port 3000 is in use, Vite will automatically try the next available port. You can also specify a port in `vite.config.js`:
```js
server: {
  port: 3001
}
```

### Build Errors

Make sure all dependencies are installed:
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📄 License

© 2025 Arbin Budhathoki. All rights reserved.

## 🤝 Contributing

This is a personal portfolio website. Feel free to use it as a template for your own portfolio!
