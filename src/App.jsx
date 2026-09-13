import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Code2,
  Database,
  Server,
  Layers3,
  Sparkles,
  ExternalLink,
  Download,
  MapPin,
  Trophy,
  Terminal,
  ChevronDown,
  Phone,
  Upload,
  BriefcaseBusiness,
  Cpu,
  Globe,
  Boxes,
  Award,
} from "lucide-react";

const nav = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Certification", "certification"],
  ["Contact", "contact"],
];

const skills = [
  { name: "HTML5", icon: Globe, level: "Advanced" },
  { name: "CSS3", icon: Layers3, level: "Advanced" },
  { name: "JavaScript", icon: Code2, level: "Advanced" },
  { name: "TypeScript", icon: Code2, level: "Strong" },
  { name: "React.js", icon: Layers3, level: "Advanced" },
  { name: "Next.js", icon: Globe, level: "Strong" },
  { name: "Node.js", icon: Server, level: "Advanced" },
  { name: "Express.js", icon: Server, level: "Advanced" },
  { name: "MongoDB", icon: Database, level: "Advanced" },
  { name: "SQL", icon: Database, level: "Strong" },
  { name: "Redux Toolkit", icon: Layers3, level: "Strong" },
  { name: "Tailwind CSS", icon: Sparkles, level: "Strong" },
  { name: "Java + DSA", icon: Terminal, level: "Strong" },
  { name: "Python", icon: Code2, level: "Strong" },
  { name: "C", icon: Terminal, level: "Strong" },
  { name: "System Design", icon: Boxes, level: "Foundational" },
  { name: "GenAI Tools", icon: Cpu, level: "Practical" },
  { name: "Git & GitHub", icon: Github, level: "Strong" },
];

const projects = [
  {
    number: "01",
    title: "DevFlow / SynapseAI",
    type: "AI-Powered Project Management Platform",
    description:
      "A production-style multi-tenant project management platform featuring RBAC, Kanban workflows, real-time collaboration, GitHub integration, AI project assistance, RAG-based contextual support and automated AI code review.",
    tags: [
      "MERN",
      "Socket.IO",
      "RBAC",
      "RAG",
      "Redis",
      "BullMQ",
      "Docker",
      "GitHub API",
    ],
    github: "https://github.com/Swastik888/Devflow.git",
  },
  {
    number: "02",
    title: "Spend Smart",
    type: "Full-Stack Expense Management",
    description:
      "A full-stack expense management application with user authentication, protected routes, ownership validation, CRUD operations, profile management and visual spending insights.",
    tags: ["Node.js", "Express", "MongoDB", "EJS", "JWT"],
    github: "https://github.com/Swastik888/Spend-Smart-application",
  },
  {
    number: "03",
    title: "ShoppyGlobe",
    type: "E-Commerce Application",
    description:
      "A responsive e-commerce application built with React featuring product browsing, reusable components, Redux state management, routing and API-driven product data with a modern responsive interface.",
    tags: [
      "React",
      "Vite",
      "Redux",
      "Tailwind CSS",
      "Express",
      "Node.js",
      "MongoDB",
    ],
    github: "https://github.com/Swastik888/E-Commerce-website-only-basic",
  },
  {
    number: "04",
    title: "YouTube-Inspired Platform",
    type: "Video & Social Platform",
    description:
      "A MERN-based video-sharing platform featuring video uploads, authentication, comments, likes and a responsive user interface. Implemented secure user authentication and session management using JWT.",
    tags: ["MERN", "JWT", "React", "API", "Tailwind CSS"],
    github: "https://github.com/Swastik888/YouTube-clone-MERN-stack.git",
  },
  {
    number: "05",
    title: "Weather Forecast Application",
    type: "Weather & Forecast",
    description:
      "A responsive weather application that retrieves real-time weather information and multi-day forecasts through asynchronous API requests, dynamically updating the interface based on the selected location.",
    tags: ["HTML", "CSS", "JavaScript", "REST API"],
    github: "https://github.com/Swastik888/Weather-forcast-project.git",
  },
];

