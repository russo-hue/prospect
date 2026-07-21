"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

const WHATSAPP = "https://wa.me/5511930115929?text=Olá%2C%20quero%20conhecer%20o%20Prospect%20PF";
const SYSTEM = "https://prospect-pf.svssolucoes.com.br/";

const features = [
  ["⏱", "Buscas agendadas", "Configure marca, modelo, ano, faixa de preço, estado e frequência."],
  ["⌕", "Filtros avançados", "Encontre rapidamente anúncios alinhados aos critérios da sua operação."],
  ["▦", "Organização por status", "Separe oportunidades entre novos, contatados, interessados e arquivados."],
  ["◉", "Integração com WhatsApp", "Apoie a abordagem comercial conectando seus canais de atendimento."],
  ["✦", "Regras de mensagem", "Padronize comunicações com critérios e informações de cada anúncio."],
  ["↺", "Histórico dos anúncios", "Acompanhe alterações e mantenha contexto para cada oportunidade."],
  ["◒", "Relatórios operacionais", "Visualize a completude das informações e o andamento da captação."],
  ["⇩", "Exportação de dados", "Leve anúncios e informações para suas análises e processos internos."],
];

const faq = [
  ["O que é o Prospect PF?", "É um sistema de captação de veículos que monitora anúncios de pessoas físicas, centraliza oportunidades e organiza o trabalho da equipe comercial."],
  ["Para quem o sistema foi desenvolvido?", "Para lojas de veículos, garagistas, compradores profissionais, operações de repasse, consignação e grupos automotivos."],
  ["Posso configurar marca, modelo e preço?", "Sim. As buscas podem considerar marca, modelo, ano, faixa de preço, estado e outros critérios disponíveis."],
  ["Com que frequência as buscas são executadas?", "A frequência é configurável conforme as opções disponíveis no sistema e a necessidade da operação."],
  ["O sistema organiza os anúncios encontrados?", "Sim. O painel reúne os anúncios e permite acompanhar novos, contatados, interessados e arquivados."],
  ["É possível integrar o WhatsApp?", "Sim. O Prospect PF oferece conexão com WhatsApp para apoiar a comunicação comercial, sempre sob gestão do cliente e conforme as regras aplicáveis."],
  ["O Prospect PF substitui minha equipe?", "Não. Ele reduz o trabalho operacional para que sua equipe concentre energia na análise, negociação e fechamento."],
  ["É possível exportar os dados?", "Sim. Os anúncios e suas informações podem ser exportados para análise e integração com outros processos."],
  ["Como solicitar uma demonstração?", "Preencha o formulário ou fale diretamente com a equipe da SVS pelo WhatsApp."],
];

function Logo({ small = false }: { small?: boolean }) {
  return <div className="brand"><span className="brand-icon">◆</span><span><b>Prospect <em>PF</em></b>{!small && <small>Uma solução SVS</small>}</span></div>;
}

