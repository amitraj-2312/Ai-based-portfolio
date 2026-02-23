import Navbar from './components/Navbar';
import { Hero, About, Skills, Experience, Projects, Contact } from './components/Portfolio';
import Chatbot from './components/Chatbot';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="py-20 px-6 border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-zinc-900 font-bold tracking-tighter text-lg">
              AR<span className="text-emerald-500">.</span>
            </p>
            <p className="text-zinc-400 text-sm">
              © {new Date().getFullYear()} Amit Raj. Crafted with Passion.
            </p>
          </div>
          <div className="flex gap-10">
            <a href="#about" className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors">About</a>
            <a href="#experience" className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors">Experience</a>
            <a href="#projects" className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors">Projects</a>
          </div>
        </div>
      </footer>
      <Chatbot />
    </div>
  );
}
