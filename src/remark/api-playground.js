const yaml = require("js-yaml");

module.exports = function apiPlaygroundRemark() {
  return (tree) => {
    tree.children = tree.children.flatMap((node) => {
      if (node.type === "code" && node.lang === "api-playground") {
        const config = yaml.load(node.value);

        return [
          {
            type: "mdxJsxFlowElement",
            name: "ApiPlayground",
            attributes: Object.entries(config || {}).map(([key, value]) => ({
              type: "mdxJsxAttribute",
              name: key,
              value:
                typeof value === "string"
                  ? value
                  : {
                      type: "mdxJsxAttributeValueExpression",
                      value: JSON.stringify(value),
                    },
            })),
            children: [],
          },
        ];
      }
      return [node];
    });
  };
};
