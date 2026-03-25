import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { BLOG_POSTS } from "@/lib/blogData";
import { BookOpen, Clock, ArrowRight, TrendingUp } from "lucide-react";

export default function Blog() {
  const categories = ["Comparisons", "Platform Guides", "Technical Data"];

  return (
    <Layout>
      <SEO
        title="Diagnostic Data & Workshop Software Blog | Auto Fix Data"
        description="The ultimate resource for independent workshops. Read our comparisons of AutoData, HaynesPro, ALLDATA, Mitchell1, and deep technical diagnostic guides."
        breadcrumb={[
          { name: "Workshop Blog", url: "https://autofixdata.net/blog" }
        ]}
      />

      {/* Hero */}
      <div className="bg-afd-navy py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-afd-blue/5 rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none"></div>
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <TrendingUp className="w-12 h-12 text-afd-yellow mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Workshop <span className="text-afd-yellow">Intelligence</span>
          </h1>
          <p className="text-xl text-afd-slate max-w-2xl mx-auto">
            Technical deep-dives, competitive software comparisons, and diagnostic guides designed to help independent garages scale.
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
                      key={post.id}
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
                            Read Post <ArrowRight className="w-4 h-4" />
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
          <h2 className="text-3xl font-black text-afd-navy mb-6">Tired of paying £150+ for legacy software?</h2>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">Access the interactive OEM data you just read about instantly. Start your trial with absolutely zero obligation.</p>
          <Link href="/free-trial" className="inline-block bg-afd-yellow text-black px-8 py-4 rounded-xl font-bold hover:bg-afd-navy hover:text-white transition-colors shadow-lg">
            Create Your Free Account
          </Link>
        </div>
      </section>

    </Layout>
  );
}
