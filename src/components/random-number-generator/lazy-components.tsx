"use client";

import dynamic from "next/dynamic";

// Lazy load components that aren't needed immediately
export const LazyHistory = dynamic(
  () => import("./history").then((mod) => ({ default: mod.History })),
  { ssr: false },
);
export const LazyAdvancedOptions = dynamic(
  () =>
    import("./advanced-options").then((mod) => ({
      default: mod.AdvancedOptions,
    })),
  { ssr: false },
);
export const LazyDigitGenerator = dynamic(
  () =>
    import("./digit-generator").then((mod) => ({
      default: mod.DigitGenerator,
    })),
  { ssr: false },
);
export const LazyPinGenerator = dynamic(
  () =>
    import("./pin-generator").then((mod) => ({ default: mod.PinGenerator })),
  { ssr: false },
);
export const LazyPhoneGenerator = dynamic(
  () =>
    import("./phone-generator").then((mod) => ({
      default: mod.PhoneGenerator,
    })),
  { ssr: false },
);
export const LazyListGenerator = dynamic(
  () =>
    import("./list-generator").then((mod) => ({ default: mod.ListGenerator })),
  { ssr: false },
);
export const LazyLotteryGenerator = dynamic(
  () =>
    import("./lottery-generator").then((mod) => ({
      default: mod.LotteryGenerator,
    })),
  { ssr: false },
);
export const LazySpecialGenerator = dynamic(
  () =>
    import("./special-generator").then((mod) => ({
      default: mod.SpecialGenerator,
    })),
  { ssr: false },
);
