import type { Route } from "./+types/home";
import "../demo/node/form/index.css";
import { Dragdrop } from "~/demo/dragdrop";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
 
export default function Form() {
  return <Dragdrop />;
}
