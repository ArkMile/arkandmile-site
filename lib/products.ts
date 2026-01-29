export type ProductType = "direct" | "external";

export type Product = {
  id: number;
  slug: string; // ✅ add this
  title: string;
  price: string;
  description: string;
  type: ProductType;

  // external marketplace support
  link?: string;
  market?: string;
};

export const products: Product[] = [
  {
    id: 1,
    slug: "sequence",
    title: "Sequence",
    price: "$19 (Lifetime)",
    description: "Clipboard sequencing utility built for speed and zero friction.",
    type: "direct",
  },
  {
    id: 2,
    slug: "zendeckstop",
    title: "ZenDesktop",
    price: "Free",
    description: "Privacy + workspace cleanup. One click to reset your desktop state.",
    type: "direct",
  },
  {
    id: 3,
    slug: "codedeaver",
    title: "CodeDeaver",
    price: "Free (Upgrade available later)",
    description: "A code vault with fast capture + smart injection. Built for daily use.",
    type: "direct",
  },
];
