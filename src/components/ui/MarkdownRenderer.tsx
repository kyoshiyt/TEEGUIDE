import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import clsx from 'clsx';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  return (
    <div className={clsx("prose prose-stone prose-lg max-w-none", className)}>
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({node, ...props}) => <h2 className="text-3xl md:text-4xl font-serif mt-12 mb-6 text-stone-900 tracking-tight" {...props} />,
          h3: ({node, ...props}) => <h3 className="text-2xl md:text-3xl font-serif mt-8 mb-4 text-stone-900 tracking-tight" {...props} />,
          p: ({node, ...props}) => <p className="mb-6 text-stone-700 leading-relaxed" {...props} />,
          ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-6 space-y-3 text-stone-700" {...props} />,
          ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-6 space-y-3 text-stone-700" {...props} />,
          li: ({node, ...props}) => <li className="leading-relaxed" {...props} />,
          strong: ({node, ...props}) => <strong className="font-bold text-stone-900" {...props} />,
          a: ({node, ...props}) => <a className="text-stone-900 font-semibold border-b border-stone-900 hover:text-stone-500 hover:border-stone-500 transition-colors" {...props} />,
          blockquote: ({node, ...props}) => <blockquote className="border-l border-stone-900 pl-6 italic text-stone-600 my-10 py-2" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
