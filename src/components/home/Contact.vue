<script setup lang="ts">
import { ref } from 'vue'
import { Send, CheckCircle2 } from 'lucide-vue-next'

const formData = ref({
  nome: '',
  countryCode: '+55',
  whatsapp: '',
  email: '',
  empresa: '',
  setor: '',
  mensagem: '',
  lgpd: false
})

const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')

const submitForm = async () => {
  if (isSubmitting.value) return
  
  isSubmitting.value = true
  submitStatus.value = 'idle'
  
  try {
    const response = await fetch('https://webhook-03.somamais.ia.br/webhook/b2fa557e-d063-45b1-a2cf-0ead92ca98cf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData.value)
    })

    if (!response.ok) {
      throw new Error('Falha ao enviar formulário')
    }

    submitStatus.value = 'success'
    formData.value = {
      nome: '',
      countryCode: '+55',
      whatsapp: '',
      email: '',
      empresa: '',
      setor: '',
      mensagem: '',
      lgpd: false
    }
    
    setTimeout(() => {
      submitStatus.value = 'idle'
    }, 5000)
    
  } catch (error) {
    console.error('Erro ao enviar:', error)
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="contato" class="py-24 bg-[#0A0A0A] relative border-t border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="bg-[#111111] rounded-[2rem] border border-white/5 overflow-hidden relative">
        <!-- Abstract shapes -->
        <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#A49274]/10 blur-3xl pointer-events-none"></div>

        <div class="grid grid-cols-1 lg:grid-cols-2 relative z-10">
          
          <!-- Contact Text -->
          <div class="p-10 lg:p-16 flex flex-col justify-center">
            <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Vamos construir <br />juntos?
            </h2>
            <p class="text-zinc-400 text-lg mb-10 max-w-md leading-relaxed">
              Preencha o formulário e um especialista entrará em contato para entender o cenário e os desafios do seu negócio.
            </p>

            <ul class="space-y-4">
              <li class="flex items-center gap-3 text-zinc-300">
                <CheckCircle2 class="w-5 h-5 text-[#A49274]" /> Diagnóstico técnico sem custo
              </li>
              <li class="flex items-center gap-3 text-zinc-300">
                <CheckCircle2 class="w-5 h-5 text-[#A49274]" /> Proposta de arquitetura personalizada
              </li>
              <li class="flex items-center gap-3 text-zinc-300">
                <CheckCircle2 class="w-5 h-5 text-[#A49274]" /> Sigilo garantido (NDA)
              </li>
            </ul>
          </div>

          <!-- Contact Form -->
          <div class="bg-black/50 p-10 lg:p-16 border-l border-white/5 backdrop-blur-sm">
            <form @submit.prevent="submitForm" class="space-y-5">
              <div>
                <label for="name" class="block text-sm font-medium text-zinc-400 mb-2">Nome Completo</label>
                <input v-model="formData.nome" type="text" id="name" name="nome" required class="w-full px-4 py-3 bg-[#0A0A0A] text-white rounded-xl border border-white/10 focus:ring-1 focus:ring-[#A49274] focus:border-[#A49274] outline-none transition-all placeholder:text-zinc-600" placeholder="Seu nome completo" :disabled="isSubmitting" />
              </div>

              <div>
                <label for="whatsapp" class="block text-sm font-medium text-zinc-400 mb-2">WhatsApp</label>
                <div class="flex gap-2">
                  <select v-model="formData.countryCode" class="px-3 py-3 bg-[#0A0A0A] text-white rounded-xl border border-white/10 focus:ring-1 focus:ring-[#A49274] focus:border-[#A49274] outline-none transition-all w-[100px]" :disabled="isSubmitting">
                    <option value="+55">🇧🇷 +55</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+351">🇵🇹 +351</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+49">🇩🇪 +49</option>
                    <option value="+34">🇪🇸 +34</option>
                  </select>
                  <input v-model="formData.whatsapp" type="tel" id="whatsapp" name="whatsapp" required class="flex-1 px-4 py-3 bg-[#0A0A0A] text-white rounded-xl border border-white/10 focus:ring-1 focus:ring-[#A49274] focus:border-[#A49274] outline-none transition-all placeholder:text-zinc-600" placeholder="(11) 99999-9999" :disabled="isSubmitting" />
                </div>
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-zinc-400 mb-2">E-mail Corporativo</label>
                <input v-model="formData.email" type="email" id="email" name="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Insira um e-mail válido" class="w-full px-4 py-3 bg-[#0A0A0A] text-white rounded-xl border border-white/10 focus:ring-1 focus:ring-[#A49274] focus:border-[#A49274] outline-none transition-all placeholder:text-zinc-600" placeholder="voce@empresa.com.br" :disabled="isSubmitting" />
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label for="company" class="block text-sm font-medium text-zinc-400 mb-2">Empresa</label>
                  <input v-model="formData.empresa" type="text" id="company" name="empresa" required class="w-full px-4 py-3 bg-[#0A0A0A] text-white rounded-xl border border-white/10 focus:ring-1 focus:ring-[#A49274] focus:border-[#A49274] outline-none transition-all placeholder:text-zinc-600" placeholder="Sua empresa" :disabled="isSubmitting" />
                </div>

                <div>
                  <label for="sector" class="block text-sm font-medium text-zinc-400 mb-2">Setor</label>
                  <select v-model="formData.setor" id="sector" name="setor" required class="w-full px-4 py-3 bg-[#0A0A0A] text-white rounded-xl border border-white/10 focus:ring-1 focus:ring-[#A49274] focus:border-[#A49274] outline-none transition-all appearance-none" :disabled="isSubmitting">
                    <option value="" disabled selected>Selecione um setor...</option>
                    <option value="Tecnologia">Tecnologia</option>
                    <option value="Finanças/Bancos">Finanças / Bancos</option>
                    <option value="Saúde">Saúde</option>
                    <option value="Varejo">Varejo</option>
                    <option value="Indústria">Indústria</option>
                    <option value="Serviços">Serviços</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-zinc-400 mb-2">Como podemos ajudar?</label>
                <textarea v-model="formData.mensagem" id="message" name="mensagem" required rows="3" class="w-full px-4 py-3 bg-[#0A0A0A] text-white rounded-xl border border-white/10 focus:ring-1 focus:ring-[#A49274] focus:border-[#A49274] outline-none transition-all resize-none placeholder:text-zinc-600" placeholder="Conte um pouco sobre seu desafio..." :disabled="isSubmitting"></textarea>
              </div>

              <div class="flex items-start gap-3 mt-4">
                <div class="flex items-center h-5">
                  <input v-model="formData.lgpd" id="lgpd" name="lgpd" type="checkbox" required class="w-4 h-4 rounded border-white/20 bg-[#0A0A0A] text-[#A49274] focus:ring-[#A49274] focus:ring-offset-0 focus:ring-1 cursor-pointer transition-colors" :disabled="isSubmitting" />
                </div>
                <label for="lgpd" class="text-xs text-zinc-500 leading-tight">
                  Concordo em fornecer meus dados para que a Soma+ Tecnologia entre em contato comigo a respeito dos seus produtos e serviços. Você pode cancelar sua inscrição para receber essas comunicações a qualquer momento. Para obter mais informações, confira nossa Política de Privacidade.
                </label>
              </div>

              <div v-if="submitStatus === 'success'" class="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-sm">
                Mensagem enviada com sucesso! Em breve entraremos em contato.
              </div>
              
              <div v-if="submitStatus === 'error'" class="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.
              </div>

              <button type="submit" :disabled="isSubmitting" class="w-full bg-[#A49274] hover:bg-[#8c7a5e] text-black font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 mt-2 disabled:opacity-50 disabled:cursor-not-allowed">
                <span v-if="isSubmitting">Enviando...</span>
                <span v-else class="flex items-center gap-2">Solicitar Contato <Send class="w-4 h-4" /></span>
              </button>
            </form>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>
