import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

declare global {
  interface Window {
    isMobile: boolean;
  }
}

const isMobile = window.innerWidth < 768;
window.isMobile = isMobile;

gsap.config({
  nullTargetWarn: false,
  autoSleep: 60,
  force3D: true
});

gsap.registerPlugin(
  useGSAP,
  ScrollTrigger
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
