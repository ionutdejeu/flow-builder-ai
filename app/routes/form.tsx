import type { Route } from "./+types/home";
import "../demo/node/form/index.css";
import { NodeForm } from "~/demo/node/form";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
 
export default function Form() {
  return <NodeForm />;
}
