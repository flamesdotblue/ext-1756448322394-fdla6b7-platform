import { useState } from 'react';
import HeroSpline from './components/HeroSpline';
import LibraryCard from './components/LibraryCard';

export default function App() {
  const [game, setGame] = useState({
    title: 'Cascadia',
    dewey: '794.1',
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-amber-50 text-neutral-900">
      <header className="relative">
        <HeroSpline />
        <div className="absolute inset-0 flex items-end justify-center pb-6">
          <div className="pointer-events-none max-w-3xl w-full px-6">
            <div className="rounded-2xl bg-white/70 backdrop-blur-md shadow-xl ring-1 ring-black/10 p-5">
              <h1 className="font-extrabold tracking-tight text-2xl sm:text-3xl md:text-4xl text-neutral-900">Board Game Library Card</h1>
              <p className="mt-1 text-sm sm:text-base text-neutral-700">File, sort, and slide your way through a games personality profile.</p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 pt-12 pb-24">
        <LibraryCard
          title={game.title}
          dewey={game.dewey}
          onChange={(next) => setGame(next)}
        />
      </main>

      <footer className="text-center text-xs text-neutral-500 pb-6">
        <span>Designed like a library card for modern board games.</span>
      </footer>
    </div>
  );
}
