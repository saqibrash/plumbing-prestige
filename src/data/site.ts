export const SITE = {
  name: "Emergency Plumbing Ltd",
  phone: "+44 7841 785060",
  phoneHref: "tel:+447841785060",
  phoneDisplay: "07841 785060",
  whatsappHref: "https://wa.me/447841785060",
  address: "26 Ynyscynon Road, Rhondda, United Kingdom, CF40 2LN",
  email: "info@emergencyplumbingltd.co.uk",
  googleRating: 5.0,
  googleReviewCount: 70,
  googleBusinessName: "Flush Away Plumbing Ltd.",
  googleReviewsUrl: "https://share.google/z8TEjI0p5SAnGQK8H",
  googleWriteReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJ____EGzuTktL6-7Q",
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: string; // lucide icon name
  intro: string;
  problems: string[];
  why: string[];
  arrival: string[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "emergency-plumbing",
    title: "Emergency Plumbing",
    short: "Urgent help for burst pipes, severe leaks and flooding — 24/7 across South Wales.",
    icon: "Siren",
    intro:
      "When a plumbing emergency hits, every minute matters. Our 24/7 emergency plumbers respond fast across Cardiff, Rhondda and South Wales to stop the damage, fix the fault and protect your home or business.",
    problems: [
      "Burst pipes and major water leaks",
      "Flooding and water damage prevention",
      "No water or sudden loss of pressure",
      "Overflowing toilets and tanks",
      "Leaking radiators and heating pipes",
      "Out-of-hours urgent plumbing repairs",
    ],
    why: [
      "Available 24 hours a day, 7 days a week",
      "Fast emergency response within 30 to 60 minutes",
      "Fully insured and qualified engineers",
      "Clear pricing before any work starts",
      "Local plumbers who know the area",
    ],
    arrival: [
      "We confirm your address and the issue on the phone",
      "A plumber is dispatched immediately",
      "On arrival, we isolate water and stabilise the situation",
      "We diagnose the fault and explain the cost before fixing",
      "We complete the repair cleanly and safely",
    ],
    faqs: [
      { q: "How quickly can you get to me?", a: "We aim to arrive within 30 to 60 minutes for emergencies in Cardiff and Rhondda. Times vary depending on traffic and current workload." },
      { q: "Are you available at night and weekends?", a: "Yes. We operate a true 24/7 emergency service, including bank holidays." },
      { q: "Do you charge a call-out fee?", a: "We always agree pricing with you before starting work. There are no hidden costs." },
      { q: "What should I do while waiting?", a: "If safe, turn off the water at the stopcock and switch off electrics in affected areas. Move valuables away from water." },
      { q: "Are your plumbers insured?", a: "Yes, all our engineers are fully insured and experienced in emergency plumbing." },
    ],
    related: ["drain-unblocking", "leak-detection", "pipe-repairs"],
  },
  {
    slug: "drain-unblocking",
    title: "Drain Unblocking",
    short: "Fast, professional unblocking for sinks, toilets, showers and outside drains.",
    icon: "Waves",
    intro:
      "Blocked drains are one of the most common emergencies we deal with. We use professional tools to clear blockages quickly without damaging your pipework, indoors or outside.",
    problems: [
      "Blocked kitchen and bathroom sinks",
      "Blocked toilets and slow flushing",
      "Shower and bath water draining slowly",
      "Outside drains overflowing",
      "Bad smells from drains or sinks",
      "Recurring blockages that keep coming back",
    ],
    why: [
      "Specialist drain unblocking tools and rods",
      "Same-day service across Cardiff and Rhondda",
      "Honest advice on long-term fixes",
      "Clean, tidy work — we always leave the area as we found it",
      "Transparent pricing before we start",
    ],
    arrival: [
      "Assess the blockage and locate the cause",
      "Quote the work clearly upfront",
      "Clear the blockage with the right tools for the job",
      "Test the flow to confirm the issue is fully resolved",
      "Advise on prevention if blockages are recurring",
    ],
    faqs: [
      { q: "What causes most blocked drains?", a: "Common causes are grease, hair, wet wipes, food waste and tree roots in outside drains." },
      { q: "Can you clear blockages without digging?", a: "In most cases yes. We use rods and high-pressure clearance to avoid disruption." },
      { q: "Do you cover outside drains?", a: "Yes — we handle internal and external drains across South Wales." },
      { q: "Will it block again?", a: "Once cleared we advise on simple steps to help prevent it. Some recurring issues need a CCTV survey." },
    ],
    related: ["emergency-plumbing", "toilet-repairs", "pipe-repairs"],
  },
  {
    slug: "leak-detection",
    title: "Leak Detection",
    short: "Find hidden leaks fast — before they cause expensive damage to your home.",
    icon: "Droplets",
    intro:
      "Hidden leaks can damage walls, ceilings and floors long before you notice them. Our leak detection service pinpoints the source quickly with minimal disruption so the right repair can be carried out.",
    problems: [
      "Damp patches on walls or ceilings",
      "Unexplained increases in water bills",
      "Sounds of running water when taps are off",
      "Stains, mould or peeling paint",
      "Drops in water pressure",
      "Leaks behind walls or under floors",
    ],
    why: [
      "Trained, experienced leak detection engineers",
      "Minimally invasive techniques where possible",
      "Honest reporting — we tell you what we find",
      "Fast response across Cardiff and Rhondda",
      "Clear quote before any work is carried out",
    ],
    arrival: [
      "Inspect the affected area and gather symptoms",
      "Use detection equipment to narrow down the source",
      "Confirm the leak location and explain the findings",
      "Quote the repair and proceed once you approve",
      "Carry out the repair cleanly and test thoroughly",
    ],
    faqs: [
      { q: "How do you find leaks without breaking walls?", a: "We use professional detection methods to narrow down the source before opening anything up." },
      { q: "How much does leak detection cost?", a: "Cost depends on the property and the complexity of the leak. We always confirm pricing before we start." },
      { q: "Do you fix the leak too?", a: "Yes — once located, we can carry out the repair in the same visit where possible." },
      { q: "Can a small leak really cause big damage?", a: "Yes. Even slow leaks can rot timber, damage plaster and increase your water bill significantly." },
    ],
    related: ["pipe-repairs", "emergency-plumbing", "bathroom-plumbing"],
  },
  {
    slug: "boiler-repairs",
    title: "Boiler Repairs & Boiler Issues",
    short: "Help with boiler faults, no heating, no hot water and pressure problems.",
    icon: "Flame",
    intro:
      "When your boiler stops working, we know it can't wait. We help with common boiler related plumbing issues such as leaks, pressure problems and pipework around the boiler. For gas related work, only qualified gas specialists should handle the issue.",
    problems: [
      "Boiler losing pressure",
      "Leaks around the boiler or pipework",
      "No hot water or no heating",
      "Radiators not heating properly",
      "Strange noises from the boiler",
      "Frozen condensate pipe",
    ],
    why: [
      "Experienced with boiler related plumbing issues",
      "Honest advice — we tell you if a gas specialist is needed",
      "Fast response across Cardiff and South Wales",
      "Clear pricing and no hidden costs",
      "Tidy, respectful service",
    ],
    arrival: [
      "Assess the boiler symptoms and pipework",
      "Identify whether it's plumbing related or gas related",
      "Quote the work upfront",
      "Carry out plumbing repairs or refer to a qualified specialist where needed",
      "Test the system before leaving",
    ],
    faqs: [
      { q: "Do you carry out gas work?", a: "Plumbing around the boiler can be handled by us. For gas related work, only a qualified gas specialist should handle the issue." },
      { q: "Why does my boiler keep losing pressure?", a: "Common causes include a leak in the system, a faulty pressure relief valve or a problem with the expansion vessel." },
      { q: "My radiators are cold at the bottom — what is wrong?", a: "This usually means sludge build up. A power flush or system clean is often the answer." },
      { q: "Can you help with frozen condensate pipes?", a: "Yes — this is common in winter and we can safely thaw and restart the boiler." },
    ],
    related: ["pipe-repairs", "leak-detection", "emergency-plumbing"],
  },
  {
    slug: "bathroom-plumbing",
    title: "Bathroom Plumbing",
    short: "Showers, baths, sinks, toilets and taps — repairs, upgrades and installations.",
    icon: "ShowerHead",
    intro:
      "From a leaking shower to a full bathroom upgrade, our plumbers handle all bathroom plumbing work to a high standard. We focus on clean, tidy installations and reliable repairs.",
    problems: [
      "Leaking showers, baths and taps",
      "Low water pressure in the bathroom",
      "Blocked or slow drains",
      "Toilet repairs and replacements",
      "Tap and shower installations",
      "Bathroom upgrades and new fittings",
    ],
    why: [
      "Skilled in repairs, replacements and installations",
      "Clean and respectful in your home",
      "Honest advice on what really needs replacing",
      "Clear quote before any work starts",
      "Local team across Cardiff and Rhondda",
    ],
    arrival: [
      "Discuss the job and look at what's needed",
      "Quote the work in writing or verbally upfront",
      "Carry out the work to a clean, tidy standard",
      "Test taps, showers and drains thoroughly",
      "Leave the bathroom clean and ready to use",
    ],
    faqs: [
      { q: "Can you fix a leaking shower?", a: "Yes — leaking showers are one of the most common bathroom calls. We can usually fix them quickly." },
      { q: "Do you install new bathrooms?", a: "We carry out bathroom plumbing for new installations and upgrades." },
      { q: "Can you help with low pressure?", a: "Yes — low pressure has several possible causes and we can diagnose and resolve it." },
    ],
    related: ["tap-repairs", "toilet-repairs", "leak-detection"],
  },
  {
    slug: "pipe-repairs",
    title: "Pipe Repairs",
    short: "Leaking, damaged, frozen and old pipes — repaired and replaced.",
    icon: "Wrench",
    intro:
      "Damaged pipework can quickly become an emergency. We repair, replace and re-route pipes safely across Cardiff and South Wales, indoors and outside.",
    problems: [
      "Leaking pipes under sinks and floors",
      "Burst pipes after freezing weather",
      "Old, corroded pipework",
      "Damaged outside pipes",
      "Pipes knocking or making noise",
      "Visible damp from suspected pipe leaks",
    ],
    why: [
      "Skilled in all common pipe types",
      "Fast emergency response for burst pipes",
      "Tidy, minimal-disruption repairs",
      "Clear pricing before we start",
      "Local plumbers, locally based",
    ],
    arrival: [
      "Inspect the affected pipework",
      "Isolate water if needed",
      "Quote the repair work upfront",
      "Repair or replace the pipe to a high standard",
      "Test the system and check for any further issues",
    ],
    faqs: [
      { q: "Can you repair a burst pipe today?", a: "Yes — burst pipes are an emergency. Call us and we'll respond as fast as possible." },
      { q: "Do you replace old lead or copper pipes?", a: "Yes — we replace old or failing pipework with modern, reliable alternatives." },
      { q: "What about frozen pipes?", a: "We can safely thaw frozen pipes and check for any resulting damage." },
    ],
    related: ["emergency-plumbing", "leak-detection", "boiler-repairs"],
  },
  {
    slug: "toilet-repairs",
    title: "Toilet Repairs & Blocked Toilets",
    short: "Blocked, leaking, running or broken toilets — fixed fast.",
    icon: "Toilet",
    intro:
      "A broken or blocked toilet can stop a home from running. We carry out fast, hygienic toilet repairs and replacements for households and businesses across South Wales.",
    problems: [
      "Blocked toilets that won't flush",
      "Toilets that constantly run",
      "Weak or slow flushing",
      "Leaks at the base or cistern",
      "Broken cistern parts",
      "Cracked pans needing replacement",
    ],
    why: [
      "Fast same-day toilet repairs",
      "Clean, hygienic working method",
      "Honest fix-or-replace advice",
      "Clear quote upfront",
      "24/7 availability for emergencies",
    ],
    arrival: [
      "Inspect the toilet and pinpoint the issue",
      "Quote the repair clearly",
      "Clear blockages or replace faulty parts",
      "Test the flush and check for leaks",
      "Leave the area clean and tidy",
    ],
    faqs: [
      { q: "Can you unblock my toilet today?", a: "Yes — most blocked toilets are cleared the same day." },
      { q: "Why does my toilet keep running?", a: "Usually a faulty fill or flush valve. Both are straightforward repairs." },
      { q: "Can you replace a toilet?", a: "Yes — we remove and fit new toilets to a clean, professional standard." },
    ],
    related: ["drain-unblocking", "bathroom-plumbing", "emergency-plumbing"],
  },
  {
    slug: "tap-repairs",
    title: "Tap Repairs & Installations",
    short: "Dripping taps, low pressure and new tap fits — kitchens and bathrooms.",
    icon: "Droplet",
    intro:
      "A dripping or faulty tap wastes water and money. We carry out neat, reliable tap repairs and fit new taps in kitchens, bathrooms and utility rooms.",
    problems: [
      "Dripping or leaking taps",
      "Stiff or hard to turn taps",
      "Low water pressure at the tap",
      "Mixer taps not blending properly",
      "New kitchen or bathroom tap installation",
      "Outdoor tap installation",
    ],
    why: [
      "Quick, neat repairs",
      "All common tap types covered",
      "Honest advice on repair vs replace",
      "Clear pricing before we start",
      "Local, friendly plumbers",
    ],
    arrival: [
      "Check the tap and isolate water",
      "Quote the work upfront",
      "Repair washers, cartridges or fittings as needed",
      "Or remove and install the new tap",
      "Test fully before leaving",
    ],
    faqs: [
      { q: "Can you fix a dripping tap today?", a: "In most cases yes — a dripping tap is usually a quick fix." },
      { q: "Do you supply taps?", a: "We can source them or fit a tap you've already bought." },
      { q: "Can you fit an outdoor tap?", a: "Yes — outdoor taps are a common installation for us." },
    ],
    related: ["bathroom-plumbing", "leak-detection", "pipe-repairs"],
  },
  {
    slug: "appliance-plumbing",
    title: "Washing Machine & Dishwasher Plumbing",
    short: "Installations, connections, waste pipe issues and appliance leaks.",
    icon: "WashingMachine",
    intro:
      "We carry out clean, reliable plumbing for washing machines and dishwashers — new installations, replacements, leaks and waste pipe issues.",
    problems: [
      "New washing machine or dishwasher installation",
      "Leaks from appliance connections",
      "Waste pipe blockages",
      "Appliances not filling or draining",
      "Replacement of faulty isolation valves",
      "Relocation of appliance plumbing",
    ],
    why: [
      "Clean, careful installation work",
      "Honest advice on fittings and pipework",
      "Clear quote before we start",
      "Local plumbers across Cardiff and Rhondda",
      "Fast response for leaking appliances",
    ],
    arrival: [
      "Check the existing plumbing and appliance",
      "Quote the installation or repair upfront",
      "Carry out the work cleanly and safely",
      "Test for leaks and correct drainage",
      "Leave the area clean and ready to use",
    ],
    faqs: [
      { q: "Can you install a washing machine today?", a: "In most cases yes, depending on schedule." },
      { q: "Do you fix leaking appliances?", a: "Yes — we deal with leaks from washing machines and dishwashers regularly." },
      { q: "Can you relocate my appliance plumbing?", a: "Yes — we can re-route waste and supply pipes as needed." },
    ],
    related: ["pipe-repairs", "leak-detection", "emergency-plumbing"],
  },
];


export const AREAS = [
  { name: "Cardiff", blurb: "Our busiest service area. Fast response across central Cardiff and surrounding suburbs for all emergency and planned plumbing work." },
  { name: "Rhondda", blurb: "Local to us. We provide rapid response to homes and businesses across the Rhondda valleys." },
  { name: "Pontypridd", blurb: "Regular service across Pontypridd and nearby areas for emergencies, repairs and installations." },
  { name: "Caerphilly", blurb: "Trusted plumbing help across Caerphilly and surrounding villages." },
  { name: "Barry", blurb: "Coverage across Barry and the Vale of Glamorgan for urgent and planned work." },
  { name: "Bridgend", blurb: "We cover Bridgend and nearby towns subject to scheduling and distance." },
  { name: "Newport", blurb: "Available in Newport and surrounding areas for plumbing emergencies and repairs." },
  { name: "South Wales", blurb: "Other South Wales locations covered subject to availability — just give us a call." },
];