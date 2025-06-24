import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  VideoIcon, 
  SparklesIcon, 
  TrendingUpIcon, 
  RocketIcon,
  CheckCircleIcon,
  PlayIcon,
  BrainIcon,
  DollarSignIcon,
  TargetIcon
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

// Componente de partículas flutuantes
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      className="particle"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 4 + 2}px`,
        height: `${Math.random() * 4 + 2}px`,
        animationDelay: `${Math.random() * 6}s`,
        animationDuration: `${Math.random() * 4 + 4}s`,
      }}
    />
  ));

  return <div className="particles">{particles}</div>;
};

// Componente do Header
const Header = () => {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 p-6"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass p-4 rounded-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-accent-red-500 to-accent-red-600 rounded-xl flex items-center justify-center">
                <VideoIcon className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white text-uppercase">
                Mark-Cut
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <span className="text-white/80 text-uppercase text-sm">
                EM BREVE
              </span>
              <div className="w-2 h-2 bg-accent-red-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

// Componente Hero Section
const HeroSection = ({ onSubscribe }) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge de lançamento */}
        <motion.div
          className="inline-flex items-center space-x-2 glass-red px-6 py-3 rounded-full mb-8"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <RocketIcon className="w-5 h-5 text-accent-red-400" />
          <span className="text-accent-red-400 font-semibold text-uppercase text-sm">
            LANÇAMENTO EM BREVE
          </span>
        </motion.div>

        {/* Título principal */}
        <motion.h1
          className="text-7xl md:text-8xl lg:text-9xl font-black text-white text-uppercase mb-6 text-glow"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          MARK
          <span className="text-gradient-red">-CUT</span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          className="text-2xl md:text-3xl text-white/90 mb-4 text-uppercase font-medium"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          CORTE INTELIGENTE DE VÍDEOS
        </motion.p>

        <motion.p
          className="text-xl md:text-2xl text-white/70 mb-12 text-uppercase"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          COM PODER DA INTELIGÊNCIA ARTIFICIAL
        </motion.p>

        {/* Features principais */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <div className="glass p-6 rounded-2xl">
            <BrainIcon className="w-12 h-12 text-accent-red-400 mx-auto mb-4" />
            <h3 className="text-white font-bold text-uppercase mb-2">IA AVALIADORA</h3>
            <p className="text-white/70 text-sm">ANALISA POTENCIAL DE MONETIZAÇÃO</p>
          </div>
          
          <div className="glass p-6 rounded-2xl">
            <TargetIcon className="w-12 h-12 text-accent-red-400 mx-auto mb-4" />
            <h3 className="text-white font-bold text-uppercase mb-2">CORTES PRECISOS</h3>
            <p className="text-white/70 text-sm">SUGESTÕES AUTOMÁTICAS DE CORTE</p>
          </div>
          
          <div className="glass p-6 rounded-2xl">
            <DollarSignIcon className="w-12 h-12 text-accent-red-400 mx-auto mb-4" />
            <h3 className="text-white font-bold text-uppercase mb-2">MAXIMIZE LUCROS</h3>
            <p className="text-white/70 text-sm">OTIMIZE SEUS VÍDEOS PARA RENDA</p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="glass-strong p-8 rounded-3xl max-w-md mx-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <h3 className="text-2xl font-bold text-white text-uppercase mb-4">
            SEJA O PRIMEIRO
          </h3>
          <p className="text-white/80 mb-6 text-uppercase text-sm">
            RECEBA ACESSO ANTECIPADO E DESCONTO EXCLUSIVO
          </p>
          
          <EmailSubscriptionForm onSubmit={onSubscribe} />
        </motion.div>
      </div>
    </section>
  );
};

// Componente do formulário de email
const EmailSubscriptionForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();

  const handleFormSubmit = async (data) => {
    try {
      await onSubmit(data.email);
      reset();
      toast.success('EMAIL CADASTRADO COM SUCESSO!', {
        style: {
          background: 'rgba(239, 68, 68, 0.9)',
          color: 'white',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '1px',
        },
      });
    } catch (error) {
      toast.error('ERRO AO CADASTRAR EMAIL', {
        style: {
          background: 'rgba(239, 68, 68, 0.9)',
          color: 'white',
          fontWeight: 'bold',
          textTransform: 'uppercase',
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
      <div>
        <input
          type="email"
          placeholder="SEU MELHOR EMAIL"
          className="input-glass w-full text-center text-uppercase"
          {...register('email', {
            required: 'Email é obrigatório',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email inválido'
            }
          })}
        />
        {errors.email && (
          <p className="text-accent-red-400 text-sm mt-2 text-uppercase">
            {errors.email.message}
          </p>
        )}
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full relative overflow-hidden"
      >
        {isSubmitting ? (
          <span className="loading-dots">CADASTRANDO</span>
        ) : (
          'QUERO ACESSO ANTECIPADO'
        )}
      </button>
      
      <p className="text-white/60 text-xs text-uppercase">
        💯 SEM SPAM • 🔒 DADOS SEGUROS • 🎁 DESCONTO EXCLUSIVO
      </p>
    </form>
  );
};

// Seção de recursos
const FeaturesSection = () => {
  const features = [
    {
      icon: SparklesIcon,
      title: "TRANSCRIÇÃO AUTOMÁTICA",
      description: "WHISPER AI CONVERTE ÁUDIO EM TEXTO COM PRECISÃO MÁXIMA",
      benefits: ["MÚLTIPLOS IDIOMAS", "TIMESTAMPS PRECISOS", "QUALIDADE PROFISSIONAL"]
    },
    {
      icon: BrainIcon,
      title: "IA AVALIADORA",
      description: "ANALISA POTENCIAL DE MONETIZAÇÃO DOS SEUS VÍDEOS",
      benefits: ["SCORE DE 0-100", "ANÁLISE DETALHADA", "RECOMENDAÇÕES PERSONALIZADAS"]
    },
    {
      icon: TargetIcon,
      title: "CORTES INTELIGENTES",
      description: "SUGESTÕES AUTOMÁTICAS DOS MELHORES MOMENTOS",
      benefits: ["HIGHLIGHTS AUTOMÁTICOS", "MÚLTIPLAS PLATAFORMAS", "TEMPO OTIMIZADO"]
    },
    {
      icon: TrendingUpIcon,
      title: "MAXIMIZE RECEITA",
      description: "OTIMIZE SEUS VÍDEOS PARA MÁXIMA MONETIZAÇÃO",
      benefits: ["COMPLIANCE CHECK", "SEO OTIMIZADO", "ESTRATÉGIAS PERSONALIZADAS"]
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-white text-uppercase mb-6">
            RECURSOS
            <span className="text-gradient-red"> REVOLUCIONÁRIOS</span>
          </h2>
          <p className="text-xl text-white/80 text-uppercase">
            TUDO QUE VOCÊ PRECISA PARA DOMINAR O MERCADO
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="glass p-8 rounded-3xl"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-accent-red-500 to-accent-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white text-uppercase mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 mb-4 text-uppercase text-sm">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <CheckCircleIcon className="w-5 h-5 text-accent-red-400 flex-shrink-0" />
                        <span className="text-white/70 text-sm text-uppercase">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Seção de demonstração
const DemoSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-white text-uppercase mb-8">
            VEJA EM
            <span className="text-gradient-red"> AÇÃO</span>
          </h2>
          
          <div className="glass-strong p-12 rounded-3xl">
            <div className="relative aspect-video bg-dark-petroleum rounded-2xl overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-petroleum-900/80 to-petroleum-700/80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-accent-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <PlayIcon className="w-10 h-10 text-white ml-1" />
                  </div>
                  <p className="text-white font-bold text-uppercase text-xl mb-2">
                    DEMO INTERATIVO
                  </p>
                  <p className="text-white/70 text-uppercase">
                    VEJA COMO FUNCIONA NA PRÁTICA
                  </p>
                </div>
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute top-4 left-4 w-3 h-3 bg-accent-red-500 rounded-full"></div>
              <div className="absolute top-4 left-12 w-3 h-3 bg-white/50 rounded-full"></div>
              <div className="absolute top-4 left-20 w-3 h-3 bg-white/30 rounded-full"></div>
            </div>
            
            <p className="text-white/80 mt-6 text-uppercase">
              EM BREVE: DEMONSTRAÇÃO COMPLETA DA PLATAFORMA
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="glass p-8 rounded-3xl text-center"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-accent-red-500 to-accent-red-600 rounded-xl flex items-center justify-center">
              <VideoIcon className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-bold text-white text-uppercase">
              Mark-Cut
            </span>
          </div>
          
          <p className="text-white/80 text-uppercase mb-6">
            O FUTURO DO CORTE DE VÍDEO ESTÁ CHEGANDO
          </p>
          
          <div className="flex items-center justify-center space-x-4 text-sm text-white/60 text-uppercase">
            <span>© 2024 MARK-CUT</span>
            <span>•</span>
            <span>TODOS OS DIREITOS RESERVADOS</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

// Componente principal da Landing Page
const LandingPage = () => {
  const [subscribers, setSubscribers] = useState(1247); // Contador fictício

  const handleSubscribe = async (email) => {
    // Simular chamada à API
    return new Promise((resolve) => {
      setTimeout(() => {
        setSubscribers(prev => prev + 1);
        console.log('Email cadastrado:', email);
        resolve();
      }, 1000);
    });
  };

  return (
    <div className="min-h-screen bg-animated relative overflow-hidden">
      <FloatingParticles />
      <Toaster position="top-center" />
      
      <Header />
      
      <main className="relative z-10">
        <HeroSection onSubscribe={handleSubscribe} />
        <FeaturesSection />
        <DemoSection />
      </main>
      
      <Footer />
      
      {/* Contador de inscritos flutuante */}
      <motion.div
        className="fixed bottom-6 right-6 glass px-4 py-3 rounded-full z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-accent-red-500 rounded-full animate-pulse"></div>
          <span className="text-white font-bold text-sm text-uppercase">
            {subscribers.toLocaleString()} INTERESSADOS
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage; 