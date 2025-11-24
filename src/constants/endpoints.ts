export const AppEndpoints = {
  USER: "/users",
  REPOSITORIES: "/search/repositories",
} as const;

export const filterType = {
  ALL: "all",
  OWNER: "owner",
  MEMBER: "member",
} as const;

export type filterType = (typeof filterType)[keyof typeof filterType];

export const REPOSITORY_TYPES = [
  { value: "all", label: "All" },
  { value: "sources", label: "Sources" },
  { value: "forks", label: "Forks" },
  { value: "archived", label: "Archived" },
  { value: "mirrors", label: "Mirrors" },
] as const;

export const PROGRAMMING_LANGUAGES = [
  { value: "all", label: "All" },
  { value: "scss", label: "SCSS" },
  { value: "java", label: "Java" },
  { value: "typescript", label: "TypeScript" },
  { value: "javascript", label: "JavaScript" },
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "python", label: "Python" },
  { value: "go", label: "Go" },
  { value: "rust", label: "Rust" },
  { value: "c", label: "C" },
  { value: "cpp", label: "C++" },
  { value: "csharp", label: "C#" },
  { value: "php", label: "PHP" },
  { value: "ruby", label: "Ruby" },
  { value: "swift", label: "Swift" },
  { value: "kotlin", label: "Kotlin" },
] as const;
