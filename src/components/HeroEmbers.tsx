"use client";

// Іскри від вогню над відео на першому екрані (бібліотека shaders, WebGPU).
// Якщо браузер не підтримує WebGPU, полотно просто лишається прозорим — сайт працює як завжди.

import { FloatingParticles, Shader } from "shaders/react";

export function HeroEmbers() {
  return (
    <Shader className="pointer-events-none absolute inset-0" disableTelemetry>
      <FloatingParticles
        count={240}
        speed={0.4}
        angle={90}
        angleVariance={28}
        speedVariance={0.5}
        randomness={0.45}
        twinkle={0.9}
        particleSize={2.6}
        softness={0.7}
        shape="glow"
        particleColor="#ff7a2e"
      />
    </Shader>
  );
}
