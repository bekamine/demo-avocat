import React, { useState } from 'react';
import {
    ArrowRight,
    CheckCircle2,
    Phone,
    Mail,
    MapPin,
    Menu,
    X,
    Briefcase,
    Scale,
    Users,
    MessageSquare
} from 'lucide-react';

const Modele2 = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Données simulées
    const email = "contact@cabinet-chenal.fr";
    const phone = "01 23 45 67 89";

    return (
        <div className="font-sans text-stone-800 bg-stone-50 antialiased selection:bg-emerald-200 selection:text-emerald-900">

            {/* --- Top Bar (Info rapide) --- */}
            <div className="bg-emerald-950 text-emerald-50 py-2 text-xs uppercase tracking-widest hidden md:block">
                <div className="container mx-auto px-8 flex justify-between items-center">
                    <span>Cabinet d'avocats au Barreau de Paris</span>
                    <div className="flex space-x-6">
                        <span className="flex items-center gap-2"><Phone size={14} /> {phone}</span>
                        <span className="flex items-center gap-2"><Mail size={14} /> {email}</span>
                    </div>
                </div>
            </div>

            {/* --- Header / Navigation --- */}
            <nav className="bg-white border-b border-stone-200 sticky top-14 z-40">
                <div className="container mx-auto px-8 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="bg-emerald-800 text-white p-2">
                            <Scale size={24} />
                        </div>
                        <div className="leading-none">
                            <span className="block text-xl font-bold text-stone-900 tracking-tight">CHENAL</span>
                            <span className="block text-xs text-stone-500 uppercase tracking-widest">Avocats Associés</span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-stone-600 uppercase tracking-wide">
                        <a href="#expertises" className="hover:text-emerald-800 transition-colors">Expertises</a>
                        <a href="#valeurs" className="hover:text-emerald-800 transition-colors">Valeurs</a>
                        <a href="#equipe" className="hover:text-emerald-800 transition-colors">L'Équipe</a>
                        <a href="#contact" className="px-5 py-3 bg-stone-900 text-white hover:bg-emerald-800 transition-colors">
                            Prendre RDV
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="md:hidden text-stone-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-stone-100 p-4 flex flex-col space-y-4 shadow-lg">
                        <a href="#expertises" className="font-bold text-stone-700">Expertises</a>
                        <a href="#valeurs" className="font-bold text-stone-700">Valeurs</a>
                        <a href="#equipe" className="font-bold text-stone-700">L'Équipe</a>
                        <a href="#contact" className="text-emerald-800 font-bold">Contact</a>
                    </div>
                )}
            </nav>

            {/* --- Hero Section (Asymétrique) --- */}
            <header className="relative bg-stone-100 overflow-hidden">
                <div className="container mx-auto px-8 py-20 lg:py-32 flex flex-col lg:flex-row items-center">

                    {/* Text Content */}
                    <div className="lg:w-1/2 z-10 mb-12 lg:mb-0 lg:pr-12">
                        <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-6">
                            Droit & Stratégie
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold text-stone-900 leading-none mb-8">
                            L'expertise <br />
                            <span className="text-emerald-800">à vos côtés.</span>
                        </h1>
                        <p className="text-xl text-stone-600 mb-10 max-w-lg leading-relaxed font-serif">
                            Nous transformons la complexité juridique en solutions claires. Un accompagnement rigoureux pour protéger vos intérêts personnels et professionnels.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#contact" className="flex items-center justify-center px-8 py-4 bg-emerald-800 text-white font-bold hover:bg-emerald-900 transition-all shadow-lg hover:shadow-emerald-900/20">
                                Nous exposer votre cas
                            </a>
                            <a href="#expertises" className="flex items-center justify-center px-8 py-4 bg-white border border-stone-300 text-stone-700 font-bold hover:bg-stone-50 transition-all">
                                Nos domaines
                            </a>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="lg:w-1/2 relative h-full min-h-[400px] w-full">
                        <div className="relative z-10 rounded-none overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                alt="Bureau moderne"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-duration-700"
                            />
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -bottom-6 -left-6 w-1/2 h-full bg-emerald-900/10 -z-0"></div>
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-stone-300 z-0"></div>
                    </div>
                </div>
            </header>

            {/* --- Stats / Reassurance --- */}
            <div className="bg-emerald-900 text-white py-12">
                <div className="container mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-emerald-800">
                    <div>
                        <div className="text-4xl font-bold mb-1">15+</div>
                        <div className="text-emerald-200 text-sm uppercase tracking-wider">Années d'expérience</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold mb-1">2000+</div>
                        <div className="text-emerald-200 text-sm uppercase tracking-wider">Dossiers traités</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold mb-1">3</div>
                        <div className="text-emerald-200 text-sm uppercase tracking-wider">Langues parlées</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold mb-1">24h</div>
                        <div className="text-emerald-200 text-sm uppercase tracking-wider">Réactivité</div>
                    </div>
                </div>
            </div>

            {/* --- Expertises (Grid Style) --- */}
            <section id="expertises" className="py-24">
                <div className="container mx-auto px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-stone-200 pb-8">
                        <div className="max-w-xl">
                            <h2 className="text-sm font-bold text-emerald-800 uppercase tracking-widest mb-2">Nos Domaines</h2>
                            <h3 className="text-4xl font-bold text-stone-900">Une approche globale du droit</h3>
                        </div>
                        <a href="#contact" className="hidden md:flex items-center gap-2 text-stone-900 font-bold hover:text-emerald-800 transition-colors mt-4 md:mt-0">
                            Voir toutes les expertises <ArrowRight size={20} />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-stone-200">
                        {[
                            { title: "Droit des Affaires", desc: "Fusions, acquisitions, contrats commerciaux et contentieux d'affaires." },
                            { title: "Droit Immobilier", desc: "Baux commerciaux, construction, copropriété et transactions." },
                            { title: "Droit Social", desc: "Relations individuelles et collectives de travail, contentieux URSSAF." },
                            { title: "Contentieux Civil", desc: "Responsabilité civile, contrats, recouvrement de créances." },
                            { title: "Droit Pénal", desc: "Défense pénale des dirigeants et des entreprises." },
                            { title: "Propriété Intellectuelle", desc: "Marques, brevets, droits d'auteur et concurrence déloyale." },
                        ].map((item, idx) => (
                            <div key={idx} className="p-10 border-r border-b border-stone-200 bg-white hover:bg-stone-50 transition-colors group cursor-pointer">
                                <Briefcase className="text-stone-300 group-hover:text-emerald-800 mb-6 transition-colors" size={32} />
                                <h4 className="text-xl font-bold text-stone-900 mb-3">{item.title}</h4>
                                <p className="text-stone-500 font-serif leading-relaxed mb-6">
                                    {item.desc}
                                </p>
                                <span className="text-emerald-800 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                                    En savoir plus <ArrowRight size={16} />
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Section Valeurs ("Why Us") --- */}
            <section id="valeurs" className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
                {/* Abstract shapes */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-900/20 rounded-full blur-3xl -mr-20 -mt-20"></div>

                <div className="container mx-auto px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/3">
                            <h2 className="text-4xl font-bold mb-6 text-white">Pourquoi nous choisir ?</h2>
                            <p className="text-stone-400 text-lg font-serif mb-8">
                                Au-delà de la technique juridique, nous apportons une vision stratégique à chaque dossier.
                            </p>
                            <a href="#contact" className="inline-block border border-white px-8 py-3 text-white hover:bg-white hover:text-stone-900 transition-colors">
                                Rencontrer le cabinet
                            </a>
                        </div>

                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex gap-4">
                                <div className="bg-emerald-900 p-3 h-fit rounded-sm"><CheckCircle2 className="text-emerald-400" /></div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Transparence Totale</h4>
                                    <p className="text-stone-400 text-sm leading-relaxed">Pas de surprise sur les honoraires. Nous travaillons sur devis clair et détaillé avant toute intervention.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-emerald-900 p-3 h-fit rounded-sm"><Users className="text-emerald-400" /></div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Approche Humaine</h4>
                                    <p className="text-stone-400 text-sm leading-relaxed">Nous privilégions l'écoute et la disponibilité pour construire une relation de confiance durable.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-emerald-900 p-3 h-fit rounded-sm"><Scale className="text-emerald-400" /></div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Combativité</h4>
                                    <p className="text-stone-400 text-sm leading-relaxed">Nous défendons vos intérêts avec détermination, que ce soit en négociation ou au tribunal.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-emerald-900 p-3 h-fit rounded-sm"><MessageSquare className="text-emerald-400" /></div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Clarté</h4>
                                    <p className="text-stone-400 text-sm leading-relaxed">Nous traduisons le jargon juridique en langage clair pour que vous restiez maître des décisions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Contact Section Minimalist --- */}
            <section id="contact" className="py-24 bg-white">
                <div className="container mx-auto px-8">
                    <div className="max-w-4xl mx-auto bg-stone-50 p-8 md:p-16 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-emerald-800"></div>

                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-stone-900 mb-4">Besoin d'un conseil ?</h2>
                            <p className="text-stone-600">Remplissez ce formulaire, nous vous rappelons sous 24h.</p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Nom complet</label>
                                    <input type="text" className="w-full bg-white border-b-2 border-stone-200 p-3 focus:outline-none focus:border-emerald-800 transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Email</label>
                                    <input type="email" className="w-full bg-white border-b-2 border-stone-200 p-3 focus:outline-none focus:border-emerald-800 transition-colors" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Sujet</label>
                                <select className="w-full bg-white border-b-2 border-stone-200 p-3 focus:outline-none focus:border-emerald-800 transition-colors text-stone-700">
                                    <option>Droit des Affaires</option>
                                    <option>Droit de la Famille</option>
                                    <option>Autre demande</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Message</label>
                                <textarea rows="4" className="w-full bg-white border-b-2 border-stone-200 p-3 focus:outline-none focus:border-emerald-800 transition-colors"></textarea>
                            </div>

                            <button className="w-full bg-emerald-900 text-white font-bold uppercase tracking-widest py-4 hover:bg-stone-900 transition-colors">
                                Envoyer la demande
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* --- Footer Simple --- */}
            <footer className="bg-white border-t border-stone-200 pt-16 pb-8">
                <div className="container mx-auto px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-1 md:col-span-2">
                            <span className="text-2xl font-bold text-emerald-900 tracking-tight">CHENAL.</span>
                            <p className="mt-6 text-stone-500 leading-relaxed max-w-sm">
                                Un cabinet d'avocats résolument tourné vers l'avenir, alliant expertise technique et compréhension des enjeux humains.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-stone-900 mb-6 uppercase text-sm tracking-wider">Contact</h4>
                            <ul className="space-y-4 text-stone-600">
                                <li className="flex items-center gap-3"><MapPin size={16} /> 12 Avenue République, Paris</li>
                                <li className="flex items-center gap-3"><Phone size={16} /> {phone}</li>
                                <li className="flex items-center gap-3"><Mail size={16} /> {email}</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-stone-900 mb-6 uppercase text-sm tracking-wider">Légal</h4>
                            <ul className="space-y-4 text-stone-600 text-sm">
                                <li><a href="#" className="hover:text-emerald-800">Mentions légales</a></li>
                                <li><a href="#" className="hover:text-emerald-800">Politique de confidentialité</a></li>
                                <li><a href="#" className="hover:text-emerald-800">Barreau de Paris</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-stone-100 pt-8 flex justify-between items-center text-xs text-stone-400">
                        <p>© 2024 Cabinet Chenal. Tous droits réservés.</p>
                        <p>Conçu avec soin.</p>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Modele2;