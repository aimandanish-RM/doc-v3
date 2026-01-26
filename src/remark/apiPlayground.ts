import yaml from "js-yaml";

export default function apiPlaygroundRemark() {
  return (tree: any) => {
    tree.children = tree.children.flatMap((node: any) => {
      if (node.type === "code" && node.lang === "api-playground") {
        const config = yaml.load(node.value) as any;

        return [
          {
            type: "mdxJsxFlowElement",
            name: "ApiPlayground",
            attributes: Object.entries(config).map(([key, value]) => ({
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
}
