const archiveItems = [
  {
    "id": "hks-0842-lax-med",
    "archiveCode": "HKS-0842-LAX-MED",
    "title": "Lattice Vault Study",
    "location": "Los Angeles, USA",
    "locationCode": "LAX-MED",
    "typology": "Medical / Research Facility",
    "prototypeType": "3D Concrete Printing",
    "material": "Ultra-High-Performance Concrete",
    "fabricationMethod": "Large-Scale Robotic Extrusion",
    "projectPhase": "Design Development Study",
    "description": "The fabrication sequence explores continuous extrusion for structural lattice components, testing joinery tolerances and material behavior during cure.",
    "introduction": "A study examining continuous material extrusion for structural lattice components in campus environments, exploring geometric optimization and cure-time management.",
    "accessionNumber": "ARCH.2021.0842.03",
    "orbitCenterId": "center-fabrication",
    "year": 2021,
    "orbitRadius": 190,
    "orbitAngleDeg": -18,
    "importance": 5
  },
  {
    "id": "hks-0217-dfw-spt",
    "archiveCode": "HKS-0217-DFW-SPT",
    "title": "Stadium Canopy Stress Model",
    "location": "Dallas, USA",
    "locationCode": "DFW-SPT",
    "typology": "Sports Venue",
    "prototypeType": "3D-Printed Structural Model",
    "material": "PLA Composite",
    "fabricationMethod": "FDM Additive Print",
    "projectPhase": "Prototype (TRL-4)",
    "description": "A reduced-scale canopy assembly used to validate wind-load stress simulation results against a physical structural analogue.",
    "introduction": "Stress simulation study for a cantilevered stadium canopy, printed at reduced scale to correlate digital load models with physical deflection.",
    "accessionNumber": "ARCH.2021.0217.02",
    "orbitCenterId": "center-fabrication",
    "year": 2021,
    "orbitRadius": 120,
    "orbitAngleDeg": -55,
    "importance": 4
  },
  {
    "id": "hks-1093-sfo-cmx",
    "archiveCode": "HKS-1093-SFO-CMX",
    "title": "Reclaimed Cladding Weathering Panel",
    "location": "San Francisco, USA",
    "locationCode": "SFO-CMX",
    "typology": "Mixed-Use",
    "prototypeType": "Material Test",
    "material": "Reclaimed Timber",
    "fabricationMethod": "CNC Milling",
    "projectPhase": "Field Trial",
    "description": "A weathering panel exposed to coastal conditions over eighteen months to record surface degradation of reclaimed facade timber.",
    "introduction": "Long-duration exposure test tracking how reclaimed timber cladding weathers under coastal marine conditions.",
    "accessionNumber": "ARCH.2019.1093.01",
    "orbitCenterId": "center-fabrication",
    "year": 2019,
    "orbitRadius": 280,
    "orbitAngleDeg": 8,
    "importance": 3
  },
  {
    "id": "hks-0371-nyc-hos",
    "archiveCode": "HKS-0371-NYC-HOS",
    "title": "Stone Cladding Connection Detail",
    "location": "New York, USA",
    "locationCode": "NYC-HOS",
    "typology": "Hospitality",
    "prototypeType": "Construction Mockup",
    "material": "Limestone Composite",
    "fabricationMethod": "CNC Stone Routing",
    "projectPhase": "Prototype (TRL-6)",
    "description": "Full-scale construction mockup verifying a concealed anchoring detail for a ventilated stone rainscreen.",
    "introduction": "A detailed study of stone cladding connections for a hospitality tower facade, focused on thermal movement and concealed fixings.",
    "accessionNumber": "ARCH.2017.0371.04",
    "orbitCenterId": "center-fabrication",
    "year": 2017,
    "orbitRadius": 340,
    "orbitAngleDeg": 32,
    "importance": 4
  },
  {
    "id": "hks-0658-sea-edu",
    "archiveCode": "HKS-0658-SEA-EDU",
    "title": "Robotic Assembly Structure",
    "location": "Seattle, USA",
    "locationCode": "SEA-EDU",
    "typology": "Education",
    "prototypeType": "Experimental Fabrication Study",
    "material": "Timber / Steel Hybrid",
    "fabricationMethod": "Robotic Assembly",
    "projectPhase": "Prototype (TRL-6)",
    "description": "A robotically assembled timber-steel node system developed to test complex non-orthogonal geometries for an education building structure.",
    "introduction": "Robotic assembly study for complex geometry, developed for an education campus structural framing system.",
    "accessionNumber": "ARCH.2020.0658.05",
    "orbitCenterId": "center-fabrication",
    "year": 2020,
    "orbitRadius": 40,
    "orbitAngleDeg": 210,
    "importance": 5
  },
  {
    "id": "hks-0659-sea-edu",
    "archiveCode": "HKS-0659-SEA-EDU",
    "title": "Node Connector Iteration B",
    "location": "Seattle, USA",
    "locationCode": "SEA-EDU",
    "typology": "Education",
    "prototypeType": "Component Study",
    "material": "Cast Aluminum",
    "fabricationMethod": "Investment Casting",
    "projectPhase": "Prototype (TRL-4)",
    "description": "Second-iteration cast node connector reducing part count from the prior revision while maintaining load capacity.",
    "introduction": "Companion study to the robotic assembly structure, refining the cast connector geometry used at each structural node.",
    "accessionNumber": "ARCH.2020.0659.01",
    "orbitCenterId": "center-fabrication",
    "year": 2020,
    "orbitRadius": 130,
    "orbitAngleDeg": 250,
    "importance": 2
  },
  {
    "id": "hks-1215-ord-res",
    "archiveCode": "HKS-1215-ORD-RES",
    "title": "Formworkless Arch Structure",
    "location": "Chicago, USA",
    "locationCode": "ORD-RES",
    "typology": "Residential",
    "prototypeType": "Concrete-Printing Model",
    "material": "Fiber-Reinforced Concrete",
    "fabricationMethod": "Formworkless Printing",
    "projectPhase": "Design Development Study",
    "description": "A self-supporting arch geometry printed without temporary formwork, tuned to remain within the material\\u2019s green-state stability limits.",
    "introduction": "Exploration of formworkless printing for arched residential spans, minimizing material waste from temporary falsework.",
    "accessionNumber": "ARCH.2022.1215.02",
    "orbitCenterId": "center-fabrication",
    "year": 2022,
    "orbitRadius": 400,
    "orbitAngleDeg": 70,
    "importance": 3
  },
  {
    "id": "hks-0910-bos-lab",
    "archiveCode": "HKS-0910-BOS-LAB",
    "title": "Modular Lab Bench Prototype",
    "location": "Boston, USA",
    "locationCode": "BOS-LAB",
    "typology": "Research Facility",
    "prototypeType": "Furniture System",
    "material": "Powder-Coated Steel",
    "fabricationMethod": "Sheet Metal Fabrication",
    "projectPhase": "Prototype (TRL-6)",
    "description": "A reconfigurable lab bench frame designed for rapid utility reconnection between research building fit-outs.",
    "introduction": "Modular casework system developed for flexible laboratory environments requiring frequent reconfiguration.",
    "accessionNumber": "ARCH.2018.0910.01",
    "orbitCenterId": "center-fabrication",
    "year": 2018,
    "orbitRadius": 240,
    "orbitAngleDeg": -110,
    "importance": 2
  },
  {
    "id": "hks-0501-mia-cul",
    "archiveCode": "HKS-0501-MIA-CUL",
    "title": "Coral-Aggregate Concrete Sample",
    "location": "Miami, USA",
    "locationCode": "MIA-CUL",
    "typology": "Cultural",
    "prototypeType": "Material Test",
    "material": "Coral-Aggregate Concrete",
    "fabricationMethod": "Cast in Reusable Mold",
    "projectPhase": "Concept Study",
    "description": "Early-stage compressive testing of a coral-derived aggregate mix intended to reduce embodied carbon relative to standard aggregate.",
    "introduction": "Material research into locally sourced coral aggregate as a lower-carbon substitute in coastal cultural building construction.",
    "accessionNumber": "ARCH.2022.0501.01",
    "orbitCenterId": "center-material",
    "year": 2022,
    "orbitRadius": 100,
    "orbitAngleDeg": -40,
    "importance": 3
  },
  {
    "id": "hks-0512-mia-cul",
    "archiveCode": "HKS-0512-MIA-CUL",
    "title": "Salt-Fog Corrosion Panel",
    "location": "Miami, USA",
    "locationCode": "MIA-CUL",
    "typology": "Cultural",
    "prototypeType": "Material Test",
    "material": "Marine-Grade Aluminum",
    "fabricationMethod": "Accelerated Weathering Chamber",
    "projectPhase": "Field Trial",
    "description": "Accelerated salt-fog exposure test comparing anodized finish longevity across three aluminum alloy samples.",
    "introduction": "Corrosion-resistance study supporting facade metal selection for a coastal cultural institution.",
    "accessionNumber": "ARCH.2022.0512.01",
    "orbitCenterId": "center-material",
    "year": 2022,
    "orbitRadius": 190,
    "orbitAngleDeg": -5,
    "importance": 2
  },
  {
    "id": "hks-0620-hou-com",
    "archiveCode": "HKS-0620-HOU-COM",
    "title": "Mycelium Insulation Block",
    "location": "Houston, USA",
    "locationCode": "HOU-COM",
    "typology": "Commercial",
    "prototypeType": "Material Test",
    "material": "Mycelium Composite",
    "fabricationMethod": "Grown Formwork Casting",
    "projectPhase": "Concept Study",
    "description": "A grown mycelium block cured in reusable formwork, evaluated for thermal resistance against mineral wool baselines.",
    "introduction": "Speculative bio-based insulation study exploring grown materials as an alternative to petrochemical insulation.",
    "accessionNumber": "ARCH.2023.0620.01",
    "orbitCenterId": "center-material",
    "year": 2023,
    "orbitRadius": 280,
    "orbitAngleDeg": 35,
    "importance": 4
  },
  {
    "id": "hks-0733-den-off",
    "archiveCode": "HKS-0733-DEN-OFF",
    "title": "Recycled Glass Terrazzo Tile",
    "location": "Denver, USA",
    "locationCode": "DEN-OFF",
    "typology": "Office",
    "prototypeType": "Material Test",
    "material": "Recycled Glass Terrazzo",
    "fabricationMethod": "Cast and Ground Finish",
    "projectPhase": "Prototype (TRL-6)",
    "description": "Post-consumer glass terrazzo tile sample developed to match a specified reflectance and aggregate distribution.",
    "introduction": "Flooring material study for an office lobby using regionally sourced recycled glass aggregate.",
    "accessionNumber": "ARCH.2019.0733.01",
    "orbitCenterId": "center-material",
    "year": 2019,
    "orbitRadius": 130,
    "orbitAngleDeg": 130,
    "importance": 2
  },
  {
    "id": "hks-0844-lax-med",
    "archiveCode": "HKS-0844-LAX-MED",
    "title": "Antimicrobial Surface Coating Trial",
    "location": "Los Angeles, USA",
    "locationCode": "LAX-MED",
    "typology": "Medical / Research Facility",
    "prototypeType": "Material Test",
    "material": "Copper-Ion Coating",
    "fabricationMethod": "Vapor Deposition",
    "projectPhase": "Field Trial",
    "description": "A copper-ion coated handrail sample tested in a live clinical corridor for six months to measure surface contact contamination.",
    "introduction": "Companion material study to the Lattice Vault program, testing antimicrobial surface treatments for high-touch medical surfaces.",
    "accessionNumber": "ARCH.2021.0844.01",
    "orbitCenterId": "center-material",
    "year": 2021,
    "orbitRadius": 320,
    "orbitAngleDeg": -75,
    "importance": 3
  },
  {
    "id": "hks-0399-atl-air",
    "archiveCode": "HKS-0399-ATL-AIR",
    "title": "Modular Concourse Bay Study",
    "location": "Atlanta, USA",
    "locationCode": "ATL-AIR",
    "typology": "Transportation",
    "prototypeType": "Spatial Configuration Study",
    "material": "Steel Frame / Glass",
    "fabricationMethod": "Prefabricated Assembly",
    "projectPhase": "Design Development Study",
    "description": "A repeatable concourse bay module tested for passenger flow capacity under varied gate-adjacency configurations.",
    "introduction": "Typological study of a repeatable airport concourse bay intended to standardize future terminal expansions.",
    "accessionNumber": "ARCH.2018.0399.03",
    "orbitCenterId": "center-typology",
    "year": 2018,
    "orbitRadius": 110,
    "orbitAngleDeg": -60,
    "importance": 4
  },
  {
    "id": "hks-0455-phx-hos",
    "archiveCode": "HKS-0455-PHX-HOS",
    "title": "Patient Room Layout Variant C",
    "location": "Phoenix, USA",
    "locationCode": "PHX-HOS",
    "typology": "Medical / Research Facility",
    "prototypeType": "Spatial Configuration Study",
    "material": "N/A \\u2014 Planning Study",
    "fabricationMethod": "Full-Scale Mockup",
    "projectPhase": "Prototype (TRL-4)",
    "description": "A full-scale mockup room used to evaluate caregiver travel distance across three headwall configurations.",
    "introduction": "One of several patient room typology variants mocked up at full scale to test clinical workflow efficiency.",
    "accessionNumber": "ARCH.2020.0455.03",
    "orbitCenterId": "center-typology",
    "year": 2020,
    "orbitRadius": 210,
    "orbitAngleDeg": 10,
    "importance": 3
  },
  {
    "id": "hks-0512-dal-edu",
    "archiveCode": "HKS-0512-DAL-EDU",
    "title": "Flexible Classroom Cluster",
    "location": "Dallas, USA",
    "locationCode": "DAL-EDU",
    "typology": "Education",
    "prototypeType": "Spatial Configuration Study",
    "material": "Demountable Partition System",
    "fabricationMethod": "Modular Prefabrication",
    "projectPhase": "Prototype (TRL-6)",
    "description": "A cluster of four classrooms sharing a demountable partition system, reconfigured over a semester to test acoustic and layout performance.",
    "introduction": "A study of reconfigurable classroom clusters intended to extend the usable life of an education building typology.",
    "accessionNumber": "ARCH.2019.0512.02",
    "orbitCenterId": "center-typology",
    "year": 2019,
    "orbitRadius": 275,
    "orbitAngleDeg": 95,
    "importance": 3
  },
  {
    "id": "hks-0688-chi-off",
    "archiveCode": "HKS-0688-CHI-OFF",
    "title": "Core-to-Facade Ratio Study",
    "location": "Chicago, USA",
    "locationCode": "CHI-OFF",
    "typology": "Office",
    "prototypeType": "Massing Study",
    "material": "N/A \\u2014 Planning Study",
    "fabricationMethod": "Digital Massing Model",
    "projectPhase": "Concept Study",
    "description": "A comparative massing exercise testing daylight autonomy against five core-to-facade ratio scenarios for a speculative office tower.",
    "introduction": "An early massing study exploring the relationship between floorplate depth and daylight performance.",
    "accessionNumber": "ARCH.2021.0688.01",
    "orbitCenterId": "center-typology",
    "year": 2021,
    "orbitRadius": 150,
    "orbitAngleDeg": 200,
    "importance": 2
  },
  {
    "id": "hks-0217-dfw-spt-b",
    "archiveCode": "HKS-0217-DFW-SPT-B",
    "title": "Doubly-Curved Panel Grid",
    "location": "Dallas, USA",
    "locationCode": "DFW-SPT",
    "typology": "Sports Venue",
    "prototypeType": "Geometry Study",
    "material": "Aluminum Composite Panel",
    "fabricationMethod": "5-Axis CNC Milling",
    "projectPhase": "Design Development Study",
    "description": "A panelization strategy minimizing unique mold counts across a doubly-curved canopy surface.",
    "introduction": "Companion geometry study to the stadium canopy program, focused on panel rationalization for cost efficiency.",
    "accessionNumber": "ARCH.2021.0217.05",
    "orbitCenterId": "center-geometry",
    "year": 2021,
    "orbitRadius": 120,
    "orbitAngleDeg": -30,
    "importance": 3
  },
  {
    "id": "hks-0912-lon-cul",
    "archiveCode": "HKS-0912-LON-CUL",
    "title": "Voronoi Facade Screen Sample",
    "location": "London, UK",
    "locationCode": "LON-CUL",
    "typology": "Cultural",
    "prototypeType": "Geometry Study",
    "material": "GFRC",
    "fabricationMethod": "CNC-Cut Formwork",
    "projectPhase": "Prototype (TRL-4)",
    "description": "A cellular shading screen pattern generated from a weighted Voronoi field, tuned for solar performance at a specific latitude.",
    "introduction": "Parametric shading screen study developed for a cultural building facade with variable solar exposure.",
    "accessionNumber": "ARCH.2020.0912.02",
    "orbitCenterId": "center-geometry",
    "year": 2020,
    "orbitRadius": 220,
    "orbitAngleDeg": 20,
    "importance": 4
  },
  {
    "id": "hks-1044-tor-res",
    "archiveCode": "HKS-1044-TOR-RES",
    "title": "Folded Plate Roof Model",
    "location": "Toronto, Canada",
    "locationCode": "TOR-RES",
    "typology": "Residential",
    "prototypeType": "Geometry Study",
    "material": "Cross-Laminated Timber",
    "fabricationMethod": "CNC Panel Cutting",
    "projectPhase": "Prototype (TRL-6)",
    "description": "A folded-plate timber roof geometry tested for span efficiency using origami-derived crease patterns.",
    "introduction": "Structural geometry study applying folded-plate principles to a mass-timber residential roof structure.",
    "accessionNumber": "ARCH.2022.1044.01",
    "orbitCenterId": "center-geometry",
    "year": 2022,
    "orbitRadius": 300,
    "orbitAngleDeg": 150,
    "importance": 3
  },
  {
    "id": "hks-1188-sea-edu",
    "archiveCode": "HKS-1188-SEA-EDU",
    "title": "Robotic Assembly for Complex Geometry",
    "location": "Seattle, USA",
    "locationCode": "SEA-EDU",
    "typology": "Education",
    "prototypeType": "Experimental Fabrication Study",
    "material": "Timber / Steel Hybrid",
    "fabricationMethod": "Robotic Assembly",
    "projectPhase": "Prototype (TRL-6)",
    "description": "An extension of the education campus assembly study, testing non-repeating node geometries beyond the original structural grid.",
    "introduction": "Geometry-focused counterpart to the fabrication cluster\\u2019s robotic assembly research, sharing the same campus program.",
    "accessionNumber": "ARCH.2020.1188.02",
    "orbitCenterId": "center-geometry",
    "year": 2020,
    "orbitRadius": 60,
    "orbitAngleDeg": -120,
    "importance": 5
  }
  ,{
    "id": "window-profile-6750",
    "archiveCode": "OBJ-6750-WIN-PRO",
    "title": "Window Profile Prototype",
    "location": "Digital Fabrication Archive",
    "locationCode": "OBJ-6750",
    "typology": "Envelope System / Window Assembly",
    "prototypeType": "Textured OBJ Model",
    "material": "Mapped Architectural Component",
    "fabricationMethod": "Digital Mesh / Material Mapping",
    "projectPhase": "Interactive Archive Test",
    "description": "A textured window-profile component used to test immersive object viewing inside the archive interface.",
    "introduction": "This first 3D archive object tests a node-to-model transition, interactive orbit controls, material mapping, and a slow automated camera rotation.",
    "accessionNumber": "OBJ.2026.6750.01",
    "orbitCenterId": "center-geometry",
    "year": 2026,
    "orbitRadius": 255,
    "orbitAngleDeg": -68,
    "importance": 5,
    "model": {
      "obj": "assets/window-profile/window-profile.obj",
      "mtl": "assets/window-profile/window-profile.mtl",
      "diffuse": "assets/window-profile/textures/diffuse.jpg",
      "normal": "assets/window-profile/textures/normal.jpg",
      "ao": "assets/window-profile/textures/ao.jpg",
      "rotation": [-1.5707963268, 0, 0]
    }
  }
];
const relationships = [
  {
    "source": "hks-0842-lax-med",
    "target": "hks-0844-lax-med",
    "category": "Typology",
    "description": "Both developed for the same medical research facility program in Los Angeles.",
    "strength": 0.8
  },
  {
    "source": "hks-0842-lax-med",
    "target": "hks-1215-ord-res",
    "category": "Fabrication",
    "description": "Shared reliance on large-scale robotic concrete extrusion techniques.",
    "strength": 0.65
  },
  {
    "source": "hks-0658-sea-edu",
    "target": "hks-0659-sea-edu",
    "category": "Fabrication",
    "description": "Sequential iterations of the same node connector research thread.",
    "strength": 0.9
  },
  {
    "source": "hks-0658-sea-edu",
    "target": "hks-1188-sea-edu",
    "category": "Project Phase",
    "description": "Parallel studies for the same education campus structural program.",
    "strength": 0.75
  },
  {
    "source": "hks-0217-dfw-spt",
    "target": "hks-0217-dfw-spt-b",
    "category": "Geometry",
    "description": "Panelization strategy developed directly from the canopy stress model.",
    "strength": 0.85
  },
  {
    "source": "hks-1093-sfo-cmx",
    "target": "hks-0733-den-off",
    "category": "Material",
    "description": "Both examine reclaimed or recycled material sourcing strategies.",
    "strength": 0.4
  },
  {
    "source": "hks-0501-mia-cul",
    "target": "hks-0620-hou-com",
    "category": "Material",
    "description": "Shared focus on lower-carbon, bio-derived material substitutes.",
    "strength": 0.55
  },
  {
    "source": "hks-0512-mia-cul",
    "target": "hks-0844-lax-med",
    "category": "Fabrication",
    "description": "Related accelerated exposure testing methodologies.",
    "strength": 0.35
  },
  {
    "source": "hks-0399-atl-air",
    "target": "hks-0512-dal-edu",
    "category": "Typology",
    "description": "Comparable modular, repeatable spatial bay strategies.",
    "strength": 0.45
  },
  {
    "source": "hks-0455-phx-hos",
    "target": "hks-0842-lax-med",
    "category": "Typology",
    "description": "Both support medical facility programs within the same research track.",
    "strength": 0.5
  },
  {
    "source": "hks-0912-lon-cul",
    "target": "hks-0501-mia-cul",
    "category": "Typology",
    "description": "Cultural building program overlap across differing climates.",
    "strength": 0.3
  },
  {
    "source": "hks-1044-tor-res",
    "target": "hks-1215-ord-res",
    "category": "Geometry",
    "description": "Both test self-supporting structural geometries to reduce material use.",
    "strength": 0.5
  },
  {
    "source": "hks-0688-chi-off",
    "target": "hks-0912-lon-cul",
    "category": "Geometry",
    "description": "Shared use of parametric performance modeling in early design study.",
    "strength": 0.4
  },
  {
    "source": "hks-0910-bos-lab",
    "target": "hks-0733-den-off",
    "category": "Project Phase",
    "description": "Both reached full prototype status within the same fiscal year.",
    "strength": 0.3
  }
];
const orbitCenters = [
  {
    "id": "center-fabrication",
    "label": "Fabrication Systems",
    "x": 260,
    "y": 610,
    "maxRadius": 420,
    "ringCount": 5
  },
  {
    "id": "center-material",
    "label": "Material Research",
    "x": 1030,
    "y": 230,
    "maxRadius": 340,
    "ringCount": 4
  },
  {
    "id": "center-typology",
    "label": "Typological Studies",
    "x": 820,
    "y": 800,
    "maxRadius": 290,
    "ringCount": 4
  },
  {
    "id": "center-geometry",
    "label": "Geometry Experiments",
    "x": 1440,
    "y": 570,
    "maxRadius": 330,
    "ringCount": 4
  }
];


