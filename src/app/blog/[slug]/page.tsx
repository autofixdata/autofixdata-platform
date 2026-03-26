import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/blogData';
import { Clock, ArrowRight } from 'lucide-react';

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      type: 'article',
      publishedTime: post.publishedAt,
      images: [{ url: '/images/diagnostics-abstract.png', width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `https://autofixdata.net/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const schema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.seoDescription,
    datePublished: post.publishedAt,
    author: { '@type': 'Organization', name: 'Auto Fix Data' },
    publisher: {
      '@type': 'Organization',
      name: 'Auto Fix Data',
      logo: { '@type': 'ImageObject', url: 'https://assets.cdn.filesafe.space/Ojp9CgccP9bDnBtQ25kU/media/678a6476a12015eea3a7c3b1.png' }
    },
    image: 'https://autofixdata.net/images/diagnostics-abstract.png',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://autofixdata.net/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://autofixdata.net/blog' },
        { '@type': 'ListItem', position: 3, name: post.title, item: `https://autofixdata.net/blog/${post.slug}` },
      ],
    },
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />

      {/* Hero */}
      <div className="bg-afd-navy py-16 px-6 dark-section border-b border-white/10">
        <div className="max-w-[900px] mx-auto">
          <nav className="flex items-center gap-2 text-sm text-afd-slate mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <ArrowRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <ArrowRight className="w-3 h-3" />
            <span className="text-white font-medium line-clamp-1">{post.title}</span>
          </nav>
          <span className="inline-block bg-afd-yellow/10 border border-afd-yellow/30 text-afd-yellow text-xs font-bold px-3 py-1 rounded-full mb-4">{post.category}</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-4 text-afd-slate text-sm">
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
            <span>·</span>
            <span>{post.publishedAt}</span>
            <span>·</span>
            <span>{post.author}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[900px] mx-auto px-6 py-16">
        <div
          className="prose prose-lg max-w-none prose-headings:text-afd-navy prose-a:text-afd-blue prose-a:no-underline hover:prose-a:text-afd-navy"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </>
  );
}
