// DEMO DATA: sample workspaces for the prototype.
// Later this will come from the backend / Firestore.
export const WORKSPACE_DEMO_NOTICE =
  'Demo data: these workspaces are sample entries used for the prototype.'

export const AVAILABILITY_LABELS = {
  available: 'Available',
  limited: 'Limited availability',
  unavailable: 'Unavailable',
}

export const WORKSPACES = [
  {
    id: 'ws-electronics-lab',
    name: 'Electronics Lab',
    category: 'Electronics',
    icon: 'zap',
    description:
      'A fully equipped bench area for building and testing circuits, from breadboard prototypes to soldered boards.',
    capacity: 12,
    facilities: [
      'Digital oscilloscopes',
      'Bench power supplies',
      'Soldering stations',
      'Function generators',
    ],
    availability: 'available',
  },
  {
    id: 'ws-robotics-workbench',
    name: 'Robotics Workbench',
    category: 'Robotics',
    icon: 'box',
    description:
      'A hands-on workbench for assembling and testing robots, with space for chassis builds and motor tuning.',
    capacity: 6,
    facilities: [
      'Motor and servo test rigs',
      'Microcontroller kits',
      'Hand and power tools',
      'Assembly area',
    ],
    availability: 'limited',
  },
  {
    id: 'ws-iot-lab',
    name: 'IoT Development Lab',
    category: 'IoT',
    icon: 'bell',
    description:
      'A connected-device lab for prototyping sensor networks and smart devices with ready-to-use boards.',
    capacity: 10,
    facilities: [
      'Raspberry Pi and ESP32 boards',
      'Sensor kits',
      'Dedicated Wi-Fi test network',
      'Dual-monitor stations',
    ],
    availability: 'available',
  },
  {
    id: 'ws-general-project',
    name: 'General Project Workspace',
    category: 'General',
    icon: 'flask',
    description:
      'A flexible shared space for group projects, planning sessions and documentation work.',
    capacity: 20,
    facilities: [
      'Large shared tables',
      'Whiteboards',
      'Power outlets at every seat',
      'Projector',
    ],
    availability: 'available',
  },
  {
    id: 'ws-computer-workstation',
    name: 'Computer Workstation',
    category: 'Computing',
    icon: 'grid',
    description:
      'High-performance computers for coding, simulation, CAD and data work, with common software pre-installed.',
    capacity: 8,
    facilities: [
      'High-performance PCs',
      'Dual monitors',
      'Pre-installed development and CAD software',
      'Wired internet',
    ],
    availability: 'available',
  },
]