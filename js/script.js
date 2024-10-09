function convert() {
    const celcius = document.getElementById("celcius").value;
    if (celcius === "") {
      document.getElementById("result").textContent =
        "Harap masukkan suhu.";
      return;
    }
    const fahrenheit = (celcius * 9) / 5 + 32;
    document.getElementById(
      "result"
    ).textContent = `Hasil:= ${fahrenheit.toFixed(2)}°F`;
    document.getElementById(
      "calculation"
    ).textContent = `Rumus: (${celcius} × 9/5) + 32 = ${fahrenheit.toFixed(
      2
    )}°F`;
  }
  function resetToZero() {
    document.getElementById("suhuForm").reset();
    document.getElementById("result").textContent = "";
    document.getElementById("calculation").textContent = "";
  }
  function reverse() {
    const fahrenheit = document.getElementById("celcius").value;
    if (fahrenheit === "") {
      document.getElementById("result").textContent =
        "Harap masukkan suhu.";
      return;
    }
    const celsius = ((fahrenheit - 32) * 5) / 9;
    document.getElementById(
      "result"
    ).textContent = `Hasil: ${celsius.toFixed(2)}°C`;
    document.getElementById(
      "calculation"
    ).textContent = `Rumus: (${fahrenheit} - 32) × 5/9 = ${celsius.toFixed(
      2
    )}°C`;
  }