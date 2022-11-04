import "./style.css";

/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion";

inView(".staggeranimation", ({ target }) => {
  animate(
    target.querySelectorAll("li"),
    { opacity: [0, 1] },
    {
      duration: 1,
      delay: stagger(1, { start: 0.25 }),
    }
  );
  return () => {
    animate(target, { opacity: [0, 1] }, { duration: 2 });
  };
});
