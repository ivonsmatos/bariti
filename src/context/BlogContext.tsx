import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { supabase } from '../supabaseClient';
import { slugify } from '../utils/slugify';

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  image_url: string;
  created_at: string;
  // Optional fields for UI compatibility if not in DB
  excerpt?: string;
  author?: string;
  category?: string;
  tags?: string[];
}

interface BlogContextType {
  posts: BlogPost[];
  loading: boolean;
  addPost: (post: Omit<BlogPost, 'id' | 'created_at'>) => Promise<void>;
  updatePost: (id: string, post: Partial<Omit<BlogPost, 'id' | 'created_at'>>) => Promise<void>;
  deletePost: (id: string) => Promise<void>;
  getPostBySlug: (slug: string) => BlogPost | undefined;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};

export const BlogProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      if (data) {
        setPosts(data as BlogPost[]);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const addPost = async (post: Omit<BlogPost, 'id' | 'created_at'>) => {
    try {
      setLoading(true);
      const { error } = await supabase
        .from('posts')
        .insert([post]);

      if (error) throw error;
      
      await fetchPosts();
    } catch (error) {
      console.error('Error adding post:', error);
    } finally {
      setLoading(false);
    }
  };

  const updatePost = async (id: string, post: Partial<Omit<BlogPost, 'id' | 'created_at'>>) => {
    try {
      setLoading(true);
      const { error } = await supabase
        .from('posts')
        .update(post)
        .eq('id', id);

      if (error) throw error;

      await fetchPosts();
    } catch (error) {
      console.error('Error updating post:', error);
    } finally {
      setLoading(false);
    }
  };

  const deletePost = async (id: string) => {
    try {
      setLoading(true);
      const { error } = await supabase
        .from('posts')
        .delete()
        .eq('id', id);

      if (error) throw error;

      await fetchPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
    } finally {
      setLoading(false);
    }
  };

  const getPostBySlug = (slug: string) => {
    return posts.find((post) => slugify(post.title) === slug);
  };

  return (
    <BlogContext.Provider value={{ posts, loading, addPost, updatePost, deletePost, getPostBySlug }}>
      {children}
    </BlogContext.Provider>
  );
};
