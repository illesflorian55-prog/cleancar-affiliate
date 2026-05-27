import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const guidesDirectory = path.join(process.cwd(), 'src/content/guides');

export type GuideData = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image: string;
  category: string;
  content?: string;
};

export function getGuideSlugs() {
  if (!fs.existsSync(guidesDirectory)) {
    return [];
  }
  return fs.readdirSync(guidesDirectory).filter(file => file.endsWith('.md'));
}

export function getGuideBySlug(slug: string): GuideData | null {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(guidesDirectory, `${realSlug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    title: data.title,
    description: data.description,
    date: data.date,
    author: data.author,
    image: data.image,
    category: data.category,
    content: content,
  };
}

export function getAllGuides(): GuideData[] {
  const slugs = getGuideSlugs();
  const guides = slugs
    .map((slug) => getGuideBySlug(slug))
    .filter((guide): guide is GuideData => guide !== null)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
  
  return guides;
}
