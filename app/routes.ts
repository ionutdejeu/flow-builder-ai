import { type RouteConfig, index,route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
  route("form", "routes/form.tsx"),
  route("drag", "routes/drag.tsx"),
] satisfies RouteConfig;