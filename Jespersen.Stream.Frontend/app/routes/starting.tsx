import {PacManGhost} from "~/components/Starting/PacManGhost";
import {StartingComponent} from "~/components/Starting/Starting";

export default function Starting() {
  return <div className={"bg-[url(/assets/starting/background.png)] h-screen bg-cover bg-no-repeat"}>
    <PacManGhost></PacManGhost>
    <StartingComponent></StartingComponent>
  </div>;
}
