exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions;

	const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

	if(result.errors) {
		reporter.panicOnBuild("Unable to load MDX data from GraphQL", result.errors);
	}

	const projectPages = result.data.allMdx.nodes;

	projectPages.forEach(node => {
		createPage({
			path: `projects/${node.frontmatter.slug}`,
			// Path to MDX file for Webpack
			component: node.internal.contentFilePath
		});
	});
};