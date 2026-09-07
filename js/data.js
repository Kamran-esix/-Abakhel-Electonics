/* =========================================================
   PRODUCT CATALOG
   Placeholder catalog for abakhel Electrical. Swap the
   `img` emoji-in-svg placeholders for real product photos
   when available — see product-card__img usage below.
   ========================================================= */

const CATEGORIES = [
  { id: "accessories", name: "Electrical Accessories", blurb: "Switches, sockets, plates & connectors for every room." },
  { id: "switches", name: "Switches & Sockets", blurb: "Modular ranges in classic and designer finishes." },
  { id: "lighting", name: "LED Lighting", blurb: "Bulbs, panels, and fixtures for home and commercial use." },
  { id: "breakers", name: "Circuit Breakers", blurb: "MCBs, RCCBs and isolators from trusted manufacturers." },
  { id: "boards", name: "Distribution Boards", blurb: "Single and three-phase boards, factory-tested." },
  { id: "wires", name: "Wires & Cables", blurb: "Copper wiring rated for home and industrial loads." },
  { id: "fans", name: "Fans", blurb: "Ceiling, exhaust and pedestal fans built to last." },
  { id: "appliances", name: "Home Appliances", blurb: "Everyday appliances from names you already trust." },
  { id: "industrial", name: "Industrial Equipment", blurb: "Contactors, relays and starters for commercial sites." },
  { id: "tools", name: "Electrical Tools", blurb: "Testers, strippers and hand tools for every job." },
  { id: "safety", name: "Safety Equipment", blurb: "Insulated gloves, mats and protective gear." },
];

const PRODUCTS = [
  { id: "p01", name: "Modular 2-Gang Switch Plate", cat: "switches", price: 450, unit: "piece", desc: "Polycarbonate body rated for 6A, fits standard modular boxes.", quoteOnly: false },
  { id: "p02", name: "16A Universal Socket Outlet", cat: "accessories", price: 380, unit: "piece", desc: "Shuttered socket with earth pin, suitable for home & office.", quoteOnly: false },
  { id: "p03", name: "9W LED Bulb (Pack of 4)", cat: "lighting", price: 990, unit: "pack", desc: "Cool daylight, 6500K, 15,000-hour rated lifespan.", quoteOnly: false },
  { id: "p04", name: "40W LED Ceiling Panel", cat: "lighting", price: 2150, unit: "piece", desc: "Slim recessed panel for offices and living rooms.", quoteOnly: false },
  { id: "p05", name: "32A Single Pole MCB", cat: "breakers", price: 620, unit: "piece", desc: "Thermal-magnetic protection, DIN rail mount.", quoteOnly: false },
  { id: "p06", name: "63A RCCB (30mA)", cat: "breakers", price: 3450, unit: "piece", desc: "Residual current protection for full home circuits.", quoteOnly: false },
  { id: "p07", name: "8-Way Distribution Board", cat: "boards", price: 4200, unit: "piece", desc: "Powder-coated steel enclosure, single phase.", quoteOnly: true },
  { id: "p08", name: "12-Way TPN Distribution Board", cat: "boards", price: 9800, unit: "piece", desc: "Three-phase board for commercial installations.", quoteOnly: true },
  { id: "p09", name: "7/29 Copper Wire (90m coil)", cat: "wires", price: 5600, unit: "coil", desc: "PVC insulated single-core wire, fire-retardant.", quoteOnly: false },
  { id: "p10", name: "3-Core Flexible Cable (per meter)", cat: "wires", price: 145, unit: "meter", desc: "Flexible copper cable for appliance wiring.", quoteOnly: false },
  { id: "p11", name: "56\" Ceiling Fan", cat: "fans", price: 6900, unit: "piece", desc: "High-speed motor with 2-year warranty, 3 blade colors.", quoteOnly: false },
  { id: "p12", name: "12\" Exhaust Fan", cat: "fans", price: 2400, unit: "piece", desc: "Rust-resistant blades for kitchens and bathrooms.", quoteOnly: false },
  { id: "p13", name: "1.5 Ton Inverter AC", cat: "appliances", price: 168000, unit: "unit", desc: "Energy-efficient inverter compressor, 5-star rated.", quoteOnly: true },
  { id: "p14", name: "Automatic Voltage Regulator (AVR)", cat: "appliances", price: 8900, unit: "piece", desc: "Protects appliances from voltage fluctuation.", quoteOnly: false },
  { id: "p21", name: "43\" LED Television", cat: "appliances", icon: "tv", price: 62000, unit: "unit", desc: "Full HD smart LED TV with slim bezel design.", quoteOnly: true },
  { id: "p22", name: "Double-Door Refrigerator", cat: "appliances", icon: "fridge", price: 145000, unit: "unit", desc: "Frost-free, energy-saving compressor, large capacity.", quoteOnly: true },
  { id: "p23", name: "Room Air Cooler", cat: "appliances", icon: "cooler", price: 38500, unit: "unit", desc: "High-capacity honeycomb cooling pads, ideal for summer.", quoteOnly: true },
  { id: "p24", name: "Automatic Washing Machine", cat: "appliances", icon: "washer", price: 89000, unit: "unit", desc: "Fully automatic top-load, large family capacity.", quoteOnly: true },
  { id: "p25", name: "Electric Iron", cat: "appliances", price: 3200, unit: "piece", desc: "Non-stick soleplate with adjustable heat settings.", quoteOnly: false },
  { id: "p15", name: "3-Phase Magnetic Contactor", cat: "industrial", price: 3100, unit: "piece", desc: "Rated for motor control up to 25kW.", quoteOnly: true },
  { id: "p16", name: "Digital Clamp Meter", cat: "tools", price: 2650, unit: "piece", desc: "AC/DC current, voltage & resistance measurement.", quoteOnly: false },
  { id: "p17", name: "Insulated Screwdriver Set (6pc)", cat: "tools", price: 1350, unit: "set", desc: "1000V rated, VDE-certified insulation.", quoteOnly: false },
  { id: "p18", name: "Electrician Insulated Gloves", cat: "safety", price: 1800, unit: "pair", desc: "Class 0 rubber gloves, tested to 1000V.", quoteOnly: false },
  { id: "p19", name: "Non-Slip Insulating Mat", cat: "safety", price: 3200, unit: "piece", desc: "Rated to 11kV, standard switchboard size.", quoteOnly: true },
  { id: "p20", name: "20A Three-Pin Plug Top", cat: "accessories", price: 220, unit: "piece", desc: "Heavy-duty molded plug for high-load appliances.", quoteOnly: false },
];

function formatPKR(n) {
  return "Rs " + Number(n).toLocaleString("en-PK");
}

function findProduct(id) {
  return PRODUCTS.find((p) => p.id === id);
}
