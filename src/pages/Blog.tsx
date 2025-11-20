import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';
import { Calendar, User } from 'lucide-react';
import { slugify } from '../utils/slugify';

export default function Blog() {
  const { posts } = useBlog();

  return (
    <>
      <Helmet>
        <title>Blog | Bariti Tech Innovation</title>
        <meta name="description" content="Artigos sobre tecnologia, inovação, inteligência artificial e mercado corporativo." />
      </Helmet>

      <div className="bg-bariti-light min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl font-bold text-bariti-dark mb-4">Insights & Inovação</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Acompanhe as últimas tendências em tecnologia e negócios através da nossa curadoria de conteúdo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image_url} 
                    alt={post.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-xs text-bariti-gold font-semibold uppercase tracking-wider mb-2">
                    {post.category || 'Geral'}
                  </div>
                  <h2 className="font-serif text-xl font-bold text-bariti-dark mb-3 line-clamp-2">
                    <Link to={`/blog/${slugify(post.title)}`} className="hover:text-bariti-rust transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                    {post.excerpt || post.content.substring(0, 100) + '...'}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      {post.author || 'Bariti Tech'}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {new Date(post.created_at).toLocaleDateString('pt-BR')}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
