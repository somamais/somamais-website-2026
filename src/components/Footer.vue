<script setup lang="ts">
import { MapPin, Phone, Mail, ArrowRight, Instagram, Linkedin, Facebook } from 'lucide-vue-next'
</script>

<template>
  <footer class="bg-[#040404] text-white pt-20 pb-8 border-t border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        <!-- Brand -->
        <div class="space-y-6">
          <div class="flex items-center gap-1">
            <img src="/logo-soma.png" alt="Soma+ Tecnologia" class="h-10 w-auto" />
          </div>
          <p class="text-zinc-400 text-sm leading-relaxed">
            Eliminamos complexidade e ineficiência através de Soluções Digitais sob medida, Integrações de Sistemas e Inteligência Artificial Aplicada.
          </p>
          <div class="flex items-center gap-4">
            <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#A49274] hover:text-black transition-all">
              <Linkedin class="w-4 h-4" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#A49274] hover:text-black transition-all">
              <Instagram class="w-4 h-4" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#A49274] hover:text-black transition-all">
              <Facebook class="w-4 h-4" />
            </a>
          </div>
        </div>

        <!-- Links -->
        <div>
          <h3 class="text-lg font-semibold mb-6 text-white">Soluções</h3>
          <ul class="space-y-4 text-sm text-zinc-400">
            <li><router-link to="/solucoes-digitais" class="hover:text-[#A49274] transition-colors flex items-center gap-2 group"><ArrowRight class="w-3 h-3 text-[#A49274] group-hover:translate-x-1 transition-transform" /> Soluções Digitais</router-link></li>
            <li><a href="/#ia" class="hover:text-[#A49274] transition-colors flex items-center gap-2 group"><ArrowRight class="w-3 h-3 text-[#A49274] group-hover:translate-x-1 transition-transform" /> Inteligência Artificial</a></li>
            <li><a href="/#integracoes" class="hover:text-[#A49274] transition-colors flex items-center gap-2 group"><ArrowRight class="w-3 h-3 text-[#A49274] group-hover:translate-x-1 transition-transform" /> Integrações e Automações</a></li>
            <li><a href="/#startups" class="hover:text-[#A49274] transition-colors flex items-center gap-2 group"><ArrowRight class="w-3 h-3 text-[#A49274] group-hover:translate-x-1 transition-transform" /> Startups e MVP</a></li>
          </ul>
        </div>

        <!-- Products -->
        <div>
          <h3 class="text-lg font-semibold mb-6 text-white">Nossos Produtos</h3>
          <ul class="space-y-4 text-sm text-zinc-400">
            <li><router-link to="/produto/manydesk" class="hover:text-[#A49274] transition-colors flex items-center gap-2 group"><ArrowRight class="w-3 h-3 text-[#A49274] group-hover:translate-x-1 transition-transform" /> Manydesk</router-link></li>
            <li><router-link to="/produto/soma-clinic-ia" class="hover:text-[#A49274] transition-colors flex items-center gap-2 group"><ArrowRight class="w-3 h-3 text-[#A49274] group-hover:translate-x-1 transition-transform" /> Soma Clinic IA</router-link></li>
            <li><router-link to="/produto/port-facil" class="hover:text-[#A49274] transition-colors flex items-center gap-2 group"><ArrowRight class="w-3 h-3 text-[#A49274] group-hover:translate-x-1 transition-transform" /> Port Fácil</router-link></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-lg font-semibold mb-6 text-white">Contato</h3>
          <ul class="space-y-4 text-sm text-zinc-400">
            <li class="flex items-start gap-3">
              <MapPin class="w-5 h-5 text-[#A49274] shrink-0 mt-0.5" />
              <a href="https://www.google.com/maps/@-5.0654914,-42.7866227" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors leading-relaxed">
                R. Gen. Lages, 2288a - Jóquei<br>Teresina - PI, 64048-350
              </a>
            </li>
            <li class="flex items-center gap-3">
              <Phone class="w-5 h-5 text-[#A49274] shrink-0" />
              <div class="flex flex-col">
                <span class="hover:text-white transition-colors cursor-pointer">(86) 3142-5000 (Teresina)</span>
                <span class="hover:text-white transition-colors cursor-pointer">(11) 5170-0101 (São Paulo)</span>
              </div>
            </li>
            <li class="flex items-center gap-3">
              <Mail class="w-5 h-5 text-[#A49274] shrink-0" />
              <a href="mailto:contato@somamais.ia.br" class="hover:text-white transition-colors">contato@somamais.ia.br</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
        <p>&copy; {{ new Date().getFullYear() }} Soma Mais Tecnologia. Todos os direitos reservados.</p>
        <div class="flex gap-6">
          <router-link to="/politica-de-privacidade" class="hover:text-[#A49274] transition-colors">Política de Privacidade</router-link>
          <router-link to="/termos-de-uso" class="hover:text-[#A49274] transition-colors">Termos de Uso</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>
