import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  Camera,
  Check,
  ChevronRight,
  CreditCard,
  Eye,
  FileVideo,
  History,
  Layers3,
  Mail,
  Menu,
  PackageSearch,
  Plug,
  ScanLine,
  ShieldCheck,
  Store,
  TimerReset,
  TriangleAlert,
  UsersRound,
  X,
} from "lucide-react";
import { FormEvent, ReactNode, useEffect, useState } from "react";
import howItWorksImage from "../imgs/how-it-works.png";
import mainHeadImage from "../imgs/main-head.png";
import operationImage from "../imgs/operation.png";

type IconType = typeof Camera;
type FocusedImage = {
  src: string;
  alt: string;
};

const navLinks = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "IA na operação", href: "#ia-operacao" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Piloto", href: "#piloto" },
  { label: "Contato", href: "#contato" },
];

const problemCards = [
  {
    icon: FileVideo,
    title: "Revisão manual de câmeras",
    text: "Horas de gravação viram uma fila operacional difícil de priorizar.",
  },
  {
    icon: CreditCard,
    title: "Câmeras e pagamentos separados",
    text: "Eventos visuais e registros financeiros nem sempre são analisados em conjunto.",
  },
  {
    icon: BarChart3,
    title: "Perdas pequenas que se acumulam",
    text: "Inconsistências recorrentes podem reduzir margem sem chamar atenção no dia a dia.",
  },
];

const trendCards = [
  {
    icon: Camera,
    title: "Câmeras como fonte de eventos",
    text: "Em vez de servirem apenas como gravação passiva, as câmeras podem ajudar a identificar entrada, saída e interação com áreas de produto.",
  },
  {
    icon: ShieldCheck,
    title: "IA como apoio operacional",
    text: "A IA organiza sinais visuais e prioriza eventos que merecem atenção, sem substituir a análise humana.",
  },
  {
    icon: CreditCard,
    title: "Pagamento como contexto",
    text: "Ao cruzar eventos visuais com pagamentos confirmados, o sistema reduz ruído e torna os alertas mais úteis para a operação.",
  },
];

const flowSteps = [
  {
    icon: Camera,
    title: "Sessão de compra",
    text: "A IA identifica presença, movimentação e permanência em áreas de interesse.",
  },
  {
    icon: PackageSearch,
    title: "Interação visual",
    text: "O sistema destaca momentos de possível interação com produtos.",
  },
  {
    icon: CreditCard,
    title: "Cruzamento de dados",
    text: "Os eventos visuais são cruzados com pagamentos confirmados no período.",
  },
  {
    icon: UsersRound,
    title: "Revisão humana",
    text: "Quando há possível inconsistência, um alerta com clipe curto é enviado para análise.",
  },
];

const aiHelpCards = [
  {
    icon: UsersRound,
    title: "Detecta sessões de compra",
    text: "A IA identifica quando uma pessoa entra, circula e sai do ambiente.",
  },
  {
    icon: ScanLine,
    title: "Observa áreas importantes",
    text: "O sistema monitora regiões como prateleiras, geladeiras, entrada e totem.",
  },
  {
    icon: TriangleAlert,
    title: "Prioriza eventos suspeitos",
    text: "Quando há interação com produtos sem pagamento correspondente, o sistema destaca o evento.",
  },
  {
    icon: ShieldCheck,
    title: "Mantém o humano no controle",
    text: "Os alertas são enviados com clipes curtos para que a equipe faça a revisão final.",
  },
];

const alertCards = [
  { icon: Store, title: "Entrada e saída sem pagamento associado" },
  { icon: Layers3, title: "Interação com prateleira sem transação confirmada" },
  { icon: TriangleAlert, title: "Sessões suspeitas para revisão posterior" },
  { icon: History, title: "Histórico de alertas e clipes curtos" },
];

const benefits = [
  { icon: TimerReset, title: "Redução de tempo revisando câmeras" },
  { icon: ShieldCheck, title: "Mais controle sobre perdas" },
  { icon: BadgeCheck, title: "Auditoria baseada em evidências" },
  { icon: Building2, title: "Operação mais escalável" },
  { icon: Plug, title: "Integração com câmeras e pagamentos" },
  { icon: ScanLine, title: "Alertas assistidos por IA em poucas unidades" },
];

