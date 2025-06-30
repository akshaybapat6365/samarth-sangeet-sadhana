'use client';

export const WesternNote = ({ className = '' }: { className?: string }) => (
  <svg className={`w-6 h-6 ${className}`} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
  </svg>
);

export const IndianSwarNotation = ({ swar = 'स', className = '' }: { swar?: string; className?: string }) => (
  <div className={`font-devanagari text-2xl font-bold ${className}`}>
    {swar}
  </div>
);

export const MusicWave = ({ className = '' }: { className?: string }) => (
  <svg className={`w-full h-16 ${className}`} viewBox="0 0 200 40" preserveAspectRatio="none">
    <path
      d="M0,20 Q50,5 100,20 T200,20"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      opacity="0.3"
    />
    <path
      d="M0,25 Q50,10 100,25 T200,25"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      opacity="0.5"
    />
    <path
      d="M0,30 Q50,15 100,30 T200,30"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      opacity="0.7"
    />
  </svg>
);

export const FloatingNotes = () => {
  const notes = ['♪', '♫', '♬', '♩'];
  const swars = ['सा', 'रे', 'ग', 'म', 'प', 'ध', 'नि'];
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {notes.map((note, i) => (
        <div
          key={`note-${i}`}
          className="absolute musical-note text-warm-300/30 text-2xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        >
          {note}
        </div>
      ))}
      {swars.map((swar, i) => (
        <div
          key={`swar-${i}`}
          className="absolute musical-note font-devanagari text-accent-300/20 text-xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.7}s`,
          }}
        >
          {swar}
        </div>
      ))}
    </div>
  );
};