let THREE=null;
let OBJLoader=null;
let OrbitControls=null;

const $=selector=>document.querySelector(selector);
const $$=selector=>[...document.querySelectorAll(selector)];
const prefersReducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const state={
  view:'observatory',
  selected:null,
  scale:window.innerWidth<760?.68:.86,
  x:0,
  y:0,
  dragging:false,
  lastX:0,
  lastY:0,
  filters:new Set(['Material','Fabrication','Typology','Geometry','Project Phase']),
  returnTransform:null,
  orbitPaused:false
};

const ORBIT_CENTER={x:-455,y:205};
const ORBIT_TRACKS=[
  {rx:230,ry:142,tilt:-12,spin:.018},
  {rx:365,ry:216,tilt:-10,spin:-.014},
  {rx:500,ry:292,tilt:-8,spin:.011},
  {rx:635,ry:368,tilt:-6,spin:-.009},
  {rx:770,ry:444,tilt:-4,spin:.0075},
  {rx:905,ry:520,tilt:-2,spin:-.0063},
  {rx:1040,ry:596,tilt:0,spin:.0052},
  {rx:1175,ry:672,tilt:2,spin:-.0044},
  {rx:1310,ry:748,tilt:4,spin:.0038},
  {rx:1445,ry:824,tilt:6,spin:-.0033},
  {rx:1580,ry:900,tilt:8,spin:.0029},
  {rx:1715,ry:976,tilt:10,spin:-.0026}
];
const START_ANGLES=[-72,-54,-39,-25,-11,4,20,38,57,78,102,128,156,185,214,244,274,304,330,348,28];
const RING_PATTERN=[4,5,6,3,2,5,4,6,3,7,5,4,7,3,6,2,5,7,4,6,3];
const nodeRefs=new Map();
const relationshipRefs=[];
const ringRefs=[];
let selectionTether=null;
let orbitAnimationFrame=null;
let orbitClock=0;
let lastOrbitTime=performance.now();
let canvasAnimationFrame=null;
let modelViewer=null;

