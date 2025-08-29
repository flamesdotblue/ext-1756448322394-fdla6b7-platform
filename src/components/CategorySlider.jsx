import { useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CategorySlider({ title, labels, hint, value, onChange }) {
  const currentLabel = useMemo(() => {
    if (value <= 0) return labels[0];
    if (value >= 100) return labels[2];
    return labels[1];
  }, [value, labels]);

  const stepLeft = () => onChange(Math.max(0, value - 50));
  const stepRight = () => onChange(Math.min(100, value + 50));

  return (
    <div>
      <div className="flex items-baseline justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-semibold tracking-wide uppercase text-neutral-800">{title}</h3>
          <span className="text-xs text-neutral-500">{currentLabel}</span>
        </div>
        {hint ? <p className="text-[11px] text-neutral-500">{hint}</p> : null}
      </div>

      <div className="mt-3">
        <div className="flex items-center gap-3">
          <button
            aria-label={`Shift ${title} left`}
            onClick={stepLeft}
            className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex-1">
            <input
              type="range"
              min={0}
              max={100}
              step={50}
              value={value}
              onChange={(e) => onChange(Number(e.target.value))}
              className="w-full appearance-none bg-transparent focus:outline-none"
              aria-label={`${title} slider`}
            />
            <div className="relative mt-1">
              <div className="h-2 rounded-full bg-neutral-200" />
              <div
                className="absolute top-1/2 -translate-y-1/2 h-2 rounded-full bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 transition-all"
                style={{ left: 0, right: `${100 - value}%` }}
                aria-hidden
              />
              <div className="absolute inset-x-0 -bottom-7 text-[11px] text-neutral-600 select-none">
                <div className="flex justify-between">
                  <span>{labels[0]}</span>
                  <span>{labels[1]}</span>
                  <span>{labels[2]}</span>
                </div>
              </div>
              <div
                className="absolute -top-5 translate-x-[-50%] text-[10px] px-2 py-0.5 rounded-full bg-white border border-neutral-200 shadow-sm text-neutral-700"
                style={{ left: `${value}%` }}
              >
                {currentLabel}
              </div>
            </div>
          </div>

          <button
            aria-label={`Shift ${title} right`}
            onClick={stepRight}
            className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <style>{`
        input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; height: 18px; width: 18px; border-radius: 9999px; background: white; border: 2px solid #f59e0b; box-shadow: 0 1px 2px rgba(0,0,0,.1); margin-top: -8px; }
        input[type=range]::-moz-range-thumb { height: 18px; width: 18px; border-radius: 9999px; background: white; border: 2px solid #f59e0b; box-shadow: 0 1px 2px rgba(0,0,0,.1); }
        input[type=range]::-webkit-slider-runnable-track { height: 2px; background: transparent; }
        input[type=range]::-moz-range-track { height: 2px; background: transparent; }
      `}</style>
    </div>
  );
}
