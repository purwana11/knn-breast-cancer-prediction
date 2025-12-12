document.addEventListener("DOMContentLoaded", () => {
    const featureNames = [
        "Radius Mean","Texture Mean","Perimeter Mean","Area Mean","Smoothness Mean",
        "Compactness Mean","Concavity Mean","Concave Points Mean","Symmetry Mean","Fractal Dimension Mean",
        "Radius SE","Texture SE","Perimeter SE","Area SE","Smoothness SE",
        "Compactness SE","Concavity SE","Concave Points SE","Symmetry SE","Fractal Dimension SE",
        "Radius Worst","Texture Worst","Perimeter Worst","Area Worst","Smoothness Worst",
        "Compactness Worst","Concavity Worst","Concave Points Worst","Symmetry Worst","Fractal Dimension Worst"
    ];

    const sampleValuesBenign = [
        14.5, 20.1, 95.2, 645.0, 0.102,
        0.12, 0.09, 0.08, 0.19, 0.065,
        0.45, 1.2, 3.1, 50.0, 0.007,
        0.04, 0.05, 0.03, 0.18, 0.062,
        16.5, 27.4, 120.0, 820.0, 0.14,
        0.21, 0.22, 0.18, 0.31, 0.085
    ];

    const sampleValuesMalignant = [
        20.6, 17.8, 133.5, 1326.0, 0.0847,
        0.0786, 0.0869, 0.0702, 0.181, 0.0567,
        0.543, 0.733, 3.398, 74.08, 0.0052,
        0.0131, 0.0187, 0.0135, 0.0134, 0.0033,
        24.9, 25.2, 170.0, 1878.0, 0.101,
        0.131, 0.166, 0.095, 0.281, 0.062
    ];

    const grid = document.getElementById("featureGrid");
    const autoBtn = document.getElementById("autoFillBtn");
    const autoMalBtn = document.getElementById("autoFillMalBtn");
    const resetBtn = document.getElementById("resetBtn");

    featureNames.forEach((name, i) => {
        const group = document.createElement("div");
        group.className = "input-group";

        const label = document.createElement("label");
        label.htmlFor = `f${i}`;
        label.textContent = name;

        const input = document.createElement("input");
        input.type = "number";
        input.step = "any";
        input.name = `f${i}`;
        input.id = `f${i}`;
        input.placeholder = `Masukkan ${name}`;
        input.required = true;

        group.appendChild(label);
        group.appendChild(input);
        grid.appendChild(group);
    });

    const fillValues = (values) => {
        values.forEach((val, i) => {
            const field = document.getElementById(`f${i}`);
            if (field) field.value = val;
        });
    };

    autoBtn?.addEventListener("click", () => {
        fillValues(sampleValuesBenign);
        autoBtn.textContent = "Terisi ✔";
        setTimeout(() => autoBtn.textContent = "Isi otomatis (Benign)", 1500);
    });

    autoMalBtn?.addEventListener("click", () => {
        fillValues(sampleValuesMalignant);
        autoMalBtn.textContent = "Terisi ✔";
        setTimeout(() => autoMalBtn.textContent = "Isi otomatis (Ganas)", 1500);
    });

    resetBtn?.addEventListener("click", () => {
        const inputs = grid.querySelectorAll("input");
        inputs.forEach((input) => { input.value = ""; });
    });
});
