import { useInView } from "@/hooks/useInView";

export const Reveal = ({
  as: Tag = "div",
  children,
  className = "",
  delay = 0,
  ...props
}) => {
  const [ref, isInView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`reveal ${isInView ? "reveal-in" : ""} ${className}`}
      style={{ transitionDelay: isInView ? `${delay}ms` : "0ms" }}
      {...props}
    >
      {children}
    </Tag>
  );
};
