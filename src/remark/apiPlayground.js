const { visit } = require("unist-util-visit");
const yaml = require("js-yaml");

module.exports = function apiPlaygroundRemark() {
  return (tree) => {
    visit(tree, "code", (node, index, parent) => {
      if (node.lang !== "api-playground") return;

      try {
        const config = yaml.load(node.value) || {};

        const props = Object.entries(config)
          .map(([key, value]) => {
            return `${key}={${JSON.stringify(value)}}`;
          })
          .join(" ");

        parent.children[index] = {
          type: "jsx",
          value: `<ApiPlayground ${props} />`,
        };
      } catch (err) {
        // 🔒 CONTRACT: never break build, never throw
        return;
      }
    });
  };
};
