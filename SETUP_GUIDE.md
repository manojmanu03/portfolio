# Setup Guide for React Portfolio

## Prerequisites Installation

### 1. Install Node.js

1. Go to [https://nodejs.org/](https://nodejs.org/)
2. Download the LTS version (recommended)
3. Run the installer and follow the setup wizard
4. Restart your computer after installation

### 2. Verify Installation

Open PowerShell or Command Prompt and run:
```bash
node --version
npm --version
```

You should see version numbers for both commands.

### 3. Install Dependencies

Navigate to your portfolio directory and run:
```bash
cd "c:\Users\Manoj\Desktop\portfolio"
npm install
```

### 4. Start Development Server

```bash
npm start
```

The portfolio will open in your browser at `http://localhost:3000`

## Quick Start Commands

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Troubleshooting

### If npm install fails:
- Make sure Node.js is properly installed
- Try running PowerShell as Administrator
- Clear npm cache: `npm cache clean --force`

### If the server doesn't start:
- Check if port 3000 is available
- Try a different port: `npm start -- --port 3001`

## Next Steps After Setup

1. **Customize Content**: Update personal information in all components
2. **Add Your Projects**: Replace sample projects with your actual work
3. **Update Images**: Add your profile picture and project screenshots
4. **Configure Contact Form**: Set up form submission endpoint
5. **Deploy**: Choose a hosting platform (Netlify, Vercel, etc.)

## File Structure Overview

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js & Header.css
│   │   ├── Hero.js & Hero.css
│   │   ├── About.js & About.css
│   │   ├── Skills.js & Skills.css
│   │   ├── Projects.js & Projects.css
│   │   ├── Contact.js & Contact.css
│   │   └── Footer.js & Footer.css
│   ├── App.js & App.css
│   ├── index.js & index.css
├── package.json
└── README.md
```
