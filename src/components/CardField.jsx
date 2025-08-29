export default function CardField({ label, icon: Icon, value, onChange, placeholder }) {
  return (
    <label className="block">
      <span className="flex items-center gap-2 text-[11px] uppercase tracking-wide text-neutral-600">
        {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
        {label}
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="mt-1 w-full rounded-md bg-white/80 border border-neutral-300 px-3 py-2 text-sm font-mono text-neutral-800 shadow-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500/60"
      />
    </label>
  );
}
