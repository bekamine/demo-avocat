import React, { useState, useEffect } from 'react';
import {
    Scale,
    Gavel,
    BookOpen,
    Phone,
    Mail,
    MapPin,
    Menu,
    X,
    Clock,
    ChevronRight,
    ShieldCheck,
    Award
} from 'lucide-react';

const Modele3 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Gestion du scroll pour la navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const scrollToSection = (id) => {
        setIsMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Données simulées (à remplacer par les vraies infos du client)
    // const lawyerName = "Maître Chenal & Associés";
    const email = "contact@chenal-avocat.fr";
    const phone = "01 23 45 67 89";
    const address = "12 Avenue de la République, 75011 Paris";

    return (
        <div className="font-sans text-slate-800 bg-white">

            {/* --- Navigation --- */}
            <nav className={`fixed w-full z-40 top-14 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className={`font-serif text-2xl font-bold tracking-wide ${isScrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}>
                        CHENAL<span className="text-amber-600">.</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className={`hidden md:flex space-x-8 items-center ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}>
                        {['Accueil', 'Le Cabinet', 'Expertises', 'Honoraires'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                                className="hover:text-amber-500 transition-colors uppercase text-sm tracking-wider font-medium"
                            >
                                {item}
                            </button>
                        ))}
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-sm transition-all duration-300 uppercase text-sm font-bold tracking-wide"
                        >
                            Prendre RDV
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-amber-600" onClick={toggleMenu}>
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col space-y-4 border-t border-slate-100">
                        {['Accueil', 'Le Cabinet', 'Expertises', 'Honoraires', 'Contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                                className="text-left text-slate-800 text-lg font-medium border-b border-slate-50 pb-2"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                )}
            </nav>

            {/* --- Hero Section --- */}
            <header id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                        alt="Bureau avocat"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-900/70"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center lg:text-left">
                    <div className="lg:w-2/3">
                        <h2 className="text-amber-500 font-bold uppercase tracking-widest mb-4 animate-fade-in-up">Cabinet d'Avocats à Paris</h2>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-8">
                            Défendre vos droits avec <br /><span className="italic text-amber-500">Rigueur & Humanité</span>
                        </h1>
                        <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
                            Nous vous accompagnons dans vos démarches juridiques et judiciaires avec une expertise reconnue et une écoute attentive.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button onClick={() => scrollToSection('contact')} className="bg-amber-600 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-amber-700 transition-colors shadow-lg">
                                Consultation Gratuite
                            </button>
                            <button onClick={() => scrollToSection('expertises')} className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-white hover:text-slate-900 transition-colors">
                                Nos Domaines
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* --- Le Cabinet (About) --- */}
            <section id="le-cabinet" className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 relative">
                            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-amber-600"></div>
                            <img
                                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Portrait Avocat"
                                className="w-full h-auto rounded-sm shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-amber-600"></div>
                        </div>
                        <div className="lg:w-1/2">
                            <h3 className="text-amber-600 font-bold uppercase tracking-widest mb-2">À Propos</h3>
                            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">Une approche personnalisée de la défense</h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                Fondé sur des valeurs d'excellence et de proximité, notre cabinet s'engage à fournir une défense sur-mesure. Nous comprenons que derrière chaque dossier se trouve une histoire humaine.
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                Que vous soyez un particulier ou une entreprise, nous mettons tout en œuvre pour élaborer la stratégie juridique la plus adaptée à vos besoins.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex items-start">
                                    <div className="bg-slate-100 p-3 rounded-full mr-4 text-amber-600">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Confidentialité</h4>
                                        <p className="text-sm text-slate-500">Secret professionnel absolu garanti.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-slate-100 p-3 rounded-full mr-4 text-amber-600">
                                        <Award size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Expérience</h4>
                                        <p className="text-sm text-slate-500">Plus de 15 ans de pratique.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Expertises --- */}
            <section id="expertises" className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h3 className="text-amber-600 font-bold uppercase tracking-widest mb-2">Nos Compétences</h3>
                        <h2 className="text-4xl font-serif font-bold text-slate-900">Domaines d'Intervention</h2>
                        <div className="w-24 h-1 bg-amber-600 mx-auto mt-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: <Gavel size={32} />, title: "Droit Pénal", desc: "Défense des auteurs et victimes d'infractions, garde à vue, instruction, audience correctionnelle." },
                            { icon: <Scale size={32} />, title: "Droit de la Famille", desc: "Divorce, séparation, pension alimentaire, droit de visite, adoption et filiation." },
                            { icon: <BookOpen size={32} />, title: "Droit du Travail", desc: "Licenciement, rupture conventionnelle, harcèlement, rédaction de contrats." },
                            { icon: <MapPin size={32} />, title: "Droit Immobilier", desc: "Litiges locatifs, copropriété, construction, baux commerciaux et d'habitation." },
                            { icon: <ShieldCheck size={32} />, title: "Droit des Affaires", desc: "Création de société, contentieux commercial, recouvrement de créances." },
                            { icon: <Clock size={32} />, title: "Préjudice Corporel", desc: "Accidents de la route, erreurs médicales, agressions, indemnisation." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-300 border-t-4 border-transparent hover:border-amber-600 group">
                                <div className="text-slate-400 group-hover:text-amber-600 transition-colors mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    {item.desc}
                                </p>
                                <a href="#contact" className="inline-flex items-center text-sm font-bold text-amber-600 hover:text-amber-700">
                                    EN SAVOIR PLUS <ChevronRight size={16} className="ml-1" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Honoraires (Fees) --- */}
            <section id="honoraires" className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="lg:w-1/2">
                            <h3 className="text-amber-500 font-bold uppercase tracking-widest mb-2">Transparence</h3>
                            <h2 className="text-4xl font-serif font-bold mb-6">Nos Honoraires</h2>
                            <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                La question des honoraires est abordée dès le premier rendez-vous. Une convention d'honoraires écrite est systématiquement proposée pour garantir une totale transparence.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center text-slate-300">
                                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-4"></span>
                                    Forfaitaire : Pour les procédures simples et standardisées.
                                </li>
                                <li className="flex items-center text-slate-300">
                                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-4"></span>
                                    Au temps passé : Taux horaire défini à l'avance pour les dossiers complexes.
                                </li>
                                <li className="flex items-center text-slate-300">
                                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-4"></span>
                                    Au résultat : Honoraire de base réduit complété par un pourcentage sur les gains.
                                </li>
                            </ul>
                            <div className="mt-8 p-6 bg-slate-800 border-l-4 border-amber-500">
                                <p className="italic text-slate-300">"L'aide juridictionnelle peut être acceptée selon la nature du dossier et vos ressources."</p>
                            </div>
                        </div>
                        <div className="lg:w-5/12 bg-white text-slate-900 p-8 md:p-12 rounded-sm shadow-2xl">
                            <h3 className="text-2xl font-serif font-bold mb-6 text-center">Premier Rendez-vous</h3>
                            <p className="text-center text-slate-600 mb-8">
                                Prenez contact pour une première évaluation de votre situation.
                            </p>
                            <div className="space-y-4">
                                <button onClick={() => scrollToSection('contact')} className="w-full bg-slate-900 text-white py-4 font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors">
                                    Prendre Rendez-vous
                                </button>
                                <div className="text-center text-sm text-slate-500 mt-4">
                                    Déductible si procédure engagée
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Contact & Map --- */}
            <section id="contact" className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Formulaire */}
                        <div>
                            <h3 className="text-amber-600 font-bold uppercase tracking-widest mb-2">Contactez-nous</h3>
                            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-8">Discutons de votre dossier</h2>
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Nom</label>
                                        <input type="text" className="w-full bg-slate-50 border border-slate-200 p-3 focus:outline-none focus:border-amber-600 transition-colors" placeholder="Votre nom" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Téléphone</label>
                                        <input type="tel" className="w-full bg-slate-50 border border-slate-200 p-3 focus:outline-none focus:border-amber-600 transition-colors" placeholder="06 12 34 56 78" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                                    <input type="email" className="w-full bg-slate-50 border border-slate-200 p-3 focus:outline-none focus:border-amber-600 transition-colors" placeholder="votre@email.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                                    <textarea rows="4" className="w-full bg-slate-50 border border-slate-200 p-3 focus:outline-none focus:border-amber-600 transition-colors" placeholder="Décrivez brièvement votre situation..."></textarea>
                                </div>
                                <button className="bg-amber-600 text-white px-8 py-4 w-full md:w-auto font-bold uppercase tracking-wider hover:bg-amber-700 transition-colors">
                                    Envoyer le message
                                </button>
                            </form>
                        </div>

                        {/* Coordonnées & Map Placeholder */}
                        <div className="flex flex-col h-full">
                            <div className="bg-slate-50 p-8 md:p-12 h-full rounded-sm">
                                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-8">Nos Coordonnées</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <MapPin className="text-amber-600 mt-1 mr-4" size={24} />
                                        <div>
                                            <h4 className="font-bold text-slate-900">Adresse</h4>
                                            <p className="text-slate-600">{address}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <Phone className="text-amber-600 mt-1 mr-4" size={24} />
                                        <div>
                                            <h4 className="font-bold text-slate-900">Téléphone</h4>
                                            <p className="text-slate-600">{phone}</p>
                                            <p className="text-sm text-slate-500">Du lundi au vendredi, 9h - 19h</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <Mail className="text-amber-600 mt-1 mr-4" size={24} />
                                        <div>
                                            <h4 className="font-bold text-slate-900">Email</h4>
                                            <p className="text-slate-600">{email}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Map Simulation */}
                                <div className="mt-8 bg-slate-200 h-64 w-full rounded-sm flex items-center justify-center text-slate-500 border border-slate-300">
                                    <div className="text-center">
                                        <MapPin size={32} className="mx-auto mb-2 text-slate-400" />
                                        <span>Carte Google Maps Interactive</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Footer --- */}
            <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-6 md:mb-0">
                            <div className="font-serif text-2xl font-bold text-white tracking-wide">
                                CHENAL<span className="text-amber-600">.</span>
                            </div>
                            <p className="text-sm mt-2">Défense & Conseil depuis 2010.</p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-sm">
                            <a href="#" className="hover:text-amber-500 transition-colors">Mentions Légales</a>
                            <a href="#" className="hover:text-amber-500 transition-colors">Politique de Confidentialité</a>
                            <a href="#" className="hover:text-amber-500 transition-colors">Plan du site</a>
                        </div>
                    </div>
                    <div className="text-center text-xs text-slate-600 mt-12">
                        © {new Date().getFullYear()} Cabinet Chenal. Tous droits réservés.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Modele3;