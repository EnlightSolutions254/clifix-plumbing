import { Service, Benefit, Stat, ProcessStep, Testimonial, GalleryProject, GalleryItem, FAQItem, ServiceArea } from './types';

// Local image assets to avoid blocked external CDN requests
import avatarPlaceholder from './assets/images/hero_plumber_1783767785831-400.jpg';
import galleryBefore from './assets/images/hero_plumber_1783767785831-400.jpg';
import galleryAfter from './assets/images/hero_plumber_1783767785831-800.jpg';

export const SERVICES: Service[] = [
  {
    id: 'emergency',
    title: 'Emergency Plumbing',
    description: 'Burst pipes, overflowing toilets, or massive leaks? Our rapid response teams are on standby 24/7 to secure your home.',
    iconName: 'AlertTriangle'
  },
  {
    id: 'leak-detection',
    title: 'Leak Detection & Repair',
    description: 'Using advanced electronic acoustic technology, we pinpoint hidden water leaks behind walls and floors without damage.',
    iconName: 'Activity'
  },
  {
    id: 'drain-cleaning',
    title: 'Drain Cleaning & Hydro-Jetting',
    description: 'Clear stubborn clogs and buildup with our high-pressure hydro-jetting services that restore pipes to brand-new flow.',
    iconName: 'Droplet'
  },
  {
    id: 'toilet-installation',
    title: 'Toilet Installation & Repair',
    description: 'From fixing persistent running toilets to installing modern, high-efficiency, water-saving models.',
    iconName: 'CheckSquare'
  },
  {
    id: 'water-heater',
    title: 'Water Heater Installation',
    description: 'Professional servicing and installation of tankless or conventional energy-efficient hot water systems.',
    iconName: 'Flame'
  },
  {
    id: 'pipe-repairs',
    title: 'Copper & PEX Pipe Repairs',
    description: 'Complete home repiping or localized pipe repair to prevent corrosion, low water pressure, and recurring leaks.',
    iconName: 'Wrench'
  },
  {
    id: 'bathroom-renovations',
    title: 'Bathroom Renovations',
    description: 'Upgrade your vanity, shower systems, and fixtures for an elegant, premium look that increases home value.',
    iconName: 'Hammer'
  },
  {
    id: 'commercial',
    title: 'Commercial Plumbing',
    description: 'Heavy-duty grease trap installations, commercial sewer lines, and scheduled maintenance for businesses and offices.',
    iconName: 'Briefcase'
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: 'experienced',
    title: 'Experienced Plumbers',
    description: 'Our technicians undergo continuous, advanced training and bring a wealth of expertise to every job.',
    iconName: 'Award'
  },
  {
    id: 'pricing',
    title: 'Transparent Pricing',
    description: 'No surprises or hidden fees. We provide detailed, upfront written quotes before any work begins.',
    iconName: 'DollarSign'
  },
  {
    id: 'response',
    title: 'Fast 24/7 Response',
    description: 'Plumbing emergencies do not wait, and neither do we. We dispatch fully-equipped service trucks instantly.',
    iconName: 'Zap'
  },
  {
    id: 'guaranteed',
    title: 'Guaranteed Workmanship',
    description: 'We stand behind our labor with an industry-leading warranty. Your absolute peace of mind is our goal.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'equipment',
    title: 'Modern Equipment',
    description: 'Equipped with HD sewer cameras, acoustic trackers, and state-of-the-art tools to diagnose and repair fast.',
    iconName: 'Cpu'
  },
  {
    id: 'friendly',
    title: 'Friendly & Spotless Service',
    description: 'We respect your home. Our team is polite, wears protective booties, and cleans up the work area thoroughly.',
    iconName: 'Smile'
  }
];

