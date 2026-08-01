import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface LocationData {
  id: string;
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  content: string;
}

export function getLocationIds() {
  const locationsDirectory = path.join(contentDirectory, 'locations');
  if (!fs.existsSync(locationsDirectory)) return [];
  const fileNames = fs.readdirSync(locationsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        city: fileName.replace(/\.mdx$/, ''),
      },
    };
  });
}

export async function getLocationData(id: string): Promise<LocationData | null> {
  const fullPath = path.join(contentDirectory, 'locations', `${id}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  
  return {
    id,
    content: matterResult.content,
    title: matterResult.data.title,
    description: matterResult.data.description,
    seoTitle: matterResult.data.seoTitle,
    seoDescription: matterResult.data.seoDescription,
  };
}
