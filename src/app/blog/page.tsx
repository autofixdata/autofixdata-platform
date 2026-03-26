import type { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/blogData';
import { Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Diagnostic Data & Workshop Software Blog',
  description: 'The ultimate resource for independent workshops. Read our comparisons of AutoData, HaynesPro, ALLDATA, Mitchell1, and deep technical diagnostic guides.',
  alternates: { canonical: 'https://autofixdata.net/blog' },
};

const CATEGORIES = [...new Set(BLOG_POSTS.map(p => p.category))];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-afd-navy py-20 px-6 relative overflow-hidden dark-section border-b border-white/5">
        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <h1 className="text-5xl font-extrabold text-white mb-6">Workshop Knowledge Hub</h1>
          <p className="text-xl text-afd-slate max-w-2xl mx-auto">
            Data-driven comparisons, diagnostic guides, and workshop software reviews for professional mechanics.
          </p>
        </div>
      </div>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-[1200px] mx-auto space-y-20">
          {CATEGORIES.map((category) => {
            const posts = BLOG_POSTS.filter(p => p.category === category);
            if (posts.length === 0) return null;
            return (
              <div key={category}>
                <h2 className="text-3xl font-extrabold text-afd-navy mb-10">{category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`}
                      className="bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full shadow-sm">
                      <div className="p-8 flex flex-col flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-bold bg-afd-yellow/10 text-afd-navy px-3 py-1.5 rounded-full">{post.category}</span>
                        </div>
                        <h3 className="text-lg font-extrabold text-afd-navy mb-3 leading-snug group-hover:text-afd-blue transition-colors">{post.title}</h3>
                        <p className="text-gray-600 mb-8 text-sm leading-relaxed flex-1">{post.seoDescription}</p>
                        <div className="pt-6 border-t border-gray-100 flex items-center justify-between mt-auto">
                          <span className="flex items-center gap-2 text-xs text-gray-400 font-bold uppercase tracking-wider">
                            <Clock className="w-4 h-4" /> {post.readTime}
                          </span>
                          <span className="flex items-center gap-1 text-afd-blue text-sm font-bold group-hover:gap-2 transition-all">
                            Read <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
