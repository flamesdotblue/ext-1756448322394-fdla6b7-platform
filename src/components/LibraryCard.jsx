import { useMemo, useState } from 'react';
import { Book, Pencil, Tag } from 'lucide-react';
import CardField from './CardField';
import CategorySlider from './CategorySlider';

export default function LibraryCard({ title, dewey, onChange }) {
  const [localTitle, setLocalTitle] = useState(title);
  const [localDewey, setLocalDewey] = useState(dewey);

  const fields = useMemo(
    () => [
      {
        key: 'theme',
        title: 'Theme',
        labels: ['Abstract', 'Decorated', 'Immersive'],
        hint: 'How present is the theme in play?'
      },
      {
        key: 'randomness',
        title: 'Randomness',
        labels: ['Luck', 'Tactical', 'Skill'],
        hint: 'Outcome swing vs. player control.'
      },
      {
        key: 'interaction',
        title: 'Interaction',
        labels: ['Solitaire', 'Indirect', 'Constant'],
        hint: 'How often players affect one another.'
      },
      {
        key: 'learning',
        title: 'Learning',
        labels: ['Intuitive', 'Moderate', 'Heavy'],
        hint: 'Onboarding and rules burden.'
      },
      {
        key: 'tempo',
        title: 'Tempo',
        labels: ['Fast', 'Thoughtful', 'Brain Melting'],
        hint: 'Pace and cognitive load.'
      },
    ],
    []
  );

  const [values, setValues] = useState(() => ({
    theme: 50,
    randomness: 50,
    interaction: 50,
    learning: 50,
    tempo: 50,
  }));

  const handleField = (key, value) => {
    setValues((v) => ({ ...v, [key]: value }));
  };

  const exportProfile = () => {
    const profile = {
      title: localTitle,
      dewey: localDewey,
      ...Object.fromEntries(
        fields.map((f) => [
          f.key,
          f.labels[values[f.key] === 0 ? 0 : values[f.key] === 50 ? 1 : 2],
        ])
      ),
      raw: values,
    };
    navigator.clipboard.writeText(JSON.stringify(profile, null, 2)).catch(() => {});
  };

  return (
    <div className="relative">
      <div className="mx-auto max-w-3xl">
        <div
          className="rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] ring-1 ring-neutral-300/70 overflow-hidden"
          style={{
            background:
              'repeating-linear-gradient(0deg, #f7f2e7, #f7f2e7 28px, #e7dcc7 29px), radial-gradient(1200px_400px at 50% -10%, rgba(255,255,255,0.9), rgba(255,255,255,0.6))',
          }}
        >
          <div className="relative p-5 sm:p-7">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-neutral-200 rounded-b-full shadow-inner" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
              <CardField
                icon={Book}
                label="Board Game"
                value={localTitle}
                onChange={(v) => {
                  setLocalTitle(v);
                  onChange?.({ title: v, dewey: localDewey });
                }}
                placeholder="Game name"
              />
              <CardField
                icon={Tag}
                label="Dewey"
                value={localDewey}
                onChange={(v) => {
                  setLocalDewey(v);
                  onChange?.({ title: localTitle, dewey: v });
                }}
                placeholder="794.x"
              />
              <div className="flex sm:justify-end">
                <button
                  onClick={exportProfile}
                  className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white/70 px-3.5 py-2 text-sm font-medium text-neutral-800 shadow-sm hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60"
                >
                  <Pencil className="h-4 w-4" />
                  Copy Profile
                </button>
              </div>
            </div>
          </div>

          <div className="px-5 sm:px-7 pb-6 space-y-5">
            {fields.map((f) => (
              <div key={f.key} className="bg-white/60 rounded-lg ring-1 ring-neutral-200 px-4 py-3">
                <CategorySlider
                  title={f.title}
                  labels={f.labels}
                  hint={f.hint}
                  value={values[f.key]}
                  onChange={(val) => handleField(f.key, val)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
