import Play from "~/icons/Play";
import { cn } from "~/lib/utils";

type PlayButtonProps = {
  className?: string;
};
export default function PlayButton({ className }: PlayButtonProps) {
  return (
    <button
      className={cn(
        "aspect-square rounded-full bg-[#1ed760] p-3 transition-colors duration-300 ease-out hover:bg-[#1fdf64] active:bg-[#169c46]",
        className,
      )}
    >
      <Play className="aspect-square w-6" />
    </button>
  );
}
