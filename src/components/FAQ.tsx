import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Como funciona o teste gratuito de 7 dias?",
      answer: "Você tem acesso completo ao sistema por 7 dias, sem cobrança e sem precisar cadastrar cartão de crédito. Pode testar todas as funcionalidades, cadastrar seus serviços, configurar seu salão e até receber agendamentos reais. Após os 7 dias, se gostar, apenas confirma a assinatura."
    },
    {
      question: "Preciso de conhecimento técnico para usar?",
      answer: "Não! O SalonClick foi criado especialmente para donas de salão, não para programadores. A interface é super simples e intuitiva. Em menos de 30 minutos você já está com tudo configurado. E se tiver qualquer dúvida, nosso suporte te ajuda no WhatsApp."
    },
    {
      question: "Meus clientes vão conseguir usar facilmente?",
      answer: "Com certeza! O sistema foi testado com clientes de todas as idades. O processo é super simples: nome, serviço, horário e pronto. Até as clientes com menos familiaridade com tecnologia conseguem agendar sem problemas."
    },
    {
      question: "E se eu quiser cancelar?",
      answer: "Pode cancelar quando quiser, sem burocracia e sem multa. Não há fidelidade. Se não estiver satisfeita, é só nos avisar e cancelamos na hora. Simples assim!"
    },
    {
      question: "O sistema funciona offline?",
      answer: "O sistema é online, então precisa de internet para funcionar. Mas isso é uma vantagem! Seus clientes podem agendar de casa, do trabalho, de qualquer lugar. E você pode acessar sua agenda de qualquer dispositivo conectado."
    },
    {
      question: "Como é feito o suporte?",
      answer: "Temos suporte humanizado pelo WhatsApp durante horário comercial. Não é chatbot, são pessoas reais que entendem do seu negócio. Também temos tutoriais em vídeo e uma central de ajuda completa."
    },
    {
      question: "Posso personalizar com a identidade do meu salão?",
      answer: "Sim! O sistema fica com o nome do seu salão, suas cores (quando disponível) e você ganha um link personalizado tipo seusalao.salonclick.com.br. Seus clientes vão achar que você tem um sistema exclusivo!"
    },
    {
      question: "É seguro para dados dos meus clientes?",
      answer: "Totalmente seguro! Usamos a mesma tecnologia de segurança dos bancos. Todos os dados são criptografados e armazenados em servidores seguros. Seguimos a LGPD (Lei Geral de Proteção de Dados) rigorosamente."
    },
    {
      question: "Quantos agendamentos posso receber por mês?",
      answer: "Não há limite! Você pode receber quantos agendamentos quiser. O preço é fixo por mês, independente da quantidade de clientes que agendem."
    },
    {
      question: "Funciona para qualquer tipo de salão?",
      answer: "Sim! Funciona para salões de beleza, clínicas de estética, nail designers, sobrancelhas, e qualquer negócio que trabalhe com agendamentos por horário."
    },
    {
      question: "Como funciona a confirmação no WhatsApp para os clientes?",
      answer: "Após o cliente agendar, a confirmação do agendamento será enviada automaticamente para o cliente através do nosso bot do SalonClick, diretamente no WhatsApp, com todos os detalhes do compromisso."
    },
    {
      question: "Como o agendamento do cliente é adicionado à Google Agenda?",
      answer: "Assim que o cliente confirmar o agendamento, ele será automaticamente adicionado à sua Google Agenda, facilitando o gerenciamento dos compromissos."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-6 border border-purple-400/30">
            <HelpCircle className="w-8 h-8 text-purple-400" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tiramos todas as suas dúvidas sobre o SalonClick
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-purple-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-bold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                {openFAQ === index ? (
                  <ChevronUp className="w-6 h-6 text-purple-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-purple-600 flex-shrink-0" />
                )}
              </button>
              
              {openFAQ === index && (
                <div className="px-8 pb-6">
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-12 text-center text-white border border-white/20">
          <h3 className="text-3xl font-bold mb-4">
            Ainda tem alguma dúvida?
          </h3>
          <p className="text-xl mb-8 text-gray-200">
            Fale direto conosco no WhatsApp e tire todas as suas dúvidas
          </p>
          <a 
            href="https://wa.me/5584988137967?text=Oi!%20Tenho%20algumas%20dúvidas%20sobre%20o%20SalonClick.%20Podem%20me%20ajudar?%20🤔"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full font-bold text-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            FALAR NO WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
