"use client";

// Обрані гостем страви: { id страви: кількість }.
// Зберігаються в браузері, тож вибір не зникає, якщо гість випадково закрив сторінку.

import { useSyncExternalStore } from "react";

export type Selection = Record<string, number>;

const KEY = "menu-selection";
const EMPTY: Selection = {};

let selection: Selection = EMPTY;
let loaded = false;
let sheetOpen = false;
const listeners = new Set<() => void>();

function load() {
  if (loaded) return;
  loaded = true;
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) selection = JSON.parse(raw);
  } catch {
    // приватний режим або заблоковане сховище — просто працюємо без збереження
  }
}

function emit() {
  try {
    localStorage.setItem(KEY, JSON.stringify(selection));
  } catch {}
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function setQty(id: string, qty: number) {
  load();
  const next = { ...selection };
  if (qty <= 0) delete next[id];
  else next[id] = Math.min(qty, 99);
  selection = next;
  emit();
}

export function clearSelection() {
  selection = EMPTY;
  emit();
}

export function setSheetOpen(open: boolean) {
  sheetOpen = open;
  listeners.forEach((listener) => listener());
}

export function useSelection() {
  return useSyncExternalStore(
    subscribe,
    () => {
      load();
      return selection;
    },
    () => EMPTY,
  );
}

export function useSheetOpen() {
  return useSyncExternalStore(
    subscribe,
    () => sheetOpen,
    () => false,
  );
}

// 1 страва, 2 страви, 5 страв
export function pluralDishes(n: number) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return `${n} страва`;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return `${n} страви`;
  return `${n} страв`;
}
