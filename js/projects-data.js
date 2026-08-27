/**
 * FOURLINE INTERIORS - Projects & Portfolio Database
 * Structured data for easy updates and client project management
 */

const FOURLINE_PROJECTS = [
  {
    id: "modern-residence-worli",
    title: "The Modern Residence",
    slug: "the-modern-residence",
    tagline: "A harmonic balance of raw travertine, fluted smoked oak, and natural light.",
    location: "Worli, Mumbai",
    category: "residential",
    categoryLabel: "Luxury Residential",
    year: "2026",
    area: "4,800 sq.ft",
    duration: "6 Months",
    scope: "Full Turnkey Interior & Architecture",
    budgetTier: "₹35L - ₹45L Execution",
    heroImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
    description: "Designed for a private connoisseur of art and modern minimalism, The Modern Residence embraces expansive floor-to-ceiling vistas overlooking the Arabian Sea. The spatial narrative unfolds through continuous material transitions, featuring vein-cut Roman travertine, hand-brushed brass detailing, and bespoke modular cabinetry crafted in our dedicated execution facility.",
    concept: "We envisioned the home as a serene architectural retreat that filters out the urban intensity of Mumbai. Deep recessed cove illumination, seamless micro-cement flooring, and acoustic timber ceiling baffles create a tactile, tranquil sanctuary.",
    materials: [
      { name: "Roman Travertine", type: "Stone", hex: "#D6C7B2" },
      { name: "Smoked European Oak", type: "Woodwork", hex: "#4A3B32" },
      { name: "Brushed Brass Trims", type: "Hardware", hex: "#C89A55" },
      { name: "Fluted Low-Iron Glass", type: "Glazing", hex: "#E3E7E8" }
    ],
    stats: [
      { label: "Living Volume", value: "14ft Ceilings" },
      { label: "Execution Precision", value: "100% Bespoke" },
      { label: "Smart Automation", value: "Lutron Integrated" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=85"
    ],
    beforeAfter: {
      before: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85",
      after: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
      beforeLabel: "Site Inception (Raw Shell)",
      afterLabel: "Turnkey Handover"
    }
  },
  {
    id: "atelier-obsidian-office",
    title: "Atelier Obsidian Office",
    slug: "atelier-obsidian-office",
    tagline: "Sophisticated corporate headquarters with acoustic timber and sculpted monolithic stone.",
    location: "BKC, Mumbai",
    category: "commercial",
    categoryLabel: "Commercial Workspace",
    year: "2026",
    area: "8,500 sq.ft",
    duration: "4.5 Months",
    scope: "Executive Suites, Boardrooms & Breakouts",
    budgetTier: "₹50L+ Commercial Turnkey",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=85",
    description: "A transformative workplace designed for a top-tier venture capital firm in Mumbai's prime commercial hub. The layout eschews sterile cubicles in favor of tactile meeting lounges, biophilic lightwells, and an executive boardroom anchored by an 18-foot monolithic Nero Marquina marble table.",
    concept: "Merging hospitality comfort with high-performance productivity. Acoustic slat wall paneling conceals smart conference technology while subtle ambient downlighting creates focus without glare.",
    materials: [
      { name: "Nero Marquina Marble", type: "Stone", hex: "#1A1A1A" },
      { name: "Acoustic Walnut Slats", type: "Panels", hex: "#5C4033" },
      { name: "Anodized Black Aluminum", type: "Partitions", hex: "#2B2B2B" },
      { name: "Cognac Top-Grain Leather", type: "Upholstery", hex: "#9E5B32" }
    ],
    stats: [
      { label: "Workstations", value: "65 Executive Seats" },
      { label: "Sound Attenuation", value: "NRC 0.85 Certified" },
      { label: "Energy Efficiency", value: "LEED Gold Standard" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=85"
    ],
    beforeAfter: {
      before: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=85",
      after: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
      beforeLabel: "Bare Commercial Shell",
      afterLabel: "Completed Headquarters"
    }
  },
  {
    id: "the-monolith-villa",
    title: "The Monolith Villa",
    slug: "the-monolith-villa",
    tagline: "Seamless indoor-outdoor tropical brutalism carved from natural basalt and teak.",
    location: "Alibaug, Maharashtra",
    category: "villas",
    categoryLabel: "Luxury Villa",
    year: "2025",
    area: "9,200 sq.ft",
    duration: "8 Months",
    scope: "Complete Interior Architecture & Bespoke Joinery",
    budgetTier: "₹60L+ Luxury Residential",
    heroImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=85",
    description: "Nestled amidst lush coastal foliage, The Monolith Villa dissolves the boundary between architectural enclosure and outdoor landscape. Expansive pivot glass doors open onto reflective water courtyards, while the interior celebrates textured plaster, reclaimed Burmese teak, and low-slung custom furniture.",
    concept: "Tropical modernism with an emphasis on natural airflow, dramatic shade play, and handcrafted earthen materials that age gracefully over time.",
    materials: [
      { name: "Honed Basalt Stone", type: "Flooring", hex: "#3A3D40" },
      { name: "Reclaimed Burmese Teak", type: "Millwork", hex: "#8A5A36" },
      { name: "Lime Plaster Wash", type: "Walls", hex: "#EAE6DF" },
      { name: "Handwoven Linen", type: "Soft Furnishings", hex: "#D8D2C6" }
    ],
    stats: [
      { label: "Private Courtyards", value: "3 Integrated Gardens" },
      { label: "Custom Millwork", value: "100% On-Site Crafted" },
      { label: "Climate Strategy", value: "Passive Ventilation" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=85"
    ],
    beforeAfter: {
      before: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=85",
      after: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85",
      beforeLabel: "RCC Structural Frame",
      afterLabel: "Furnished Living Pavilion"
    }
  },
  {
    id: "minimalist-penthouse-juhu",
    title: "The Minimalist Penthouse",
    slug: "the-minimalist-penthouse",
    tagline: "Pure lines, ethereal lighting, and sculptural joinery perched high above the coastline.",
    location: "Juhu, Mumbai",
    category: "residential",
    categoryLabel: "Penthouse Suite",
    year: "2026",
    area: "3,600 sq.ft",
    duration: "5 Months",
    scope: "Complete Interior Design & Turnkey Fit-out",
    budgetTier: "₹30L - ₹40L Execution",
    heroImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=85",
    description: "An exercise in restraint and tactile luxury. This penthouse strips away visual clutter to elevate spatial clarity, utilizing custom floor-to-ceiling pivot panels, recessed baseboards, and monochromatic warm stone surfaces.",
    concept: "Curating a sense of infinite light. Hidden architectural channels provide indirect ambient glow that transforms the atmosphere from sunrise clarity to nocturnal warmth.",
    materials: [
      { name: "Botticino Classico Marble", type: "Stone", hex: "#E8DEC8" },
      { name: "Bleached Ash Wood", type: "Cabinetry", hex: "#C2B29D" },
      { name: "Champagne Metal Inlays", type: "Accents", hex: "#C89A55" },
      { name: "Bouclé Fabric", type: "Lounge Seating", hex: "#F3EFE9" }
    ],
    stats: [
      { label: "Private Terrace", value: "800 sq.ft Deck" },
      { label: "Lighting Scenes", value: "8 Programmed Moods" },
      { label: "Custom Kitchen", value: "German Hardware" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=85"
    ],
    beforeAfter: {
      before: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=85",
      after: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85",
      beforeLabel: "Pre-Renovation Demolition",
      afterLabel: "Finished Penthouse Lounge"
    }
  },
  {
    id: "serene-sanctuary-bandra",
    title: "Serene Sanctuary Apartment",
    slug: "serene-sanctuary-bandra",
    tagline: "Warm wabi-sabi principles tailored for high-energy cosmopolitan living.",
    location: "Bandra West, Mumbai",
    category: "residential",
    categoryLabel: "High-End Residential",
    year: "2025",
    area: "2,400 sq.ft",
    duration: "4 Months",
    scope: "Design, Execution & Custom Furniture",
    budgetTier: "₹22L - ₹30L Execution",
    heroImage: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=85",
    description: "Designed for a young creative couple, this Bandra home brings organic warmth into an urban apartment. Textured micro-topping on walls pairs with curved drywall niches, custom walnut breakfast counter, and hand-selected ceramic art.",
    concept: "Soft curved geometries that promote fluid circulation and calm everyday living.",
    materials: [
      { name: "Clay Micro-Cement", type: "Wall Finish", hex: "#DFD7CD" },
      { name: "American Walnut", type: "Joinery", hex: "#5C4033" },
      { name: "Brushed Gunmetal", type: "Fixtures", hex: "#3A3A3A" },
      { name: "Handspun Cotton", type: "Curtains", hex: "#F5F3ED" }
    ],
    stats: [
      { label: "Configuration", value: "3BHK Redesigned" },
      { label: "Storage Optimization", value: "35% More Efficiency" },
      { label: "Handcrafted Elements", value: "100% Local Artisans" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=1200&q=85"
    ],
    beforeAfter: {
      before: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85",
      after: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=85",
      beforeLabel: "Original Builder Layout",
      afterLabel: "Architectural Redesign"
    }
  },
  {
    id: "luminary-workspace-parel",
    title: "Luminary Creative Studio",
    slug: "luminary-creative-studio",
    tagline: "An industrial-chic design hub celebrating light, metal crafting, and collaboration.",
    location: "Lower Parel, Mumbai",
    category: "commercial",
    categoryLabel: "Commercial Studio",
    year: "2026",
    area: "5,200 sq.ft",
    duration: "3.5 Months",
    scope: "Design, Turnkey MEP & Execution",
    budgetTier: "₹38L - ₹48L Commercial",
    heroImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85",
    description: "An adaptive-reuse warehouse space transformed into a dynamic multimedia design studio. Exposing the original brickwork and steel trusses while layering fluted acoustic glass partitions and custom terrazzo workstations.",
    concept: "Honoring architectural heritage with precise contemporary insertions.",
    materials: [
      { name: "Custom Terrazzo Slab", type: "Desks", hex: "#C7BEB5" },
      { name: "Black Steel Trusses", type: "Structure", hex: "#1C1C1C" },
      { name: "Acoustic Felt Baffles", type: "Ceiling", hex: "#6E706E" },
      { name: "Brass Linear Pendants", type: "Lighting", hex: "#C89A55" }
    ],
    stats: [
      { label: "Capacity", value: "40 Creative Seats" },
      { label: "Natural Daylight", value: "85% Daylight Autonomy" },
      { label: "Project Turnaround", value: "90 Calendar Days" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85"
    ],
    beforeAfter: {
      before: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=85",
      after: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85",
      beforeLabel: "Dilapidated Warehouse",
      afterLabel: "Modern Creative Hub"
    }
  }
];

// Testimonials Data
const FOURLINE_TESTIMONIALS = [
  {
    quote: "Fourline Interiors transformed our 4,800 sq.ft Worli apartment into an architectural work of art. Their attention to material joints, lighting temperatures, and flawless execution timeline exceeded every expectation.",
    author: "Vikram & Radhika Singhania",
    designation: "Homeowners • The Modern Residence, Worli",
    rating: 5,
    projectType: "Luxury 4BHK Turnkey"
  },
  {
    quote: "Executing an 8,500 sq.ft headquarters in BKC under 4.5 months seemed impossible until we engaged Fourline. Their turnkey team handled MEP, civil work, acoustics, and bespoke furniture with military precision.",
    author: "Arjun Mehta",
    designation: "Managing Director • Nexus Capital Advisors",
    rating: 5,
    projectType: "Corporate HQ, BKC"
  },
  {
    quote: "The Fourline team's philosophy of 'Vision, Function, Craft, and Experience' isn't just a slogan—it lives in every custom teak frame and shadowline detail of our Alibaug villa. Exceptional craftsmanship.",
    author: "Priyamvada Godrej",
    designation: "Owner • The Monolith Villa, Alibaug",
    rating: 5,
    projectType: "Bespoke Villa Architecture"
  }
];

// Visual Journal / Instagram Feed Data
const FOURLINE_JOURNAL = [
  {
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=85",
    title: "Material Harmony",
    tag: "@fourlineinteriors",
    caption: "Curation of brushed brass, ribbed timber and limestone."
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85",
    title: "Lighting Studies",
    tag: "@fourlineinteriors",
    caption: "Shadow play and ambient coves in our Worli penthouse."
  },
  {
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=85",
    title: "Bespoke Joinery",
    tag: "@fourlineinteriors",
    caption: "Hand-finished smoked oak millwork fresh from our workshop."
  },
  {
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=85",
    title: "Tactile Textures",
    tag: "@fourlineinteriors",
    caption: "Lime plaster wash meeting fluted travertine."
  },
  {
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=85",
    title: "Living Spaces",
    tag: "@fourlineinteriors",
    caption: "Where modern architecture meets intimate living."
  },
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=85",
    title: "Executive Workspaces",
    tag: "@fourlineinteriors",
    caption: "Acoustic integrity and understated luxury."
  }
];
