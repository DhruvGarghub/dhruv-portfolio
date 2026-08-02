# Premium Personal Portfolio — Dhruv Garg

A handcrafted, high-performance personal portfolio website designed for software and systems engineers applying to elite technology companies (e.g., Google, NVIDIA, Microsoft, Amazon). 

Built using **React**, **Vite**, and **TailwindCSS v4**, this portfolio features smooth page flows, an interactive canvas particle background, clean layouts, and complete responsiveness.

---

## Technical Stack
* **Framework:** React 19 + Vite
* **Styling:** TailwindCSS v4 (CSS-first configuration)
* **Icons:** Lucide React
* **Animations:** Framer Motion (subtle micro-interactions)

---

## Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
* npm (comes bundled with Node.js)

### Installation
1. Install all dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`.

---

## Customization Guide

All sections of the portfolio are modularized as separate React components in the `src/components/` directory.

### 1. Main Configuration & Socials
* **Header details:** Edit logo initials or resume links in `src/components/Header.jsx`.
* **Social links:** Edit contact details and resume download paths in `src/components/Hero.jsx` and `src/components/Footer.jsx`.

### 2. Replacing the Resume
* Overwrite the file at `public/resume_placeholder.pdf` with your actual resume PDF. Keep the filename as `resume_placeholder.pdf` or update references in `Header.jsx` and `Hero.jsx`.

### 3. Adding and Modifying Projects
* Open `src/components/Projects.jsx`.
* The file contains an array named `projects`. To add a new project, simply append an object with this structure:
  ```javascript
  {
    title: 'Your Project Title',
    description: 'Detailed description of your engineering task...',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    status: 'Completed',
    github: 'https://github.com/your-repo',
    demo: 'https://your-demo.com',
    visual: ( /* HTML/SVG abstract mockup */ )
  }
  ```

#### To replace mockups with real screenshots:
If you want to show image screenshots instead of the handcrafted SVG mockups, open `src/components/Projects.jsx`, find the `<img>` tag commented out under the `// Project Details` section, uncomment it, and specify the source path (e.g., `/assets/my-screenshot.png` placed in `public/assets/`).

### 4. Updating Skills & Concepts
* Open `src/components/Skills.jsx`.
* Update the `categories` array to add, edit, or delete items within "Programming Languages", "Currently Learning", "Developer Tools", and "Computer Science Concepts".

### 5. Education & Experience Timeline
* Update courses or graduation details in `src/components/Education.jsx`.
* Update your availability details in `src/components/Experience.jsx`.

---

## Deploying on Vercel

Vercel is the recommended hosting platform for Vite applications. You can deploy this portfolio for free in under 5 minutes.

### Method 1: Git Integration (Recommended)
1. Push your portfolio codebase to a new repository on **GitHub**, **GitLab**, or **Bitbucket**.
2. Sign up or log in to [Vercel](https://vercel.com).
3. Click **Add New** > **Project** on your dashboard.
4. Import your Git repository.
5. Vercel will automatically detect **Vite** as the framework preset and configure the build command (`npm run build`) and output directory (`dist`).
6. Click **Deploy**. Vercel will build the project and provide a public deployment URL.

### Method 2: Vercel CLI (Command Line)
If you prefer deploying directly from your local terminal:
1. Install the Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```
2. Login to your account:
   ```bash
   vercel login
   ```
3. Run the deployment command from the project root:
   ```bash
   vercel
   ```
4. Follow the terminal prompts (choose default settings for Vite).
5. Deploy to production:
   ```bash
   vercel --prod
   ```
