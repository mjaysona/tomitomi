interface Article {
  title?: string,
  slug: string,
  pubDate: Date,
  tags: string[],
  excerpt?: string,
  featured?: boolean,
};

interface ArticlesMarkdownData {
  frontmatter: Article,
};

interface Articles {
  tag?: string | number,
  articles: ArticlesMarkdownData[],
};

export type {
  Article,
  ArticlesMarkdownData,
  Articles,
};