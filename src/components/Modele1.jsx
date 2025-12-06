import React, { useState } from 'react';
import {
    ArrowUpRight,
    MapPin,
    Mail,
    Phone,
    Menu,
    X,
    ChevronDown
} from 'lucide-react';

const Modele1 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    const expertises = [
        {
            title: "Droit Pénal",
            content: "Assistance à tous les stades de la procédure : garde à vue, instruction, jugement. Défense des victimes et des mis en cause."
        },
        {
            title: "Droit de la Famille",
            content: "Divorce par consentement mutuel ou contentieux, séparations, liquidation de régime matrimonial, successions."
        },
        {
            title: "Contentieux Commercial",
            content: "Litiges entre associés, rupture de relations commerciales, concurrence déloyale et recouvrement de créances."
        },
        {
            title: "Droit Immobilier",
            content: "Baux d'habitation et commerciaux, copropriété, troubles du voisinage et droit de la construction."
        }
    ];

    return (
        <div className="font-sans text-black bg-white selection:bg-black selection:text-white">

            {/* --- Layout Wrapper --- */}
            <div className="flex flex-col lg:flex-row min-h-screen">

                {/* --- Sidebar Navigation (Desktop) / Topbar (Mobile) --- */}
                <aside className="lg:w-64 lg:fixed lg:left-0 lg:top-14 lg:h-[calc(100vh-3.5rem)] border-b lg:border-b-0 lg:border-r border-gray-200 bg-white z-40 flex flex-col justify-between p-6 lg:p-10">
                    <div className="flex justify-between items-center lg:block">
                        <div className="mb-0 lg:mb-12">
                            <h1 className="text-2xl font-bold tracking-tighter uppercase">Chenal<br /><span className="text-gray-400">Avocats.</span></h1>
                        </div>
                        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>

                    {/* Desktop Nav Links */}
                    <nav className="hidden lg:flex flex-col space-y-6 text-sm font-medium tracking-wide uppercase">
                        <a href="#accueil" className="hover:line-through decoration-1 transition-all">Accueil</a>
                        <a href="#cabinet" className="hover:line-through decoration-1 transition-all">Le Cabinet</a>
                        <a href="#expertises" className="hover:line-through decoration-1 transition-all">Expertises</a>
                        <a href="#contact" className="hover:line-through decoration-1 transition-all">Contact</a>
                    </nav>

                    <div className="hidden lg:block text-xs text-gray-400 space-y-2">
                        <p>Paris 11ème</p>
                        <p>01 23 45 67 89</p>
                    </div>
                </aside>

                {/* --- Mobile Menu Overlay --- */}
                {isMenuOpen && (
                    <div className="fixed inset-0 bg-black text-white z-40 flex flex-col justify-center items-center p-10 lg:hidden">
                        <nav className="flex flex-col space-y-8 text-2xl font-bold text-center">
                            <a href="#accueil" onClick={() => setIsMenuOpen(false)}>Accueil</a>
                            <a href="#cabinet" onClick={() => setIsMenuOpen(false)}>Le Cabinet</a>
                            <a href="#expertises" onClick={() => setIsMenuOpen(false)}>Expertises</a>
                            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
                        </nav>
                    </div>
                )}

                {/* --- Main Content Area --- */}
                <main className="lg:ml-64 w-full">

                    {/* --- Hero Section --- */}
                    <section id="accueil" className="min-h-[80vh] flex flex-col justify-end p-6 lg:p-20 border-b border-gray-100">
                        <div className="max-w-4xl">
                            <p className="text-xs font-bold uppercase tracking-widest mb-6 text-gray-500">Barreau de Paris — Depuis 2010</p>
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.9] mb-12">
                                La défense <br />
                                <span className="italic">par excellence.</span>
                            </h2>
                            <div className="flex flex-col sm:flex-row gap-6 items-start">
                                <a href="#contact" className="group flex items-center gap-2 text-lg font-bold border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-all">
                                    Prendre rendez-vous <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* --- Image & Manifesto (Grid) --- */}
                    <section id="cabinet" className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-100">
                        <div className="h-[500px] md:h-auto border-b md:border-b-0 md:border-r border-gray-100 relative grayscale hover:grayscale-0 transition-all duration-1000">
                            <img
                                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Architecture palais justice"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-10 lg:p-20 flex flex-col justify-center">
                            <h3 className="text-3xl font-serif mb-8">Rigueur & Stratégie</h3>
                            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                                Nous ne croyons pas aux solutions toutes faites. Chaque dossier est une architecture complexe qui demande une analyse précise et une stratégie sur mesure.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Notre cabinet privilégie la qualité à la quantité, assurant à chaque client une disponibilité totale et une combativité sans faille.
                            </p>

                            <div className="mt-12 grid grid-cols-2 gap-8">
                                <div>
                                    <span className="block text-4xl font-bold mb-2">98%</span>
                                    <span className="text-xs uppercase tracking-widest text-gray-500">Satisfaction</span>
                                </div>
                                <div>
                                    <span className="block text-4xl font-bold mb-2">24h</span>
                                    <span className="text-xs uppercase tracking-widest text-gray-500">Réponse garantie</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* --- Expertises (Accordion Style) --- */}
                    <section id="expertises" className="p-6 lg:p-20 bg-gray-50">
                        <div className="max-w-4xl mx-auto">
                            <h3 className="text-sm font-bold uppercase tracking-widest mb-12 text-gray-400">Domaines d'intervention</h3>

                            <div className="space-y-4">
                                {expertises.map((item, index) => (
                                    <div key={index} className="bg-white border border-gray-200 hover:border-black transition-colors duration-300">
                                        <button
                                            onClick={() => toggleAccordion(index)}
                                            className="w-full flex justify-between items-center p-6 md:p-8 text-left"
                                        >
                                            <span className="text-xl md:text-2xl font-serif">{item.title}</span>
                                            <ChevronDown
                                                className={`transition-transform duration-300 ${activeAccordion === index ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ${activeAccordion === index ? 'max-h-40 p-6 md:p-8 pt-0' : 'max-h-0'}`}
                                        >
                                            <p className="text-gray-600 text-lg">{item.content}</p>
                                            <a href="#contact" className="inline-block mt-4 text-sm font-bold underline underline-offset-4 hover:text-gray-500">En discuter</a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* --- Contact (Minimal) --- */}
                    <section id="contact" className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="bg-black text-white p-10 lg:p-20 flex flex-col justify-between">
                            <div>
                                <h3 className="text-4xl font-serif mb-12">Contact</h3>
                                <div className="space-y-8 text-lg">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="mt-1 flex-shrink-0" />
                                        <p>12 Avenue de la République,<br />75011 Paris, France</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Phone className="flex-shrink-0" />
                                        <p>01 23 45 67 89</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Mail className="flex-shrink-0" />
                                        <p>contact@chenal-avocat.fr</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-20 lg:mt-0">
                                <p className="text-sm text-gray-500">© 2024 Cabinet Chenal. Mentions Légales.</p>
                            </div>
                        </div>

                        <div className="p-10 lg:p-20 bg-white">
                            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-xs uppercase font-bold tracking-widest mb-3 text-gray-400">Identité</label>
                                    <input type="text" placeholder="Nom & Prénom" className="w-full border-b border-gray-300 py-4 focus:outline-none focus:border-black text-xl transition-colors placeholder-gray-300" />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase font-bold tracking-widest mb-3 text-gray-400">Contact</label>
                                    <input type="email" placeholder="Adresse Email" className="w-full border-b border-gray-300 py-4 focus:outline-none focus:border-black text-xl transition-colors placeholder-gray-300" />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase font-bold tracking-widest mb-3 text-gray-400">Demande</label>
                                    <textarea rows="3" placeholder="Votre message..." className="w-full border-b border-gray-300 py-4 focus:outline-none focus:border-black text-xl transition-colors placeholder-gray-300 resize-none"></textarea>
                                </div>
                                <button className="w-full bg-gray-100 hover:bg-black hover:text-white text-black py-6 text-sm font-bold uppercase tracking-widest transition-all duration-300">
                                    Envoyer
                                </button>
                            </form>
                        </div>
                    </section>

                </main>
            </div>
        </div>
    );
};

export default Modele1;