import { motion, useScroll, useSpring } from 'motion/react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, GraduationCap, ChevronRight, Sparkles, ArrowUpRight } from 'lucide-react';
import { RESUME_DATA } from '../types';

const Section = ({ children, id, title, index }: { children: React.ReactNode, id: string, title: string, index: string }) => (
  <section id={id} className="py-16 px-6 max-w-7xl mx-auto relative">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row md:items-end gap-4 mb-10"
    >
      <div className="flex flex-col">
        <span className="text-emerald-500 font-mono text-sm mb-2 tracking-widest uppercase">{index}</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900">{title}</h2>
      </div>
      <div className="h-px flex-1 bg-zinc-200 mb-2 hidden md:block" />
    </motion.div>
    {children}
  </section>
);

export function Hero() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full -z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-zinc-900 text-zinc-100 text-xs font-medium mb-8"
        >
          <Sparkles size={14} className="text-emerald-400" />
          Available for Internships
        </motion.div>
        
        <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter text-zinc-900 leading-[0.85] mb-8">
          {RESUME_DATA.name.split(' ')[0]}<br />
          <span className="text-emerald-500">{RESUME_DATA.name.split(' ')[1]}</span>
        </h1>
        
        <p className="text-xl md:text-3xl text-zinc-500 max-w-3xl mb-12 leading-tight font-medium">
          A <span className="text-zinc-900">passionate {RESUME_DATA.role}</span> crafting high-performance web experiences and exploring the future of <span className="text-zinc-900">Machine Learning</span>.
        </p>
        
        <div className="flex flex-wrap items-center gap-6">
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#contact" 
            className="bg-zinc-900 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-zinc-800 transition-all flex items-center gap-3 shadow-2xl shadow-zinc-900/20"
          >
            Start a Conversation <ChevronRight size={20} />
          </motion.a>
          
          <div className="flex items-center gap-2">
            <a href={`https://${RESUME_DATA.contact.github}`} target="_blank" className="p-4 rounded-2xl bg-zinc-100 hover:bg-zinc-200 transition-all text-zinc-900">
              <Github size={24} />
            </a>
            <a href={`https://${RESUME_DATA.contact.linkedin}`} target="_blank" className="p-4 rounded-2xl bg-zinc-100 hover:bg-zinc-200 transition-all text-zinc-900">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-50"
        style={{ scaleX }}
      />
    </section>
  );
}

