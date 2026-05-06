import type {Route} from "../../.react-router/types/app/routes/+types/";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "stream.jespersen.zip" },
    { name: "description", content: "Public Stream Assets for Jesper" },
    {  }
  ];
}

export default function Index() {
  return <div>
    <div className={"min-h-min flex justify-center items-center"}>stream.jespersen.zip</div>
  </div>;
}