archiveItems.forEach((item,index)=>{
  item.orbitIndex=item.model?3:RING_PATTERN[index%RING_PATTERN.length];
  item.orbitTheta=(item.model?-16:START_ANGLES[index%START_ANGLES.length])*Math.PI/180;
  const direction=index%2===0?1:-1;
  item.orbitSpeed=direction*(.014+(index%5)*.0023);
  item.x=0;
  item.y=0;
});

$('#itemCount').textContent=String(archiveItems.length).padStart(3,'0');

function setView(name){
  state.view=name;
  $$('.view').forEach(view=>view.classList.toggle('active-view',view.id===name));
  $$('.nav-btn').forEach(button=>button.classList.toggle('active',button.dataset.view===name));
  closeDetail(false);
}

$$('[data-view]').forEach(element=>element.addEventListener('click',event=>{
  event.preventDefault();
  setView(element.dataset.view);
}));

function applyTransform(){
  const transform=`translate(${state.x}px,${state.y}px) scale(${state.scale})`;
  $('#orbitSvg').style.transform=transform;
  $('#nodesLayer').style.transform=transform;
}

function svgEl(tag,attrs={}){
  const element=document.createElementNS('http://www.w3.org/2000/svg',tag);
  Object.entries(attrs).forEach(([key,value])=>element.setAttribute(key,value));
  return element;
}

