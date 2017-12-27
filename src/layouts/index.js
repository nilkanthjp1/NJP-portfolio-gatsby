import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Typekit from "react-typekit";

import Constants from "../stores/Constants";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "./index.scss";

const TemplateWrapper = ({ children, data }) => {
  console.log(data);
  return (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: "description", content: data.site.siteMetadata.description }
        ]}
      />
      <Header phases={Constants.phases} />
      <Typekit kitId="tzm4nvq" />
      {children()}
      <Footer home={true} />
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object
};

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default TemplateWrapper;
