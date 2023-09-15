async function loadScript(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
    script.onload = () => {
      resolve(src + "\nDone!");
    };
  });
}

async function main1() {
  console.log(new Date().getMilliseconds());
  console.log(
    await loadScript(
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
    )
  );
  console.log(new Date().getMilliseconds());
}

main1();
