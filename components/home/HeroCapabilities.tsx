import { Icon } from "@/components/ui/Icon";
import { hero } from "@/content/site";

export function HeroCapabilities() {
  return (
    <div className="mt-[var(--space-hero-block)] flex w-full flex-col gap-12 lg:flex-row lg:gap-20">
      <div className="flex w-full flex-col gap-6 lg:max-w-[580px] lg:flex-1">
        <h2 className="font-sans text-[length:var(--fs-h5)] font-semibold leading-[1.2] text-[var(--text-white)]">
          {hero.capabilitiesTitle}
        </h2>
        <div className="flex flex-wrap gap-6">
          {hero.capabilities.map((item) => (
            <div
              key={item.label}
              className="group flex w-full items-center gap-2.5 border-b border-[#484848] p-2.5 transition-[border-color] duration-300 ease-out hover:border-[#6e6e6e] sm:w-[278px]"
            >
              <Icon
                name={item.icon}
                className="size-6 object-contain transition-[filter] duration-300 ease-out group-hover:[filter:brightness(0)_saturate(100%)_invert(72%)_sepia(47%)_saturate(533%)_hue-rotate(93deg)_brightness(1.04)]"
              />
              <p className="flex-1 font-sans text-[length:var(--fs-body-2)] font-normal leading-[1.2] text-white/90 transition-[color,filter] duration-300 ease-out group-hover:text-white group-hover:brightness-110">
                {item.label}
              </p>
              <p className="font-sans text-[length:var(--fs-body-2)] font-normal leading-[1.2] text-[var(--text-primary)]">
                {item.level}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full flex-col gap-6 lg:max-w-[580px] lg:flex-1">
        <h2 className="font-sans text-[length:var(--fs-h5)] font-semibold leading-[1.2] text-[var(--text-white)]">
          {hero.toolkitTitle}
        </h2>
        <div className="flex flex-wrap justify-start gap-3 sm:justify-between">
          {hero.toolkit.map((item) => (
            <div
              key={item.label}
              className="group flex size-[106px] shrink-0 flex-col items-center justify-center gap-2 rounded-[20px] border border-solid border-[#363636] p-2 transition-[transform,border-color] duration-300 ease-out hover:-translate-y-[3px] hover:border-[color-mix(in_srgb,var(--border-primary)_55%,#363636)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <div className="flex size-11 items-center justify-center rounded-[10px] bg-[#1f1f1f] p-1">
                <Icon
                  name={item.icon}
                  className="size-8 object-contain transition-[filter] duration-300 ease-out group-hover:[filter:brightness(0)_saturate(100%)_invert(72%)_sepia(47%)_saturate(533%)_hue-rotate(93deg)_brightness(1.04)]"
                />
              </div>
              <p className="text-center font-sans text-[length:var(--fs-body-1)] font-normal leading-[1.2] text-[var(--text-white)]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
