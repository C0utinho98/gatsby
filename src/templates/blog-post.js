import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import RecommendedPosts from '../components/RecommenedPosts';
import { MainContent, PostDate, PostDescription, PostHeader, PostTitle } from '../components/Post/styles';

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const { nextPost, previousPost } = pageContext;
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <PostHeader>
        <PostDate>{post.frontmatter.date}</PostDate>
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <PostDescription>{post.frontmatter.description}</PostDescription>
        <MainContent>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </MainContent>
      </PostHeader>
      <RecommendedPosts next={nextPost} previous={previousPost} />
    </Layout>
  );
};

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      }
      html
      timeToRead
    }
  }
`;

export default BlogPost;
