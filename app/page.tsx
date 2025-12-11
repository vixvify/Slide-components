import Largeslide from "./largeslide/page";
import Minislide from "./minislide/page";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Largeslide />
      <Minislide />
    </div>
  );
}
