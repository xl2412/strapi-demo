module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_wbn5vw84ikGlL34Tued4DUYkZTzJ",
      apiToken: "8ab6f316a85414071a78a2e726bef23b9962306779dfe4bb90447055e48d3e65ff5b7dd9357ac4ca1c5fda8ed84687588c2f66c238f348692d827ffcc5400a267639838c5ae276c1f1309c5ca1c744534928d251ab42535baee27b49135953404dc9090f8d3f912e2e2fea7002e12f69914ca7fe42a7569fc903a80b656c1734",
      appFilter: "strapi-demo",
      teamFilter: "your-team-id-on-vercel",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});