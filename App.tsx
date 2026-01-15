
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { PROJECTS } from './constants';
import { RevealOnScroll } from './components/RevealOnScroll';
import { ContactForm } from './components/ContactForm';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path: string) => location.pathname === path;

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-background-dark/90 backdrop-blur-md shadow-md h-16' : 'bg-transparent h-20'}`}>
            <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3">
                    <div className="bg-primary text-white p-2 rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-xl">terminal</span>
                    </div>
                    <h1 className="text-lg font-bold tracking-tight text-charcoal dark:text-white">Luján Digital</h1>
                </Link>
                
                <nav className="hidden md:flex items-center gap-8">
                    <Link className={`text-sm font-semibold transition-colors ${isActive('/') ? 'text-primary' : 'hover:text-primary dark:text-white/70'}`} to="/">Inicio</Link>
                    <Link className={`text-sm font-semibold transition-colors ${isActive('/servicios') ? 'text-primary' : 'hover:text-primary dark:text-white/70'}`} to="/servicios">Servicios</Link>
                    <Link className={`text-sm font-semibold transition-colors ${isActive('/portfolio') ? 'text-primary' : 'hover:text-primary dark:text-white/70'}`} to="/portfolio">Portfolio</Link>
                    <button 
                        onClick={() => navigate('/contacto')}
                        className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95"
                    >
                        Hablemos
                    </button>
                </nav>

                <button className="md:hidden text-charcoal dark:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
                </button>
            </div>

            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 p-6 flex flex-col gap-4 shadow-xl">
                    <Link onClick={() => setIsMenuOpen(false)} className="text-lg font-bold" to="/">Inicio</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className="text-lg font-bold" to="/servicios">Servicios</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className="text-lg font-bold" to="/portfolio">Portfolio</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className="text-lg font-bold" to="/contacto">Contacto</Link>
                </div>
            )}
        </header>
    );
};

const Footer = () => (
    <footer className="py-12 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-background-dark">
        <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-6 opacity-60">
                <span className="material-symbols-outlined text-xl text-primary font-bold">terminal</span>
                <p className="text-sm font-bold tracking-tight text-charcoal dark:text-white">Luján Soluciones Digitales</p>
            </div>
            <p className="text-gray-400 text-sm mb-4">© 2024 Adrián Luján. Todos los derechos reservados.</p>
            <p className="text-gray-500 dark:text-gray-400 text-xs flex items-center justify-center gap-1.5 font-medium">
                Valencia, España | Hecho con <span className="text-red-500 material-symbols-outlined text-xs fill-1">favorite</span>
            </p>
        </div>
    </footer>
);

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <main className="pt-20">
            <section className="max-w-6xl mx-auto px-6 py-20 lg:py-32">
                <RevealOnScroll className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Disponible para nuevos proyectos
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tighter text-charcoal dark:text-white">
                            Desarrollo las apps que <span className="text-primary">tu negocio</span> necesita.
                        </h1>
                        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed">
                            Fullstack Developer especializado en crear soluciones de software robustas, escalables y orientadas a resultados.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button 
                                onClick={() => navigate('/portfolio')}
                                className="bg-primary text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all flex items-center gap-2 group"
                            >
                                Ver Portfolio
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                            <button 
                                onClick={() => navigate('/contacto')}
                                className="bg-gray-100 dark:bg-gray-800 text-charcoal dark:text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                            >
                                Contáctame
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gray-200 dark:bg-gray-800">
                             <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Developer workspace" />
                        </div>
                    </div>
                </RevealOnScroll>
            </section>
            
            <section className="bg-gray-50 dark:bg-gray-900/50 py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <RevealOnScroll className="mb-16">
                        <h2 className="text-3xl font-bold mb-4">Proyectos Principales</h2>
                        <div className="h-1.5 w-20 bg-primary rounded-full"></div>
                    </RevealOnScroll>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PROJECTS.map(project => (
                            <RevealOnScroll key={project.id}>
                                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 group hover:shadow-xl transition-all duration-300">
                                    <div className="aspect-video overflow-hidden">
                                        <img src={project.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={project.title} />
                                    </div>
                                    <div className="p-6">
                                        <span className={`text-[10px] font-black uppercase tracking-widest ${project.color.split(' ')[1]} mb-2 block`}>{project.category}</span>
                                        <h3 className="text-xl font-bold mb-2 text-charcoal dark:text-white">{project.title}</h3>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">{project.desc}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-[9px] px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded font-bold uppercase">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

const PortfolioPage = () => (
    <main className="pt-32 pb-24">
        <section className="max-w-6xl mx-auto px-6">
            <RevealOnScroll className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight">Mi Portfolio</h2>
                <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                    Explora los trabajos que he realizado para diversos sectores, desde logística hasta finanzas.
                </p>
            </RevealOnScroll>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {PROJECTS.map(project => (
                    <RevealOnScroll key={project.id}>
                        <div className="project-card bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-xl shadow-gray-200/40 dark:shadow-none">
                            <div className="aspect-[16/10] overflow-hidden">
                                <img src={project.img} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" alt={project.title} />
                            </div>
                            <div className="p-8">
                                <span className={`inline-block px-3 py-1 ${project.color} text-[10px] font-black uppercase tracking-widest rounded-full mb-4`}>{project.category}</span>
                                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">{project.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[10px] px-2 py-1 bg-gray-50 dark:bg-gray-700 border dark:border-gray-600 rounded-md font-bold text-gray-400">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                ))}
            </div>
        </section>
    </main>
);

const ContactPage = () => (
    <main className="pt-32 pb-24">
        <section className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                <RevealOnScroll className="space-y-12">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight text-charcoal dark:text-white mb-6">
                            Transformemos tu <span className="text-primary">idea</span> en código.
                        </h2>
                        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-md leading-relaxed">
                            Respondo en menos de 24 horas. Cuéntame qué necesitas y trazaremos un plan de ejecución.
                        </p>
                    </div>
                    <div className="space-y-8">
                        <div className="flex items-center gap-6">
                            <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">mail</span>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Email</p>
                                <p className="text-lg font-bold">hola@lujandigital.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">location_on</span>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Ubicación</p>
                                <p className="text-lg font-bold">Valencia, España</p>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
                <RevealOnScroll className="bg-white dark:bg-gray-800 p-8 lg:p-10 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700">
                    <ContactForm />
                </RevealOnScroll>
            </div>
        </section>
    </main>
);

const App = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/servicios" element={<div className="pt-32 px-6 max-w-6xl mx-auto"><h2 className="text-4xl font-black">Servicios Disponibles</h2><p className="mt-4 text-gray-500">Próximamente más detalles...</p></div>} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                    <Route path="/contacto" element={<ContactPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
