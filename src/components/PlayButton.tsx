import Play from "~/icons/Play";
import { cn } from "~/lib/utils";

type PlayButtonProps = {
  className?: string;
};
export default function PlayButton({ className }: PlayButtonProps) {
  return (
    <button
      className={cn(
        "aspect-square rounded-full bg-primary p-3 transition-colors duration-300 ease-out hover:bg-primary-hover active:bg-primary-active",
        className,
      )}
    >
      <Play className="aspect-square w-6" />
    </button>
  );
}