function rotatePoint(x,y,angle){
  const cos=Math.cos(angle),sin=Math.sin(angle);
  return {x:x*cos-y*sin,y:x*sin+y*cos};
}

function archiveNumber(item,index){
  const digits=(item.accessionNumber.match(/\d+/g)||[]).join('');
  return digits.slice(-3)||String(100+index);
}

function nodeLabelHTML(item){
  return `<span class="node-code"><strong>${item.archiveCode}</strong> <em>| ${item.year}</em></span>
    <span>${item.prototypeType}</span>
    <span>Accession No: ${item.accessionNumber}</span>
    <span>${item.title}</span>`;
}

function createSvgDefs(svg){
  const defs=svgEl('defs');
  const lineGlow=svgEl('filter',{id:'lineGlow',x:'-40%',y:'-40%',width:'180%',height:'180%'});
  lineGlow.appendChild(svgEl('feGaussianBlur',{stdDeviation:'1.4',result:'blur'}));
  const lineMerge=svgEl('feMerge');
  lineMerge.appendChild(svgEl('feMergeNode',{in:'blur'}));
  lineMerge.appendChild(svgEl('feMergeNode',{in:'SourceGraphic'}));
  lineGlow.appendChild(lineMerge);
  const pointGlow=svgEl('filter',{id:'pointGlow',x:'-100%',y:'-100%',width:'300%',height:'300%'});
  pointGlow.appendChild(svgEl('feGaussianBlur',{stdDeviation:'2.4',result:'blur'}));
  const pointMerge=svgEl('feMerge');
  pointMerge.appendChild(svgEl('feMergeNode',{in:'blur'}));
  pointMerge.appendChild(svgEl('feMergeNode',{in:'SourceGraphic'}));
  pointGlow.appendChild(pointMerge);
  defs.append(lineGlow,pointGlow);
  svg.appendChild(defs);
}

