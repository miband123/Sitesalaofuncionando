import React from 'react';
import { Check, Crown, Sparkles, Bell } from 'lucide-react';

const Pricing = () => {
  const startFeatures = [
    "Sistema de controle de horários sem conflitos",
    "Serviços ilimitados com horários específicos", 
    "Domínio personalizado (seusalão.salonclick.com.br)",
    "Hospedagem inclusa por nossa conta",
    "Sistema personalizado com nome do salão",
    "Integração Google Maps",
    "Controle manual de pagamentos (pago/a pagar/fiado)",
  ];

  const premiumFeatures = [
    "Tudo do Plano Start +",
    "Controle de leads com botão de WhatsApp",
    "💬 Confirmação automatica no WhatsApp",
    "📅 Adição automática no Google Agenda",
    "✅️ Controle de Agendamentos",
  ];

  const diamondFeatures = [
    "Tudo do Plano Premium +",
    "💰 Controle financeiro completo",
    "📊 Relatórios avançados de gestão", 
    "📱 WhatsApp integrado para atendimento",
    "📈 Dashboard executivo",
    "🎯 Métricas de performance"
  ];

  return (
    <section id="plans" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Escolha seu plano
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comece com 7 dias grátis e veja a transformação no seu salão
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Start Plan */}
          <div className="bg-white rounded-3xl shadow-xl p-8 relative">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4 border border-green-400/30">
                <Crown className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                Plano Start
              </h3>
              <div className="text-4xl font-bold text-gray-800 mb-2">
                R$ 35,90<span className="text-lg text-gray-600">/mês</span>
              </div>
              <p className="text-green-600 font-bold text-lg">
                🚀 IDEAL PARA COMEÇAR - TESTE 7 DIAS GRÁTIS
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {startFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-2xl font-bold text-lg hover:from-green-700 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-lg">
              <a 
                href="https://wa.me/5584988137967?text=Oi!%20Quero%20começar%20meu%20teste%20gratuito%20de%207%20dias%20do%20SalonClick%20no%20Plano%20Start%20🚀"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center"
              >
                COMEÇAR TESTE GRATUITO
              </a>
            </button>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                • Perfeito para salões iniciantes<br/>
              </p>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-3xl shadow-xl p-8 relative border-4 border-purple-400">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-bold text-sm">
                MAIS POPULAR
              </div>
            </div>
            
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-4 border border-purple-400/30">
                <Crown className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                Plano Premium
              </h3>
              <div className="text-4xl font-bold text-gray-800 mb-2">
                R$ 47,90<span className="text-lg text-gray-600">/mês</span>
              </div>
              <p className="text-purple-600 font-bold text-lg">
                ✨ DISPONÍVEL AGORA - TESTE 7 DIAS GRÁTIS
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {premiumFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-2xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg">
              <a 
                href="https://wa.me/5584988137967?text=Oi!%20Quero%20começar%20meu%20teste%20gratuito%20de%207%20dias%20do%20SalonClick%20no%20Plano%20Premium%20💜"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center"
              >
                COMEÇAR TESTE GRATUITO
              </a>
            </button>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                • Sem pegadinhas, sem taxas ocultas<br/>
                • Cancele quando quiser, sem burocracia<br/>
                • Suporte humanizado, não robôs
              </p>
            </div>
          </div>

          {/* Diamond Plan */}
          <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-3xl shadow-xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-2">
                  Plano Diamante
                </h3>
                <div className="text-4xl font-bold mb-2">
                  R$ 67<span className="text-lg opacity-80">/mês</span>
                </div>
                <p className="text-purple-200 font-bold text-lg">
                  💎 EM BREVE - SEJA A PRIMEIRA A SABER
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {diamondFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-white/20 backdrop-blur-sm text-white py-4 rounded-2xl font-bold text-lg hover:bg-white/30 transition-all border border-white/30">
                <Bell className="w-5 h-5 inline mr-2" />
                QUERO SER NOTIFICADA
              </button>

              <div className="mt-6 text-center">
                <p className="text-sm text-white/70">
                  Seja uma das primeiras a ter acesso<br/>
                  às funcionalidades mais avançadas
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Urgency Section */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-pink-600 rounded-3xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            ⚡ OFERTA LIMITADA ⚡
          </h3>
          <p className="text-lg mb-4">
            Primeiras 100 salões ganham <span className="font-bold text-purple-200">50% de desconto</span> no primeiro mês
          </p>
          <div className="inline-flex items-center space-x-2 bg-white/20 rounded-full px-6 py-2">
            <span className="text-sm">Apenas</span>
            <span className="font-bold text-xl">23</span>
            <span className="text-sm">vagas restantes</span>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">R$ 35,90</div>
            <p className="text-gray-600">Plano Start</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">7 dias</div>
            <p className="text-gray-600">Teste grátis completo</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-pink-600 mb-2">24/7</div>
            <p className="text-gray-600">Sistema funcionando sempre</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
            <p className="text-gray-600">Satisfação garantida</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
