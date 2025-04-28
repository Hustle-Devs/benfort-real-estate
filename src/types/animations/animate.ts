export default interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  noViewport?: boolean;
}

export default interface StaggerWrapperProps {
  children: React.ReactNode;
  stagger?: number;
  duration?: number;
  className?: string;
}
