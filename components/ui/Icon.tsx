import { cn } from "@/lib/cn";

type IconName =
  | "phone"
  | "mail"
  | "link"
  | "social"
  | "arrow"
  | "cap-ux"
  | "cap-systems"
  | "cap-prototyping"
  | "cap-ai"
  | "brand-figma"
  | "brand-sketch"
  | "brand-framer"
  | "brand-adobe";

type IconProps = {
  name: IconName;
  className?: string;
  alt?: string;
};

const sources: Record<IconName, string> = {
  phone: "/icons/phone-call.svg",
  mail: "/icons/mail.svg",
  link: "/icons/link.svg",
  social: "/icons/social.svg",
  arrow: "/icons/arrow-narrow-right.svg",
  "cap-ux": "/icons/cap-ux.svg",
  "cap-systems": "/icons/cap-systems.svg",
  "cap-prototyping": "/icons/cap-prototyping.svg",
  "cap-ai": "/icons/cap-ai.svg",
  "brand-figma": "/icons/brand-figma.svg",
  "brand-sketch": "/icons/brand-sketch.svg",
  "brand-framer": "/icons/brand-framer.svg",
  "brand-adobe": "/icons/brand-adobe.svg",
};

export function Icon({ name, className, alt = "" }: IconProps) {
  const isArrow = name === "arrow";

  if (name === "mail") {
    return (
      <span
        className={cn(
          "inline-flex shrink-0 items-center justify-center",
          className ?? "size-5",
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={sources.mail}
          alt={alt}
          width={17}
          height={13}
          className="aspect-[5/4] h-auto w-[16.667px] max-w-full"
        />
      </span>
    );
  }

  return (
    // Decorative icons from Figma; empty alt when paired with visible text
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={sources[name]}
      alt={alt}
      className={cn("shrink-0 object-contain", className)}
      width={isArrow ? 13 : 20}
      height={isArrow ? 8 : 20}
    />
  );
}
