import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/global.css';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Testimonials() {
  return (
    <div style={{ padding: '60px', textAlign: 'center' }}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        speed={1000}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div style={{ padding: '60px', borderRadius: '10px', textAlign: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem', marginBottom: '1rem' }}>
              <p style={{ fontSize: '20px', color: '#333', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
                "Tienen una metodología maravillosa que te permite desde cero poder emprender,
                van a tener a mentores a personas que van a facilitar temas y que van a ser de mucha mucha de mucha ayuda.
                Hemos aprendido muchas cosas como hacer entrevistas nunca había hecho entrevistas a mi comunidad
                y ha sido muy bonito, una bonita experiencia para conocerlas y saber qué es lo que necesitan."
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
              <img src="/images/testimonials/1.png" alt="Kimbherly Cruz" style={{ borderRadius: '50%', width: '50px', height: '50px' }} />
              <div style={{ textAlign: 'center' }}>
                <h4 style={{ margin: '1rem', fontSize: '16px', fontWeight: 'bold' }}>Kimbherly Cruz</h4>
                <p style={{ margin: 0, fontSize: '14px', color: '#777' }}>CEO Soy Mujer Divina - Programa Preincubación 4G</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={{ padding: '60px', borderRadius: '10px', textAlign: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem', marginBottom: '1rem' }}>
              <p style={{ fontSize: '20px', color: '#333', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
                "Destacó la forma práctica que pudo aplicar las sesiones, tanto de los mentores y los facilitadores.
                Le gustó la flexibilidad de los mentores para poder llevar a cabo las sesiones.
                Me ayudó aterrizar la idea de negocio a un prototipo mínimo viable para lanzarlo al mercado
                además de que encontrarán mentores especializados."
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
              <img src="/images/testimonials/2.png" alt="Jazmin Huillca" style={{ borderRadius: '50%', width: '50px', height: '50px' }} />
              <div style={{ textAlign: 'center' }}>
                <h4 style={{ margin: '1rem', fontSize: '16px', fontWeight: 'bold' }}>Jazmin Huillca</h4>
                <p style={{ margin: 0, fontSize: '14px', color: '#777' }}>CEO Feeding Minds - Programa Preincubación 4G</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={{ padding: '60px', borderRadius: '10px', textAlign: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem', marginBottom: '1rem' }}>
              <p style={{ fontSize: '20px', color: '#333', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
                "Me permitió conocer mejor mis números como los costos fijos, variables y fijar su costo unitario por producto
                ya que antes solo se guiaba de los precios de la competencia, también le permitió poder identificar
                los cuellos de botella y gastos poco rentables en su negocio.
                Por otro lado, le permitió conocer las condiciones de calidad de trabajo,
                reclutamiento del trabajo, procesos y buscar un lugar más céntrico
                para poder atraer más clientes a su negocio."
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
              <img src="/images/testimonials/3.png" alt="Ivonne Olenka Arcondo Vargas" style={{ borderRadius: '50%', width: '50px', height: '50px' }} />
              <div style={{ textAlign: 'center' }}>
                <h4 style={{ margin: '1rem', fontSize: '16px', fontWeight: 'bold' }}>Ivonne Olenka Arcondo Vargas</h4>
                <p style={{ margin: 0, fontSize: '14px', color: '#777' }}>CEO Popoki Fast Food - Programa Fundadoras Latam</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={{ padding: '60px', borderRadius: '10px', textAlign: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem', marginBottom: '1rem' }}>
              <p style={{ fontSize: '20px', color: '#333', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
                "Fue una experiencia super enriquecedora,
                conocí a personas de diferentes países con negocios en marcha diversos,
                indagamos más sobre nuestra idea de negocio.
                Salí con mucho aprendizaje y super contenta con el networking,
                que siento que se quedarán para siempre.
                Recomendaría este programa para cualquier persona que tiene una idea de negocio,
                que se animen y prueben."
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
              <img src="/images/testimonials/4.png" alt="Carmen Paredes" style={{ borderRadius: '50%', width: '50px', height: '50px' }} />
              <div style={{ textAlign: 'center' }}>
                <h4 style={{ margin: '1rem', fontSize: '16px', fontWeight: 'bold' }}>Carmen Paredes</h4>
                <p style={{ margin: 0, fontSize: '14px', color: '#777' }}>CEO XpressKitchens - Programa Preincubación 5G</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={{ padding: '60px', borderRadius: '10px', textAlign: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem', marginBottom: '1rem' }}>
              <p style={{ fontSize: '20px', color: '#333', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
                "Mi experiencia fue enriquecedora,
                llevó mi idea a otro nivel, ahora tenemos otro enfoque,
                para llevar nuestra idea a un siguiente nivel.
                Recomiendo el programa, ya que es una vía que se abre para lograr tus metas
                y hacer realidad tus ideas y objetivos.
                Los tutores, profesores, clases son profesionales.
                Nuestra mentora nos sacó todas las dudas, con profesionalismo,
                todo el equipo de Warmi 100% recomendado."
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
              <img src="/images/testimonials/5.png" alt="Eucaris Rodríguez" style={{ borderRadius: '50%', width: '50px', height: '50px' }} />
              <div style={{ textAlign: 'center' }}>
                <h4 style={{ margin: '1rem', fontSize: '16px', fontWeight: 'bold' }}>Eucaris Rodríguez</h4>
                <p style={{ margin: 0, fontSize: '14px', color: '#777' }}>CEO Expañol con E - Programa Preincubación 5G</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={{ padding: '60px', borderRadius: '10px', textAlign: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem', marginBottom: '1rem' }}>
              <p style={{ fontSize: '20px', color: '#333', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
                "La experiencia es una buena oportunidad porque te muestran las herramientas
                y te enseñan cómo dar el siguiente paso, cómo partir desde la idea que tienes y darle forma,
                te permite enfocarte en tu proyecto, es una oportunidad.
                Comparten mucho y haces networking con otras personas al igual que tú
                y compartes con diferentes expertos. Es muy recomendado."
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
              <img src="/images/testimonials/6.png" alt="Mia Callorda" style={{ borderRadius: '50%', width: '50px', height: '50px' }} />
              <div style={{ textAlign: 'center' }}>
                <h4 style={{ margin: '1rem', fontSize: '16px', fontWeight: 'bold' }}>Mia Callorda</h4>
                <p style={{ margin: 0, fontSize: '14px', color: '#777' }}>CEO de Comody - Programa Preincubación 5G</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={{ padding: '60px', borderRadius: '10px', textAlign: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem', marginBottom: '1rem' }}>
              <p style={{ fontSize: '20px', color: '#333', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
                "Ha sido genial, una experiencia muy enriquecedora
                conocer a tantas emprendedoras líderes que ya están creciendo muchísimo,
                ha sido mucha inspiración, ha sido enriquecedor y gratificante también
                conocer a muchas más personas que están desarrollando emprendimiento."
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
              <img src="/images/testimonials/7.png" alt="Jhelyna Arenas" style={{ borderRadius: '50%', width: '50px', height: '50px' }} />
              <div style={{ textAlign: 'center' }}>
                <h4 style={{ margin: '1rem', fontSize: '16px', fontWeight: 'bold' }}>Jhelyna Arenas</h4>
                <p style={{ margin: 0, fontSize: '14px', color: '#777' }}>CEO Mom fit & healthy - Master Coach en Salud y Bienestar Integral - Evento Fem Week</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}
