const sceneOrder = ["opening", "room", "door", "hallway", "gift", "letter", "final"];

const safePlay = (audio, { loop = false, volume = 0.45 } = {}) => {
  if (!audio) return;
  audio.loop = loop;
  audio.volume = volume;
  audio.play().catch(() => {});
};

export const animate = () => {
  const scenes = [...document.querySelectorAll("[data-scene]")];
  const progress = document.querySelector(".progress");
  const progressLabel = document.querySelector(".progress__label");
  const letter = document.querySelector('[data-scene="letter"]');
  const meter = document.querySelector(".letter__meter span");
  const switchAudio = document.querySelector(".switch-aud");
  const doorAudio = document.querySelector(".door-aud");
  const ambience = document.querySelector(".haunt-aud");
  const music = document.querySelector(".hbd-aud");
  let active = "opening";
  let locked = false;

  const showScene = (next) => {
    if (locked || next === active) return;
    locked = true;
    const current = scenes.find((scene) => scene.dataset.scene === active);
    const incoming = scenes.find((scene) => scene.dataset.scene === next);
    if (!current || !incoming) return;

    if (next === "room") safePlay(switchAudio, { volume: 0.55 });
    if (next === "hallway") { safePlay(doorAudio); safePlay(ambience, { loop: true, volume: 0.16 }); }
    if (next === "letter") { ambience?.pause(); safePlay(music, { loop: true, volume: 0.18 }); }

    current.classList.add("is-leaving");
    incoming.classList.add("is-active");
    incoming.setAttribute("aria-hidden", "false");
    const index = sceneOrder.indexOf(next);
    progress.style.setProperty("--progress", `${((index + 1) / sceneOrder.length) * 100}%`);
    progressLabel.textContent = `${String(index + 1).padStart(2, "0")} / 07`;

    window.setTimeout(() => {
      current.classList.remove("is-active", "is-leaving");
      current.setAttribute("aria-hidden", "true");
      active = next;
      locked = false;
      if (next === "letter") letter.scrollTop = 0;
      incoming.querySelector("button, [tabindex]")?.focus({ preventScroll: true });
    }, 1450);
  };

  document.addEventListener("click", (event) => {
    const action = event.target.closest("[data-next]");
    if (action) showScene(action.dataset.next);
  });

  letter?.addEventListener("scroll", () => {
    const max = letter.scrollHeight - letter.clientHeight;
    const value = max > 0 ? Math.min(100, (letter.scrollTop / max) * 100) : 0;
    meter?.style.setProperty("width", `${value}%`);
  }, { passive: true });
};
