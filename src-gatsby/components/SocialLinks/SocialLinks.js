import React from 'react';
import { TwitterShareButton } from 'react-share';
import urljoin from 'url-join';
import config from '../../../data/SiteConfig';
import './SocialLinks.scss';

const SocialLinks = (props) => {
  const { postNode, postPath } = props;
  const post = postNode.frontmatter;
  const url = urljoin(config.siteUrl, config.pathPrefix, postPath);
  return (
    <div className="social-links">
      <span>If you found this useful:</span>
      <TwitterShareButton url={url} title={`${post.title} ✍️ @pniedri`}>
        Share on X
      </TwitterShareButton>
    </div>
  );
};

export default SocialLinks;
