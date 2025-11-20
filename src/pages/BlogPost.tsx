import { Helmet } from 'react-helmet-async';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';
import { ArrowLeft, Calendar, User, Tag, Hash } from 'lucide-react';
import { slugify } from '../utils/slugify';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { getPostBySlug, posts } = useBlog();
  const navigate = useNavigate();

  const post = slug ? getPostBySlug(slug) : undefined;
  
  const relatedPosts = post 
    ? posts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3)
    : [];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bariti-light">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-bariti-dark mb-4">Post não encontrado</h2>
          <Link to="/blog" className="text-bariti-rust hover:underline">Voltar para o Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Bariti Tech Innovation</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <article className="bg-white min-h-screen pb-20">
        {/* Header Image */}
        <div className="w-full h-64 md:h-96 relative">
          <img 
            src={post.image_url} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <span className="inline-block px-3 py-1 bg-bariti-gold text-xs font-bold uppercase tracking-wider rounded mb-4">
                {post.category || 'Geral'}
              </span>
              <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center space-x-6 text-sm md:text-base">
                <div className="flex items-center">
                  <User size={18} className="mr-2" />
                  {post.author || 'Bariti Tech'}
                </div>
                <div className="flex items-center">
                  <Calendar size={18} className="mr-2" />
                  {new Date(post.created_at).toLocaleDateString('pt-BR')}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center text-gray-500 hover:text-bariti-rust mb-8 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Voltar
          </button>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="lead text-xl text-gray-600 mb-8 font-serif italic border-l-4 border-bariti-gold pl-4">
              {post.excerpt || post.content.substring(0, 100) + '...'}
            </p>
            <div className="whitespace-pre-wrap">
              {post.content}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center text-gray-500 mr-6">
                <Tag size={20} className="mr-2" />
                <span className="font-medium">Categoria:</span>
                <span className="ml-2 text-bariti-rust">{post.category || 'Geral'}</span>
              </div>
              
              {post.tags && post.tags.length > 0 && (
                <div className="flex items-center text-gray-500">
                  <Hash size={20} className="mr-2" />
                  <span className="font-medium mr-2">Tags:</span>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm hover:bg-gray-200 transition-colors">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h3 className="font-serif text-2xl font-bold text-bariti-dark mb-6">Posts Relacionados</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((related) => (
                  <Link key={related.id} to={`/blog/${slugify(related.title)}`} className="group">
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 h-full flex flex-col">
                      <div className="h-40 overflow-hidden">
                        <img 
                          src={related.image_url} 
                          alt={related.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4 flex-1 flex flex-col">
                        <span className="text-xs text-bariti-gold font-bold uppercase mb-2 block">
                          {related.category}
                        </span>
                        <h4 className="font-serif text-lg font-bold text-bariti-dark mb-2 group-hover:text-bariti-rust transition-colors line-clamp-2">
                          {related.title}
                        </h4>
                        <div className="mt-auto text-xs text-gray-500">
                          {new Date(related.created_at).toLocaleDateString('pt-BR')}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
