# React Portfolio

A modern, responsive portfolio website built with React, featuring smooth animations and a beautiful dark theme.

## Features

- **Modern Design**: Clean, professional design with gradient accents
- **Responsive Layout**: Fully responsive across all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Interactive Components**: Hover effects and smooth transitions
- **Contact Form**: Functional contact form with validation
- **Skills Showcase**: Animated skill bars and technology icons
- **Project Gallery**: Showcase of featured projects with live demos and GitHub links

## Technologies Used

- **Frontend**: React 18, JavaScript ES6+
- **Styling**: CSS3 with custom properties and modern layouts
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Build Tool**: Create React App

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/components/Hero.js`):
   - Change name, title, and description
   - Update social media links

2. **About Section** (`src/components/About.js`):
   - Update bio and experience details
   - Modify stats (projects, years, clients)

3. **Skills Section** (`src/components/Skills.js`):
   - Add/remove technologies
   - Update skill levels

4. **Projects Section** (`src/components/Projects.js`):
   - Replace with your actual projects
   - Update GitHub and live demo links
   - Add project screenshots

5. **Contact Section** (`src/components/Contact.js`):
   - Update email, phone, and location
   - Configure form submission endpoint

### Styling

The portfolio uses CSS custom properties for easy theming. Main color variables are defined in the component CSS files:

- Primary gradient: `#667eea` to `#764ba2`
- Background: `#0a0a0a`
- Text colors: Various shades of white and gray

### Adding New Sections

To add new sections:

1. Create a new component in `src/components/`
2. Import and add it to `src/App.js`
3. Update the navigation in `src/components/Header.js`

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deployment Options

- **Netlify**: Drag and drop the build folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **Heroku**: Deploy with buildpack

## Project Structure

```
src/
├── components/
│   ├── Header.js & Header.css
│   ├── Hero.js & Hero.css
│   ├── About.js & About.css
│   ├── Skills.js & Skills.css
│   ├── Projects.js & Projects.css
│   ├── Contact.js & Contact.css
│   └── Footer.js & Footer.css
├── App.js & App.css
├── index.js & index.css
└── ...
```

## Performance Optimizations

- Lazy loading for images
- Optimized animations with Framer Motion
- Efficient CSS with modern properties
- Minimized bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)
