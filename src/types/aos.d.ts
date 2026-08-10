// The `aos` package ships no type declarations; this mirrors its public API.
declare module "aos" {
  export interface AosOptions {
    offset?: number;
    delay?: number;
    easing?: string;
    duration?: number;
    disable?: boolean | "mobile" | "phone" | "tablet" | (() => boolean);
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
    startEvent?: string;
    animatedClassName?: string;
    initClassName?: string;
    useClassNames?: boolean;
    disableMutationObserver?: boolean;
    throttleDelay?: number;
    debounceDelay?: number;
  }

  const AOS: {
    init(settings?: AosOptions): void;
    refresh(initialize?: boolean): void;
    refreshHard(): void;
  };

  export default AOS;
}
