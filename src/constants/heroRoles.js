import { Shield, Sword, HeartPulse } from "lucide-react";

const HERO_ROLES = {
  tank: { label: "Tanque", colorClass: "bg-blue-500/20 text-blue-400", Icon: Shield },

  damage: { label: "Dano", colorClass: "bg-red-500/20 text-red-400", Icon: Sword },

  support: { label: "Suporte", colorClass: "bg-emerald-500/20 text-emerald-400", Icon: HeartPulse },
};

const DEFAULT_ROLE_CONFIG = {
  label: "Desconhecido",

  colorClass: "bg-slate-500/20 text-slate-300",
  
  Icon: Shield,
};

/**
 * @param {string} role
 */
export function getRoleConfig(role) {
  return HERO_ROLES[role] ?? DEFAULT_ROLE_CONFIG;
}