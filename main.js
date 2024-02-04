onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);

    const d = setTimeout(() => {
      document.body.classList.add("flowers-appear");
      clearTimeout(d);
    }, 5000)
  };