import { useEffect } from "react";

export default function useTypingEffect() {
  useEffect(() => {
    const text = document.querySelector(".text");
    const words = ["Web Developer", "Backend Developer", "Full Stack Developer"];
    let i = 0, j = 0, isDeleting = false;

    function type() {
      const current = words[i];
      if (!isDeleting) {
        text.textContent = current.substring(0, j++);
        if (j > current.length) isDeleting = true;
      } else {
        text.textContent = current.substring(0, j--);
        if (j < 0) {
          isDeleting = false;
          i = (i + 1) % words.length;
        }
      }
      setTimeout(type, isDeleting ? 80 : 120);
    }
    type();
  }, []);
}
