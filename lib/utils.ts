import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs))
}
// Define the TypeScript interface for your frontmatter
export interface ProjectContent {
   title: string;
   github_url: string;
   status: string;
   papers: {
      title: string;
      url: string;
   }[];
   content: string; // The main markdown body
}

export function getProjectContent(): ProjectContent {
   // 1. Define the path to your markdown file
   const filePath = path.join(process.cwd(), 'content', 'content.md');

   // 2. Read the file synchronously (safe for static export)
   const fileContents = fs.readFileSync(filePath, 'utf8');

   // 3. Parse the frontmatter and the body
   const { data, content } = matter(fileContents);

   // 4. Return the typed object
   return {
      title: data.title,
      github_url: data.github_url,
      status: data.status,
      papers: data.papers || [],
      content: content,
   };
}