function renderObservatory(){
  const svg=$('#orbitSvg');
  const layer=$('#nodesLayer');
  svg.innerHTML='';
  layer.innerHTML='';
  ringRefs.length=0;
  relationshipRefs.length=0;
  nodeRefs.clear();
  createSvgDefs(svg);

  ORBIT_TRACKS.forEach((track,index)=>{
    const base=svgEl('ellipse',{
      cx:ORBIT_CENTER.x,cy:ORBIT_CENTER.y,rx:track.rx,ry:track.ry,class:'orbit-track'
    });
    const sweep=svgEl('ellipse',{
      cx:ORBIT_CENTER.x,cy:ORBIT_CENTER.y,rx:track.rx,ry:track.ry,class:'orbit-sweep'
    });
    sweep.style.strokeDasharray=`${105+index*13} ${1160+index*175}`;
    svg.append(base,sweep);
    ringRefs.push({base,sweep,track});

    if(index>0){
      const tick=svgEl('circle',{r:index%3===0?2.6:1.7,class:'orbit-tick'});
      svg.appendChild(tick);
      ringRefs[index].tick=tick;
    }
  });

  relationships.slice(0,8).forEach(relationship=>{
    const path=svgEl('path',{class:'relationship-line'});
    svg.appendChild(path);
    relationshipRefs.push({relationship,path});
  });

  selectionTether=svgEl('path',{class:'selection-tether'});
  svg.appendChild(selectionTether);

  archiveItems.forEach((item,index)=>{
    const node=document.createElement('button');
    node.className='node';
    if(index%4===0||item.model)node.classList.add('has-field');
    if(item.model)node.classList.add('has-model');
    node.dataset.id=item.id;
    node.style.setProperty('--node-size',`${18+item.importance*4.5}px`);
    node.setAttribute('aria-label',item.title);
    node.innerHTML=`<span class="node-field"></span><span class="node-core"></span><span class="node-number">${archiveNumber(item,index)}</span><span class="node-label">${nodeLabelHTML(item)}</span>`;
    node.addEventListener('click',event=>{
      event.stopPropagation();
      focusItem(item.id);
    });
    layer.appendChild(node);
    nodeRefs.set(item.id,node);
  });

  applyTransform();
  if(!orbitAnimationFrame){
    lastOrbitTime=performance.now();
    orbitAnimationFrame=requestAnimationFrame(animateOrbitSystem);
  }
}

