import React from 'react';

// Minimal className join helper (similar to shadcn's cn)
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 10,
  radius = 50,
  path = true,
}) {
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <circle
            className="stroke-black/10 stroke-[1.5] dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}

      <div
        style={{
          '--duration': duration,
          '--radius': radius,
          '--delay': -delay,
        }}
        className={cn(
          'absolute flex items-center justify-center rounded-full border border-gold/40 bg-white/10 backdrop-blur-sm transform-gpu animate-orbit [animation-delay:calc(var(--delay)*1000ms)]',
          reverse ? '[animation-direction:reverse]' : '',
          className,
        )}
      >
        {children}
      </div>
    </>
  );
}

export default OrbitingCircles;

