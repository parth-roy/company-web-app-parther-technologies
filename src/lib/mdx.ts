import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface CollectionData {
  id: string;
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  content: string;
  [key: string]: any;
}

export function getCollectionIds(collection: string) {
  const collectionDir = path.join(contentDirectory, collection);
  if (!fs.existsSync(collectionDir)) return [];
  const fileNames = fs.readdirSync(collectionDir);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.mdx$/, ''),
      },
    };
  });
}

export async function getCollectionData(collection: string, slug: string): Promise<CollectionData | null> {
  const fullPath = path.join(contentDirectory, collection, `${slug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  
  return {
    id: slug,
    content: matterResult.content,
    title: matterResult.data.title,
    description: matterResult.data.description,
    seoTitle: matterResult.data.seoTitle,
    seoDescription: matterResult.data.seoDescription,
    ...matterResult.data
  };
}

// Backward compatibility for locations (which used 'city' as param)
export function getLocationIds() {
  const ids = getCollectionIds('locations');
  return ids.map(id => ({ params: { city: id.params.slug } }));
}

export async function getLocationData(city: string) {
  return getCollectionData('locations', city);
}
