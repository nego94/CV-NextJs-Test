export interface Project {
  slug: string;
  title: string;
  category: string;
  date: string;
  client: string;
  url: string;
  shortDesc: string;
  description: string[];
  coverImage: string;
}

export const projects: Project[] = [
  {
    slug: 'fzfilmco',
    title: 'FZ Film Co',
    category: 'Film & Media',
    date: 'September 2025',
    client: 'FZ Film Co',
    url: 'https://fzfilmco.com/',
    coverImage: '/images/fzfilmco/fzfilmco.jpg',
    shortDesc:
      'Visual production studio website focused on cinematic storytelling through film, motion, and purposeful direction.',
    description: [
      'FZ Film Co is a visual production studio focused on crafting cinematic stories through film, motion, and thoughtful direction. Working across commercial, brand, and creative projects, the studio brings concepts to life with strong visual identity and emotional depth.',
      'Each production is approached with attention to narrative, composition, and rhythm — balancing creative vision with technical precision. From pre-production planning to final delivery, FZ Film Co creates visual work that feels intentional, immersive, and true to the story being told.',
    ],
  },
  {
    slug: 'homi-villas',
    title: 'Homi Villas',
    category: 'Hospitality',
    date: 'December 2025',
    client: 'Homi Villas',
    url: 'https://homi-villas.com/',
    coverImage: '/images/homi-villas/homivillas.jpg',
    shortDesc:
      'A thoughtfully designed villa collection website balancing comfort, functionality, and refined aesthetics.',
    description: [
      'Homi Villas offers a collection of thoughtfully designed villas that balance comfort, functionality, and refined aesthetics. Each space is created to feel welcoming and intuitive, allowing guests to experience privacy, calm, and a sense of home throughout their stay.',
      'From architectural layout to interior details, the villas are designed to support modern lifestyles while remaining connected to their surroundings. Natural light, open spaces, and carefully selected materials come together to create environments that feel relaxed, timeless, and effortlessly livable.',
    ],
  },
  {
    slug: 'shopjula',
    title: 'Shop Jula',
    category: 'eCommerce & Brand',
    date: 'January 2025',
    client: 'Jula',
    url: 'https://shopjula.com/',
    coverImage: '/images/shopjula/shopjula.jpg',
    shortDesc:
      'Shopify ecommerce platform for a Bali-based lifestyle brand built around craft, culture, and everyday wear.',
    description: [
      "Shop Jula is a Bali-based lifestyle and fashion brand focused on creating comfortable, well-crafted pieces for everyday use. The project involved building a Shopify-based ecommerce platform that reflects the brand's personality while keeping the shopping experience simple and intuitive.",
      "The website was designed to support product storytelling through clean layouts, strong visuals, and flexible content sections. Beyond just selling products, the platform helps communicate Jula's identity, values, and connection to local culture, making the brand feel personal and approachable.",
    ],
  },
  {
    slug: 'zkdigimax',
    title: 'ZK Digimax',
    category: 'Technology',
    date: 'May 2023',
    client: 'ZK Digimax',
    url: 'https://www.zkdigimax.com/',
    coverImage: '/images/zkdigimax/zkdigimax.jpg',
    shortDesc:
      'Technology company website for end-to-end digital solutions connecting hardware, software, and intelligent systems.',
    description: [
      'ZK Digimax is a technology-driven company focused on delivering end-to-end digital solutions that connect hardware, software, and intelligent systems. The project bridges physical environments and digital platforms, enabling businesses to operate more efficiently and make smarter decisions.',
      'From smart technology and system integration to data-driven platforms and automation, each solution is designed with performance, reliability, and scalability in mind. The focus is on building systems that are practical, adaptable, and ready to support long-term operational growth.',
    ],
  },
  {
    slug: 'terra-eats',
    title: 'Terra Eats',
    category: 'Health & Food',
    date: 'June 2025',
    client: 'Terra Eats',
    url: 'https://terra-eats.com/',
    coverImage: '/images/terra-eats/terra-eats.jpg',
    shortDesc:
      'Health-focused eatery website with multiple locations across Jakarta and Bali, offering menus, meal plans, and pantry essentials.',
    description: [
      'Terra Eats is a health-focused eatery dedicated to making balanced eating easy, delicious, and accessible for everyone. Rooted in the belief that wellness begins with what you eat, Terra crafts menus that are fresh, flavourful, and designed to support a wide range of lifestyles — from busy professionals to fitness-minded diners and mindful eaters alike.',
      'With multiple locations across Jakarta and Bali, Terra offers wholesome daily menus, curated meal plans tailored to nutritional goals, and a shop of pantry essentials. Every plate is made with clean, high-quality ingredients, balancing nutrition with bold, satisfying taste.',
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
