
import React, { useState } from 'react';
import { submitLead } from '../supabaseService';

export const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const nombre = formData.get('nombre') as string;
    const email = formData.get('email') as string;
    const idea = formData.get('idea') as string;

    try {
      await submitLead(nombre, email, idea);
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setError("Error al enviar. Verifica tu conexión o configuración de Supabase.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center p-12 bg-green-50 dark:bg-green-900/20 rounded-3xl border border-green-200 dark:border-green-800">
        <span className="material-symbols-outlined text-6xl text-green-500 mb-4">check_circle</span>
        <h3 className="text-2xl font-bold mb-2">¡Recibido!</h3>
        <p className="text-gray-600 dark:text-gray-400">Te contactaré muy pronto para hablar de tu idea.</p>
        <button 
          onClick={() => setSuccess(false)}
          className="mt-6 text-primary font-bold hover:underline"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label className="text-sm font-bold ml-1 text-gray-700 dark:text-gray-300" htmlFor="nombre">Nombre</label>
        <input required name="nombre" className="w-full px-5 py-4 rounded-xl text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-900 focus:bg-white dark:focus:bg-gray-950 border-none outline-none ring-1 ring-gray-200 dark:ring-gray-800 focus:ring-2 focus:ring-primary" id="nombre" placeholder="Tu nombre" type="text"/>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-bold ml-1 text-gray-700 dark:text-gray-300" htmlFor="email">Email</label>
        <input required name="email" className="w-full px-5 py-4 rounded-xl text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-900 focus:bg-white dark:focus:bg-gray-950 border-none outline-none ring-1 ring-gray-200 dark:ring-gray-800 focus:ring-2 focus:ring-primary" id="email" placeholder="nombre@ejemplo.com" type="email"/>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-bold ml-1 text-gray-700 dark:text-gray-300" htmlFor="mensaje">¿Cuál es tu idea?</label>
        <textarea required name="idea" className="w-full px-5 py-4 rounded-xl text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-900 focus:bg-white dark:focus:bg-gray-950 border-none outline-none ring-1 ring-gray-200 dark:ring-gray-800 focus:ring-2 focus:ring-primary resize-none" id="mensaje" placeholder="Cuéntame sobre tu idea..." rows={4}></textarea>
      </div>
      {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
      <button 
        disabled={loading}
        className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:bg-primary/90 transition-all flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-50"
      >
        {loading ? 'Enviando...' : 'Enviar Mensaje'}
        {!loading && <span className="material-symbols-outlined">send</span>}
      </button>
    </form>
  );
};
