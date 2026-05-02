import type { PriceGroup } from "@/lib/types";

export const pricing: PriceGroup[] = [
  {
    title: "עיסוי תאילנדי / עיסוי בשמן",
    description: "הטיפולים המלאים והפופולריים ביותר בסטודיו.",
    items: [
      { duration: "50 דקות", price: "₪230" },
      { duration: "60 דקות", price: "₪260" },
      { duration: "75 דקות", price: "₪300" },
      { duration: "90 דקות", price: "₪350" },
      { duration: "120 דקות", price: "₪450" },
    ],
  },
  {
    title: "פוט מסאז'",
    description: "טיפול ממוקד לכפות הרגליים ולשוקיים.",
    items: [
      { duration: "30 דקות", price: "₪130" },
      { duration: "50 דקות", price: "₪200" },
      { duration: "60 דקות", price: "₪230" },
    ],
  },
  {
    title: "עיסוי גב / כתפיים / צוואר",
    description: "טיפול ממוקד לאזורים תפוסים ועייפים.",
    items: [
      { duration: "30 דקות", price: "₪150" },
      { duration: "50 דקות", price: "₪220" },
      { duration: "60 דקות", price: "₪240" },
    ],
  },
];