export function About() {
  return (
    <Section id="about" title="About Me" index="01">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-8 text-xl text-zinc-600 leading-relaxed">
          <p>
            I am a passionate <span className="text-zinc-900 font-semibold">MERN Stack Developer</span> currently pursuing a BSc in Computer Science. I enjoy building modern web applications using technologies like React, Node.js, Express, and MongoDB.
          </p>
          <p>
            I love solving real-world problems through code and continuously improving my skills. I am currently looking for opportunities such as <span className="text-zinc-900 font-semibold">Software Developer roles</span> or <span className="text-zinc-900 font-semibold">ML Research Internships</span>.
          </p>
          <div className="flex flex-wrap gap-6 pt-4">
            <div className="flex items-center gap-3 text-sm font-bold text-zinc-900 uppercase tracking-widest">
              <Briefcase size={20} className="text-emerald-500" />
              Open to Work
            </div>
            <div className="flex items-center gap-3 text-sm font-bold text-zinc-900 uppercase tracking-widest">
              <GraduationCap size={20} className="text-emerald-500" />
              BSc Computer Science
            </div>
          </div>
        </div>
        
        <div className="relative group">
          <div className="absolute -inset-4 bg-emerald-500/5 rounded-[3rem] blur-2xl group-hover:bg-emerald-500/10 transition-all duration-500" />
          <div className="relative bg-white border border-zinc-200 rounded-[2.5rem] p-10 shadow-xl shadow-zinc-200/50">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center text-white">
                <Code2 size={24} />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900">Tech Stack</h4>
                <p className="text-sm text-zinc-500">Core technologies I use</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['React', 'Node.js', 'Python', 'MongoDB'].map(tech => (
                <div key={tech} className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100 font-medium text-zinc-900 flex items-center justify-between group/item">
                  {tech}
                  <ArrowUpRight size={14} className="text-zinc-300 group-hover/item:text-emerald-500 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Skills() {
  const categories = Array.from(new Set(RESUME_DATA.skills.map(s => s.category)));
  
  return (
    <Section id="skills" title="Skills" index="02">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, i) => (
          <motion.div 
            key={cat}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 bg-white border border-zinc-100 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-emerald-500/20 transition-all group"
          >
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400 mb-6 group-hover:text-emerald-500 transition-colors">{cat}</h3>
            <div className="flex flex-wrap gap-3">
              {RESUME_DATA.skills.filter(s => s.category === cat).map(skill => (
                <span key={skill.name} className="px-4 py-2 bg-zinc-50 text-zinc-900 rounded-xl text-sm font-semibold border border-zinc-100 hover:bg-emerald-50 hover:border-emerald-100 transition-colors">
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects" title="Projects" index="03">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {RESUME_DATA.projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative bg-white border border-zinc-200 rounded-[2.5rem] overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500"
          >
            <div className="aspect-video bg-zinc-100 relative overflow-hidden">
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 to-zinc-100 flex items-center justify-center">
                  <Code2 size={64} className="text-zinc-300 group-hover:text-emerald-500 transition-colors" />
                </div>
              )}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                <a 
                  href={project.link || "#"} 
                  target="_blank"
                  className="bg-white text-zinc-900 px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                >
                  View Case Study <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
            <div className="p-10 flex-1 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-3xl font-bold text-zinc-900 mb-4 group-hover:text-emerald-600 transition-colors">{project.title}</h3>
              <p className="text-zinc-500 text-lg mb-8 leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" title="Experience" index="04">
      <div className="max-w-4xl space-y-10">
        {RESUME_DATA.experiences.map((exp, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-12 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-zinc-200"
          >
            <div className="absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-emerald-50" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-sm font-black text-emerald-500 uppercase tracking-widest mb-2 block">{exp.period}</span>
                <h3 className="text-3xl font-bold text-zinc-900">{exp.role}</h3>
                <p className="text-xl text-zinc-500 font-medium">{exp.company}</p>
              </div>
            </div>
            <ul className="space-y-4">
              {exp.description.map((item, j) => (
                <li key={j} className="text-lg text-zinc-600 flex gap-4 leading-relaxed">
                  <span className="text-emerald-500 font-bold">0{j+1}</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" title="Get In Touch" index="05">
      <div className="bg-zinc-900 rounded-[3rem] p-12 md:p-24 text-white relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 blur-[150px] rounded-full -z-0 group-hover:bg-emerald-500/30 transition-all duration-700" />
        
        <div className="relative z-10 max-w-3xl">
          <h3 className="text-5xl md:text-7xl font-bold mb-8 leading-[0.9] tracking-tighter">Let's build something <span className="text-emerald-400">extraordinary</span>.</h3>
          <p className="text-zinc-400 text-xl md:text-2xl mb-16 leading-relaxed">
            I'm currently looking for internship opportunities in Software Development or ML Research. 
            My inbox is always open for interesting projects or just a friendly hello.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <motion.a 
              whileHover={{ y: -5 }}
              href={`mailto:${RESUME_DATA.contact.email}`} 
              className="flex items-center gap-6 p-8 bg-white/5 rounded-[2rem] hover:bg-white/10 transition-all border border-white/10 backdrop-blur-xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-xl shadow-emerald-500/20">
                <Mail size={32} />
              </div>
              <div>
                <p className="text-xs text-zinc-500 uppercase font-black tracking-[0.2em] mb-1">Email Me</p>
                <p className="text-xl font-bold truncate max-w-[200px]">{RESUME_DATA.contact.email}</p>
              </div>
            </motion.a>
            
            <motion.a 
              whileHover={{ y: -5 }}
              href={`https://${RESUME_DATA.contact.linkedin}`} 
              target="_blank" 
              className="flex items-center gap-6 p-8 bg-white/5 rounded-[2rem] hover:bg-white/10 transition-all border border-white/10 backdrop-blur-xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-500 flex items-center justify-center shadow-xl shadow-blue-500/20">
                <Linkedin size={32} />
              </div>
              <div>
                <p className="text-xs text-zinc-500 uppercase font-black tracking-[0.2em] mb-1">LinkedIn</p>
                <p className="text-xl font-bold">{RESUME_DATA.name}</p>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </Section>
  );
}
