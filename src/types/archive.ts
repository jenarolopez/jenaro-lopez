interface Project {
  year: string;
  title: string;
  madeAt: string;
  builtWith: string[];
  link: string;
}

type ProjectArchive = Project[];

export type { Project, ProjectArchive }; 