function updateOrbitPositions(){
  ringRefs.forEach((ref,index)=>{
    const rotation=(ref.track.tilt*Math.PI/180)+(orbitClock*ref.track.spin);
    const rotationDeg=rotation*180/Math.PI;
    const transform=`rotate(${rotationDeg} ${ORBIT_CENTER.x} ${ORBIT_CENTER.y})`;
    ref.base.setAttribute('transform',transform);
    ref.sweep.setAttribute('transform',transform);
    ref.sweep.style.strokeDashoffset=String(-orbitClock*(10+index*1.6));
    if(ref.tick){
      const theta=-1.18+index*.57;
      const raw={x:ref.track.rx*Math.cos(theta),y:ref.track.ry*Math.sin(theta)};
      const rotated=rotatePoint(raw.x,raw.y,rotation);
      ref.tick.setAttribute('cx',ORBIT_CENTER.x+rotated.x);
      ref.tick.setAttribute('cy',ORBIT_CENTER.y+rotated.y);
    }
  });

  archiveItems.forEach((item,index)=>{
    const track=ORBIT_TRACKS[item.orbitIndex];
    const ringRotation=(track.tilt*Math.PI/180)+(orbitClock*track.spin);
    const theta=item.orbitTheta+(orbitClock*item.orbitSpeed);
    const raw={x:track.rx*Math.cos(theta),y:track.ry*Math.sin(theta)};
    const rotated=rotatePoint(raw.x,raw.y,ringRotation);
    item.x=ORBIT_CENTER.x+rotated.x;
    item.y=ORBIT_CENTER.y+rotated.y;
    const node=nodeRefs.get(item.id);
    if(node){
      node.style.left=`${item.x}px`;
      node.style.top=`${item.y}px`;
      node.classList.toggle('label-left',item.x>310);
    }
  });

  relationshipRefs.forEach(({relationship,path})=>{
    const source=archiveItems.find(item=>item.id===relationship.source);
    const target=archiveItems.find(item=>item.id===relationship.target);
    if(!source||!target)return;
    const midX=(source.x+target.x)/2;
    const midY=(source.y+target.y)/2-32;
    path.setAttribute('d',`M ${source.x} ${source.y} Q ${midX} ${midY} ${target.x} ${target.y}`);
  });

  if(state.selected&&selectionTether){
    const item=archiveItems.find(entry=>entry.id===state.selected);
    if(item){
      selectionTether.classList.add('visible');
      selectionTether.setAttribute('d',`M ${item.x} ${item.y} L ${item.x+72} ${item.y-42} L ${item.x+490} ${item.y-42}`);
    }
  }else if(selectionTether){
    selectionTether.classList.remove('visible');
  }
}

function animateOrbitSystem(now){
  const delta=Math.min((now-lastOrbitTime)/1000,.05);
  lastOrbitTime=now;
  if(!state.orbitPaused&&!prefersReducedMotion)orbitClock+=delta;
  updateOrbitPositions();
  orbitAnimationFrame=requestAnimationFrame(animateOrbitSystem);
}

function animateCanvasTo(target,duration=620,onComplete){
  if(canvasAnimationFrame)cancelAnimationFrame(canvasAnimationFrame);
  const start={scale:state.scale,x:state.x,y:state.y};
  const started=performance.now();
  const ease=t=>1-Math.pow(1-t,3);
  const tick=now=>{
    const raw=Math.min(1,(now-started)/duration);
    const t=ease(raw);
    state.scale=start.scale+(target.scale-start.scale)*t;
    state.x=start.x+(target.x-start.x)*t;
    state.y=start.y+(target.y-start.y)*t;
    applyTransform();
    if(raw<1)canvasAnimationFrame=requestAnimationFrame(tick);
    else{
      canvasAnimationFrame=null;
      onComplete?.();
    }
  };
  canvasAnimationFrame=requestAnimationFrame(tick);
}

function focusItem(id){
  const item=archiveItems.find(entry=>entry.id===id);
  if(!item)return;
  if(state.view!=='observatory')setView('observatory');
  state.returnTransform={scale:state.scale,x:state.x,y:state.y};
  state.orbitPaused=true;
  state.selected=id;
  $$('.node').forEach(node=>node.classList.toggle('selected',node.dataset.id===id));
  updateOrbitPositions();

  const canvas=$('#canvas');
  const rect=canvas.getBoundingClientRect();
  const focusScale=item.model?1.02:.95;
  const targetX=Math.min(rect.width*.28,430);
  const targetY=rect.height*.53;
  const x=targetX-rect.width/2-item.x*focusScale;
  const y=targetY-rect.height/2-item.y*focusScale;
  animateCanvasTo({scale:focusScale,x,y},700,()=>openDetail(id));
}

function metaRows(item){
  return [
    ['Year',item.year],
    ['Geographic Location Code',item.locationCode],
    ['Project Typology',item.typology],
    ['Prototype Type',item.prototypeType],
    ['Material',item.material],
    ['Fabrication Method',item.fabricationMethod],
    ['Project Phase',item.projectPhase],
    ['Archive Accession Number',item.accessionNumber]
  ].map(([label,value])=>`<div class="meta-row"><span>${label}</span><span>${value}</span></div>`).join('');
}

function actionButtons(hasModel){
  return `<div class="detail-actions">
    <button class="primary" data-action="model">${hasModel?'View 3D Scan':'View Object'}</button>
    <button data-action="relationships">Explore Relationships</button>
    <button class="primary" data-action="timeline">View Timeline</button>
    <button data-action="related">Related Prototypes</button>
  </div>`;
}

function openDetail(id){
  destroyModelViewer();
  state.selected=id;
  $$('.node').forEach(node=>node.classList.toggle('selected',node.dataset.id===id));
  const item=archiveItems.find(entry=>entry.id===id);
  if(!item)return;
  const panel=$('#detailPanel');
  panel.classList.toggle('model-mode',Boolean(item.model));

  const media=item.model?`
    <div class="model-stage-shell">
      <div id="modelViewport" class="model-viewport" aria-label="Interactive 3D model of ${item.title}"></div>
      <div id="modelStatus" class="model-status">Loading textured object…</div>
      <div class="model-controls-hint">Drag to orbit · Scroll to zoom · Auto-rotate enabled</div>
    </div>
    <div class="model-thumbnails">
      <img src="${item.model.diffuse}" alt="Diffuse material map">
      <img src="${item.model.normal}" alt="Normal material map">
      <img src="${item.model.ao}" alt="Ambient occlusion material map">
      <div class="texture-placeholder" aria-hidden="true"></div>
    </div>`:`
    <div class="archive-image"></div>
    <div class="model-thumbnails">
      <div class="texture-placeholder"></div><div class="texture-placeholder"></div>
      <div class="texture-placeholder"></div><div class="texture-placeholder"></div>
    </div>`;

  $('#detailContent').innerHTML=`<div class="detail-inner">
    <p class="detail-eyebrow">Confidential Project Code</p>
    <div class="detail-code-large">${item.archiveCode}</div>
    <div class="detail-subline">${item.prototypeType} / ${item.fabricationMethod} / ${item.material}</div>
    <div class="detail-content-grid">
      <div class="detail-media">${media}</div>
      <div class="detail-copy">
        <p>${item.introduction}</p>
        <h3>Prototype description</h3>
        <div class="meta">${metaRows(item)}</div>
      </div>
    </div>
    ${actionButtons(Boolean(item.model))}
  </div>`;

  panel.classList.add('open');
  panel.setAttribute('aria-hidden','false');
  panel.querySelector('[data-action="relationships"]')?.addEventListener('click',()=>setView('relationships'));
  panel.querySelector('[data-action="related"]')?.addEventListener('click',()=>setView('relationships'));
  panel.querySelector('[data-action="timeline"]')?.addEventListener('click',()=>setView('timeline'));
  panel.querySelector('[data-action="model"]')?.addEventListener('click',()=>$('#modelViewport')?.focus());
  if(item.model)requestAnimationFrame(()=>initModelViewer(item));
}

