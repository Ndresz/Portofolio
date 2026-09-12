import Image from "next/image";
import ProjectSlider from "@/components/ProjectSlider";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center font-sans">
      <main className="flex flex-1 w-full max-w-4xl flex-col px-6 py-24 sm:px-12 sm:py-32">
        {/* Header Section */}
        <FadeIn>
        <section className="mb-24 flex flex-col items-start gap-6">
          <div className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400">
            Available for work
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-balance">
            Hi, I'm Andreas. <br className="hidden sm:block" />
            I build things for the web.
          </h1>
          <p className="max-w-xl text-lg text-slate-600 dark:text-slate-400">
            Hey there, welcome to my website! I am a software enthusiast with a passion for creating innovative solutions. Explore my projects, learn more about me, and feel free to reach out!
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a
              href="#contact"
              className="rounded-full bg-slate-900 px-6 py-3 font-medium text-white transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="rounded-full border border-slate-300 px-6 py-3 font-medium transition-colors hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              View projects
            </a>
            <a
              href="/cv.pdf"
              download="Andreas_Rahardian_CV.pdf"
              className="rounded-full border border-slate-300 px-6 py-3 font-medium transition-colors hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              Resume / CV
            </a>
            <a
              href="https://linkedin.com/in/andreas-rahardian"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full bg-slate-100 p-3 text-slate-600 transition-colors hover:bg-slate-200 hover:text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a
              href="https://github.com/Ndresz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full bg-slate-100 p-3 text-slate-600 transition-colors hover:bg-slate-200 hover:text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a
              href="https://www.instagram.com/andreas._rs/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full bg-slate-100 p-3 text-slate-600 transition-colors hover:bg-slate-200 hover:text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=andreas.r.silitonga@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full bg-slate-100 p-3 text-slate-600 transition-colors hover:bg-slate-200 hover:text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white"
              aria-label="Email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
          </div>
        </section>
        </FadeIn>

        {/* About / Experience Section */}
        <FadeIn delay={0.2}>
        <section id="about" className="mb-24 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-8">About & Experience</h2>
          <div className="grid gap-12 sm:grid-cols-3">
            <div className="sm:col-span-1">
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                I'm an Informatics student at Universitas Multimedia Nusantara who loves exploring the world of web development. I enjoy taking ideas and translating them into functional products through hands-on software projects.
              </p>
              <h3 className="font-semibold text-lg mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Node.js", "Express.js", "C/C++", "JavaScript", "PHP", "Kotlin", "SQL", "MySQL", "MongoDB", "Linux"].map((skill) => (
                  <span key={skill} className="rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="sm:col-span-2 flex flex-col gap-8">
              {/* Experience Item 1 */}
              <div className="relative border-l border-slate-200 dark:border-slate-800 pl-6 pb-2">
                <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-blue-500 ring-4 ring-white dark:ring-slate-950" />
                <h3 className="font-semibold text-lg">Person In Charge (PIC)</h3>
                <div className="text-sm text-slate-500 mb-3 flex justify-between items-center">
                  <span>UMNPC Gen XIII</span>
                  <span>Oct 2025 — July 2026</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Directed club activities and weekly training sessions focused on data structures, algorithms, and competitive programming. Coordinated internal practice contests and mentored members.
                </p>
              </div>

              {/* Experience Item 2 */}
              <div className="relative border-l border-slate-200 dark:border-slate-800 pl-6 pb-2">
                <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-slate-300 ring-4 ring-white dark:bg-slate-700 dark:ring-slate-950" />
                <h3 className="font-semibold text-lg">Security Division</h3>
                <div className="text-sm text-slate-500 mb-3 flex justify-between items-center">
                  <span>PPIF 2025</span>
                  <span>2025 — 2026</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Responsible for ensuring the safety and security of events and operations during the PPIF 2025 program.
                </p>
              </div>

              {/* Experience Item 3 */}
              <div className="relative border-l border-slate-200 dark:border-slate-800 pl-6 pb-2 border-transparent">
                <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-slate-300 ring-4 ring-white dark:bg-slate-700 dark:ring-slate-950" />
                <h3 className="font-semibold text-lg">Liaison Officer</h3>
                <div className="text-sm text-slate-500 mb-3 flex justify-between items-center">
                  <span>RoboCamp (Robotics Tourney)</span>
                  <span>2024</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Acted as the primary point of contact between organizers and participating teams, ensuring smooth communication and coordination throughout the robotics tournament.
                </p>
              </div>
            </div>
          </div>
        </section>
        </FadeIn>

        {/* Projects Section */}
        <FadeIn delay={0.2}>
        <section id="projects" className="mb-24">
          <h2 className="text-3xl font-bold mb-8">Selected Projects & Certifications</h2>
          <ProjectSlider />
        </section>
        </FadeIn>

        {/* Contact Section */}
        <FadeIn delay={0.2}>
        <section id="contact" className="mb-24">
          <div className="rounded-3xl bg-slate-900 p-8 sm:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Let's work together
            </h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
              I'm currently looking for new opportunities. Whether you have a question
              or just want to say hi, I'll try my best to get back to you!
            </p>
            <a
              href="https://www.instagram.com/andreas._rs/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-white px-8 py-4 font-medium text-slate-900 transition-colors hover:bg-slate-200"
            >
              Say Hello
            </a>
          </div>
        </section>
        </FadeIn>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-200 py-8 text-center text-sm text-slate-500 dark:border-slate-800">
        <p>&copy; 2026 Andreas. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
