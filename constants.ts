const portalEstibaImg = new URL('./assets/images/portalestibavlc.jpg', import.meta.url).href;
const financeFlowImg = new URL('./assets/images/financeflow.png', import.meta.url).href;
const extraHosteleroImg = new URL('./assets/images/EH.png', import.meta.url).href;
const panelAdminImg = new URL('./assets/images/PanelAdmin.png', import.meta.url).href;
const cashTrackImg = new URL('./assets/images/cashtrack.png', import.meta.url).href;
const erpHosteleriaImg = new URL('./assets/images/erp.png', import.meta.url).href;

export const PROJECTS = [
  {
    id: 1,
    title: "Portal Estiba VLC",
    desc: "Plataforma integral para la gestión y optimización de logística portuaria en tiempo real.",
    category: "SaaS Logístico",
    tags: ["React", "Node.js", "PostgreSQL"],
    img: portalEstibaImg,
    color: "bg-primary/10 text-primary"
  },
  {
    id: 2,
    title: "FinanceFlow",
    desc: "Gestor financiero inteligente con análisis predictivo y visualización de datos avanzada.",
    category: "FinTech",
    tags: ["Flutter", "Firebase", "D3.js"],
    img: financeFlowImg,
    color: "bg-green-500/10 text-green-600"
  },
  {
    id: 3,
    title: "ExtraHostelero",
    desc: "Staff al instante para hostelería, con respuesta rápida y legalización automatizada.",
    category: "Staffing IA",
    tags: ["React", "Supabase", "Realtime"],
    img: extraHosteleroImg,
    color: "bg-orange-500/10 text-orange-600"
  },
  {
    id: 4,
    title: "PanelAdmin",
    desc: "Dashboard administrativo para Portal Estiba VLC con gestión de operaciones, usuarios y planes premium.",
    category: "Admin Ops",
    tags: ["React", "Supabase", "Analytics"],
    img: panelAdminImg,
    color: "bg-slate-500/10 text-slate-600"
  },
  {
    id: 5,
    title: "CashTrack",
    desc: "Control de caja con ingresos, retiros y seguimiento de movimientos en tiempo real.",
    category: "Finanzas",
    tags: ["React", "Supabase", "PWA"],
    img: cashTrackImg,
    color: "bg-emerald-500/10 text-emerald-600"
  },
  {
    id: 6,
    title: "ERP Hostelería",
    desc: "ERP integral para hostelería con gestión de personal, horarios y nóminas.",
    category: "ERP",
    tags: ["Next.js", "TypeScript", "B2B"],
    img: erpHosteleriaImg,
    color: "bg-indigo-500/10 text-indigo-600"
  }
];

// REEMPLAZA ESTOS VALORES CON LOS TUYOS DE SUPABASE
export const SUPABASE_URL = "https://bdtjlnpgnnxeewfsdyjj.supabase.co";
export const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkdGpsbnBnbm54ZWV3ZnNkeWpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg0NjAyNDUsImV4cCI6MjA4NDAzNjI0NX0.2F5dLxgkI09H_PJe1mCpmFAqtgBl-WXmBT0IPTozgV0";
