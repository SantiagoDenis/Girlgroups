 const eventos = {
  "2025-07-11": "BLACKPINK",
  "2025-06-27": "KATSEYE",
  "2024-10-21": "ILLIT",
  "2026-01-02" : "KATSEYE"
};

flatpickr("#calendar", {
  locale: "es",
  inline: true,

  onDayCreate: function (_, __, ___, dayElem) {
    const fecha = dayElem.dateObj.toISOString().split("T")[0];

    if (eventos[fecha]) {
      dayElem.classList.add("evento");

      const label = document.createElement("span");
      label.className = "evento-label";
      label.textContent = eventos[fecha];

      dayElem.appendChild(label);
    }
  },

  onChange: function (selectedDates) {
    const fecha = selectedDates[0].toISOString().split("T")[0];
    const info = document.getElementById("info");

    info.textContent = eventos[fecha] ?? "";
  }
});
