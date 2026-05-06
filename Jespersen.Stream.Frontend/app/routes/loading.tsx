import {Item, ItemActions, ItemContent, ItemMedia, ItemTitle} from "~/components/ui/item";

export default function Loading() {
  return <div className={"bg-[url(/assets/loading/background.gif)] h-screen flex bg-no-repeat bg-cover"}>
    <div className={"absolute bottom-20 ml-50 inline-flex"}>
      <Item>
        <ItemMedia>
        <span>
            <img
                alt={"404"}
                src={"/assets/loading/icons/youtube.png"}
                width={50}
                height={50}
            />
        </span>
        </ItemMedia>
        <ItemContent>
          <ItemTitle className={"text-lg"}>| @jespersen.mp4</ItemTitle>
        </ItemContent>
      </Item>
      <Item>
        <ItemMedia>
        <span>
            <img
                alt={"404"}
                src={"/assets/loading/icons/instagram.png"}
                width={50}
                height={50}
            />
        </span>
        </ItemMedia>
        <ItemContent>
          <ItemTitle className={"text-lg"}>| @jespersen.png</ItemTitle>
        </ItemContent>
      </Item>
      <Item>
        <ItemMedia>
        <span>
            <img
                alt={"404"}
                src={"/assets/loading/icons/tik-tok.png"}
                width={50}
                height={50}
            />
        </span>
        </ItemMedia>
        <ItemContent>
          <ItemTitle className={"text-lg"}>| @jespersen.jpg</ItemTitle>
        </ItemContent>
      </Item>
    </div>
  </div>;
}
