import { getProjectContent } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
// Import your shadcn components here
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

export default function Home() {
   // Fetch the markdown data directly in the server component
   const projectData = getProjectContent();

   return (
      <main className="max-w-4xl mx-auto p-8 space-y-12">
         {/* Header Section */}
         <header className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">{projectData.title}</h1>
            <div className="flex items-center gap-4">
               <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                  Status: {projectData.status}
               </span>
               <a
                  href={projectData.github_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
               >
                  View on GitHub
               </a>
            </div>
         </header>

         {/* Main Markdown Content */}
         <section className="prose prose-slate max-w-none dark:prose-invert">
            <ReactMarkdown>{projectData.content}</ReactMarkdown>
         </section>

         {/* Referenced Papers Section */}
         <section>
            <h2 className="text-2xl font-semibold mb-6">Referenced Papers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {projectData.papers.map((paper, index) => (
                  <div key={index} className="border p-4 rounded-lg shadow-sm">
                     <h3 className="font-medium mb-2">{paper.title}</h3>
                     <a
                        href={paper.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-blue-600 hover:underline"
                     >
                        Read Paper &rarr;
                     </a>
                  </div>
               ))}
            </div>
         </section>
      </main>
   );
}