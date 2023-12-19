module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://strapi-demo-flame.vercel.app",
      apiToken: "9BF5N3SOyth9BHthew7Fb15b",
      appFilter: "your-app-name-on-vercel",
      teamFilter: "your-team-id-on-vercel",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});