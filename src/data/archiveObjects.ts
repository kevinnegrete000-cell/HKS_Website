import type { ArchiveObject, ArchiveImagePlaceholder } from '../types/archive';
import { orbitPosition, deg } from '../lib/orbitMath';

const img = (n: number, tone: 'light' | 'dark' = 'dark'): ArchiveImagePlaceholder[] =>
  Array.from({ length: n }, (_, i) => ({
    id: `img-${i}`,
    label: `Fig. ${i + 1}`,
    tone: i % 3 === 0 ? tone : tone === 'dark' ? 'light' : 'dark',
  }));

interface Seed {
  id: string;
  archiveCode: string;
  title: string;
  year: number;
  location: string;
  locationCode: string;
  typology: string;
  prototypeType: string;
  material: string;
  fabricationMethod: string;
  projectPhase: ArchiveObject['projectPhase'];
  description: string;
  introduction: string;
  accessionNumber: string;
  orbitCenterId: string;
  orbitRadius: number;
  orbitAngleDeg: number;
  importance: number;
}

const seeds: Seed[] = [
  {
    id: 'hks-0842-lax-med',
    archiveCode: 'HKS-0842-LAX-MED',
    title: 'Lattice Vault Study',
    year: 2021,
    location: 'Los Angeles, USA',
    locationCode: 'LAX-MED',
    typology: 'Medical / Research Facility',
    prototypeType: '3D Concrete Printing',
    material: 'Ultra-High-Performance Concrete',
    fabricationMethod: 'Large-Scale Robotic Extrusion',
    projectPhase: 'Design Development Study',
    description:
      'The fabrication sequence explores continuous extrusion for structural lattice components, testing joinery tolerances and material behavior during cure.',
    introduction:
      'A study examining continuous material extrusion for structural lattice components in campus environments, exploring geometric optimization and cure-time management.',
    accessionNumber: 'ARCH.2021.0842.03',
    orbitCenterId: 'center-fabrication',
    orbitRadius: 190,
    orbitAngleDeg: -18,
    importance: 5,
  },
  {
    id: 'hks-0217-dfw-spt',
    archiveCode: 'HKS-0217-DFW-SPT',
    title: 'Stadium Canopy Stress Model',
    year: 2021,
    location: 'Dallas, USA',
    locationCode: 'DFW-SPT',
    typology: 'Sports Venue',
    prototypeType: '3D-Printed Structural Model',
    material: 'PLA Composite',
    fabricationMethod: 'FDM Additive Print',
    projectPhase: 'Prototype (TRL-4)',
    description:
      'A reduced-scale canopy assembly used to validate wind-load stress simulation results against a physical structural analogue.',
    introduction:
      'Stress simulation study for a cantilevered stadium canopy, printed at reduced scale to correlate digital load models with physical deflection.',
    accessionNumber: 'ARCH.2021.0217.02',
    orbitCenterId: 'center-fabrication',
    orbitRadius: 120,
    orbitAngleDeg: -55,
    importance: 4,
  },
  {
    id: 'hks-1093-sfo-cmx',
    archiveCode: 'HKS-1093-SFO-CMX',
    title: 'Reclaimed Cladding Weathering Panel',
    year: 2019,
    location: 'San Francisco, USA',
    locationCode: 'SFO-CMX',
    typology: 'Mixed-Use',
    prototypeType: 'Material Test',
    material: 'Reclaimed Timber',
    fabricationMethod: 'CNC Milling',
    projectPhase: 'Field Trial',
    description:
      'A weathering panel exposed to coastal conditions over eighteen months to record surface degradation of reclaimed facade timber.',
    introduction:
      'Long-duration exposure test tracking how reclaimed timber cladding weathers under coastal marine conditions.',
    accessionNumber: 'ARCH.2019.1093.01',
    orbitCenterId: 'center-fabrication',
    orbitRadius: 280,
    orbitAngleDeg: 8,
    importance: 3,
  },
  {
    id: 'hks-0371-nyc-hos',
    archiveCode: 'HKS-0371-NYC-HOS',
    title: 'Stone Cladding Connection Detail',
    year: 2017,
    location: 'New York, USA',
    locationCode: 'NYC-HOS',
    typology: 'Hospitality',
    prototypeType: 'Construction Mockup',
    material: 'Limestone Composite',
    fabricationMethod: 'CNC Stone Routing',
    projectPhase: 'Prototype (TRL-6)',
    description:
      'Full-scale construction mockup verifying a concealed anchoring detail for a ventilated stone rainscreen.',
    introduction:
      'A detailed study of stone cladding connections for a hospitality tower facade, focused on thermal movement and concealed fixings.',
    accessionNumber: 'ARCH.2017.0371.04',
    orbitCenterId: 'center-fabrication',
    orbitRadius: 340,
    orbitAngleDeg: 32,
    importance: 4,
  },
  {
    id: 'hks-0658-sea-edu',
    archiveCode: 'HKS-0658-SEA-EDU',
    title: 'Robotic Assembly Structure',
    year: 2020,
    location: 'Seattle, USA',
    locationCode: 'SEA-EDU',
    typology: 'Education',
    prototypeType: 'Experimental Fabrication Study',
    material: 'Timber / Steel Hybrid',
    fabricationMethod: 'Robotic Assembly',
    projectPhase: 'Prototype (TRL-6)',
    description:
      'A robotically assembled timber-steel node system developed to test complex non-orthogonal geometries for an education building structure.',
    introduction:
      'Robotic assembly study for complex geometry, developed for an education campus structural framing system.',
    accessionNumber: 'ARCH.2020.0658.05',
    orbitCenterId: 'center-fabrication',
    orbitRadius: 40,
    orbitAngleDeg: 210,
    importance: 5,
  },
  {
    id: 'hks-0659-sea-edu',
    archiveCode: 'HKS-0659-SEA-EDU',
    title: 'Node Connector Iteration B',
    year: 2020,
    location: 'Seattle, USA',
    locationCode: 'SEA-EDU',
    typology: 'Education',
    prototypeType: 'Component Study',
    material: 'Cast Aluminum',
    fabricationMethod: 'Investment Casting',
    projectPhase: 'Prototype (TRL-4)',
    description:
      'Second-iteration cast node connector reducing part count from the prior revision while maintaining load capacity.',
    introduction:
      'Companion study to the robotic assembly structure, refining the cast connector geometry used at each structural node.',
    accessionNumber: 'ARCH.2020.0659.01',
    orbitCenterId: 'center-fabrication',
    orbitRadius: 130,
    orbitAngleDeg: 250,
    importance: 2,
  },
  {
    id: 'hks-1215-ord-res',
    archiveCode: 'HKS-1215-ORD-RES',
    title: 'Formworkless Arch Structure',
    year: 2022,
    location: 'Chicago, USA',
    locationCode: 'ORD-RES',
    typology: 'Residential',
    prototypeType: 'Concrete-Printing Model',
    material: 'Fiber-Reinforced Concrete',
    fabricationMethod: 'Formworkless Printing',
    projectPhase: 'Design Development Study',
    description:
      'A self-supporting arch geometry printed without temporary formwork, tuned to remain within the material\u2019s green-state stability limits.',
    introduction:
      'Exploration of formworkless printing for arched residential spans, minimizing material waste from temporary falsework.',
    accessionNumber: 'ARCH.2022.1215.02',
    orbitCenterId: 'center-fabrication',
    orbitRadius: 400,
    orbitAngleDeg: 70,
    importance: 3,
  },
  {
    id: 'hks-0910-bos-lab',
    archiveCode: 'HKS-0910-BOS-LAB',
    title: 'Modular Lab Bench Prototype',
    year: 2018,
    location: 'Boston, USA',
    locationCode: 'BOS-LAB',
    typology: 'Research Facility',
    prototypeType: 'Furniture System',
    material: 'Powder-Coated Steel',
    fabricationMethod: 'Sheet Metal Fabrication',
    projectPhase: 'Prototype (TRL-6)',
    description:
      'A reconfigurable lab bench frame designed for rapid utility reconnection between research building fit-outs.',
    introduction:
      'Modular casework system developed for flexible laboratory environments requiring frequent reconfiguration.',
    accessionNumber: 'ARCH.2018.0910.01',
    orbitCenterId: 'center-fabrication',
    orbitRadius: 240,
    orbitAngleDeg: -110,
    importance: 2,
  },

  // --- Material Research cluster ---
  {
    id: 'hks-0501-mia-cul',
    archiveCode: 'HKS-0501-MIA-CUL',
    title: 'Coral-Aggregate Concrete Sample',
    year: 2022,
    location: 'Miami, USA',
    locationCode: 'MIA-CUL',
    typology: 'Cultural',
    prototypeType: 'Material Test',
    material: 'Coral-Aggregate Concrete',
    fabricationMethod: 'Cast in Reusable Mold',
    projectPhase: 'Concept Study',
    description:
      'Early-stage compressive testing of a coral-derived aggregate mix intended to reduce embodied carbon relative to standard aggregate.',
    introduction:
      'Material research into locally sourced coral aggregate as a lower-carbon substitute in coastal cultural building construction.',
    accessionNumber: 'ARCH.2022.0501.01',
    orbitCenterId: 'center-material',
    orbitRadius: 100,
    orbitAngleDeg: -40,
    importance: 3,
  },
  {
    id: 'hks-0512-mia-cul',
    archiveCode: 'HKS-0512-MIA-CUL',
    title: 'Salt-Fog Corrosion Panel',
    year: 2022,
    location: 'Miami, USA',
    locationCode: 'MIA-CUL',
    typology: 'Cultural',
    prototypeType: 'Material Test',
    material: 'Marine-Grade Aluminum',
    fabricationMethod: 'Accelerated Weathering Chamber',
    projectPhase: 'Field Trial',
    description:
      'Accelerated salt-fog exposure test comparing anodized finish longevity across three aluminum alloy samples.',
    introduction:
      'Corrosion-resistance study supporting facade metal selection for a coastal cultural institution.',
    accessionNumber: 'ARCH.2022.0512.01',
    orbitCenterId: 'center-material',
    orbitRadius: 190,
    orbitAngleDeg: -5,
    importance: 2,
  },
  {
    id: 'hks-0620-hou-com',
    archiveCode: 'HKS-0620-HOU-COM',
    title: 'Mycelium Insulation Block',
    year: 2023,
    location: 'Houston, USA',
    locationCode: 'HOU-COM',
    typology: 'Commercial',
    prototypeType: 'Material Test',
    material: 'Mycelium Composite',
    fabricationMethod: 'Grown Formwork Casting',
    projectPhase: 'Concept Study',
    description:
      'A grown mycelium block cured in reusable formwork, evaluated for thermal resistance against mineral wool baselines.',
    introduction:
      'Speculative bio-based insulation study exploring grown materials as an alternative to petrochemical insulation.',
    accessionNumber: 'ARCH.2023.0620.01',
    orbitCenterId: 'center-material',
    orbitRadius: 280,
    orbitAngleDeg: 35,
    importance: 4,
  },
  {
    id: 'hks-0733-den-off',
    archiveCode: 'HKS-0733-DEN-OFF',
    title: 'Recycled Glass Terrazzo Tile',
    year: 2019,
    location: 'Denver, USA',
    locationCode: 'DEN-OFF',
    typology: 'Office',
    prototypeType: 'Material Test',
    material: 'Recycled Glass Terrazzo',
    fabricationMethod: 'Cast and Ground Finish',
    projectPhase: 'Prototype (TRL-6)',
    description:
      'Post-consumer glass terrazzo tile sample developed to match a specified reflectance and aggregate distribution.',
    introduction:
      'Flooring material study for an office lobby using regionally sourced recycled glass aggregate.',
    accessionNumber: 'ARCH.2019.0733.01',
    orbitCenterId: 'center-material',
    orbitRadius: 130,
    orbitAngleDeg: 130,
    importance: 2,
  },
  {
    id: 'hks-0844-lax-med',
    archiveCode: 'HKS-0844-LAX-MED',
    title: 'Antimicrobial Surface Coating Trial',
    year: 2021,
    location: 'Los Angeles, USA',
    locationCode: 'LAX-MED',
    typology: 'Medical / Research Facility',
    prototypeType: 'Material Test',
    material: 'Copper-Ion Coating',
    fabricationMethod: 'Vapor Deposition',
    projectPhase: 'Field Trial',
    description:
      'A copper-ion coated handrail sample tested in a live clinical corridor for six months to measure surface contact contamination.',
    introduction:
      'Companion material study to the Lattice Vault program, testing antimicrobial surface treatments for high-touch medical surfaces.',
    accessionNumber: 'ARCH.2021.0844.01',
    orbitCenterId: 'center-material',
    orbitRadius: 320,
    orbitAngleDeg: -75,
    importance: 3,
  },

  // --- Typological Studies cluster ---
  {
    id: 'hks-0399-atl-air',
    archiveCode: 'HKS-0399-ATL-AIR',
    title: 'Modular Concourse Bay Study',
    year: 2018,
    location: 'Atlanta, USA',
    locationCode: 'ATL-AIR',
    typology: 'Transportation',
    prototypeType: 'Spatial Configuration Study',
    material: 'Steel Frame / Glass',
    fabricationMethod: 'Prefabricated Assembly',
    projectPhase: 'Design Development Study',
    description:
      'A repeatable concourse bay module tested for passenger flow capacity under varied gate-adjacency configurations.',
    introduction:
      'Typological study of a repeatable airport concourse bay intended to standardize future terminal expansions.',
    accessionNumber: 'ARCH.2018.0399.03',
    orbitCenterId: 'center-typology',
    orbitRadius: 110,
    orbitAngleDeg: -60,
    importance: 4,
  },
  {
    id: 'hks-0455-phx-hos',
    archiveCode: 'HKS-0455-PHX-HOS',
    title: 'Patient Room Layout Variant C',
    year: 2020,
    location: 'Phoenix, USA',
    locationCode: 'PHX-HOS',
    typology: 'Medical / Research Facility',
    prototypeType: 'Spatial Configuration Study',
    material: 'N/A \u2014 Planning Study',
    fabricationMethod: 'Full-Scale Mockup',
    projectPhase: 'Prototype (TRL-4)',
    description:
      'A full-scale mockup room used to evaluate caregiver travel distance across three headwall configurations.',
    introduction:
      'One of several patient room typology variants mocked up at full scale to test clinical workflow efficiency.',
    accessionNumber: 'ARCH.2020.0455.03',
    orbitCenterId: 'center-typology',
    orbitRadius: 210,
    orbitAngleDeg: 10,
    importance: 3,
  },
  {
    id: 'hks-0512-dal-edu',
    archiveCode: 'HKS-0512-DAL-EDU',
    title: 'Flexible Classroom Cluster',
    year: 2019,
    location: 'Dallas, USA',
    locationCode: 'DAL-EDU',
    typology: 'Education',
    prototypeType: 'Spatial Configuration Study',
    material: 'Demountable Partition System',
    fabricationMethod: 'Modular Prefabrication',
    projectPhase: 'Prototype (TRL-6)',
    description:
      'A cluster of four classrooms sharing a demountable partition system, reconfigured over a semester to test acoustic and layout performance.',
    introduction:
      'A study of reconfigurable classroom clusters intended to extend the usable life of an education building typology.',
    accessionNumber: 'ARCH.2019.0512.02',
    orbitCenterId: 'center-typology',
    orbitRadius: 275,
    orbitAngleDeg: 95,
    importance: 3,
  },
  {
    id: 'hks-0688-chi-off',
    archiveCode: 'HKS-0688-CHI-OFF',
    title: 'Core-to-Facade Ratio Study',
    year: 2021,
    location: 'Chicago, USA',
    locationCode: 'CHI-OFF',
    typology: 'Office',
    prototypeType: 'Massing Study',
    material: 'N/A \u2014 Planning Study',
    fabricationMethod: 'Digital Massing Model',
    projectPhase: 'Concept Study',
    description:
      'A comparative massing exercise testing daylight autonomy against five core-to-facade ratio scenarios for a speculative office tower.',
    introduction:
      'An early massing study exploring the relationship between floorplate depth and daylight performance.',
    accessionNumber: 'ARCH.2021.0688.01',
    orbitCenterId: 'center-typology',
    orbitRadius: 150,
    orbitAngleDeg: 200,
    importance: 2,
  },

  // --- Geometry Experiments cluster ---
  {
    id: 'hks-0217-dfw-spt-b',
    archiveCode: 'HKS-0217-DFW-SPT-B',
    title: 'Doubly-Curved Panel Grid',
    year: 2021,
    location: 'Dallas, USA',
    locationCode: 'DFW-SPT',
    typology: 'Sports Venue',
    prototypeType: 'Geometry Study',
    material: 'Aluminum Composite Panel',
    fabricationMethod: '5-Axis CNC Milling',
    projectPhase: 'Design Development Study',
    description:
      'A panelization strategy minimizing unique mold counts across a doubly-curved canopy surface.',
    introduction:
      'Companion geometry study to the stadium canopy program, focused on panel rationalization for cost efficiency.',
    accessionNumber: 'ARCH.2021.0217.05',
    orbitCenterId: 'center-geometry',
    orbitRadius: 120,
    orbitAngleDeg: -30,
    importance: 3,
  },
  {
    id: 'hks-0912-lon-cul',
    archiveCode: 'HKS-0912-LON-CUL',
    title: 'Voronoi Facade Screen Sample',
    year: 2020,
    location: 'London, UK',
    locationCode: 'LON-CUL',
    typology: 'Cultural',
    prototypeType: 'Geometry Study',
    material: 'GFRC',
    fabricationMethod: 'CNC-Cut Formwork',
    projectPhase: 'Prototype (TRL-4)',
    description:
      'A cellular shading screen pattern generated from a weighted Voronoi field, tuned for solar performance at a specific latitude.',
    introduction:
      'Parametric shading screen study developed for a cultural building facade with variable solar exposure.',
    accessionNumber: 'ARCH.2020.0912.02',
    orbitCenterId: 'center-geometry',
    orbitRadius: 220,
    orbitAngleDeg: 20,
    importance: 4,
  },
  {
    id: 'hks-1044-tor-res',
    archiveCode: 'HKS-1044-TOR-RES',
    title: 'Folded Plate Roof Model',
    year: 2022,
    location: 'Toronto, Canada',
    locationCode: 'TOR-RES',
    typology: 'Residential',
    prototypeType: 'Geometry Study',
    material: 'Cross-Laminated Timber',
    fabricationMethod: 'CNC Panel Cutting',
    projectPhase: 'Prototype (TRL-6)',
    description:
      'A folded-plate timber roof geometry tested for span efficiency using origami-derived crease patterns.',
    introduction:
      'Structural geometry study applying folded-plate principles to a mass-timber residential roof structure.',
    accessionNumber: 'ARCH.2022.1044.01',
    orbitCenterId: 'center-geometry',
    orbitRadius: 300,
    orbitAngleDeg: 150,
    importance: 3,
  },
  {
    id: 'hks-1188-sea-edu',
    archiveCode: 'HKS-1188-SEA-EDU',
    title: 'Robotic Assembly for Complex Geometry',
    year: 2020,
    location: 'Seattle, USA',
    locationCode: 'SEA-EDU',
    typology: 'Education',
    prototypeType: 'Experimental Fabrication Study',
    material: 'Timber / Steel Hybrid',
    fabricationMethod: 'Robotic Assembly',
    projectPhase: 'Prototype (TRL-6)',
    description:
      'An extension of the education campus assembly study, testing non-repeating node geometries beyond the original structural grid.',
    introduction:
      'Geometry-focused counterpart to the fabrication cluster\u2019s robotic assembly research, sharing the same campus program.',
    accessionNumber: 'ARCH.2020.1188.02',
    orbitCenterId: 'center-geometry',
    orbitRadius: 60,
    orbitAngleDeg: -120,
    importance: 5,
  },
];

