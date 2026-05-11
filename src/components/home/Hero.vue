<script setup lang="ts">
import { ArrowRight, ChevronRight, Activity, Zap, CheckCircle2 } from 'lucide-vue-next'
</script>

<template>
  <section class="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-black">
    <!-- Background effects -->
    <div class="absolute inset-0 z-0">
      <div class="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[#A49274]/10 blur-[120px]"></div>
      <div class="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-[#A49274]/5 blur-[100px]"></div>
      <!-- Grid pattern -->
      <div class="absolute inset-0" style="background-image: radial-gradient(rgba(164, 146, 116, 0.15) 1px, transparent 1px); background-size: 32px 32px;"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <!-- Left content -->
        <div class="max-w-2xl">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A49274]/10 border border-[#A49274]/20 text-[#A49274] text-sm font-medium mb-8 animate-fade-in-up">
            <span class="flex h-2 w-2 rounded-full bg-[#A49274] animate-pulse"></span>
            Transformação Digital Real
          </div>

          <!-- Headline -->
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Tecnologia <span class="gradient-text italic pr-2">estratégica</span> para escalar seu negócio.
          </h1>

          <!-- Subheadline -->
          <p class="text-xl text-zinc-400 mb-10 leading-relaxed max-w-xl">
            Eliminamos complexidade e ineficiência através de Soluções Digitais sob medida, Integrações de Sistemas e Inteligência Artificial Aplicada.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row items-center gap-4">
            <a href="#contato" class="w-full sm:w-auto px-8 py-4 bg-[#A49274] hover:bg-[#8c7a5e] text-black rounded-xl font-bold text-lg transition-all shadow-lg shadow-[#A49274]/20 hover:shadow-[#A49274]/40 hover:-translate-y-1 flex items-center justify-center gap-2">
              Agendar Diagnóstico <ArrowRight class="w-5 h-5" />
            </a>
            <a href="#solucoes" class="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/5 text-white border border-white/20 rounded-xl font-medium text-lg transition-all hover:border-[#A49274]/50 flex items-center justify-center gap-2 group">
              Conhecer Soluções <ChevronRight class="w-5 h-5 text-zinc-500 group-hover:text-[#A49274] transition-colors" />
            </a>
          </div>

          <!-- Quick Stats -->
          <div class="mt-12 pt-10 border-t border-white/10 flex flex-wrap gap-8">
            <div class="flex items-center gap-3">
              <CheckCircle2 class="w-6 h-6 text-[#A49274]" />
              <div class="flex flex-col">
                <span class="text-white font-bold text-lg leading-none">+500</span>
                <span class="text-zinc-500 text-sm">Projetos Entregues</span>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <Zap class="w-6 h-6 text-[#A49274]" />
              <div class="flex flex-col">
                <span class="text-white font-bold text-lg leading-none">Excelência</span>
                <span class="text-zinc-500 text-sm">Técnica Comprovada</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Abstract UI representation -->
        <div class="relative hidden lg:block h-[600px]">
          <!-- Floating UI Elements to simulate a dashboard/tech environment -->
          <div class="absolute inset-0 bg-gradient-to-tr from-[#111111] to-[#1a1a1a] rounded-3xl border border-white/10 shadow-2xl overflow-hidden transform perspective-1000 rotate-y-[-5deg] rotate-x-[5deg]">
            <!-- Header -->
            <div class="h-12 border-b border-white/10 flex items-center px-4 gap-2 bg-black/50">
              <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            
            <!-- Body -->
            <div class="p-6 grid grid-cols-2 gap-4">
              <!-- Top Left Widget -->
              <div class="col-span-2 bg-black/40 rounded-xl p-5 border border-white/5">
                <div class="flex justify-between items-center mb-4">
                  <div class="h-4 w-32 bg-zinc-800 rounded"></div>
                  <div class="h-6 w-20 bg-[#A49274]/20 text-[#A49274] text-xs font-bold flex items-center justify-center rounded-md">+42% ROI</div>
                </div>
                <div class="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div class="h-full w-[70%] bg-gradient-to-r from-[#A49274] to-[#D4C5A9]"></div>
                </div>
              </div>

              <!-- Side Widget -->
              <div class="bg-black/40 rounded-xl p-5 border border-white/5 h-48 flex flex-col justify-between">
                <div class="w-10 h-10 rounded-full bg-[#A49274]/20 flex items-center justify-center">
                  <Activity class="w-5 h-5 text-[#A49274]" />
                </div>
                <div>
                  <div class="text-2xl font-bold text-white mb-1">99.9%</div>
                  <div class="text-xs text-zinc-500">Uptime System</div>
                </div>
              </div>

              <!-- Side Widget 2 -->
              <div class="bg-black/40 rounded-xl p-5 border border-white/5 h-48 flex flex-col gap-3">
                <div class="h-3 w-full bg-zinc-800 rounded"></div>
                <div class="h-3 w-5/6 bg-zinc-800 rounded"></div>
                <div class="h-3 w-4/6 bg-zinc-800 rounded"></div>
                <div class="mt-auto h-10 w-full bg-[#A49274]/10 border border-[#A49274]/30 rounded-lg flex items-center justify-center text-[#A49274] text-sm font-medium">
                  Processando IA...
                </div>
              </div>
            </div>
          </div>
          
          <!-- Decorative Blur Overlays -->
          <div class="absolute top-[20%] -right-10 w-32 h-32 bg-[#A49274]/30 rounded-full blur-3xl"></div>
          <div class="absolute bottom-[10%] left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
