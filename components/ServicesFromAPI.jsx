'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import apiService from '@/lib/api';

export default function ServicesSection({ lang = 'en' }) {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const isRTL = lang === 'ar';

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await apiService.getServices();
        if (response.success) {
          setServices(response.data);
        }
      } catch (error) {
        console.error('Failed to fetch services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <section style={{ minHeight: '820px', background: '#f7faf9', padding: '60px 20px' }}>
        <div className="container text-center">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={{ background: '#f0fdf4', padding: '80px 20px' }} id="services">
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
            {isRTL ? 'خدماتنا' : 'Our Services'}
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#6b7280', 
            maxWidth: '600px', 
            margin: '0 auto'
          }}>
            {isRTL 
              ? 'نقدم مجموعة شاملة من الخدمات المتخصصة'
              : 'We offer a comprehensive range of specialized services'}
          </p>
        </motion.div>

        <div className="row g-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="col-12 col-md-6 col-lg-3"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div 
                className="card h-100 border-0 shadow-sm hover-shadow-lg"
                style={{
                  borderRadius: '15px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
              >
                {service.icon && (
                  <div className="text-center pt-4">
                    <Image
                      src={service.icon}
                      alt={service.name[lang] || service.name.en}
                      width={80}
                      height={80}
                      className="object-contain"
                      style={{ filter: 'drop-shadow(0 4px 6px rgba(16, 185, 129, 0.3))' }}
                      unoptimized
                    />
                  </div>
                )}
                
                <div className="card-body text-center">
                  <h5 className="card-title mb-3" style={{ color: '#065f46', fontWeight: 'bold' }}>
                    {service.name[lang] || service.name.en}
                  </h5>
                  <p className="card-text text-muted" style={{ fontSize: '0.95rem' }}>
                    {(service.short_description[lang] || service.short_description.en)?.replace(/<[^>]*>/g, '')}
                  </p>
                  <Link href={`/${lang}/service/${service.slug}`}>
                    <button 
                      className="btn btn-success mt-3"
                      style={{ borderRadius: '25px' }}
                    >
                      {isRTL ? 'اعرف المزيد' : 'Learn More'}
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
