import { visit } from 'unist-util-visit';

/**
 * Remark plugin to transform relative image paths to absolute URLs
 * Converts ../images/foo.jpg to /images/foo.jpg so they're served from public/
 */
export function remarkTransformImagePaths() {
  return function (tree) {
    visit(tree, 'image', (node) => {
      if (node.url && node.url.startsWith('../images/')) {
        node.url = node.url.replace('../images/', '/images/');
      }
    });
  };
}
