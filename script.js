const IVA = 0.19;

const input = document.getElementById("montoInput");
const netoEl = document.getElementById("neto");
const brutoEl = document.getElementById("bruto");
const ivaDesdeNetoEl = document.getElementById("ivaDesdeNeto");
const ivaDesdeBrutoEl = document.getElementById("ivaDesdeBruto");

function formatoCLP(valor) {
  return valor.toLocaleString("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0
  });
}

input.addEventListener("input", () => {
  let valor = input.value.replace(/\D/g, "");
  if (!valor) valor = 0;

  const monto = parseInt(valor);

  const ivaNeto = monto * IVA;
  const bruto = monto + ivaNeto;

  const netoDesdeBruto = monto / (1 + IVA);
  const ivaDesdeBruto = monto - netoDesdeBruto;

  netoEl.textContent = formatoCLP(netoDesdeBruto);
  brutoEl.textContent = formatoCLP(bruto);

  ivaDesdeNetoEl.textContent = formatoCLP(ivaNeto);
  ivaDesdeBrutoEl.textContent = formatoCLP(ivaDesdeBruto);

  input.value = monto.toLocaleString("es-CL");
});