const pilotItems = [
  "1 unidade inicial",
  "1 câmera principal",
  "Integração com sistema de pagamento",
  "Alertas de inconsistência",
  "Relatório simples de eventos",
  "Feedback para evolução do produto",
];

const faqs = [
  {
    question: "O sistema identifica o produto exato?",
    answer:
      "Na fase inicial, o foco é detectar sessões e possíveis inconsistências entre interação visual e pagamento. A identificação detalhada de produtos pode entrar em fases futuras.",
  },
  {
    question: "O sistema acusa clientes automaticamente?",
    answer: "Não. Ele gera alertas para revisão humana.",
  },
  {
    question: "Preciso trocar minhas câmeras?",
    answer:
      "A ideia inicial é aproveitar câmeras já existentes, desde que seja possível acessar o vídeo de forma segura.",
  },
  {
    question: "Funciona com app, totem ou maquininha?",
    answer:
      "Sim, desde que seja possível acessar ou importar os registros de pagamento.",
  },
  {
    question: "O piloto já está disponível?",
    answer:
      "Sim. Estamos abrindo conversas com operadores selecionados em Fortaleza, CE e Região Metropolitana para validar a solução em ambiente real.",
  },
  {
    question: "O piloto está disponível em qualquer cidade?",
    answer:
      "Neste primeiro momento, os testes pilotos estão disponíveis apenas para Fortaleza, CE e Região Metropolitana. Essa limitação permite acompanhar de perto as primeiras operações, validar integrações técnicas e evoluir a solução com parceiros locais.",
  },
];