function closeDetail(restore=true){
  destroyModelViewer();
  const panel=$('#detailPanel');
  panel.classList.remove('open','model-mode');
  panel.setAttribute('aria-hidden','true');
  state.selected=null;
  $$('.node').forEach(node=>node.classList.remove('selected'));
  updateOrbitPositions();

  if(restore&&state.returnTransform){
    const previous=state.returnTransform;
    state.returnTransform=null;
    animateCanvasTo(previous,560,()=>{state.orbitPaused=false;});
  }else{
    state.returnTransform=null;
    state.orbitPaused=false;
  }
}

async function ensureThree(){
  if(THREE&&OBJLoader&&OrbitControls)return;
  const [threeModule,objModule,controlsModule]=await Promise.all([
    import('three'),
    import('three/addons/loaders/OBJLoader.js'),
    import('three/addons/controls/OrbitControls.js')
  ]);
  THREE=threeModule;
  OBJLoader=objModule.OBJLoader;
  OrbitControls=controlsModule.OrbitControls;
}

function loadTexture(loader,url,isColor=false){
  return new Promise((resolve,reject)=>loader.load(url,texture=>{
    if(isColor)texture.colorSpace=THREE.SRGBColorSpace;
    texture.anisotropy=8;
    resolve(texture);
  },undefined,reject));
}

function loadObj(loader,url){
  return new Promise((resolve,reject)=>loader.load(url,resolve,undefined,reject));
}

async function initModelViewer(item){
  const host=$('#modelViewport');
  const status=$('#modelStatus');
  if(!host||!item.model)return;

  try{
    await ensureThree();
  }catch(error){
    console.error('Three.js failed to load',error);
    if(status){
      status.textContent='3D library could not load. Check your internet connection, then refresh.';
      status.classList.add('error');
    }
    return;
  }
  if(!document.body.contains(host))return;

  const scene=new THREE.Scene();
  scene.background=new THREE.Color(0xd5d7d4);
  const camera=new THREE.PerspectiveCamera(34,1,.01,100);
  camera.position.set(3.3,2.15,4.25);
  const renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));
  renderer.outputColorSpace=THREE.SRGBColorSpace;
  renderer.toneMapping=THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure=1.04;
  renderer.shadowMap.enabled=true;
  host.appendChild(renderer.domElement);

  const controls=new OrbitControls(camera,renderer.domElement);
  controls.enableDamping=true;
  controls.dampingFactor=.055;
  controls.enablePan=false;
  controls.autoRotate=true;
  controls.autoRotateSpeed=.56;
  controls.minDistance=1.7;
  controls.maxDistance=7.5;

  scene.add(new THREE.HemisphereLight(0xffffff,0x777a78,2.55));
  const key=new THREE.DirectionalLight(0xffffff,3.7);
  key.position.set(4.5,6,5);
  key.castShadow=true;
  scene.add(key);
  const rim=new THREE.DirectionalLight(0xc8d6e6,2.0);
  rim.position.set(-5,2,-4);
  scene.add(rim);
  const fill=new THREE.DirectionalLight(0xfff5e6,1.2);
  fill.position.set(0,-2,4);
  scene.add(fill);

  const floor=new THREE.Mesh(new THREE.CircleGeometry(3.4,96),new THREE.ShadowMaterial({opacity:.16}));
  floor.rotation.x=-Math.PI/2;
  floor.position.y=-1.28;
  floor.receiveShadow=true;
  scene.add(floor);

  const manager=new THREE.LoadingManager();
  manager.onProgress=(url,loaded,total)=>{
    if(status)status.textContent=`Loading textured object… ${Math.round(loaded/total*100)}%`;
  };
  const textureLoader=new THREE.TextureLoader(manager);
  const objLoader=new OBJLoader(manager);

  let animationId=null;
  const resize=()=>{
    const width=Math.max(1,host.clientWidth);
    const height=Math.max(1,host.clientHeight);
    renderer.setSize(width,height,false);
    camera.aspect=width/height;
    camera.updateProjectionMatrix();
  };
  const resizeObserver=new ResizeObserver(resize);
  resizeObserver.observe(host);
  resize();

  modelViewer={scene,camera,renderer,controls,resizeObserver,get animationId(){return animationId},set animationId(value){animationId=value}};

  try{
    const [object,diffuse,normal,ao]=await Promise.all([
      loadObj(objLoader,item.model.obj),
      loadTexture(textureLoader,item.model.diffuse,true),
      loadTexture(textureLoader,item.model.normal),
      loadTexture(textureLoader,item.model.ao)
    ]);
    if(!modelViewer||modelViewer.renderer!==renderer){
      object.traverse(child=>child.geometry?.dispose?.());
      return;
    }

    const material=new THREE.MeshStandardMaterial({
      map:diffuse,
      normalMap:normal,
      aoMap:ao,
      roughness:.88,
      metalness:.02,
      side:THREE.DoubleSide
    });
    material.normalScale.set(.72,.72);
    object.traverse(child=>{
      if(!child.isMesh)return;
      const uv=child.geometry.attributes.uv;
      if(uv&&!child.geometry.attributes.uv1)child.geometry.setAttribute('uv1',uv.clone());
      if(uv&&!child.geometry.attributes.uv2)child.geometry.setAttribute('uv2',uv.clone());
      child.material=material;
      child.castShadow=true;
      child.receiveShadow=true;
    });

    const [rx,ry,rz]=item.model.rotation||[0,0,0];
    object.rotation.set(rx,ry,rz);
    object.updateMatrixWorld(true);
    const box=new THREE.Box3().setFromObject(object);
    const center=box.getCenter(new THREE.Vector3());
    const size=box.getSize(new THREE.Vector3());
    object.position.sub(center);
    object.scale.setScalar(2.7/Math.max(size.x,size.y,size.z));
    scene.add(object);
    controls.target.set(0,0,0);
    controls.update();
    if(status){
      status.textContent='Textured OBJ loaded';
      status.classList.add('loaded');
      setTimeout(()=>status?.remove(),1000);
    }
  }catch(error){
    console.error('3D model failed to load',error);
    if(status){
      status.textContent='Model could not load. Open the folder with Live Server and verify the asset paths.';
      status.classList.add('error');
    }
  }

  const render=()=>{
    controls.update();
    renderer.render(scene,camera);
    animationId=requestAnimationFrame(render);
  };
  render();
}

