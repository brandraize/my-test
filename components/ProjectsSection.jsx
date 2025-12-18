'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import apiService from '@/lib/api';

export default function ProjectsSection({ lang = 'en', featured = false, limit = null }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const isRTL = lang === 'ar';

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = featured 
          ? await apiService.getFeaturedProjects()
          : await apiService.getProjects();
        
        if (response.success) {
          let projectsData = response.data;
          // Apply limit if specified (for homepage)
          if (limit && projectsData.length > limit) {
            projectsData = projectsData.slice(0, limit);
          }
          setProjects(projectsData);
        }
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [featured, limit]);

  if (loading) {
    return (
      <section style={{ minHeight: '600px', background: '#f7faf9', padding: '60px 20px' }}>
        <div className="container text-center">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={{ background: '#f7faf9', padding: '60px 20px' }} id="projects">
      <div className="container">
        {/* Only show heading on projects page, not on homepage featured slider */}
        {!featured && (
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
              {isRTL ? 'مشاريعنا' : 'Our Projects'}
            </h2>
            <p style={{ 
              fontSize: '1.1rem', 
              color: '#6b7280', 
              maxWidth: '600px', 
              margin: '0 auto'
            }}>
              {isRTL 
                ? 'اطلع على بعض من أعمالنا المتميزة'
                : 'Explore some of our distinguished work'}
            </p>
          </motion.div>
        )}

        {/* Slider for featured projects on homepage */}
        {featured ? (
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop={projects.length > 3}
            speed={600}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            dir={isRTL ? 'rtl' : 'ltr'}
            className="pb-5"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div 
                  className="card h-100 border-0 shadow-sm"
                  style={{
                    borderRadius: '15px',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {project.image && (
                    <div style={{ position: 'relative', height: '250px' }}>
                      <Image
                        src={project.image}
                        alt={project.name[lang] || project.name.en}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        unoptimized
                      />
                      {project.is_featured && (
                        <div 
                          className="position-absolute top-0 end-0 m-3 px-3 py-1"
                          style={{
                            background: '#10b981',
                            color: 'white',
                            borderRadius: '20px',
                            fontSize: '0.85rem',
                            fontWeight: 'bold'
                          }}
                        >
                          {isRTL ? 'مميز' : 'Featured'}
                        </div>
                      )}
                    </div>
                  )}
                  
                  <div className="card-body">
                    <h5 className="card-title mb-2" style={{ color: '#065f46', fontWeight: 'bold' }}>
                      {project.name[lang] || project.name.en}
                    </h5>
                    {project.project_date && (
                      <p className="text-muted mb-3" style={{ fontSize: '0.85rem' }}>
                        {new Date(project.project_date).toLocaleDateString(isRTL ? 'ar-SA' : 'en-US', {
                          year: 'numeric',
                          month: 'long'
                        })}
                      </p>
                    )}
                    <p className="card-text text-muted" style={{ fontSize: '0.95rem' }}>
                      {(project.description[lang] || project.description.en)?.replace(/<[^>]*>/g, '').substring(0, 120)}...
                    </p>
                    <Link href={`/${lang}/projects/${project.slug}`}>
                      <button 
                        className="btn btn-success mt-3"
                        style={{ borderRadius: '25px', width: '100%' }}
                      >
                        {isRTL ? 'عرض المشروع' : 'View Project'}
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          /* Grid layout for projects page */
          <div className="row g-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="col-12 col-md-6 col-lg-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
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
                  {project.image && (
                    <div style={{ position: 'relative', height: '250px' }}>
                      <Image
                        src={project.image}
                        alt={project.name[lang] || project.name.en}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        unoptimized
                      />
                      {project.is_featured && (
                        <div 
                          className="position-absolute top-0 end-0 m-3 px-3 py-1"
                          style={{
                            background: '#10b981',
                            color: 'white',
                            borderRadius: '20px',
                            fontSize: '0.85rem',
                            fontWeight: 'bold'
                          }}
                        >
                          {isRTL ? 'مميز' : 'Featured'}
                        </div>
                      )}
                    </div>
                  )}
                  
                  <div className="card-body">
                    <h5 className="card-title mb-2" style={{ color: '#065f46', fontWeight: 'bold' }}>
                      {project.name[lang] || project.name.en}
                    </h5>
                    {project.project_date && (
                      <p className="text-muted mb-3" style={{ fontSize: '0.85rem' }}>
                        {new Date(project.project_date).toLocaleDateString(isRTL ? 'ar-SA' : 'en-US', {
                          year: 'numeric',
                          month: 'long'
                        })}
                      </p>
                    )}
                    <p className="card-text text-muted" style={{ fontSize: '0.95rem' }}>
                      {(project.description[lang] || project.description.en)?.replace(/<[^>]*>/g, '').substring(0, 120)}...
                    </p>
                    <Link href={`/${lang}/projects/${project.slug}`}>
                      <button 
                        className="btn btn-success mt-3"
                        style={{ borderRadius: '25px', width: '100%' }}
                      >
                        {isRTL ? 'عرض المشروع' : 'View Project'}
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
