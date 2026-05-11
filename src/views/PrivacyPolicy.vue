<script setup lang="ts">
const lastUpdate = new Date().toLocaleDateString('pt-BR');
</script>

<template>
  <div class="mx-auto max-w-4xl px-4 pt-32 pb-16 sm:px-6 lg:px-8">
    <h1 class="mb-8 text-4xl font-black text-white">Política de Privacidade</h1>
    
    <div class="space-y-8 text-white text-justify">
      <p class="text-sm italic">
        Última atualização: {{ lastUpdate }}
      </p>

      <section>
        <h2 class="mb-4 text-2xl font-bold text-white">1. Introdução</h2>
        <p>
          A <strong>SOMA+ Tecnologia Ltda.</strong> ("SOMA+", "Nós" ou "Empresa"), inscrita no CNPJ sob o nº <strong>12.345.678/0001-99</strong>, valoriza a sua privacidade e está comprometida com a proteção dos seus dados pessoais. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos as informações que você nos fornece ao utilizar nosso site (somamais.ia.br) e nossos serviços, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018).
        </p>
      </section>

      <section>
        <h2 class="mb-4 text-2xl font-bold text-white">2. Dados Coletados</h2>
        <p>
          Coletamos informações que você nos fornece voluntariamente ao se cadastrar, entrar em contato conosco ou utilizar nossos serviços. Isso pode incluir:
        </p>
        <ul class="list-disc pl-5 mt-2 space-y-2">
          <li><strong>Informações de Identificação:</strong> Nome, CPF, e-mail, telefone e endereço.</li>
          <li><strong>Informações Profissionais:</strong> Nome da empresa e cargo (quando aplicável).</li>
          <li><strong>Dados de Acesso:</strong> Endereço IP, tipo de navegador, páginas visitadas e horários de acesso.</li>
          <li><strong>Conteúdo do Usuário:</strong> Dados e documentos que você envia para processamento através de nossas ferramentas de IA e automação.</li>
        </ul>
      </section>

      <section>
        <h2 class="mb-4 text-2xl font-bold text-white">3. Finalidade do Tratamento</h2>
        <p>
          Utilizamos os seus dados pessoais para as seguintes finalidades:
        </p>
        <ul class="list-disc pl-5 mt-2 space-y-2">
          <li>Prestação e entrega das nossas soluções tecnológicas;</li>
          <li>Personalização da sua experiência com nossos serviços de IA;</li>
          <li>Comunicação sobre atualizações, suporte técnico e novidades;</li>
          <li>Garantia da segurança dos nossos sistemas e prevenção de fraudes;</li>
          <li>Cumprimento de obrigações legais e regulatórias.</li>
        </ul>
      </section>

      <section>
        <h2 class="mb-4 text-2xl font-bold text-white">4. Compartilhamento de Dados</h2>
        <p>
          A SOMA+ não vende ou comercializa seus dados pessoais. Podemos compartilhar suas informações com terceiros apenas nas seguintes situações:
        </p>
        <ul class="list-disc pl-5 mt-2 space-y-2">
          <li><strong>Provedores de Serviços:</strong> Parceiros que auxiliam na operação do nosso site e infraestrutura de nuvem (ex: provedores de hospedagem e serviços de IA), sob rigorosos contratos de confidencialidade.</li>
          <li><strong>Autoridades Legais:</strong> Quando exigido por lei, decisão judicial ou requisição de autoridade competente.</li>
          <li><strong>Com seu Consentimento:</strong> Em outros casos, mediante sua autorização prévia e expressa.</li>
        </ul>
      </section>

      <section>
        <h2 class="mb-4 text-2xl font-bold text-white">5. Segurança da Informação</h2>
        <p>
          Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acessos não autorizados, perda, destruição ou alteração. Isso inclui criptografia, firewalls e controles de acesso restrito. No entanto, nenhum sistema é 100% seguro, e trabalhamos continuamente para mitigar riscos.
        </p>
      </section>

      <section>
        <h2 class="mb-4 text-2xl font-bold text-white">6. Seus Direitos (LGPD)</h2>
        <p>
          Como titular dos dados, você possui direitos garantidos pela LGPD, incluindo:
        </p>
        <ul class="list-disc pl-5 mt-2 space-y-2">
          <li>Confirmação da existência de tratamento;</li>
          <li>Acesso aos seus dados pessoais;</li>
          <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
          <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
          <li>Portabilidade dos dados a outro fornecedor de serviço;</li>
          <li>Revogação do consentimento, quando aplicável.</li>
        </ul>
      </section>

      <section>
        <h2 class="mb-4 text-2xl font-bold text-white">7. Cookies e Tecnologias de Rastreamento</h2>
        <p>
          Utilizamos cookies para melhorar a navegação e entender como os usuários interagem com nosso site. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar a funcionalidade de algumas partes dos nossos serviços.
        </p>
      </section>

      <section>
        <h2 class="mb-4 text-2xl font-bold text-white">8. Retenção de Dados</h2>
        <p>
          Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta política ou para cumprir obrigações legais de guarda de documentos.
        </p>
      </section>

      <section>
        <h2 class="mb-4 text-2xl font-bold text-white">9. Contato</h2>
        <p>
          Se você tiver dúvidas sobre esta Política de Privacidade ou desejar exercer seus direitos de titular, entre em contato com nosso Encarregado de Proteção de Dados (DPO) através do e-mail: <strong>contact@somamais.ia.br</strong>.
        </p>
      </section>

      <section class="pt-8 border-t border-white/20">
        <p class="font-bold">SOMA+ Tecnologia Ltda.</p>
        <p>CNPJ: 12.345.678/0001-99</p>
        <p>São Paulo - SP, Brasil</p>
      </section>
    </div>
  </div>
</template>