function destroyModelViewer(){
  if(!modelViewer)return;
  cancelAnimationFrame(modelViewer.animationId);
  modelViewer.resizeObserver?.disconnect();
  modelViewer.controls?.dispose();
  modelViewer.scene?.traverse(object=>{
    object.geometry?.dispose?.();
    const materials=Array.isArray(object.material)?object.material:[object.material];
    materials.filter(Boolean).forEach(material=>{
      ['map','normalMap','aoMap','roughnessMap','metalnessMap'].forEach(key=>material[key]?.dispose?.());
      material.dispose?.();
    });
  });
  modelViewer.renderer?.dispose();
  modelViewer.renderer?.domElement?.remove();
  modelViewer=null;
}

$('#closeDetail').onclick=()=>closeDetail(true);

const canvas=$('#canvas');
canvas.addEventListener('pointerdown',event=>{
  if(event.target.closest('.node'))return;
  state.dragging=true;
  state.lastX=event.clientX;
  state.lastY=event.clientY;
  canvas.classList.add('dragging');
  canvas.setPointerCapture(event.pointerId);
});
canvas.addEventListener('pointermove',event=>{
  if(!state.dragging)return;
  state.x+=event.clientX-state.lastX;
  state.y+=event.clientY-state.lastY;
  state.lastX=event.clientX;
  state.lastY=event.clientY;
  applyTransform();
});
canvas.addEventListener('pointerup',()=>{
  state.dragging=false;
  canvas.classList.remove('dragging');
});
canvas.addEventListener('pointercancel',()=>{
  state.dragging=false;
  canvas.classList.remove('dragging');
});
canvas.addEventListener('wheel',event=>{
  event.preventDefault();
  const old=state.scale;
  state.scale=Math.min(1.65,Math.max(.38,state.scale*(event.deltaY<0?1.08:.92)));
  const rect=canvas.getBoundingClientRect();
  const mouseX=event.clientX-rect.left-rect.width/2;
  const mouseY=event.clientY-rect.top-rect.height/2;
  state.x=mouseX-(mouseX-state.x)*(state.scale/old);
  state.y=mouseY-(mouseY-state.y)*(state.scale/old);
  applyTransform();
},{passive:false});

$('#zoomIn').onclick=()=>{state.scale=Math.min(1.65,state.scale*1.15);applyTransform();};
$('#zoomOut').onclick=()=>{state.scale=Math.max(.38,state.scale/1.15);applyTransform();};
$('#zoomReset').onclick=()=>{
  state.scale=window.innerWidth<760?.68:.86;
  state.x=0;
  state.y=0;
  applyTransform();
};

function renderFilters(){
  const categories=['Material','Fabrication','Typology','Geometry','Project Phase'];
  $('#relationshipFilters').innerHTML=categories.map(category=>`<label class="filter-option"><input type="checkbox" checked value="${category}"><span>${category}</span></label>`).join('');
  $$('#relationshipFilters input').forEach(input=>input.onchange=()=>{
    input.checked?state.filters.add(input.value):state.filters.delete(input.value);
    renderRelationships();
  });
}

function renderRelationships(){
  const visible=relationships.filter(relationship=>state.filters.has(relationship.category));
  $('#relationshipGraph').innerHTML=visible.map(relationship=>{
    const source=archiveItems.find(item=>item.id===relationship.source);
    const target=archiveItems.find(item=>item.id===relationship.target);
    return `<article class="relationship-card" data-id="${source.id}"><div class="category">${relationship.category}</div><h3>${source.title} ↔ ${target.title}</h3><p>${relationship.description}</p><div class="strength"><span style="width:${relationship.strength*100}%"></span></div></article>`;
  }).join('')||'<p>No relationship categories selected.</p>';
  $$('.relationship-card').forEach(card=>card.onclick=()=>focusItem(card.dataset.id));
}

function renderTimeline(){
  const years=[...new Set(archiveItems.map(item=>item.year))].sort((a,b)=>b-a);
  $('#timelineList').innerHTML=years.map(year=>`<section class="year-group"><div class="year-label">${year}</div><div class="year-items">${archiveItems.filter(item=>item.year===year).map(item=>`<article class="timeline-item" data-id="${item.id}"><small>${item.archiveCode}</small><h3>${item.title}</h3><p>${item.location} · ${item.material}</p></article>`).join('')}</div></section>`).join('');
  $$('.timeline-item').forEach(card=>card.onclick=()=>focusItem(card.dataset.id));
}

function openSearch(){
  const overlay=$('#searchOverlay');
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden','false');
  $('#searchInput').value='';
  renderSearch('');
  setTimeout(()=>$('#searchInput').focus(),30);
}
function closeSearch(){
  const overlay=$('#searchOverlay');
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden','true');
}
function renderSearch(query){
  query=query.toLowerCase().trim();
  const results=archiveItems.filter(item=>!query||[item.title,item.material,item.location,item.typology,item.archiveCode].join(' ').toLowerCase().includes(query)).slice(0,20);
  $('#searchResults').innerHTML=results.map(item=>`<div class="search-result" data-id="${item.id}"><small>${item.archiveCode}</small><strong>${item.title}</strong><span>${item.year} · ${item.location}</span></div>`).join('');
  $$('.search-result').forEach(result=>result.onclick=()=>{
    closeSearch();
    focusItem(result.dataset.id);
  });
}

$('#searchButton').onclick=openSearch;
$('#closeSearch').onclick=closeSearch;
$('#searchInput').oninput=event=>renderSearch(event.target.value);
document.addEventListener('keydown',event=>{
  if(event.key==='Escape'){
    closeSearch();
    closeDetail(true);
  }
  if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='k'){
    event.preventDefault();
    openSearch();
  }
});

renderObservatory();
renderFilters();
renderRelationships();
renderTimeline();
updateOrbitPositions();
