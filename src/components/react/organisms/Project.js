import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Navbar from "../molecules/Navbar";
import "./Project.css";
import { graphql, useStaticQuery } from "gatsby";

/**
 * Creates the basic layout for the project page
 * @param {Object} props - All props to pass down
 * @param {boolean} [props.enableNav = true] - Whether to create a duplicate navbar. Disable for embedded pages
 * @param {React.Children} props.children - Project information
 * @constructor
 */
export default function Project(props) {
	const {
		enableNav = true,
		pageContext,  // Passed down by MDX
		children
	} = props;

	const data = useStaticQuery(graphql`
		query ProjectQuery {
		  allFile(filter: {relativeDirectory: {eq: "repositories"}}) {
			edges {
			  node {
				publicURL
				relativePath
				id
				name
				childImageSharp {
				  gatsbyImageData(
					placeholder: TRACED_SVG
					tracedSVGOptions: {}
					webpOptions: {quality: 25}
					formats: [AUTO, WEBP]
					breakpoints: [100, 150, 200, 250, 300, 400, 600, 800, 960, 1280, 1920]
					sizes: "(min-width: 1275px) 50vw, (min-width: 667px) 66vw, (min-width: 660px) 100vw, 100vw"
				  )
				}
			  }
			}
		  }
		}
	`);

	console.log(data);

	return (
		<MDXProvider
			components={{
				// h1: props => <h1 {...props} style={{border:"10px solid green"}}>{props.children}</h1>,
				// h2: props => <h2 {...props} style={{border:"10px solid green"}}>{props.children}</h2>,
				// h3: props => <h3 {...props} style={{border:"10px solid green"}}>{props.children}</h3>,
				// h4: props => <h4 {...props} style={{border:"10px solid green"}}>{props.children}</h4>,
				// h5: props => <h5 {...props} style={{border:"10px solid green"}}>{props.children}</h5>
			}}
		>
			<article className="project-zone">
				{enableNav && <Navbar/>}
				<ProjectHeader name={pageContext.frontmatter.title}/>
				<ProjectContent>
					{children}
				</ProjectContent>
			</article>
		</MDXProvider>
	);
}

export function ProjectHeader({ name }) {
	return (
		<div className="project-header">
			<h1 className="project-title">
				{name}
			</h1>
		</div>
	);
}

export function ProjectContent({ children }) {
	return (
		<div className="project-content-box">
			<div className="project-content">
				{children}
			</div>
		</div>
	);
}