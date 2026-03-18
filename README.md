# AuraEvents - Local Event Discovery

AuraEvents is a premium, single-page React Web Application built to help users seamlessly discover and register for local events. Initially developed as a startup project, this platform was crafted with a strong focus on high-fidelity web design, mobile responsiveness, and interactive UX.

## 🛠️ Technologies & Tools Used

- **React (via Vite)**: For rapid development, fast hot-reloading, and creating a scalable component-based architecture.
- **HTML5**: For semantic layout structuring.
- **Bootstrap 5** (via CDN): Used for the responsive grid system (`row`/`col-*`), spacing utilities, badge components, flex helpers, and the `form-control` input class.
- **Custom Vanilla CSS3**: Layered on top of Bootstrap to implement the premium Glassmorphism dark-mode design system using CSS variables, custom animations (keyframes), and overrides.
- **Lucide-React**: Embedded modern, crisp, and high-quality SVG iconography.

## 🚀 How to Run the Project

1. **Prerequisites**: Ensure you have Node.js installed on your machine.
2. **Install Dependencies**: Open a terminal in the project directory and run:
   ```bash
   npm install
   ```
3. **Start the Development Server**: Launch the local environment by running:
   ```bash
   npm run dev
   ```
4. **Preview**: Open your browser and navigate to the URL provided in the terminal (by default, it will be `http://localhost:5173`). With network configurations applied, you can also natively preview via your mobile device!

## ✨ Extra Features Added

Beyond the initial requirements, several advanced features were implemented to elevate the user experience:

- **Ultra-Premium Glassmorphism UI**: Developed a sophisticated, engaging dark-mode aesthetic utilizing deep box-shadows, blurred backdrop filters, translucent panels, and vibrant linear gradients.
- **Custom Interactive Registration Modal**: Replaced the native browser alert with an elegant, spring-animated React modal dialog allowing users to input their name for registration seamlessly contextually.
- **Real-time Event Search Filtration**: Dynamic client-side filtering system that searches and instantly updates the event list based on names or locations without page refreshes.
- **Snappy Mobile Slide-in Drawer**: Implemented a responsive mobile Hamburger `.mobile-menu` that elegantly slides in from the right viewport specifically calibrated with custom CSS keyframes.
- **Asynchronous Data Simulation**: Engineered a smooth loading spinner explicitly simulating network latency to smoothly transition into fetching dummy JSON data, echoing authentic API behavior.