const relSeed: {
  source: string;
  target: string;
  category: ArchiveObject['relationships'][number]['category'];
  strength: number;
  description: string;
}[] = [
  {
    source: 'hks-0842-lax-med',
    target: 'hks-0844-lax-med',
    category: 'Typology',
    strength: 0.8,
    description: 'Both developed for the same medical research facility program in Los Angeles.',
  },
  {
    source: 'hks-0842-lax-med',
    target: 'hks-1215-ord-res',
    category: 'Fabrication',
    strength: 0.65,
    description: 'Shared reliance on large-scale robotic concrete extrusion techniques.',
  },
  {
    source: 'hks-0658-sea-edu',
    target: 'hks-0659-sea-edu',
    category: 'Fabrication',
    strength: 0.9,
    description: 'Sequential iterations of the same node connector research thread.',
  },
  {
    source: 'hks-0658-sea-edu',
    target: 'hks-1188-sea-edu',
    category: 'Project Phase',
    strength: 0.75,
    description: 'Parallel studies for the same education campus structural program.',
  },
  {
    source: 'hks-0217-dfw-spt',
    target: 'hks-0217-dfw-spt-b',
    category: 'Geometry',
    strength: 0.85,
    description: 'Panelization strategy developed directly from the canopy stress model.',
  },
  {
    source: 'hks-1093-sfo-cmx',
    target: 'hks-0733-den-off',
    category: 'Material',
    strength: 0.4,
    description: 'Both examine reclaimed or recycled material sourcing strategies.',
  },
  {
    source: 'hks-0501-mia-cul',
    target: 'hks-0620-hou-com',
    category: 'Material',
    strength: 0.55,
    description: 'Shared focus on lower-carbon, bio-derived material substitutes.',
  },
  {
    source: 'hks-0512-mia-cul',
    target: 'hks-0844-lax-med',
    category: 'Fabrication',
    strength: 0.35,
    description: 'Related accelerated exposure testing methodologies.',
  },
  {
    source: 'hks-0399-atl-air',
    target: 'hks-0512-dal-edu',
    category: 'Typology',
    strength: 0.45,
    description: 'Comparable modular, repeatable spatial bay strategies.',
  },
  {
    source: 'hks-0455-phx-hos',
    target: 'hks-0842-lax-med',
    category: 'Typology',
    strength: 0.5,
    description: 'Both support medical facility programs within the same research track.',
  },
  {
    source: 'hks-0912-lon-cul',
    target: 'hks-0501-mia-cul',
    category: 'Typology',
    strength: 0.3,
    description: 'Cultural building program overlap across differing climates.',
  },
  {
    source: 'hks-1044-tor-res',
    target: 'hks-1215-ord-res',
    category: 'Geometry',
    strength: 0.5,
    description: 'Both test self-supporting structural geometries to reduce material use.',
  },
  {
    source: 'hks-0688-chi-off',
    target: 'hks-0912-lon-cul',
    category: 'Geometry',
    strength: 0.4,
    description: 'Shared use of parametric performance modeling in early design study.',
  },
  {
    source: 'hks-0910-bos-lab',
    target: 'hks-0733-den-off',
    category: 'Project Phase',
    strength: 0.3,
    description: 'Both reached full prototype status within the same fiscal year.',
  },
];

export const archiveObjects: ArchiveObject[] = seeds.map((s) => {
  const { x, y } = orbitPosition(s.orbitCenterId, s.orbitRadius, deg(s.orbitAngleDeg));
  return {
    id: s.id,
    archiveCode: s.archiveCode,
    title: s.title,
    year: s.year,
    location: s.location,
    locationCode: s.locationCode,
    typology: s.typology,
    prototypeType: s.prototypeType,
    material: s.material,
    fabricationMethod: s.fabricationMethod,
    projectPhase: s.projectPhase,
    description: s.description,
    introduction: s.introduction,
    accessionNumber: s.accessionNumber,
    x,
    y,
    orbitCenterId: s.orbitCenterId,
    orbitRadius: s.orbitRadius,
    orbitAngle: deg(s.orbitAngleDeg),
    importance: s.importance,
    images: img(5, s.importance % 2 === 0 ? 'dark' : 'light'),
    relationships: relSeed
      .filter((r) => r.source === s.id || r.target === s.id)
      .map((r) => ({
        source: r.source,
        target: r.target,
        category: r.category,
        strength: r.strength,
        description: r.description,
      })),
  };
});

export const allRelationships = relSeed;
