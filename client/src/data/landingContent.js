export const LANDING_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: "Who it's for", href: '#roles' },
]

export const HERO_HIGHLIGHTS = [
  'Live availability',
  'Smart AI suggestions',
  'Role-based access',
]

export const PREVIEW_STATS = [
  { value: '128', label: 'Equipment' },
  { value: '36', label: 'Open slots' },
  { value: '9', label: 'Labs' },
]

export const PREVIEW_ITEMS = [
  {
    icon: 'zap',
    name: 'Digital Oscilloscope',
    meta: 'Electronics Lab · Block B',
    status: 'available',
    statusLabel: 'Available',
  },
  {
    icon: 'box',
    name: '3D Printer (FDM)',
    meta: 'Makerspace · Room 104',
    status: 'limited',
    statusLabel: '2 slots left',
  },
  {
    icon: 'search',
    name: 'Fluorescence Microscope',
    meta: 'Biology Lab · Block C',
    status: 'booked',
    statusLabel: 'Booked',
  },
]

export const FEATURES = [
  {
    icon: 'box',
    title: 'Equipment Catalogue',
    description:
      'Browse microscopes, oscilloscopes, 3D printers and more, with clear specifications and availability for each item.',
  },
  {
    icon: 'calendar',
    title: 'Workspace Booking',
    description:
      'Reserve lab benches, study pods and makerspace desks by the hour or by the day, without email chains.',
  },
  {
    icon: 'zap',
    title: 'AI Recommendations',
    description:
      'Describe your project and get suggestions for the equipment and workspace that fit it best.',
  },
  {
    icon: 'clock',
    title: 'Live Availability',
    description:
      'See what is free right now and book the next open slot, so double bookings become a thing of the past.',
  },
  {
    icon: 'shield',
    title: 'Admin Control',
    description:
      'Lab staff manage inventory, review requests and track usage from a single dashboard.',
  },
  {
    icon: 'bell',
    title: 'Reminders',
    description:
      'Stay on top of pickups, returns and upcoming bookings so equipment gets back on time.',
  },
]

export const STEPS = [
  {
    icon: 'search',
    title: 'Find what you need',
    description:
      'Search the catalogue or ask for a recommendation based on your project.',
  },
  {
    icon: 'calendar',
    title: 'Book a time slot',
    description:
      'Pick an available date and time for the equipment or workspace you want.',
  },
  {
    icon: 'check',
    title: 'Collect and return',
    description:
      'Pick up your equipment, do your work, and return it so the next person can use it.',
  },
]

export const ROLES = [
  {
    icon: 'user',
    title: 'Students & Researchers',
    items: [
      'Browse equipment and check availability',
      'Book workspaces for projects and experiments',
      'Track your bookings in one dashboard',
      'Get AI-assisted equipment suggestions',
    ],
  },
  {
    icon: 'lock',
    title: 'Lab Administrators',
    items: [
      'Manage the equipment inventory',
      'Review and approve booking requests',
      'Monitor workspace and equipment usage',
      'Keep lab resources organised and accountable',
    ],
  },
]