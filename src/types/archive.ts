export type ProjectPhase =
  | 'Concept Study'
  | 'Design Development Study'
  | 'Prototype (TRL-4)'
  | 'Prototype (TRL-6)'
  | 'Field Trial'
  | 'Archived Reference';

export type RelationshipCategory =
  | 'Material'
  | 'Fabrication'
  | 'Typology'
  | 'Geometry'
  | 'Project Phase';

export interface ArchiveImagePlaceholder {
  id: string;
  label: string;
  tone: 'light' | 'dark';
}

export interface Relationship {
  source: string;
  target: string;
  category: RelationshipCategory;
  strength: number; // 0 - 1
  description: string;
}

export interface ArchiveObject {
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
  projectPhase: ProjectPhase;
  description: string;
  introduction: string;
  accessionNumber: string;
  /** absolute canvas position, used for orbit-center bodies */
  x: number;
  y: number;
  orbitCenterId: string | null;
  orbitRadius: number;
  orbitAngle: number; // radians
  importance: number; // 1 - 5, drives node size
  images: ArchiveImagePlaceholder[];
  relationships: Relationship[];
}

export interface OrbitCenter {
  id: string;
  label: string;
  x: number;
  y: number;
  maxRadius: number;
  ringCount: number;
}
