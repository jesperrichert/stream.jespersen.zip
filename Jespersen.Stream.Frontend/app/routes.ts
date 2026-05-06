import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
    index("routes/index.tsx"),
    route("/chatting", "routes/chatting.tsx"),
    route("/starting", "routes/starting.tsx"),
    route("/loading", "routes/loading.tsx"),
    route("/ending", "routes/ending.tsx")
] satisfies RouteConfig;
