import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <SEO title="Page Not Found | Auto Fix Data" description="Page not found." />
      <div className="min-h-[60vh] flex items-center justify-center bg-afd-light px-6">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-afd-yellow mx-auto mb-6" />
          <h1 className="text-4xl font-extrabold text-afd-navy mb-4">Page Not Found</h1>
          <p className="text-afd-text mb-8">The page you are looking for does not exist or has been moved.</p>
          <Link href="/" className="bg-afd-yellow text-black px-8 py-3 rounded-xl font-bold hover:bg-afd-yellow-hover transition-colors">
            Return to Homepage
          </Link>
        </div>
      </div>
    </Layout>
  );
}
