"use client";

// Бібліотека шейдерів важка (~700 КБ), тому вантажимо її окремо, вже після сторінки,
// і лише там, де вона запрацює: є WebGPU і гість не вимкнув анімації в системі.

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";

const HeroEmbers = dynamic(() => import("./HeroEmbers").then((m) => m.HeroEmbers), { ssr: false });

const subscribe = () => () => {};
const canRun = () => "gpu" in navigator && !matchMedia("(prefers-reduced-motion: reduce)").matches;

export function HeroEffects() {
  const enabled = useSyncExternalStore(subscribe, canRun, () => false);
  return enabled ? <HeroEmbers /> : null;
}
