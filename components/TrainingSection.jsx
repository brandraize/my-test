'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import apiService from '@/lib/api';

export default function TrainingSection({ lang = 'en' }) {
  const [trainings, setTrainings] = useState([]);
  const [loading, setLoading] = useState(true);
  const isRTL = lang === 'ar';

  useEffect(() => {
    const fetchTrainings = async () => {
      try {
        const response = await apiService.getTrainings();
        if (response.success) {
          setTrainings(response.data);
        }
      } catch (error) {
        console.error('Failed to fetch trainings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrainings();
  }, []);

  if (loading) {
    return (
      <section style={{ minHeight: '600px', background: '#fff', padding: '60px 20px' }}>
        <div className="container text-center">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={{ background: '#ffffff', padding: '80px 20px' }} id="training">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h2 style={{ 
            fontSize: 'clamp(2rem, 4vw, 2.5rem)', 
            fontWeight: 'bold', 
            color: '#065f46',
            marginBottom: '1rem'
          }}>
            {isRTL ? 'التدريب' : 'Training'}
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#6b7280', 
            maxWidth: '600px', 
            margin: '0 auto'
          }}>
            {isRTL 
              ? 'برامج تدريبية متخصصة لتطوير المهارات'
              : 'Specialized training programs for skill development'}
          </p>
        </motion.div>

        <div className="row g-4">
          {trainings.map((training, index) => (
            <motion.div
              key={training.id}
              className="col-12 col-md-6 col-lg-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div 
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: '15px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
              >
                {training.image && (
                  <div style={{ position: 'relative', height: '200px' }}>
                    <Image
                      src={training.image}
                      alt={training.name[lang] || training.name.en}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"                      unoptimized                    />
                  </div>
                )}
                
                <div className="card-body">
                  <h5 className="card-title mb-3" style={{ color: '#065f46', fontWeight: 'bold' }}>
                    {training.name[lang] || training.name.en}
                  </h5>
                  <p className="card-text text-muted" style={{ fontSize: '0.95rem' }}>
                    {(training.short_description[lang] || training.short_description.en)?.replace(/<[^>]*>/g, '')}
                  </p>
                  <Link href={`/${lang}/training/${training.slug}`}>
                    <button 
                      className="btn btn-outline-success mt-3"
                      style={{ borderRadius: '25px', width: '100%' }}
                    >
                      {isRTL ? 'التفاصيل' : 'View Details'}
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
