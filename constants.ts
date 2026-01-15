const portalEstibaImg = new URL('./assets/images/portalestibavlc.jpg', import.meta.url).href;
const financeFlowImg = new URL('./assets/images/financeflow.png', import.meta.url).href;

export const PROJECTS = [
  {
    id: 1,
    title: "Portal Estiba VLC",
    desc: "Plataforma integral para la gestiÃ³n y optimizaciÃ³n de logÃ­stica portuaria en tiempo real.",
    category: "SaaS LogÃ­stico",
    tags: ["React", "Node.js", "PostgreSQL"],
    img: portalEstibaImg,
    color: "bg-primary/10 text-primary"
  },
  {
    id: 2,
    title: "FinanceFlow",
    desc: "Gestor financiero inteligente con anÃ¡lisis predictivo y visualizaciÃ³n de datos avanzada.",
    category: "FinTech",
    tags: ["Flutter", "Firebase", "D3.js"],
    img: financeFlowImg,
    color: "bg-green-500/10 text-green-600"
  }
];

// REEMPLAZA ESTOS VALORES CON LOS TUYOS DE SUPABASE
export const SUPABASE_URL = "https://your-project-url.supabase.co";
export const SUPABASE_ANON_KEY = "your-anon-key";
