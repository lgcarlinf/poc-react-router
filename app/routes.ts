import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
    layout("routes/layout/Header.tsx",
       [
        index("routes/home.tsx"), 
        route("about", "routes/about.tsx"),
        ...prefix("contact", [
            index("routes/contact/index.tsx"),
            route("support", "routes/contact/support.tsx"),
            route("sales", "routes/contact/sales.tsx"),
        ]),
        ...prefix("team", [
            index("routes/team/index.tsx"),
            route("team/:id", "routes/team/number.tsx"),
        ])
       ]
    )
] satisfies RouteConfig;
