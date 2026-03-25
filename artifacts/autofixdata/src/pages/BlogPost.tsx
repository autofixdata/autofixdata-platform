import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { useRoute, Link } from "wouter";
import { getBlogPostBySlug } from "@/lib/blogData";
import { Calendar, Clock, ArrowLeft, ArrowRight, FileText, CheckCircle2 } from "lucide-react";
import NotFound from "./not-found";

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:slug");
  const slug = params?.slug;
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <NotFound />;
  }

  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.seoTitle,
    "description": post.seoDescription,
    "author": { "@type": "Organization", "name": post.author },
    "datePublished": post.publishedAt,
    "publisher": { "@type": "Organization", "name": "Auto Fix Data" }
  });

  return (
    <Layout>
      <SEO
        title={post.seoTitle}
        description={post.seoDescription}
        schema={schema}
        breadcrumb={[
          { name: "Blog", url: "https://autofixdata.net/blog" },
          { name: post.title, url: `https://autofixdata.net/blog/${post.slug}` }
        ]}
      />

      <div className="bg-afd-navy border-b border-black/20 pt-10 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/diagnostics-abstract.png')] opacity-5 mix-blend-overlay"></div>
        <div className="max-w-[1000px] mx-auto relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-afd-yellow hover:text-white transition-colors text-sm font-bold tracking-wider mb-8 uppercase">
            <ArrowLeft className="w-4 h-4" /> Back to Intelligence Index
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-afd-slate uppercase tracking-widest mb-6">
            <span className="bg-afd-blue/20 text-afd-blue px-3 py-1.5 rounded-md border border-afd-blue/30">{post.category}</span>
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-gray-500" /> {post.publishedAt}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-gray-500" /> {post.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 border-t border-white/10 pt-8 mt-4">
            <div className="w-12 h-12 bg-afd-yellow rounded-xl flex items-center justify-center text-black font-black text-lg">
              AF
            </div>
            <div>
              <div className="text-white font-bold">{post.author}</div>
              <div className="text-afd-slate text-xs uppercase tracking-wider font-semibold mt-1">Diagnostic Intelligence Group</div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-afd-light px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 xl:grid-cols-3 gap-12 items-start">

          {/* Main Article Content */}
          <article className="xl:col-span-2">
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 md:p-14 mb-10">
              <div
                className="prose prose-lg max-w-none text-gray-700
                           prose-headings:text-afd-navy prose-headings:font-extrabold
                           prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-gray-100
                           prose-h3:text-2xl prose-h3:mt-8
                           prose-p:leading-relaxed prose-p:mb-6 prose-p:font-medium
                           prose-a:text-afd-blue hover:prose-a:text-afd-navy prose-a:font-bold prose-a:underline prose-a:decoration-afd-yellow prose-a:decoration-2 prose-a:underline-offset-2
                           prose-ul:list-none prose-ul:pl-0 prose-li:mb-3 prose-li:flex prose-li:items-start prose-li:gap-3
                           prose-li:before:content-[''] prose-li:before:w-2 prose-li:before:h-2 prose-li:before:bg-afd-yellow prose-li:before:rounded-full prose-li:before:mt-2.5 prose-li:before:shrink-0
                           prose-strong:text-afd-navy prose-strong:font-black"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Inline CTA Hook */}
            <div className="bg-afd-navy rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden border-b-4 border-afd-yellow">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <h3 className="text-3xl font-black mb-4 relative z-10">Ready to Upgrade Your Data?</h3>
              <p className="text-lg text-afd-slate mb-8 max-w-2xl mx-auto relative z-10">Stop relying on fragmented legacy software or outdated manuals. Access verified OEM coverage and colour wiring directly in the cloud.</p>
              <Link href="/free-trial" className="inline-flex items-center gap-3 bg-afd-yellow text-black px-8 py-4 rounded-xl font-black text-lg hover:bg-white transition-all shadow-xl shadow-afd-yellow/20 relative z-10">
                Start Your Free Trial Now <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </article>

          {/* CRM Lead Capture Sidebar - Sticky */}
          <aside className="xl:col-span-1 sticky top-24">
            <div className="bg-white rounded-3xl border-2 border-gray-100 shadow-2xl overflow-hidden relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-afd-yellow"></div>
              <div className="bg-afd-navy p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-afd-blue/20 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>
                <FileText className="w-12 h-12 text-white mx-auto mb-4 relative z-10" />
                <h3 className="text-2xl font-black text-white mb-2 relative z-10">Access The Platform</h3>
                <p className="text-afd-yellow text-xs font-bold uppercase tracking-widest relative z-10">Immediate Direct Access</p>
              </div>

              <div className="p-8 bg-gray-50/80">
                <ul className="space-y-4 mb-8">
                  {[
                    "Pin-to-pin wiring diagrams",
                    "Real-World Identifix Solutions",
                    "Technical Service Bulletins",
                    "No enterprise contracts required"
                  ].map(benefit => (
                    <li key={benefit} className="flex items-center gap-3 text-sm text-afd-navy font-bold">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <div className="w-full mx-auto overflow-hidden bg-white rounded-xl border border-gray-200 shadow-inner p-1">
                  <iframe
                    src="https://link.autodatalogin.com/widget/form/4tQbweI60VyYW02nlcVf"
                    style={{ width: "100%", height: "100%", border: "none", borderRadius: "12px" }}
                    className="min-h-[550px] w-full"
                    title="Start Free Trial Form"
                  />
                </div>
                <div className="mt-4 text-center">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">No Credit Card Required</span>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </section>
    </Layout>
  );
}
