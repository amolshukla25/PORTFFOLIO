# Amol Shukla — AI Developer & Trainer Portfolio

A modern, responsive, and SEO-optimized portfolio for [Amol Shukla](https://amolshukla.online) — AI Developer, Trainer, and Agentic AI Expert. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

**Live site:** [https://amolshukla.online](https://amolshukla.online)

## ✨ Key Features

- **Professional Experience Timeline**: Career journey with expandable details for each role and company
- **Project Showcase**: Technical projects with descriptions, tech stacks, and live links
- **Learning Hub**: Structured courses with interactive notes, code walk-throughs, quizzes, and practice exercises
- **Technical Blog**: Articles on agentic AI, LLMs, generative AI, Python, and software engineering
- **Multiple Themes**: Dark, Light, Retro, Cyberpunk, Aurora, Synthwave, and Paper themes
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **SEO-Ready**: JSON-LD structured data (Organization, Article/BlogPosting, Course, FAQ), meta tags, sitemap, and canonical URLs
- **Lightweight CSS Animations**: Subtle scroll-reveal and page-transition effects without a heavy animation library
- **Contact Form**: Functional contact form with server-action validation
- **Open Source**: Free to use and modify under the MIT License

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with Turbopack
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: Lightweight CSS animations
- **Form Handling**: Server actions with validation
- **Deployment**: [Vercel](https://vercel.com)

## 🔧 Getting Started

To run this portfolio locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/amolshukla25/PORTFFOLIO.git my-portfolio
   cd my-portfolio
   ```

2. Copy the contents of `.env.copy` to a new `.env` file and fill in the required information.

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎓 Training portal (admin & students)

A private portal for running training batches, alongside the public site.

| Area                | URL              | Who                                        |
| ------------------- | ---------------- | ------------------------------------------ |
| Trainer dashboard   | `/admin`         | Admin login                                |
| Student portal      | `/student`       | Students whose accounts the trainer creates |
| Connection check    | `/api/db-health` | Anyone (reports MongoDB connectivity)       |

### What the trainer can do

- **Batches** — create batches and see how many students are in each
- **Students** — create each student's login (name, email, password, batch), reset passwords, deactivate accounts, or move them between batches
- **Daily activity** — review every student's daily log with their 1–5 learning score, plus a list of students who did not log on a given day
- **Assignments** — record when an assignment was given and its due date, then track who submitted and when (late submissions are flagged)
- **Daily to-dos** — a per-day task list for the trainer
- **Reports** — download weekly (Monday–Sunday) or monthly reports as **CSV** or **PDF**, with per-student logs, average scores, hours and assignment submission rates

### What students can do

- Sign in with the credentials the trainer created
- Log each day's activity: what they studied, hours, notes, and a 1–5 star score of how much they got out of the session (1 = nothing, 5 = a lot)
- See their current streak, average score and pending assignments, and submit assignments

### Seeding the admin account

```bash
node --env-file=.env scripts/seed-admin.mjs
```

This creates `admin@amolshukla.online` (override with `SEED_ADMIN_EMAIL`, `SEED_ADMIN_NAME`). Running it again resets that account's password instead of creating a duplicate:

```bash
SEED_ADMIN_PASSWORD='your-new-strong-password' node --env-file=.env scripts/seed-admin.mjs
```

> **Change the default password before making the site public** — `/admin` is reachable by anyone, and the default password is in this repository.

### Required environment variables

Both are needed locally in `.env` **and** in your hosting provider's project settings, otherwise the portal cannot sign anyone in:

| Variable      | Purpose                                                          |
| ------------- | ---------------------------------------------------------------- |
| `MONGODB_URI` | MongoDB Atlas connection string                                  |
| `AUTH_SECRET` | Signs session cookies — use a long random string, keep it secret |

Generate a secret with:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Sessions are httpOnly JWTs; passwords are hashed with bcrypt. Every `/admin` and `/student` page is guarded server-side, and the portals are disallowed in `robots.txt`.

## 🎨 Customization

Easily personalize the site using the configuration files below:

| Section            | How to Customize                                       | File Location             |
| ------------------ | ------------------------------------------------------ | ------------------------- |
| **Personal Info**  | Edit your name, bio, and social links                  | `config/site.ts`          |
| **Skills**         | Add or modify the technologies and skills you showcase | `config/skills.ts`        |
| **Projects**       | Highlight your technical projects                      | `config/projects.ts`      |
| **Experience**     | Add your work and professional experience              | `config/experience.ts`    |
| **Contributions**  | Display open-source/community contributions            | `config/contributions.ts` |
| **Colors & Theme** | Customize color palette and themes                     | `tailwind.config.js`      |

## 🌟 Features In Detail

### Professional Experience Timeline

An interactive, animated timeline that showcases your career journey with expandable sections for details about each position and company.

### Learning Hub

Free structured courses on Python, data science, machine learning, prompt engineering, and more — with detailed notes, code walk-throughs, quizzes, and hands-on exercises.

### Technical Blog

Articles on agentic AI, LLMs, generative AI, Python, and software engineering, each with JSON-LD Article schema and SEO-optimized metadata.

### Contact Form Integration

A ready-to-use contact form that connects to a backend service.

## 📱 Performance

- Excellent Core Web Vitals metrics
- Responsive design across all device sizes
- Fast loading times with image optimization and lightweight dependencies

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgements

- Icons from [Lucide](https://lucide.dev/)
- Built by [Amol Shukla](https://github.com/amolshukla)

---

**Built with ❤️ by [Amol Shukla](https://github.com/amolshukla)**