export function ProspectLanding() {
  const [menu, setMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    window.setTimeout(() => setStatus("success"), 700);
  }

  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "Organization", name: "SVS Soluções em Tecnologia", url: "https://svssolucoes.com.br/", email: "comercial@svssolucoes.com.br" },
    { "@type": "SoftwareApplication", name: "Prospect PF", applicationCategory: "BusinessApplication", operatingSystem: "Web", description: "Sistema de captação de veículos e organização de oportunidades para o mercado automotivo." },
    { "@type": "FAQPage", mainEntity: faq.map(([q,a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }
  ]};

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <a className="skip" href="#conteudo">Pular para o conteúdo</a>
    <header className="header">
      <div className="shell nav"><a href="#inicio" aria-label="Prospect PF - início"><Logo /></a>
        <nav className={menu ? "navlinks open" : "navlinks"} aria-label="Navegação principal">
          <a href="#como-funciona">Como funciona</a><a href="#recursos">Recursos</a><a href="#beneficios">Benefícios</a><a href="#faq">Perguntas</a>
        </nav>
        <div className="nav-actions"><a className="text-link" href={SYSTEM} target="_blank" rel="noreferrer">Entrar no sistema</a><a className="button mini" href="#demonstracao">Agendar demonstração</a></div>
        <button className="menu" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-label="Abrir menu">{menu ? "×" : "☰"}</button>
      </div>
    </header>

    <main id="conteudo">
      <section className="hero" id="inicio"><div className="glow g1"/><div className="glow g2"/>
        <div className="shell hero-grid">
          <div className="hero-copy"><div className="eyebrow"><span/> Tecnologia para captação automotiva</div>
            <h1>Seu funcionário digital para <span>captação de veículos</span></h1>
            <p>O Prospect PF monitora anúncios de pessoas físicas, centraliza oportunidades e ajuda sua equipe a chegar mais rápido aos veículos certos.</p>
            <div className="hero-actions"><a className="button" href="#demonstracao">Agendar uma demonstração <b>→</b></a><a className="button ghost" href="#como-funciona">Ver como funciona</a></div>
            <small className="note">● Apresentação personalizada para sua operação.</small>
          </div>
          <div className="product-stage">
            <div className="window"><div className="window-bar"><i/><i/><i/><span>prospect-pf.svssolucoes.com.br</span></div><Image unoptimized src="/images/dashboard-main.png" alt="Painel real do Prospect PF com indicadores e anúncios de veículos" width={1544} height={867} priority /></div>
            <div className="float-card fc1"><span className="pulse"/><b>Novo anúncio</b><small>Oportunidade identificada</small></div>
            <div className="float-card fc2"><span>✓</span><b>Busca agendada</b><small>Monitoramento ativo</small></div>
          </div>
        </div>
        <div className="shell trust"><span>Busca automatizada</span><span>Monitoramento recorrente</span><span>Painel centralizado</span><span>Integração com WhatsApp</span><span>Relatórios e exportação</span></div>
      </section>

      <section className="section problem"><div className="shell"><div className="kicker">O gargalo da captação</div><h2>A captação manual consome o tempo que deveria ser usado para <span>negociar</span></h2>
        <div className="compare">
          <article className="process manual"><div className="process-head"><span>×</span><div><small>ANTES</small><h3>Processo manual</h3></div></div><p>Pesquisas repetidas, várias abas abertas, dados espalhados e controle em planilhas.</p><ol><li>Pesquisar anúncio por anúncio</li><li>Copiar e organizar informações</li><li>Identificar contatos</li><li>Atualizar controles separados</li></ol></article>
          <div className="versus">VS</div>
          <article className="process automated"><div className="process-head"><span>✓</span><div><small>COM PROSPECT PF</small><h3>Captação organizada</h3></div></div><p>Buscas configuradas, oportunidades centralizadas e acompanhamento em um único fluxo.</p><ol><li>Configure os critérios uma vez</li><li>Monitore novas oportunidades</li><li>Organize por etapa comercial</li><li>Concentre a equipe na negociação</li></ol></article>
        </div>
      </div></section>

      <section className="section how" id="como-funciona"><div className="shell"><div className="section-title"><div><div className="kicker">Como funciona</div><h2>Da busca ao contato, <span>tudo em um só fluxo</span></h2></div><p>Transforme uma rotina fragmentada em um processo claro, configurável e acompanhado pela equipe.</p></div>
        <div className="steps">{[
          ["01","Configure sua busca","Defina marca, modelo, ano, preço, estado e outros critérios."],
          ["02","O sistema monitora","Buscas recorrentes acompanham os anúncios conforme o agendamento."],
          ["03","Centralize oportunidades","Fotos, preço, ano, localização e descrição chegam a um painel único."],
          ["04","Organize e aborde","Classifique os anúncios e use seus canais para conduzir o contato."],
          ["05","Acompanhe a operação","Consulte histórico, execuções, relatórios e exporte informações."],
        ].map(([n,t,d]) => <article key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></article>)}</div>
        <div className="search-demo"><div className="demo-copy"><div className="eyebrow"><span/> Demonstração ilustrativa</div><h3>Uma busca configurada. Um fluxo contínuo de oportunidades.</h3><div className="criteria"><span>Volkswagen</span><span>T-Cross</span><span>2020–2024</span><span>São Paulo</span><span>Com fotos</span><span>Com contato</span></div><p>Busca executada → anúncio centralizado → contato organizado → abordagem comercial → acompanhamento no painel.</p></div><div className="screen-small"><Image unoptimized src="/images/scheduled-search.png" alt="Configuração de uma busca agendada no Prospect PF" width={653} height={662}/></div></div>
      </div></section>

      <section className="section command"><div className="shell"><div className="section-title"><div><div className="kicker">Visão do painel</div><h2>Um centro de comando para sua <span>captação</span></h2></div><p>Centralize as oportunidades e saiba exatamente quais anúncios precisam de atenção.</p></div>
        <div className="dashboard-showcase"><div className="window large"><div className="window-bar"><i/><i/><i/><span>Painel Prospect PF</span></div><Image unoptimized src="/images/dashboard-listings.png" alt="Lista de oportunidades e filtros no painel do Prospect PF" width={837} height={814}/></div>
          <div className="callout c1"><b>01</b><span><strong>Buscas agendadas</strong>Critérios sob medida</span></div><div className="callout c2"><b>02</b><span><strong>Status comerciais</strong>Novos, contatados e interessados</span></div><div className="callout c3"><b>03</b><span><strong>Dados centralizados</strong>Fotos e informações no mesmo lugar</span></div>
        </div>
      </div></section>

      <section className="section" id="recursos"><div className="shell"><div className="section-title"><div><div className="kicker">Recursos</div><h2>Da busca ao processo <span>comercial</span></h2></div><p>Ferramentas para dar ritmo, contexto e organização à captação de veículos.</p></div><div className="feature-grid">{features.map(([icon,t,d],index) => <article className={`feature feature-${index + 1}`} key={t}><div><span className="feature-icon" aria-hidden="true">{icon}</span><i>↗</i></div><h3>{t}</h3><p>{d}</p><span className="card-orbit" aria-hidden="true"/></article>)}</div></div></section>

      <section className="section benefits" id="beneficios"><div className="shell benefit-grid"><div><div className="kicker">Benefícios para a operação</div><h2>Mais tempo para negociar.<br/><span>Mais capacidade para captar.</span></h2><p>Enquanto sua equipe negocia, o Prospect PF continua procurando e organizando oportunidades.</p><a className="button" href="#demonstracao">Conhecer o Prospect PF →</a></div><div className="benefit-list">{["Reduza tarefas repetitivas e controles dispersos","Chegue mais rápido a novas oportunidades","Dê visibilidade ao trabalho da equipe","Acompanhe contatos e interessados com contexto","Escale as buscas sem ampliar o esforço manual na mesma proporção","Centralize dados para decisões comerciais"].map((x,i)=><div key={x}><b>{String(i+1).padStart(2,"0")}</b><span>{x}</span></div>)}</div></div></section>

      <section className="section"><div className="shell"><div className="compare-title"><div className="kicker">Antes e depois</div><h2>Transforme captação manual em <span>processo</span></h2></div><div className="comparison-table"><div className="table-col without"><h3>Sem Prospect PF</h3>{["Pesquisas manuais","Várias abas abertas","Dados espalhados","Controle por planilhas","Abordagem mais lenta","Maior carga operacional"].map(x=><p key={x}>× {x}</p>)}</div><div className="table-col with"><div className="recommended">FLUXO ORGANIZADO</div><h3>Com Prospect PF</h3>{["Buscas configuradas","Painel centralizado","Organização por status","Regras de mensagens","Histórico e relatórios","Processo mais escalável"].map(x=><p key={x}>✓ {x}</p>)}</div></div></div></section>

      <section className="section audience"><div className="shell"><div className="kicker">Feito para o mercado automotivo</div><h2>Criado para quem vive de <span>encontrar bons veículos</span></h2><div className="audience-grid">{[["Lojas de veículos","Organize a captação e dê foco aos compradores."],["Consignação","Monitore oportunidades alinhadas ao perfil da agência."],["Compradores profissionais","Concentre análises e contatos em um único painel."],["Empresas de repasse","Acompanhe múltiplos critérios com mais organização."],["Grupos automotivos","Dê visibilidade ao fluxo de diferentes equipes."],["Equipes de captação","Reduza a rotina manual e priorize a negociação."]].map(([t,d],i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>

      <section className="section faq" id="faq"><div className="shell faq-grid"><div><div className="kicker">Perguntas frequentes</div><h2>O que você precisa saber antes de <span>começar</span></h2><p>Não encontrou sua dúvida? Fale diretamente com a equipe da SVS.</p><a href={WHATSAPP} target="_blank" rel="noreferrer" className="text-cta">Falar no WhatsApp ↗</a></div><div className="accordion">{faq.map(([q,a],i)=><div className="faq-item" key={q}><button onClick={()=>setOpenFaq(openFaq===i?null:i)} aria-expanded={openFaq===i}><span>{q}</span><b>{openFaq===i?"−":"+"}</b></button>{openFaq===i&&<p>{a}</p>}</div>)}</div></div></section>

      <section className="section demo" id="demonstracao"><div className="shell demo-grid"><div className="demo-pitch"><div className="eyebrow"><span/> Demonstração personalizada</div><h2>Pronto para transformar sua <span>captação de veículos?</span></h2><p>Veja como centralizar buscas, oportunidades e contatos em um único processo adaptado à sua operação.</p><div className="demo-points"><span>✓ Converse diretamente com nossa equipe</span><span>✓ Conheça o fluxo usando situações reais</span><span>✓ Tire dúvidas sobre a sua operação</span></div><div className="svs-sign"><Image unoptimized src="/images/svs-logo.png" alt="SVS Soluções" width={64} height={64}/><span><small>DESENVOLVIDO POR</small><b>SVS Soluções em Tecnologia</b></span></div></div>
        <form className="lead-form" onSubmit={submit}><div className="form-head"><span>Agende sua demonstração</span><small>Retorno em horário comercial</small></div><div className="fields"><label>Nome *<input name="nome" required placeholder="Seu nome"/></label><label>Empresa *<input name="empresa" required placeholder="Nome da empresa"/></label><label>WhatsApp *<input name="telefone" required inputMode="tel" placeholder="(00) 00000-0000"/></label><label>E-mail *<input name="email" required type="email" placeholder="voce@empresa.com.br"/></label><label>Cidade e estado<input name="local" placeholder="São Paulo, SP"/></label><label>Veículos em estoque<select name="estoque" defaultValue=""><option value="" disabled>Selecione</option><option>Até 20</option><option>21 a 50</option><option>51 a 100</option><option>Mais de 100</option></select></label><label className="full">Como realiza a captação hoje?<textarea name="mensagem" rows={3} placeholder="Conte brevemente sobre sua operação"/></label></div><label className="consent"><input type="checkbox" required/> <span>Autorizo o contato da SVS e li a <Link href="/politica-de-privacidade">Política de Privacidade</Link>.</span></label><button className="button submit" disabled={status==="sending"}>{status==="sending"?"Enviando...":status==="success"?"Solicitação registrada ✓":"Solicitar demonstração →"}</button>{status==="success"&&<p className="form-message">Demonstração registrada neste ambiente. Para atendimento imediato, fale pelo WhatsApp.</p>}<small className="form-note">Seus dados serão usados somente para atender esta solicitação.</small></form>
      </div></section>
    </main>

    <footer><div className="shell footer-grid"><div><Logo/><p>Automação e organização para o processo de captação automotiva.</p></div><div><b>Produto</b><a href="#como-funciona">Como funciona</a><a href="#recursos">Recursos</a><a href={SYSTEM}>Entrar no sistema</a></div><div><b>SVS Soluções</b><a href="https://svssolucoes.com.br/">Site institucional</a><a href="mailto:comercial@svssolucoes.com.br">comercial@svssolucoes.com.br</a><a href={WHATSAPP}>WhatsApp comercial</a></div><div><b>Legal</b><Link href="/politica-de-privacidade">Política de Privacidade</Link><Link href="/termos-de-uso">Termos de Uso</Link></div></div><div className="shell footer-bottom"><span>© 2026 SVS Soluções em Tecnologia. Todos os direitos reservados.</span><span>Prospect PF é uma solução desenvolvida pela SVS.</span></div></footer>
    <a className="whatsapp-float" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Falar com a SVS no WhatsApp">◉ <span>Falar no WhatsApp</span></a>
  </>;
}