function App() {
  const [focusedImage, setFocusedImage] = useState<FocusedImage | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 text-ink">
      <Header />
      <main>
        <Hero onImageFocus={setFocusedImage} />
        <Problem />
        <HowItWorks onImageFocus={setFocusedImage} />
        <AIHelp onImageFocus={setFocusedImage} />
        <GlobalTrend />
        <Alerts />
        <Benefits />
        <Pilot />
        <Pricing />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <ImageLightbox image={focusedImage} onClose={() => setFocusedImage(null)} />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slateLine/80 bg-white/92 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="MarketWatch">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-white">
            <Eye className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-xl font-semibold tracking-normal text-ink">MarketWatch</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-trust">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#piloto"
          className="hidden rounded-lg bg-ink px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-trust md:inline-flex"
        >
          Participar do piloto
        </a>

        <button
          className="rounded-lg border border-slateLine p-2 text-ink md:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slateLine bg-white px-5 py-4 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-4 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a
              href="#piloto"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-lg bg-ink px-4 py-3 font-semibold text-white"
            >
              Participar do piloto
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero({ onImageFocus }: { onImageFocus: (image: FocusedImage) => void }) {
  return (
    <section id="top" className="overflow-hidden bg-white">
      <div className="mx-auto grid max-w-[92rem] items-center gap-10 px-5 pb-20 pt-16 lg:grid-cols-[0.82fr_1.18fr] lg:px-8 lg:pb-24 lg:pt-20 xl:gap-14">
        <div>
          <h1 className="mt-7 max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-ink sm:text-5xl lg:text-6xl">
            IA para auditoria de mercadinhos autônomos
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Cruze câmeras, pagamentos e eventos operacionais para identificar possíveis inconsistências com mais rapidez, sempre com revisão humana.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-900">
            <span className="h-2 w-2 rounded-full bg-success" />
            Piloto inicial disponível em Fortaleza, CE e Região Metropolitana.
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#piloto"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-trust"
            >
              Quero testar em uma unidade
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slateLine bg-white px-5 py-3 text-base font-semibold text-ink transition hover:border-trust hover:text-trust"
            >
              Ver como funciona
              <ChevronRight className="h-5 w-5" />
            </a>
          </div>
        </div>

        <HeroImage onImageFocus={onImageFocus} />
      </div>
    </section>
  );
}

function HeroImage({ onImageFocus }: { onImageFocus: (image: FocusedImage) => void }) {
  const alt =
    "Ilustração da solução MarketWatch cruzando eventos de câmera, interação com prateleira, verificação de pagamento e revisão humana";

  return (
    <div className="relative lg:-mr-6 xl:-mr-10">
      <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-emerald-100/70 blur-3xl" />
      <div className="absolute -right-8 bottom-10 h-44 w-44 rounded-full bg-sky-100/80 blur-3xl" />
      <button
        type="button"
        onClick={() => onImageFocus({ src: mainHeadImage, alt })}
        className="group relative block w-full overflow-hidden rounded-2xl border border-slateLine bg-white p-2 text-left shadow-soft outline-none transition hover:-translate-y-1 focus:ring-4 focus:ring-trust/15"
        aria-label="Abrir ilustração da solução em foco"
      >
        <img
          src={mainHeadImage}
          alt={alt}
          className="aspect-[16/9] w-full rounded-xl object-cover object-center"
        />
        <span className="absolute bottom-5 right-5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-ink shadow-sm opacity-0 transition group-hover:opacity-100 group-focus:opacity-100">
          Ver em detalhes
        </span>
      </button>
    </div>
  );
}

function AuditMockup() {
  const events = [
    { label: "Pessoa detectada", status: "Sessão iniciada", icon: UsersRound },
    { label: "Interação com prateleira", status: "Evento marcado", icon: PackageSearch },
    { label: "Pagamento não encontrado", status: "Janela analisada", icon: CreditCard },
    { label: "Alerta para revisão", status: "Clipe de 18s", icon: FileVideo },
  ];

  return (
    <div className="relative">
      <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-emerald-100/70 blur-3xl" />
      <div className="absolute -right-8 bottom-10 h-44 w-44 rounded-full bg-sky-100/80 blur-3xl" />
      <div className="relative rounded-2xl border border-slateLine bg-white p-4 shadow-soft sm:p-5">
        <div className="rounded-xl border border-slateLine bg-slate-950 p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-300">Unidade Jardim Norte</p>
              <p className="mt-1 text-xl font-semibold">Auditoria de sessão</p>
            </div>
            <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-200">
              Em revisão
            </span>
          </div>

          <div className="mt-5 grid gap-3 rounded-lg bg-slate-900 p-3 sm:grid-cols-[1.2fr_0.8fr]">
            <div className="relative min-h-52 overflow-hidden rounded-lg bg-slate-800">
              <div className="absolute inset-x-0 top-0 flex items-center justify-between bg-slate-950/60 px-3 py-2 text-xs text-slate-300">
                <span>CAM 01 • Entrada</span>
                <span>18:42:11</span>
              </div>
              <div className="absolute bottom-4 left-5 right-5">
                <div className="h-28 rounded-lg border border-dashed border-slate-500 bg-slate-700/80" />
                <div className="mt-4 grid grid-cols-4 gap-2">
                  <div className="h-12 rounded bg-slate-700" />
                  <div className="h-12 rounded bg-slate-600" />
                  <div className="h-12 rounded bg-slate-700" />
                  <div className="h-12 rounded bg-slate-600" />
                </div>
              </div>
              <div className="absolute left-1/2 top-20 h-20 w-12 -translate-x-1/2 rounded-full border-2 border-emerald-300 bg-emerald-400/10" />
              <div className="absolute left-[56%] top-28 h-12 w-20 rounded-md border border-amber-300 bg-amber-300/10" />
            </div>

            <div className="rounded-lg border border-slate-700 bg-slate-950 p-3">
              <p className="text-xs font-semibold uppercase text-slate-400">Resumo</p>
              <div className="mt-4 space-y-3">
                <Metric label="Duração" value="02m 31s" />
                <Metric label="Pagamento" value="Não localizado" warn />
                <Metric label="Clipe" value="18 segundos" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {events.map((event) => (
            <div key={event.label} className="rounded-xl border border-slateLine bg-slate-50 p-4">
              <div className="flex gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-trust shadow-sm">
                  <event.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-ink">{event.label}</p>
                  <p className="mt-1 text-sm text-slate-600">{event.status}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value, warn = false }: { label: string; value: string; warn?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-3 text-sm">
      <span className="text-slate-400">{label}</span>
      <span className={warn ? "font-semibold text-amber-200" : "font-semibold text-white"}>
        {value}
      </span>
    </div>
  );
}

function Problem() {
  return (
    <Section id="problema" eyebrow="O problema" title="Auditoria manual consome tempo e margem">
      <p className="mx-auto max-w-3xl text-center text-lg leading-8 text-slate-600">
        Em mercadinhos autônomos, pequenos desvios, erros de pagamento e revisões manuais podem consumir tempo da operação e reduzir margem. Muitas vezes, a equipe só descobre uma inconsistência depois de horas revisando câmeras ou conferindo estoque.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {problemCards.map((card) => (
          <FeatureCard key={card.title} icon={card.icon} title={card.title} text={card.text} />
        ))}
      </div>
    </Section>
  );
}

function GlobalTrend() {
  return (
    <Section
      id="tendencia-global"
      eyebrow="Tendência global"
      title="Uma tendência global aplicada aos mercadinhos autônomos"
      muted
    >
      <p className="mx-auto max-w-4xl text-center text-lg leading-8 text-slate-600">
        Soluções modernas de visão computacional no varejo já usam IA para entender jornadas dentro da loja, detectar interações com produtos e gerar alertas operacionais em tempo real. O MarketWatch aplica essa tendência de forma simples e focada: cruzar eventos das câmeras com pagamentos confirmados para ajudar operadores de mercadinhos autônomos a revisar menos gravações e encontrar possíveis inconsistências mais rápido.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {trendCards.map((card) => (
          <FeatureCard key={card.title} icon={card.icon} title={card.title} text={card.text} />
        ))}
      </div>
      <div className="mt-8 rounded-xl border border-amber-300 bg-amber-100 p-5 text-center text-base font-semibold leading-7 text-amber-950 shadow-sm">
        O MarketWatch está em fase de piloto e não promete detecção automática de furtos. A proposta é auditoria assistida por IA, com revisão humana.
      </div>
    </Section>
  );
}

function HowItWorks({ onImageFocus }: { onImageFocus: (image: FocusedImage) => void }) {
  const alt =
    "Fluxo de funcionamento do MarketWatch: entrada, interação, pagamento e alerta para revisão humana";

  return (
    <Section
      id="como-funciona"
      eyebrow="Como funciona"
      title="IA aplicada à auditoria, com decisão final humana"
      muted
    >
      <button
        type="button"
        onClick={() => onImageFocus({ src: howItWorksImage, alt })}
        className="group mb-10 block overflow-hidden rounded-2xl border border-slateLine bg-white p-2 text-left shadow-soft outline-none transition hover:-translate-y-1 focus:ring-4 focus:ring-trust/15"
        aria-label="Abrir imagem de como funciona em foco"
      >
        <img
          src={howItWorksImage}
          alt={alt}
          className="aspect-[16/9] w-full rounded-xl object-cover object-center"
        />
        <span className="sr-only">Clique para ampliar a imagem</span>
      </button>
      <div className="grid gap-5 lg:grid-cols-4">
        {flowSteps.map((step, index) => (
          <div key={step.title} className="relative rounded-xl border border-slateLine bg-white p-6 shadow-sm">
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-trust/10 text-trust">
              <step.icon className="h-6 w-6" />
            </span>
            <span className="mt-6 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
              Passo {index + 1}
            </span>
            <h3 className="mt-4 text-lg font-semibold text-ink">{step.title}</h3>
            <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ImageLightbox({ image, onClose }: { image: FocusedImage | null; onClose: () => void }) {
  useEffect(() => {
    if (!image) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [image, onClose]);

  if (!image) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Imagem em foco"
      onClick={onClose}
    >
      <div className="relative max-h-full w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink shadow-sm transition hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-white/40"
          aria-label="Fechar imagem"
        >
          <X className="h-5 w-5" />
        </button>
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-[88vh] w-full rounded-2xl bg-white object-contain shadow-soft"
        />
      </div>
    </div>
  );
}

function AIHelp({ onImageFocus }: { onImageFocus: (image: FocusedImage) => void }) {
  const alt =
    "Ilustração do MarketWatch conectado à operação atual com câmeras existentes, pagamentos e revisão humana";

  return (
    <Section
      id="ia-operacao"
      eyebrow="Auditoria assistida por IA"
      title="Como a IA ajuda na operação"
    >
      <button
        type="button"
        onClick={() => onImageFocus({ src: operationImage, alt })}
        className="group mb-10 block overflow-hidden rounded-2xl border border-slateLine bg-white p-2 text-left shadow-soft outline-none transition hover:-translate-y-1 focus:ring-4 focus:ring-trust/15"
        aria-label="Abrir imagem da IA na operação em foco"
      >
        <img
          src={operationImage}
          alt={alt}
          className="aspect-[16/9] w-full rounded-xl object-cover object-center"
        />
        <span className="sr-only">Clique para ampliar a imagem</span>
      </button>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {aiHelpCards.map((card) => (
          <FeatureCard key={card.title} icon={card.icon} title={card.title} text={card.text} />
        ))}
      </div>
      <div className="mt-8 rounded-xl border border-amber-300 bg-amber-100 p-5 text-center text-base font-semibold leading-7 text-amber-950 shadow-sm">
        O MarketWatch não acusa clientes automaticamente. A IA atua como uma camada de apoio operacional, organizando eventos e evidências para revisão humana.
      </div>
    </Section>
  );
}

function Alerts() {
  return (
    <Section id="alertas" eyebrow="Alertas com IA" title="Eventos operacionais que merecem atenção">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {alertCards.map((card) => (
          <CompactCard key={card.title} icon={card.icon} title={card.title} />
        ))}
      </div>
    </Section>
  );
}

function Benefits() {
  return (
    <Section id="beneficios" eyebrow="Benefícios" title="Mais controle com menos esforço operacional" muted>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => (
          <CompactCard key={benefit.title} icon={benefit.icon} title={benefit.title} />
        ))}
      </div>
    </Section>
  );
}

function Pilot() {
  return (
    <section id="piloto" className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-2xl border border-slateLine bg-ink p-6 text-white shadow-soft md:p-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-sm font-semibold uppercase text-emerald-200">Piloto inicial</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
            Valide em uma unidade antes de escalar
          </h2>
          <p className="mt-5 leading-8 text-slate-300">
            Estamos selecionando operadores de mercadinhos autônomos em Fortaleza, CE e Região Metropolitana para um piloto inicial com acompanhamento próximo, escopo reduzido e custo acessível.
          </p>
          <div className="mt-5 inline-flex rounded-full border border-emerald-300/30 bg-white/10 px-3 py-1.5 text-sm font-semibold text-emerald-100">
            Piloto local · Fortaleza e Região Metropolitana
          </div>
          <a
            href="#contato"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-ink transition hover:bg-emerald-50"
          >
            Quero participar do piloto
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {pilotItems.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.07] p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-ink">
                <Check className="h-4 w-4" />
              </span>
              <span className="font-medium text-slate-100">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <Section id="preco" eyebrow="Preço inicial" title="Plano para os primeiros parceiros">
      <div className="mx-auto max-w-2xl rounded-2xl border border-slateLine bg-white p-6 shadow-soft sm:p-8">
        <div className="flex flex-col justify-between gap-5 border-b border-slateLine pb-6 sm:flex-row sm:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-trust">Piloto</p>
            <h3 className="mt-2 text-3xl font-semibold text-ink">A partir de R$ 299/mês por unidade</h3>
          </div>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-success">
            Primeiros parceiros
          </span>
        </div>
        <p className="mt-6 leading-8 text-slate-600">
          Preço especial para os primeiros parceiros, focado em validação e evolução conjunta da solução.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {["Sem fidelidade longa", "Escopo definido em conjunto", "Acompanhamento próximo", "Ideal para validar em uma unidade"].map((item) => (
            <div key={item} className="flex items-center gap-3 text-slate-700">
              <Check className="h-5 w-5 text-success" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 rounded-lg bg-slate-50 p-4 text-sm leading-6 text-slate-600">
          O valor pode variar conforme número de câmeras, forma de acesso às imagens e integração com pagamentos.
        </p>
        <p className="mt-3 rounded-lg bg-amber-50 p-4 text-sm font-medium leading-6 text-emerald-950">
          Disponível inicialmente apenas para Fortaleza, CE e Região Metropolitana.
        </p>
      </div>
    </Section>
  );
}

function FAQ() {
  return (
    <Section id="faq" eyebrow="FAQ" title="Perguntas frequentes" muted>
      <div className="mx-auto max-w-3xl divide-y divide-slateLine rounded-2xl border border-slateLine bg-white">
        {faqs.map((faq) => (
          <details key={faq.question} className="group p-5 open:bg-slate-50 sm:p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
              {faq.question}
              <ChevronRight className="h-5 w-5 shrink-0 text-slate-400 transition group-open:rotate-90" />
            </summary>
            <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-semibold leading-tight text-ink sm:text-4xl">
          Quer reduzir o tempo de auditoria do seu mercadinho autônomo?
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          Se você opera mercadinhos autônomos em Fortaleza, CE ou Região Metropolitana, participe do piloto e teste uma forma mais inteligente de cruzar câmeras, pagamentos e alertas operacionais.
        </p>
        <a
          href="#contato"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 font-semibold text-white transition hover:bg-trust"
        >
          Falar sobre o piloto
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section id="contato" className="bg-slate-50 px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase text-trust">Contato</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Converse sobre o piloto da MarketWatch
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            Envie os dados da sua operação para avaliarmos escopo, integrações disponíveis e próximos passos do piloto com alertas assistidos por IA.
          </p>
          <a
            href="mailto:jeancs.patricio@gmail.com?subject=Interesse%20no%20piloto%20MarketWatch"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-trust hover:text-ink"
          >
            <Mail className="h-5 w-5" />
            jeancs.patricio@gmail.com
          </a>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-slateLine bg-white p-5 shadow-sm sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input label="Nome" name="name" placeholder="Seu nome" />
            <Input label="Empresa" name="company" placeholder="Nome da operação" />
            <Input label="E-mail" name="email" type="email" placeholder="voce@empresa.com.br" />
            <Input label="Cidade da operação" name="city" placeholder="Ex: Fortaleza, Caucaia, Eusébio, Maracanaú..." />
            <Input label="Unidades" name="stores" placeholder="Ex.: 3 unidades" />
          </div>
          <label className="mt-4 block">
            <span className="text-sm font-semibold text-ink">Contexto da operação</span>
            <textarea
              name="message"
              rows={4}
              className="mt-2 w-full rounded-lg border border-slateLine px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-trust focus:ring-4 focus:ring-trust/10"
              placeholder="Conte quais câmeras e formas de pagamento você usa hoje."
            />
          </label>
          <button
            type="submit"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 font-semibold text-white transition hover:bg-trust sm:w-auto"
          >
            Enviar interesse
            <ArrowRight className="h-5 w-5" />
          </button>
          {sent && (
            <p className="mt-4 rounded-lg bg-emerald-50 p-3 text-sm font-medium text-emerald-900">
              Interesse registrado para simulação. Em produção, este formulário pode ser conectado a CRM, WhatsApp ou e-mail.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slateLine bg-white px-5 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-base font-semibold text-ink">MarketWatch</p>
          <p className="mt-1">Auditoria assistida por IA para operações autônomas</p>
          <p className="mt-1">jeancs.patricio@gmail.com</p>
        </div>
        <div className="flex flex-wrap gap-5">
          <a href="#contato" className="hover:text-trust">
            Política de privacidade
          </a>
          <a href="#contato" className="hover:text-trust">
            Termos
          </a>
          <a href="#contato" className="hover:text-trust">
            Contato
          </a>
        </div>
      </div>
    </footer>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
  muted = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  muted?: boolean;
}) {
  return (
    <section id={id} className={`${muted ? "bg-slate-50" : "bg-white"} px-5 py-20 lg:px-8`}>
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-11 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase text-trust">{eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, text }: { icon: IconType; title: string; text: string }) {
  return (
    <div className="rounded-xl border border-slateLine bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-trust/10 text-trust">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function CompactCard({ icon: Icon, title }: { icon: IconType; title: string }) {
  return (
    <div className="rounded-xl border border-slateLine bg-white p-5 shadow-sm">
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-50 text-trust">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-4 font-semibold leading-6 text-ink">{title}</h3>
    </div>
  );
}

function Input({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-ink">{label}</span>
      <input
        name={name}
        type={type}
        className="mt-2 w-full rounded-lg border border-slateLine px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-trust focus:ring-4 focus:ring-trust/10"
        placeholder={placeholder}
      />
    </label>
  );
}

export default App;
