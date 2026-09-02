export interface DocumentationLink {
  title: string;
  url: string;
}

export interface Project {
  name: string;
  description: string;
  documentationUrl?: string;
}

export interface Technology {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  image: string;
  description: string;
  documentation: DocumentationLink[];
  projects: Project[];
}
