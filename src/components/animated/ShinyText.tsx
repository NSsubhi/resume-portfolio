"use client";

type ShinyTextProps = {
  text: string;
  className?: string;
  disabled?: boolean;
};

export function ShinyText({ text, className, disabled = false }: ShinyTextProps) {
  return (
    <span
      className={
        disabled
          ? className
          : `animate-shiny-text bg-[length:250%_100%] bg-clip-text text-transparent ${className || ""}`
      }
      style={
        disabled
          ? undefined
          : {
              backgroundImage:
                "linear-gradient(110deg, rgba(255,255,255,0.4) 25%, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0.4) 75%)",
              animation: "shiny-text 4s ease-in-out infinite",
            }
      }
    >
      {text}
    </span>
  );
}

export default ShinyText;





