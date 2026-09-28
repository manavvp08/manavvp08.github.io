import {
  Briefcase,
  FolderKanban,
  Layers,
  User,
  Mail,
  PenLine,
  type LucideIcon,
} from "lucide-react";

export type IconKey =
  | "case-studies"
  | "projects"
  | "toolkit"
  | "about"
  | "experience"
  | "contact"
  | "writing";

export type NavItem = {
  id: string;
  label: string;
  icon: IconKey;
  key: string;
};

export const navItems: NavItem[] = [
  { id: "about", label: "About", icon: "about", key: "01" },
  { id: "case-studies", label: "Case Studies", icon: "case-studies", key: "02" },
  { id: "projects", label: "Projects", icon: "projects", key: "03" },
  { id: "toolkit", label: "Toolkit", icon: "toolkit", key: "04" },
  { id: "experience", label: "Experience", icon: "experience", key: "05" },
  { id: "contact", label: "Contact", icon: "contact", key: "06" },
];

export const writingNav = {
  id: "writing",
  label: "Writing",
  icon: "writing" as IconKey,
  href: "/writing",
};

export const SECTION_IDS = navItems.map((n) => n.id);

const ICONS: Record<IconKey, LucideIcon> = {
  "case-studies": Briefcase,
  projects: FolderKanban,
  toolkit: Layers,
  about: User,
  experience: Briefcase,
  contact: Mail,
  writing: PenLine,
};

export function NavIcon({
  name,
  className,
}: {
  name: IconKey;
  className?: string;
}) {
  const Icon = ICONS[name];
  return <Icon className={className} />;
}
