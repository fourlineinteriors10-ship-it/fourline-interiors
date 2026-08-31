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

// PDF Portfolio Execution Gallery Data (Extracted from portfolio.pdf — Authentic Interior Works)
const FOURLINE_PORTFOLIO_GALLERY = [
  {
    id: "port-01",
    src: "assets/portfolio/project-01.jpg",
    category: "living",
    categoryLabel: "Living & Lounge",
    title: "Architectural Partition & Display Unit",
    description: "Bespoke open shelving with brushed brass trims and warm natural veneer accents."
  },
  {
    id: "port-02",
    src: "assets/portfolio/project-02.jpg",
    category: "living",
    categoryLabel: "Living & Lounge",
    title: "Expansive Double-Height Living Space",
    description: "Multi-tier architectural false ceiling with indirect cove ambient illumination."
  },
  {
    id: "port-03",
    src: "assets/portfolio/project-03.jpg",
    category: "living",
    categoryLabel: "Living & Lounge",
    title: "Geometric Wood Paneling & Media Console",
    description: "Precision CNC routed natural veneer wall with floating storage credenza."
  },
  {
    id: "port-04",
    src: "assets/portfolio/project-04.jpg",
    category: "craft",
    categoryLabel: "Bespoke Millwork",
    title: "Custom Fluted Column & Corner Detail",
    description: "Zero-tolerance carpentry joinery celebrating raw grain and natural wood finishes."
  },
  {
    id: "port-05",
    src: "assets/portfolio/project-05.jpg",
    category: "living",
    categoryLabel: "Living & Lounge",
    title: "Refined Living & Dining Integration",
    description: "Seamless transition between informal lounge zone and formal dining hall."
  },
  {
    id: "port-06",
    src: "assets/portfolio/project-06.jpg",
    category: "craft",
    categoryLabel: "Bespoke Millwork",
    title: "Bespoke Decorative Wall Niche",
    description: "Recessed architectural wall niches with precision micro-spotlighting for curated art."
  },
  {
    id: "port-07",
    src: "assets/portfolio/project-07.jpg",
    category: "bedroom",
    categoryLabel: "Luxury Bedroom",
    title: "Master Suite with Upholstered Headboard",
    description: "Full-height acoustic fabric headboard flanked by tinted bronze mirror paneling."
  },
  {
    id: "port-08",
    src: "assets/portfolio/project-08.jpg",
    category: "bedroom",
    categoryLabel: "Luxury Bedroom",
    title: "Minimalist Guest Bedroom Suite",
    description: "Warm timber tones, integrated bedside ledges, and ambient drop pendants."
  },
  {
    id: "port-09",
    src: "assets/portfolio/project-09.jpg",
    category: "bedroom",
    categoryLabel: "Luxury Bedroom",
    title: "Kids Suite with Integrated Study",
    description: "Optimized spatial layout featuring ergonomic study workstation and concealed storage."
  },
  {
    id: "port-10",
    src: "assets/portfolio/project-10.jpg",
    category: "bedroom",
    categoryLabel: "Luxury Bedroom",
    title: "Master Bedroom with Textured Wall Finish",
    description: "Handcrafted artisan wall wash paired with indirect cove lighting accents."
  },
  {
    id: "port-11",
    src: "assets/portfolio/project-11.jpg",
    category: "bedroom",
    categoryLabel: "Luxury Bedroom",
    title: "Bespoke Wardrobe & Dressing Suite",
    description: "Floor-to-ceiling tinted glass wardrobes equipped with internal sensor illumination."
  },
  {
    id: "port-12",
    src: "assets/portfolio/project-12.jpg",
    category: "bedroom",
    categoryLabel: "Luxury Bedroom",
    title: "Contemporary Bedroom Paneling",
    description: "Geometric veneer grooving details and cushioned architectural headrest panel."
  },
  {
    id: "port-13",
    src: "assets/portfolio/project-13.jpg",
    category: "bedroom",
    categoryLabel: "Luxury Bedroom",
    title: "Luxury Bed Suite with Wood Slats",
    description: "Vertical acoustic timber slat paneling embedded with brushed brass strip inlays."
  },
  {
    id: "port-14",
    src: "assets/portfolio/project-14.jpg",
    category: "bedroom",
    categoryLabel: "Luxury Bedroom",
    title: "Dressing Vanity & Full-Length Mirror",
    description: "Floating cantilevered dressing vanity with backlit oval vanity mirror."
  },
  {
    id: "port-15",
    src: "assets/portfolio/project-15.jpg",
    category: "bedroom",
    categoryLabel: "Luxury Bedroom",
    title: "Executive Bedroom Retreat",
    description: "Plush padded fabric wall treatments with coordinated custom bedside nightstands."
  },
  {
    id: "port-16",
    src: "assets/portfolio/project-16.jpg",
    category: "bedroom",
    categoryLabel: "Luxury Bedroom",
    title: "Custom Master Wardrobe System",
    description: "Lacquered glass slide-door wardrobe with custom organizer compartments."
  },
  {
    id: "port-17",
    src: "assets/portfolio/project-17.jpg",
    category: "bedroom",
    categoryLabel: "Luxury Bedroom",
    title: "Warm Walnut Master Bedroom",
    description: "Rich walnut veneer bed surround with integrated smart charging niches."
  },
  {
    id: "port-18",
    src: "assets/portfolio/project-18.jpg",
    category: "bedroom",
    categoryLabel: "Luxury Bedroom",
    title: "Modern Bedroom Ceiling & Light Trough",
    description: "Peripheral architectural false ceiling design with soft 3000K warm downlights."
  },
  {
    id: "port-19",
    src: "assets/portfolio/project-19.jpg",
    category: "bedroom",
    categoryLabel: "Luxury Bedroom",
    title: "Minimalist Suite with Floating Bed Base",
    description: "Low-profile platform bed design with ambient perimeter LED underglow."
  },
  {
    id: "port-20",
    src: "assets/portfolio/project-20.jpg",
    category: "kitchen",
    categoryLabel: "Modular Kitchen",
    title: "Sleek Acrylic Modular Kitchen",
    description: "Dual-tone high-gloss cabinetry with seamless quartz stone countertop."
  },
  {
    id: "port-21",
    src: "assets/portfolio/project-21.jpg",
    category: "kitchen",
    categoryLabel: "Modular Kitchen",
    title: "Parallel Gourmet Kitchen Layout",
    description: "Stainless steel modular carcass with soft-close Blum hardware and Gola profiles."
  },
  {
    id: "port-22",
    src: "assets/portfolio/project-22.jpg",
    category: "kitchen",
    categoryLabel: "Modular Kitchen",
    title: "Integrated Breakfast Island & Bar",
    description: "Waterfall quartz counter with built-in induction hob and designer overhead chimney."
  },
  {
    id: "port-23",
    src: "assets/portfolio/project-23.jpg",
    category: "kitchen",
    categoryLabel: "Modular Kitchen",
    title: "L-Shaped Compact Modular Kitchen",
    description: "Maximized corner carousel storage and heat-resistant toughened glass backsplash."
  },
  {
    id: "port-24",
    src: "assets/portfolio/project-24.jpg",
    category: "kitchen",
    categoryLabel: "Modular Kitchen",
    title: "Pantry Tall-Unit with Built-in Appliances",
    description: "Integrated microwave, convection oven, and heavy-duty pull-out pantry rack system."
  },
  {
    id: "port-25",
    src: "assets/portfolio/project-25.jpg",
    category: "kitchen",
    categoryLabel: "Modular Kitchen",
    title: "Modern Kitchen Storage & Pull-Out Trays",
    description: "Tandem drawer systems for heavy cookware and customized cutlery partitions."
  },
  {
    id: "port-26",
    src: "assets/portfolio/project-26.jpg",
    category: "craft",
    categoryLabel: "Bespoke Millwork",
    title: "Custom Dining Table & Seating Area",
    description: "Solid wood tabletop with chamfered edges and ergonomically upholstered chairs."
  },
  {
    id: "port-27",
    src: "assets/portfolio/project-27.jpg",
    category: "craft",
    categoryLabel: "Bespoke Millwork",
    title: "CNC Decorative Mandir & Prayer Unit",
    description: "Intricate CNC cut geometric jaali work with warm backlit acrylic illumination."
  },
  {
    id: "port-28",
    src: "assets/portfolio/project-28.jpg",
    category: "commercial",
    categoryLabel: "Commercial & Office",
    title: "Corporate Reception Lobby & Desk",
    description: "Monolithic Corian counter with backlit 3D branding and acoustic timber backdrop."
  },
  {
    id: "port-29",
    src: "assets/portfolio/project-29.jpg",
    category: "commercial",
    categoryLabel: "Commercial & Office",
    title: "Executive Boardroom & Conference Setup",
    description: "16-seater conference table with central AV/power cable management and leather seating."
  },
  {
    id: "port-30",
    src: "assets/portfolio/project-30.jpg",
    category: "commercial",
    categoryLabel: "Commercial & Office",
    title: "Open-Plan Workstation Layout",
    description: "Modular workstations with acoustic partition screens and organized wire conduits."
  },
  {
    id: "port-31",
    src: "assets/portfolio/project-31.jpg",
    category: "commercial",
    categoryLabel: "Commercial & Office",
    title: "Managing Director Cabin & Credenza",
    description: "Executive desk with natural veneer finish, matching credenza, and private lounge suite."
  },
  {
    id: "port-32",
    src: "assets/portfolio/project-32.jpg",
    category: "commercial",
    categoryLabel: "Commercial & Office",
    title: "Acoustic Glass Meeting Room",
    description: "Double-glazed soundproof acoustic partitions with matte black architectural frames."
  },
  {
    id: "port-33",
    src: "assets/portfolio/project-33.jpg",
    category: "commercial",
    categoryLabel: "Commercial & Office",
    title: "Modern Office Breakout & Pantry Area",
    description: "Café-style high tables, casual seating, and vibrant collaborative feature wall."
  },
  {
    id: "port-34",
    src: "assets/portfolio/project-34.jpg",
    category: "commercial",
    categoryLabel: "Commercial & Office",
    title: "Corporate Training & Seminar Hall",
    description: "Tiered executive seating with integrated projector wall and acoustic ceiling baffling."
  },
  {
    id: "port-35",
    src: "assets/portfolio/project-35.jpg",
    category: "commercial",
    categoryLabel: "Commercial & Office",
    title: "Commercial Corridor & Lighting Design",
    description: "Linear architectural LED tracks defining clean directional circulation flow."
  }
];
