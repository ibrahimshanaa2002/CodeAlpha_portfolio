document.getElementById("downloadBtn").addEventListener("click", () => {
  const link = document.createElement("a");

  link.href = "cv/IBRAHIM-SHANAA-CV.pdf";
  link.download = "IBRAHIM-SHANAA-CV.pdf";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
});
