export type Product = {
  id: number;
  title: string;
  price: string;
  description: string;
  type: "direct" | "external";
  link?: string;
  market?: string;
};

export const products: Product[] = [
  {
    id: 1,
    title: "Sequence",
    price: "$19 (Lifetime)",
    description: "Clipboard sequencing utility for power users. Copy smarter, paste faster.",
    type: "direct",
    link: "/products/sequence",
    market: "Ark & Mile",
  },
  {
    id: 2,
    title: "ZenDesktop",
    price: "Free / Coming Soon",
    description: "Privacy + workspace cleanup tool. One-click hide, lock down, and reset your workspace.",
    type: "external",
    link: "https://gumroad.com",
    market: "Gumroad",
  },
  {
    id: 3,
    title: "CodeDeaver",
    price: "Internal Tool",
    description: "Intelligent code vault + snippet injection for C# workflows.",
    type: "external",
    link: "https://etsy.com",
    market: "Etsy",
  },
];
