import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 60,
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: ["#FFD700", "#FF6347", "#87CEEB", "#FFFFFF", "#DEB887"],
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: { min: 0.3, max: 0.8 },
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 20 },
            random: true,
            anim: {
              enable: false,
            },
          },
          links: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detectsOn: "window",
          events: {
            onHover: {
              enable: false,
            },
            onClick: {
              enable: false,
            },
            resize: true,
          },
        },
        detectRetina: true,
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: 'linear-gradient(180deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
      }}
    />
  );
};

export default ParticlesBackground;
