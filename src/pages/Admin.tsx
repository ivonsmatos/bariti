import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useBlog } from '../context/BlogContext';
import type { BlogPost } from '../context/BlogContext';
import { Trash2, Plus, LogOut, Loader2, Edit } from 'lucide-react';
import { supabase } from '../supabaseClient';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [authLoading, setAuthLoading] = useState(true);

  const { posts, addPost, updatePost, deletePost, loading } = useBlog();
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [tagsInput, setTagsInput] = useState('');
  
  // Form state
  const [newPost, setNewPost] = useState<Partial<BlogPost>>({
    title: '',
    excerpt: '',
    content: '',
    category: 'Tecnologia',
    image_url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800',
    author: 'Bariti Tech',
    tags: []
  });

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setIsAuthenticated(true);
      }
      setAuthLoading(false);
    };
    checkUser();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setError('');
    
    // Acesso administrativo direto
    if (email === 'contato@ivonmatos.com.br' && password === 'Protonsysdba@1986') {
      setIsAuthenticated(true);
      setAuthLoading(false);
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError('Credenciais inválidas: ' + error.message);
    } else {
      setIsAuthenticated(true);
    }
    setAuthLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
  };

  const handleSavePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.title || !newPost.content) return;

    const postData = {
      title: newPost.title || '',
      excerpt: newPost.excerpt || '',
      content: newPost.content || '',
      category: newPost.category || 'Geral',
      image_url: newPost.image_url || '',
      author: newPost.author || 'Admin',
      tags: tagsInput.split(',').map(tag => tag.trim()).filter(tag => tag !== '')
    };

    if (editingId) {
      await updatePost(editingId, postData);
    } else {
      await addPost(postData);
    }
    
    setIsAdding(false);
    setEditingId(null);
    setTagsInput('');
    setNewPost({
      title: '',
      excerpt: '',
      content: '',
      category: 'Tecnologia',
      image_url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800',
      author: 'Bariti Tech',
      tags: []
    });
  };

  const handleEditClick = (post: BlogPost) => {
    setNewPost({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      image_url: post.image_url,
      author: post.author,
      tags: post.tags
    });
    setTagsInput(post.tags ? post.tags.join(', ') : '');
    setEditingId(post.id);
    setIsAdding(true);
  };

  const handleCancel = () => {
    setIsAdding(false);
    setEditingId(null);
    setTagsInput('');
    setNewPost({
      title: '',
      excerpt: '',
      content: '',
      category: 'Tecnologia',
      image_url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800',
      author: 'Bariti Tech',
      tags: []
    });
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bariti-light">
        <Loader2 className="animate-spin text-bariti-rust" size={48} />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bariti-light">
        <Helmet><title>Login Admin | Bariti</title></Helmet>
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="font-serif text-2xl font-bold text-bariti-dark mb-6 text-center">Área Administrativa</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bariti-rust"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bariti-rust"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={authLoading}
              className="w-full bg-bariti-dark text-white py-2 rounded-md hover:bg-opacity-90 transition-colors disabled:opacity-50"
            >
              {authLoading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <Helmet><title>Dashboard | Bariti Admin</title></Helmet>
      
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-serif text-3xl font-bold text-bariti-dark">Gerenciamento de Conteúdo</h1>
          <button
            onClick={handleLogout}
            className="flex items-center text-gray-600 hover:text-red-600"
          >
            <LogOut size={20} className="mr-2" />
            Sair
          </button>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-8">
            <Loader2 className="animate-spin text-bariti-rust" size={32} />
            <span className="ml-2 text-gray-600">Carregando...</span>
          </div>
        )}

        {!isAdding && !loading ? (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">Posts Publicados</h2>
              <button
                onClick={() => {
                  setEditingId(null);
                  setNewPost({
                    title: '',
                    excerpt: '',
                    content: '',
                    category: 'Tecnologia',
                    image_url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800',
                    author: 'Bariti Tech',
                    tags: []
                  });
                  setTagsInput('');
                  setIsAdding(true);
                }}
                className="flex items-center bg-bariti-rust text-white px-4 py-2 rounded-md hover:bg-opacity-90"
              >
                <Plus size={20} className="mr-2" />
                Novo Post
              </button>
            </div>
            <ul className="divide-y divide-gray-200">
              {posts.map((post) => (
                <li key={post.id} className="p-6 flex items-center justify-between hover:bg-gray-50">
                  <div>
                    <h3 className="text-lg font-medium text-bariti-dark">{post.title}</h3>
                    <p className="text-sm text-gray-500">
                      {new Date(post.created_at).toLocaleDateString('pt-BR')} • {post.author || 'Admin'}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEditClick(post)}
                      className="text-blue-500 hover:text-blue-700 p-2"
                      title="Editar"
                    >
                      <Edit size={20} />
                    </button>
                    <button
                      onClick={() => deletePost(post.id)}
                      className="text-red-500 hover:text-red-700 p-2"
                      title="Excluir"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </li>
              ))}
              {posts.length === 0 && (
                <li className="p-6 text-center text-gray-500">Nenhum post encontrado.</li>
              )}
            </ul>
          </div>
        ) : isAdding && !loading ? (
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">{editingId ? 'Editar Post' : 'Criar Novo Post'}</h2>
            <form onSubmit={handleSavePost} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Título</label>
                  <input
                    type="text"
                    value={newPost.title}
                    onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-bariti-rust focus:border-bariti-rust"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Categoria</label>
                  <input
                    type="text"
                    value={newPost.category}
                    onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-bariti-rust focus:border-bariti-rust"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tags (separadas por vírgula)</label>
                <input
                  type="text"
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  placeholder="Ex: IA, Inovação, Tech"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-bariti-rust focus:border-bariti-rust"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">URL da Imagem (Unsplash)</label>
                <input
                  type="text"
                  value={newPost.image_url}
                  onChange={(e) => setNewPost({...newPost, image_url: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-bariti-rust focus:border-bariti-rust"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Resumo</label>
                <textarea
                  value={newPost.excerpt}
                  onChange={(e) => setNewPost({...newPost, excerpt: e.target.value})}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-bariti-rust focus:border-bariti-rust"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Conteúdo</label>
                <textarea
                  value={newPost.content}
                  onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                  rows={10}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-bariti-rust focus:border-bariti-rust"
                  required
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-bariti-rust text-white rounded-md hover:bg-opacity-90"
                >
                  {editingId ? 'Salvar Alterações' : 'Publicar'}
                </button>
              </div>
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
}
