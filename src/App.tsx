/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Music, 
  CheckCircle2, 
  Zap, 
  Clock, 
  Smartphone, 
  RefreshCw, 
  ShieldCheck, 
  Users,
  ChevronDown,
  Play
} from "lucide-react";
import { useState, useEffect } from "react";

const styles = {
  neonPurple: "text-[#bc13fe] drop-shadow-[0_0_10px_rgba(188,19,254,0.8)]",
  neonBlue: "text-[#00d2ff] drop-shadow-[0_0_10px_rgba(0,210,255,0.8)]",
  neonPink: "text-[#ff00ff] drop-shadow-[0_0_10px_rgba(255,0,255,0.8)]",
  bgGradient: "bg-gradient-to-br from-[#0a0a0a] via-[#1a0b2e] to-[#0a0a0a]",
  glass: "bg-white/5 backdrop-blur-lg border border-white/10",
  button: "bg-gradient-to-r from-[#bc13fe] to-[#ff00ff] hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(188,19,254,0.5)]",
};

const CHECKOUT_URL = "https://pay.cakto.com.br/38okuze_789295";

export default function App() {
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes countdown

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`min-h-screen ${styles.bgGradient} text-white font-sans selection:bg-[#bc13fe]/30`}>
      {/* Sticky Urgency Bar */}
      <div className="bg-[#bc13fe] text-black py-2 text-center font-bold text-sm sticky top-0 z-50 animate-pulse">
        ⚠️ OFERTA LIMITADA: O PREÇO VAI SUBIR EM {formatTime(timeLeft)}!
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#bc13fe]/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#00d2ff]/20 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <Music className="w-4 h-4 text-[#bc13fe]" />
              <span className="text-xs font-semibold tracking-widest uppercase">O Melhor do Mundo Musical</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tighter">
              Pare de perder tempo procurando música — <br />
              <span className={styles.neonPurple}>aqui tem TUDO em um só lugar!</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white/90 tracking-tight">
              Mais de 10.000 vídeos para assistir ou baixar.
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              Acesse agora o canal exclusivo de videoclipes com todos os estilos que você ama. 
              Praticidade total, variedade infinita e <span className="text-white font-bold underline decoration-[#ff00ff]">acesso vitalício</span>.
            </p>

            <div className="flex flex-col items-center gap-4">
              <motion.a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${styles.button} px-10 py-5 rounded-2xl text-xl font-black uppercase tracking-wider flex items-center gap-3 no-underline`}
              >
                👉 Quero acesso agora
              </motion.a>
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Pagamento 100% Seguro via PIX
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-24 px-4 bg-black/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Você também sofre com isso? 😩
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: "Tempo Perdido", desc: "Horas procurando aquela música perfeita para o momento." },
              { icon: RefreshCw, title: "Sempre o Mesmo", desc: "Cansado de ouvir as mesmas playlists repetitivas de sempre." },
              { icon: Zap, title: "Desatualizado", desc: "Dificuldade em encontrar os últimos lançamentos e hits do momento." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`${styles.glass} p-8 rounded-3xl text-center`}
              >
                <item.icon className="w-12 h-12 mx-auto mb-6 text-red-500" />
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              A Solução Definitiva para o seu <span className={styles.neonBlue}>Vício em Música</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Criamos um canal organizado, atualizado e completo. Chega de pular faixas ou lidar com anúncios chatos. Aqui você encontra:
            </p>
            <ul className="space-y-4">
              {[
                "Mais de 10.000 vídeos para assistir ou baixar",
                "Músicas organizadas por estilo (Funk, Trap, Piseiro...)",
                "Atualizações frequentes com os novos hits",
                "Só as melhores selecionadas a dedo",
                "Qualidade máxima de áudio e vídeo"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="text-[#00d2ff] shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video rounded-3xl overflow-hidden border-4 border-[#bc13fe]/30 shadow-[0_0_50px_rgba(188,19,254,0.2)] bg-black flex items-center justify-center group cursor-pointer">
              <Play className="w-20 h-20 text-white fill-white group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-[#bc13fe]"></div>
                </div>
              </div>
            </div>
            {/* Floating Style Tags */}
            <div className="absolute -top-4 -right-4 bg-[#ff00ff] px-4 py-2 rounded-full font-bold text-sm rotate-12 shadow-lg">FUNK 🔥</div>
            <div className="absolute -bottom-4 -left-4 bg-[#00d2ff] px-4 py-2 rounded-full font-bold text-sm -rotate-12 shadow-lg">TRAP 💎</div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 px-4 bg-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Por que garantir seu acesso?</h2>
            <p className="text-gray-400">Tudo o que você precisa para curtir sem limites.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Acesso Imediato", desc: "Pagou, entrou. Sem espera." },
              { icon: RefreshCw, title: "Sempre Novo", desc: "Conteúdo atualizado toda semana." },
              { icon: Music, title: "Todos Estilos", desc: "Do Rock ao Piseiro em um só lugar." },
              { icon: Smartphone, title: "Assista ou Baixe", desc: "Mais de 10.000 vídeos para curtir offline." }
            ].map((benefit, i) => (
              <div key={i} className={`${styles.glass} p-6 rounded-2xl`}>
                <benefit.icon className="w-8 h-8 text-[#bc13fe] mb-4" />
                <h4 className="font-bold mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Irresistible Offer */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#bc13fe]/10 blur-[150px]"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className={`${styles.glass} p-12 rounded-[3rem] border-2 border-[#bc13fe]/50`}
          >
            <h2 className="text-3xl font-bold mb-6 uppercase tracking-widest">Oferta Exclusiva</h2>
            <div className="mb-8">
              <span className="text-gray-500 line-through text-2xl">De R$ 47,00</span>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="text-4xl font-bold">Por apenas</span>
                <span className="text-7xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">R$ 5</span>
              </div>
            </div>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center justify-center gap-2 text-[#00ff00] font-bold text-xl">
                <CheckCircle2 className="w-6 h-6" /> 🔥 ACESSO VITALÍCIO
              </div>
              <div className="flex items-center justify-center gap-2 text-white/80">
                <CheckCircle2 className="w-5 h-5 text-[#bc13fe]" /> 💣 Pagamento Único
              </div>
              <div className="flex items-center justify-center gap-2 text-white/80">
                <CheckCircle2 className="w-5 h-5 text-[#bc13fe]" /> ⚠️ Vagas Limitadas
              </div>
            </div>

            <motion.a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${styles.button} w-full py-6 rounded-2xl text-2xl font-black uppercase tracking-wider mb-6 flex items-center justify-center no-underline`}
            >
              Garantir por R$5
            </motion.a>
            
            <p className="text-sm text-gray-500 italic">
              *Acesso liberado imediatamente após a confirmação do pagamento.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="flex -space-x-4">
              {[1,2,3,4,5].map(i => (
                <img 
                  key={i} 
                  src={`https://picsum.photos/seed/user${i}/100/100`} 
                  className="w-12 h-12 rounded-full border-2 border-[#0a0a0a]" 
                  alt="User"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div className="text-left">
              <div className="flex text-yellow-500">
                {[1,2,3,4,5].map(i => <Zap key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm font-bold">+1.420 pessoas já estão curtindo!</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Lucas Silva", text: "Melhor investimento que fiz! Por 5 reais tenho tudo organizado, não perco mais tempo no YouTube." },
              { name: "Mariana Costa", text: "Os clipes de Piseiro e Forró são os melhores. Tudo atualizado, vale muito a pena!" }
            ].map((t, i) => (
              <div key={i} className={`${styles.glass} p-8 rounded-2xl italic text-gray-300`}>
                "{t.text}"
                <p className="mt-4 not-italic font-bold text-white">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-black/20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16">Dúvidas Frequentes 🤔</h2>
          <div className="space-y-4">
            {[
              { q: "Funciona em qualquer celular?", a: "Sim! Você pode acessar pelo celular, tablet, computador ou até Smart TV." },
              { q: "Vou receber atualizações?", a: "Com certeza. Nossa equipe atualiza o canal semanalmente com os novos hits." },
              { q: "É pagamento único mesmo?", a: "Sim. Você paga apenas R$5 uma única vez e o acesso é seu para sempre." },
              { q: "Como recebo o acesso?", a: "Imediatamente após o pagamento, você recebe as instruções de acesso no seu e-mail." }
            ].map((item, i) => (
              <details key={i} className={`${styles.glass} rounded-2xl group`}>
                <summary className="p-6 font-bold cursor-pointer flex items-center justify-between list-none">
                  {item.q}
                  <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="p-6 pt-0 text-gray-400 border-t border-white/5">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">
            Ou você entra agora por R$5... <br />
            <span className="text-red-500">ou depois paga mais caro.</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Não deixe essa oportunidade passar. O preço promocional de lançamento é limitado.
          </p>
          <motion.a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`${styles.button} px-16 py-6 rounded-2xl text-3xl font-black uppercase tracking-widest shadow-[0_0_40px_rgba(188,19,254,0.6)] inline-flex items-center justify-center no-underline`}
          >
            EU QUERO AGORA!
          </motion.a>
          
          <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-50 grayscale">
            <div className="flex items-center gap-2"><ShieldCheck /> Compra Segura</div>
            <div className="flex items-center gap-2"><Users /> +1k Membros</div>
            <div className="flex items-center gap-2"><Zap /> Acesso Vitalício</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/5 text-center text-gray-600 text-sm">
        <p>© 2026 MusicVibe. Todos os direitos reservados.</p>
        <p className="mt-2">Termos de Uso | Política de Privacidade</p>
      </footer>
    </div>
  );
}