const featuredCertification = {
  title: "Full Stack Development with AI",
  issuer: "Internshala Trainings",
  description:
    "Completed a rigorous six-month placement course covering HTML, CSS, JavaScript, Git & GitHub, Data Structures & Algorithms, React, Node.js, Express.js and MongoDB.",
  file: `${import.meta.env.BASE_URL}mern-internshala.pdf`,
};

const additionalCertifications = [
  { name: "Java", icon: Terminal },
  { name: "TypeScript", icon: Code2 },
  { name: "Python", icon: Code2 },
];

const fade = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

function Section({ id, eyebrow, title, children }) {
  return (
    <section
      id={id}
      className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 md:px-8"
    >
      <motion.div
        variants={fade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          {eyebrow}
        </p>

        <h2 className="max-w-4xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
          {title}
        </h2>

        {children}
      </motion.div>
    </section>
  );
}

function App() {
  const [open, setOpen] = useState(false);

  // GitHub Pages compatible profile image path
  const [profileImage, setProfileImage] = useState(
    `${import.meta.env.BASE_URL}profile-photo.jpg`
  );

  const fileInputRef = useRef(null);

  const go = (id) => {
    setOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    setProfileImage(imageUrl);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-slate-100">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-15%] top-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute right-[-15%] top-[25%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute bottom-[-15%] left-[30%] h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[140px]" />
        <div className="grid-bg absolute inset-0 opacity-40" />
      </div>

      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto mt-4 max-w-7xl px-4 md:px-8">
          <nav className="rounded-2xl border border-white/10 bg-[#07101f]/80 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <button
                onClick={() => go("home")}
                className="flex items-center gap-3"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-sm font-black text-slate-950 shadow-lg shadow-cyan-500/20">
                  SD
                </span>

                <span className="hidden text-sm font-semibold sm:block">
                  Swastik Dutta
                </span>
              </button>

              <div className="hidden items-center gap-8 md:flex">
                {nav.map(([label, id]) => (
                  <button
                    key={id}
                    onClick={() => go(id)}
                    className="text-sm text-slate-400 transition hover:text-cyan-400"
                  >
                    {label}
                  </button>
                ))}
              </div>

              <a
                href="#contact"
                className="hidden items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 md:flex"
              >
                Let's talk
                <ArrowUpRight size={15} />
              </a>

              <button
                onClick={() => setOpen(!open)}
                className="rounded-lg p-2 text-slate-300 md:hidden"
                aria-label="Toggle menu"
              >
                {open ? <X /> : <Menu />}
              </button>
            </div>
          </nav>

          {open && (
            <div className="mt-2 rounded-2xl border border-white/10 bg-[#07101f]/95 p-3 shadow-xl backdrop-blur-xl md:hidden">
              {nav.map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => go(id)}
                  className="block w-full rounded-xl px-3 py-3 text-left text-sm text-slate-300 hover:bg-white/5 hover:text-cyan-400"
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      <main className="relative z-10">
        {/* HERO */}
        <section
          id="home"
          className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-16 pt-32 md:px-8"
        >
          <div className="grid w-full items-center gap-14 lg:grid-cols-[1.3fr_.7fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
            >
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-xs text-emerald-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Available for opportunities
              </div>

              <p className="mb-4 text-lg text-slate-400">
                Hi, I'm <span className="text-white">Swastik Dutta.</span>
              </p>

              <h1 className="max-w-5xl text-5xl font-bold leading-[0.98] tracking-[-0.04em] sm:text-6xl md:text-8xl">
                Full-stack
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  developer.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
                B.Tech Information Technology graduate and aspiring MERN Stack
                Developer focused on building scalable full-stack applications,
                clean interfaces, reliable APIs and practical software
                solutions.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                  View my work
                  <ArrowUpRight
                    size={17}
                    className="transition group-hover:translate-x-0.5"
                  />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
                >
                  <Mail size={17} />
                  Contact me
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-5 text-sm text-slate-500">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={15} />
                  Kolkata, India
                </span>

                <span className="h-1 w-1 rounded-full bg-slate-700" />

                <span>React • Node • MongoDB • Next.js</span>
              </div>
            </motion.div>

            {/* PROFILE IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-indigo-500/20 blur-2xl" />

                <div className="relative w-72 rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl backdrop-blur-xl sm:w-80">
                  <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800">
                    {profileImage ? (
                      <img
                        src={profileImage}
                        alt="Swastik Dutta"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                        <div className="mb-5 grid h-20 w-20 place-items-center rounded-full border border-cyan-400/20 bg-cyan-400/10">
                          <Upload
                            className="text-cyan-400"
                            size={30}
                          />
                        </div>

                        <p className="font-medium text-white">
                          Add your profile photo
                        </p>

                        <p className="mt-2 text-xs leading-5 text-slate-500">
                          Upload a professional photo to personalize your
                          portfolio.
                        </p>

                        <button
                          onClick={() => fileInputRef.current?.click()}
                          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                        >
                          <Upload size={15} />
                          Upload Photo
                        </button>

                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </div>
                    )}
                  </div>

                  {profileImage && (
                    <>
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-2.5 text-xs text-slate-300 transition hover:bg-white/10"
                      >
                        <Upload size={14} />
                        Change photo
                      </button>

                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </>
                  )}

                  <div className="px-2 pb-1 pt-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                      Software Developer
                    </p>

                    <p className="mt-2 text-lg font-semibold">
                      Swastik Dutta
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-600 md:flex">
            <span className="text-[10px] uppercase tracking-[0.3em]">
              Scroll
            </span>

            <ChevronDown size={16} className="animate-bounce" />
          </div>
        </section>

        {/* ABOUT */}
        <Section
          id="about"
          eyebrow="01 — About"
          title="Developer mindset, not just a technology list."
        >
          <div className="mt-10 grid gap-5 md:grid-cols-[1.4fr_.8fr]">
            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl md:p-9">
              <p className="text-lg leading-8 text-slate-300">
                I enjoy turning ideas into useful products — from responsive
                React interfaces to authenticated backend systems and
                database-driven applications.
              </p>

              <p className="mt-5 leading-7 text-slate-500">
                I focus on writing maintainable code, creating reusable
                components and understanding the engineering decisions behind
                the applications I build.
              </p>

              <p className="mt-5 leading-7 text-slate-500">
                My current focus is strengthening my full-stack development,
                DSA, system design and software engineering fundamentals while
                building practical projects.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 p-7 backdrop-blur-xl">
              <Trophy className="mb-5 text-cyan-400" size={28} />

              <p className="text-sm text-slate-500">Achievement</p>

              <h3 className="mt-2 text-xl font-semibold">
                Coding Competition Runner-up
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Demonstrated problem solving, logical thinking and
                collaboration under time constraints.
              </p>
            </div>
          </div>
        </Section>

        {/* SKILLS */}
        <Section
          id="skills"
          eyebrow="02 — Skills"
          title="Technologies I use to build modern applications."
        >
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {skills.map(({ name, icon: Icon, level }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.035 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]"
              >
                <Icon
                  size={22}
                  className="text-cyan-400 transition group-hover:scale-110"
                />

                <h3 className="mt-7 font-medium text-white">{name}</h3>

                <p className="mt-1 text-xs text-slate-600">{level}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section
          id="projects"
          eyebrow="03 — Selected Work"
          title="Projects that demonstrate how I think and build."
        >
          <div className="mt-10 space-y-4">
            {projects.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.04] md:p-8"
              >
                <div className="grid gap-7 md:grid-cols-[100px_1fr_auto] md:items-start">
                  <span className="font-mono text-sm text-slate-700">
                    {project.number}
                  </span>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                      {project.type}
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                      {project.title}
                    </h3>

                    <p className="mt-4 max-w-4xl leading-7 text-slate-500">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
                    aria-label={`Open ${project.title}`}
                  >
                    <ExternalLink size={17} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        {/* CERTIFICATION */}
        <Section
          id="certification"
          eyebrow="04 — Certification"
          title="Professional learning and training."
        >
          <div className="mt-10 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.03] md:p-9"
            >
              <div className="flex items-start justify-between gap-5">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                  <Award size={28} className="text-cyan-400" />
                </div>

                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 text-xs text-emerald-300">
                  Completed
                </span>
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Full Stack Development
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-white">
                MERN Stack Training
              </h3>

              <p className="mt-3 text-slate-400">
                Internshala
              </p>

              <p className="mt-4 max-w-xl leading-7 text-slate-500">
                {featuredCertification.description}
              </p>

              <a
                href={featuredCertification.file}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
              >
                View Certificate
                <ExternalLink size={16} />
              </a>
            </motion.div>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {additionalCertifications.map(({ name, icon: Icon }, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                    <Icon size={20} className="text-cyan-400" />
                  </div>

                  <h4 className="mt-4 font-medium text-white">{name}</h4>

                  <p className="mt-1 text-xs text-slate-600">
                    Certification
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* CURRENTLY BUILDING */}
        <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-cyan-500/[0.08] via-blue-500/[0.04] to-transparent p-8 md:p-12">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Currently Building
              </p>

              <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
                Better engineering fundamentals, one project at a time.
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-500">
                Full-stack development, DSA, scalable backend patterns,
                system design and practical software engineering.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "Full Stack",
                  "DSA",
                  "System Design",
                  "AI / GenAI",
                  "Backend Engineering",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <Section
          id="contact"
          eyebrow="05 — Contact"
          title="Let's build something useful."
        >
          <div className="mt-10 grid gap-5 md:grid-cols-[1fr_.8fr]">
            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 backdrop-blur-xl md:p-9">
              <p className="leading-7 text-slate-500">
                I'm open to entry-level software development, MERN Stack,
                React and full-stack opportunities.
              </p>

              <div className="mt-7 space-y-3">
                <a
                  href="mailto:dswastik104@gmail.com"
                  className="flex items-center gap-3 rounded-xl border border-white/10 p-4 text-sm text-slate-300 transition hover:border-cyan-400/20 hover:bg-cyan-400/5"
                >
                  <Mail size={18} className="text-cyan-400" />
                  dswastik104@gmail.com
                </a>

                <a
                  href="tel:+919073040706"
                  className="flex items-center gap-3 rounded-xl border border-white/10 p-4 text-sm text-slate-300 transition hover:border-cyan-400/20 hover:bg-cyan-400/5"
                >
                  <Phone size={18} className="text-cyan-400" />
                  +91 9073040706
                </a>

                <a
                  href="https://github.com/Swastik888"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/10 p-4 text-sm text-slate-300 transition hover:border-cyan-400/20 hover:bg-cyan-400/5"
                >
                  <Github size={18} className="text-cyan-400" />
                  github.com/Swastik888
                </a>

                <a
                  href="https://www.linkedin.com/in/swastik-dutta-3b8aa8264"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/10 p-4 text-sm text-slate-300 transition hover:border-cyan-400/20 hover:bg-cyan-400/5"
                >
                  <Linkedin size={18} className="text-cyan-400" />
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 md:p-9">
              <div className="flex items-center gap-3">
                <BriefcaseBusiness
                  className="text-cyan-400"
                  size={22}
                />

                <p className="text-sm text-slate-500">
                  Quick Profile
                </p>
              </div>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-xs text-slate-600">Role</p>
                  <p className="mt-1 font-medium">
                    MERN Stack Developer
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-600">Education</p>
                  <p className="mt-1 font-medium">
                    B.Tech — Information Technology
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-600">Primary Focus</p>
                  <p className="mt-1 font-medium">
                    Full-Stack Web Development
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-600">Location</p>
                  <p className="mt-1 font-medium">
                    Kolkata, India
                  </p>
                </div>
              </div>

              {/* GitHub Pages compatible resume */}
              <a
                href={`${import.meta.env.BASE_URL}Swastik-Dutta-Resume.pdf`}
                download="Swastik-Dutta-Resume.pdf"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                <Download size={17} />
                Download Resume
              </a>
            </div>
          </div>
        </Section>
      </main>

      {/* FOOTER */}
      <footer className="mx-auto max-w-7xl border-t border-white/10 px-5 py-8 md:px-8">
        <div className="flex flex-col justify-between gap-4 text-sm text-slate-600 md:flex-row">
          <p>
            © {new Date().getFullYear()} Swastik Dutta. Built with React.
          </p>

          <p>
            Designed for clarity. Engineered for the web.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;


