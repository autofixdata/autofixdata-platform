import type { Metadata } from 'next';
import Link from '@/components/LocalizedLink';
import { BLOG_POSTS } from "@/lib/blogData";
import { BookOpen, Clock, ArrowRight, TrendingUp } from "lucide-react";
import { getDictionary } from '@/dictionaries/getDictionary';

const LANGS = ['en', 'fr', 'es', 'de', 'it', 'ar', 'he'];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);
  return {
    title: dict.blog.meta.title,
    description: dict.blog.meta.description,
    alternates: {
      canonical: `https://autofixdata.net/${lang}/blog`,
      languages: Object.fromEntries(LANGS.map(l => [l, `https://autofixdata.net/${l}/blog`])),
    },
  };
}

export default async function BlogIndexPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);
  const d = dict.blog;
  const categories = ["Comparisons", "Platform Guides", "Technical Data"];

  return (
    <>
      <div className="bg-afd-navy py-20 px-6 relative overflow-hidden dark-section border-b border-white/10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-afd-blue/5 rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none"></div>
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <TrendingUp className="w-12 h-12 text-afd-yellow mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            {d.hero.heading} <span className="text-afd-yellow">{d.hero.headingHighlight}</span>
          </h1>
          <p className="text-xl text-afd-slate max-w-2xl mx-auto">
            {d.hero.subheading}
          </p>
        </div>
      </div>

      <section className="py-20 bg-afd-light px-6">
        <div className="max-w-[1200px] mx-auto space-y-24">
          {categories.map((category) => {
            const posts = BLOG_POSTS.filter(p => p.category === category);
            if (posts.length === 0) return null;

            return (
              <div key={category}>
                <h2 className="text-3xl font-extrabold text-afd-navy mb-10 flex items-center gap-4">
                  <span className="bg-afd-yellow w-2 h-8 rounded-full inline-block"></span>
                  {category}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full shadow-sm"
                    >
                      <div className="p-8 flex flex-col flex-1">
                        <div className="flex items-center gap-2 text-xs font-black text-afd-blue uppercase tracking-widest mb-4 bg-afd-blue/10 w-fit px-3 py-1 rounded-md">
                          <BookOpen className="w-4 h-4" />
                          {post.category}
                        </div>
                        <h3 className="text-2xl font-extrabold text-afd-navy mb-4 group-hover:text-afd-blue transition-colors leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-8 text-sm leading-relaxed flex-1 font-medium">
                          {post.seoDescription}
                        </p>

                        <div className="pt-6 border-t border-gray-100 flex items-center justify-between mt-auto">
                          <div className="flex items-center gap-2 text-xs text-gray-400 font-bold uppercase tracking-wider">
                            <Clock className="w-4 h-4" /> {post.readTime}
                          </div>
                          <span className="text-afd-navy font-black text-sm flex items-center gap-1 group-hover:gap-2 transition-all underline decoration-afd-yellow decoration-2 underline-offset-4">
                            {d.readPost} <ArrowRight className="w-4 h-4" />
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

      {/* Bottom CTA Hook */}
      <section className="bg-white py-20 px-6 border-t border-gray-100 text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl font-black text-afd-navy mb-6">{d.cta.heading}</h2>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">{d.cta.subheading}</p>
          <Link href="/free-trial" className="inline-block bg-afd-yellow text-black px-8 py-4 rounded-xl font-bold hover:bg-afd-navy hover:text-white transition-colors shadow-lg">
            {d.cta.button}
          </Link>
        </div>
      </section>
    </>
  );
}
