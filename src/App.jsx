import React, { useState } from 'react';
import Modele1 from './components/Modele1';
import Modele2 from './components/Modele2';
import Modele3 from './components/Modele3';

// Je définis la Banner en premier (ou importez-la si elle est dans un autre fichier)
const Banner = ({ setModel, title }) => (
  // La banner reste fixed, h-14 définit sa hauteur
  <div className="fixed top-0 left-0 right-0 z-[9999] bg-black text-white px-4 py-3 flex justify-between items-center text-sm shadow-xl border-b border-gray-800 h-14">
    <div className="flex items-center gap-3">
      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
      <span className="font-bold tracking-wide">{title}</span>
    </div>
    <button onClick={() => setModel('menu')} className="bg-white text-black px-4 py-1.5 rounded text-xs font-bold hover:bg-gray-200 transition-colors uppercase tracking-wider">
      ← Changer de modèle
    </button>
  </div>
);

function App() {
  const [currentModel, setCurrentModel] = useState('menu');

  // MODIFICATION ICI : Ajout de 'pt-14' pour compenser la hauteur de la banner
  if (currentModel === '1') return (
    <div className="relative pt-14 min-h-screen">
      <Banner setModel={setCurrentModel} title="Modèle 1: Classique" />
      <Modele1 />
    </div>
  );

  if (currentModel === '2') return (
    <div className="relative pt-14 min-h-screen"> {/* pt-14 est important ici */}
      <Banner setModel={setCurrentModel} title="Modèle 2: Moderne" />
      <Modele2 />
    </div>
  );

  if (currentModel === '3') return (
    <div className="relative pt-14 min-h-screen">
      <Banner setModel={setCurrentModel} title="Modèle 3: Minimaliste" />
      <Modele3 />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-2xl w-full text-center">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Présentation Maquettes</h1>
        <p className="text-gray-500 mb-8">Projet Cabinet Chenal & Associés</p>

        <div className="grid gap-4">
          <button onClick={() => setCurrentModel('1')} className="p-6 border-2 border-blue-900 rounded-lg hover:bg-blue-50 transition-all group text-left">
            <h3 className="font-bold text-blue-900 text-xl group-hover:translate-x-1 transition-transform">Modèle 1 : Classique & Luxe</h3>
            <p className="text-gray-600 text-sm mt-1">Bleu Nuit & Or. Institutionnel et rassurant.</p>
          </button>

          <button onClick={() => setCurrentModel('2')} className="p-6 border-2 border-emerald-700 rounded-lg hover:bg-emerald-50 transition-all group text-left">
            <h3 className="font-bold text-emerald-800 text-xl group-hover:translate-x-1 transition-transform">Modèle 2 : Moderne & Business</h3>
            <p className="text-gray-600 text-sm mt-1">Vert Émeraude & Beige. Dynamique et clair.</p>
          </button>

          <button onClick={() => setCurrentModel('3')} className="p-6 border-2 border-black rounded-lg hover:bg-gray-50 transition-all group text-left">
            <h3 className="font-bold text-black text-xl group-hover:translate-x-1 transition-transform">Modèle 3 : Minimaliste & Art</h3>
            <p className="text-gray-600 text-sm mt-1">Noir & Blanc. Haut de gamme et architectural.</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;