export const STATS: Stat[] = [
  { id: 'years', value: '8+', number: 8, suffix: '+', label: 'Years Experience' },
  { id: 'customers', value: '1,800+', number: 1800, suffix: '+', label: 'Happy Customers' },
  { id: 'support', value: '24/7', number: 24, suffix: '/7', label: 'Emergency Support' },
  { id: 'satisfaction', value: '98%', number: 98, suffix: '%', label: 'Satisfaction Rate' }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Instant Dispatch Call',
    description: 'Call us or request a booking. We collect details of your plumbing or sanitary issue and dispatch an expert immediately.',
    iconName: 'PhoneCall'
  },
  {
    step: 2,
    title: 'Diagnostic Inspection',
    description: 'Our plumber arrives on site, performs a thorough diagnosis, and explains repair options with a flat-rate quote.',
    iconName: 'Search'
  },
  {
    step: 3,
    title: 'Precision Repair',
    description: 'With your approval, we complete the work cleanly and efficiently using premium-grade materials and equipment.',
    iconName: 'Sliders'
  },
  {
    step: 4,
    title: 'Guaranteed Satisfaction',
    description: 'We test all components, conduct a sanitary safety walkthrough, and leave your space sparkling clean.',
    iconName: 'Heart'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Homeowner',
    location: 'Thika Road, Nairobi',
    text: 'A pipe burst in our kitchen wall late Friday night. Climate Tech arrived in less than 30 minutes, stopped the flooding, and replaced the section. Absolutely life-saving service!',
    rating: 5,
    imageUrl: avatarPlaceholder
  },
  {
    id: '2',
    name: 'David Mwangi',
    role: 'Property Manager',
    location: 'Kangundo Rd, Nairobi',
    text: 'We manage over 15 high-end apartments. Climate Tech is our exclusive plumbing partner. Their leak detection system saved us thousands in repairs by locating small pipe leaks before they became major issues.',
    rating: 5,
    imageUrl: avatarPlaceholder
  },
  {
    id: '3',
    name: 'Michael Chen',
    role: 'Restaurant Owner',
    location: 'Nairobi CBD',
    text: 'In the food business, a clogged main line means closing doors. Climate Tech did a deep hydro-jetting job on our commercial grease traps and sewer lines overnight. Fast, professional, and very clean.',
    rating: 5,
    imageUrl: avatarPlaceholder
  },
  {
    id: '4',
    name: 'Jane Atieno',
    role: 'Homeowner',
    location: 'Karen, Nairobi',
    text: 'They renovated our guest bathroom. The workmanship is stunning. New rain shower, wall-mounted luxury toilet, and beautifully piped vanities. Clinton and his team gave us an upfront quote and finished on schedule.',
    rating: 5,
    imageUrl: avatarPlaceholder
  },
  {
    id: '5',
    name: 'Robert Kiprop',
    role: 'Commercial Director',
    location: 'Mombasa Road',
    text: 'Our warehouse had a persistent water pressure issue. Climate Tech diagnosed pressure-regulating valve faults and completed the heavy-duty commercial system repiping cleanly. Excellent, transparent communication throughout.',
    rating: 5,
    imageUrl: avatarPlaceholder
  },
  {
    id: '6',
    name: 'Amanda Omondi',
    role: 'Boutique Owner',
    location: 'Lavington, Nairobi',
    text: 'Friendly, extremely polite plumbers! They wore shoe covers and left my house completely spotless. Clinton Kiruki made sure everything was to spec. Highly recommend them for any domestic plumbing work.',
    rating: 5,
    imageUrl: avatarPlaceholder
  }
];

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: 'proj-1',
    title: 'Kitchen Main Drain Repiping',
    category: 'Pipe Repair',
    beforeUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    afterUrl: 'https://images.unsplash.com/photo-1581094288338-2314dddb7eed?auto=format&fit=crop&w=800&q=80',
    description: 'Replaced a severely corroded cast-iron underground main line with high-grade, durable PVC piping and modern inspection cleanouts.'
  },
  {
    id: 'proj-2',
    title: 'Tankless Water Heater Upgrade',
    category: 'Water Heaters',
    beforeUrl: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80',
    afterUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    description: 'Upgraded an old, leaky storage tank heater to a continuous high-efficiency wall-mounted tankless water heating system.'
  },
  {
    id: 'proj-3',
    title: 'Luxury Vanity & Bathroom Remodel',
    category: 'Bathroom Reno',
    beforeUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    afterUrl: 'https://images.unsplash.com/photo-1620626011160-992811a976f9?auto=format&fit=crop&w=800&q=80',
    description: 'Removed a molding, outdated vanity and installed dual vessel sinks, copper feeds, elegant floating faucets, and a custom marble countertop.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'item-1',
    title: 'Luxury Concealed Cistern Fitting',
    category: 'Sanitary',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    description: 'Designed and installed a modern wall-hung toilet system with a premium, space-saving concealed water reservoir.',
    location: 'Kilimani, Nairobi',
    date: 'April 2026'
  },
  {
    id: 'item-2',
    title: 'Smart Water Pressure Booster Pump',
    category: 'Infrastructure',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    description: 'Implemented a multi-stage water booster pump setup paired with safety non-return valves to resolve low pressure on top floors.',
    location: 'Karen, Nairobi',
    date: 'January 2026'
  },
  {
    id: 'item-3',
    title: 'Main Sewer Line Hydro-Jetting',
    category: 'Emergency',
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    description: 'Restored 100% sewage flow by clearing stubborn grease blockages and deep tree roots with high-pressure 4,000 PSI hydro-jet equipment.',
    location: 'Roysambu, Nairobi',
    date: 'February 2026'
  },
  {
    id: 'item-4',
    title: 'Stainless Commercial Grease Interceptor',
    category: 'Commercial',
    imageUrl: 'https://images.unsplash.com/photo-1542013936693-8848e5740a7a?auto=format&fit=crop&w=800&q=80',
    description: 'Integrated a custom high-capacity grease trap underneath commercial restaurant wash-stations to guarantee local environmental compliance.',
    location: 'Nairobi CBD',
    date: 'May 2026'
  },
  {
    id: 'item-5',
    title: 'Dual Brass Floating Vanity Basin',
    category: 'Sanitary',
    imageUrl: 'https://images.unsplash.com/photo-1620626011160-992811a976f9?auto=format&fit=crop&w=800&q=80',
    description: 'Installed designer matte-finish vessel wash basins with copper braided flexible hot/cold feeds and elegant floor drainage traps.',
    location: 'Westlands, Nairobi',
    date: 'May 2026'
  },
  {
    id: 'item-6',
    title: 'Complete PEX Hot/Cold Water Manifold',
    category: 'Infrastructure',
    imageUrl: 'https://images.unsplash.com/photo-1581094288338-2314dddb7eed?auto=format&fit=crop&w=800&q=80',
    description: 'Engineered a highly durable home water distribution center using modern flexible PEX manifolds with independent shutoff valves.',
    location: 'Lavington, Nairobi',
    date: 'March 2026'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What should I do immediately during a plumbing emergency?',
    answer: 'First, don’t panic! Locate and turn off your home’s main water shutoff valve immediately (usually located near the water meter or where the main water line enters the house). This will stop the water flow and prevent flooding. Next, turn off any water heaters or boilers to prevent heating element damage, and call Climate Tech immediately at +254 720 219 802 for emergency dispatch.'
  },
  {
    id: 'faq-2',
    question: 'How do you charge? Do you provide free upfront estimates?',
    answer: 'We believe in 100% transparency. We charge flat-rates based on the job, not hourly. This means you will know the exact cost before we turn a single wrench. We offer free visual diagnostic inspections with every approved repair, providing a written, itemized quote with no obligations.'
  },
  {
    id: 'faq-3',
    question: 'How fast can a plumber arrive at my house?',
    answer: 'For emergency calls (burst pipes, major leaks, sewer backups), our average response time is between 30 to 45 minutes across Nairobi. We have equipped service vehicles with standard fittings, so we can usually solve the problem in a single visit.'
  },
  {
    id: 'faq-4',
    question: 'Are your plumbers licensed, bonded, and insured?',
    answer: 'Yes, absolutely! Clinton Kiruki and our experienced technicians are fully registered, licensed, and insured, ensuring that your home and property are 100% protected throughout the entire project.'
  },
  {
    id: 'faq-5',
    question: 'How can I prevent grease and food from clogging my drains?',
    answer: 'To prevent clogs, never pour liquid oils, butter, or cooking grease down the kitchen sink, as they solidify inside the pipes. Avoid putting fibrous materials down the drain. We recommend installing simple mesh drain strainers to catch hair and debris, and scheduling annual maintenance with Climate Tech.'
  },
  {
    id: 'faq-6',
    question: 'Why is my water bill suddenly increasing, even though my usage hasn’t changed?',
    answer: 'An unexpected spike in your water bill is a strong indicator of a hidden water leak. The most common culprit is a running toilet (which can waste hundreds of gallons per day) or a silent pipe leak under floors or behind drywalls. Our leak detection services can find and repair these leaks efficiently.'
  }
];

