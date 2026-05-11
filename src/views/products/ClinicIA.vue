<script setup lang="ts">
import { Calendar, UserCheck, Stethoscope, Workflow, ArrowRight, CheckCircle2 } from 'lucide-vue-next'

const features = [
  {
    title: 'Agendamento 100% Automatizado',
    description: 'Marcação, remarcação e cancelamentos feitos via IA pelo WhatsApp, 24 horas por dia, 7 dias por semana.',
    icon: Calendar
  },
  {
    title: 'Redução Drástica de No-show',
    description: 'Sistema inteligente de lembretes e confirmação automática de presença, mantendo a agenda otimizada.',
    icon: UserCheck
  },
  {
    title: 'Triagem de Pacientes Integrada',
    description: 'A IA entende a queixa do paciente e faz o direcionamento correto para a especialidade necessária.',
    icon: Stethoscope
  },
  {
    title: 'Integração Nativa com ERPs',
    description: 'Conexão transparente com os principais softwares médicos e sistemas de prontuário eletrônico do mercado.',
    icon: Workflow
  }
]
</script>

<template>
  <div class="bg-[#000000] min-h-screen pt-24">
    
    <!-- Hero Section -->
    <section class="relative pt-20 pb-24 overflow-hidden border-b border-white/5">
      <div class="absolute inset-0 z-0">
        <div class="absolute top-0 left-[20%] w-[40%] h-[40%] rounded-full bg-emerald-600/10 blur-[120px]"></div>
        <div class="absolute inset-0" style="background-image: radial-gradient(rgba(164, 146, 116, 0.1) 1px, transparent 1px); background-size: 40px 40px;"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-8">
            <Stethoscope class="w-4 h-4" /> Soma Clinic IA
          </div>
          
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Sua Clínica no Futuro do <span class="gradient-text">Atendimento</span>
          </h1>
          
          <p class="text-xl text-zinc-400 mb-10 leading-relaxed">
            Soma Clinic IA otimiza o fluxo de pacientes, reduz faltas (no-show) e automatiza a gestão de agendamentos com uma assistente virtual especializada em saúde.
          </p>
          
          <a href="/#contato" class="inline-flex items-center gap-2 px-8 py-4 bg-[#A49274] hover:bg-[#8c7a5e] text-black rounded-xl font-bold text-lg transition-all shadow-lg hover:-translate-y-1">
            Falar com Especialista <ArrowRight class="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-24 bg-[#0A0A0A]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Eficiência para Clínicas e Hospitais</h2>
          <p class="text-zinc-400 max-w-2xl mx-auto">Soluções focadas na experiência do paciente e rentabilidade da instituição médica.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="feat in features" :key="feat.title" class="bg-[#111111] p-8 rounded-2xl border border-white/5 hover:border-[#A49274]/50 transition-colors">
            <div class="w-12 h-12 rounded-xl bg-emerald-900/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
              <component :is="feat.icon" class="w-6 h-6" />
            </div>
            <h3 class="text-xl font-bold text-white mb-3">{{ feat.title }}</h3>
            <p class="text-zinc-400 leading-relaxed">{{ feat.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 border-t border-white/5 relative overflow-hidden">
      <div class="absolute inset-0 bg-[#A49274]/5"></div>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 class="text-3xl font-bold text-white mb-6">Chega de agendas vazias e retrabalho</h2>
        <p class="text-zinc-400 mb-10 text-lg">Descubra como nossa IA pode transformar o processo de recepção e marcação de consultas da sua clínica.</p>
        <a href="/#contato" class="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-zinc-200 text-black rounded-xl font-bold transition-all">
          Agendar Demonstração <CheckCircle2 class="w-5 h-5" />
        </a>
      </div>
    </section>

  </div>
</template>