export const SERVICE_AREAS: ServiceArea[] = [
  {
    name: 'Thika Road Corridor',
    neighborhoods: ['Roysambu', 'Kasarani', 'Kahawa Sukari', 'Kahawa Wendani', 'Githurai', 'Clay City'],
    zipCodes: ['00100', '00232', '00618']
  },
  {
    name: 'Kangundo Road & Eastlands',
    neighborhoods: ['Ruai', 'Utawala', 'Komarock', 'Kayole', 'Kamulu', 'Joska', 'Mwiki'],
    zipCodes: ['00100', '00902', '00520']
  },
  {
    name: 'Westlands Area',
    neighborhoods: ['Parklands', 'Brookside', 'Highridge', 'Kitisuru', 'Nairobi School', 'Peponi'],
    zipCodes: ['00100', '00800', '00606']
  },
  {
    name: 'Kilimani & Kileleshwa',
    neighborhoods: ['Kileleshwa', 'Hurlingham', 'Milimani', 'Yaya Center', 'Dennis Pritt', 'Lenana'],
    zipCodes: ['00100', '00502', '00200']
  },
  {
    name: 'Karen & Lavington',
    neighborhoods: ['Karen Plains', 'Langata Link', 'Lavington', 'Gigiri', 'Runda', 'Muthaiga'],
    zipCodes: ['00502', '00606', '00100']
  }
];
