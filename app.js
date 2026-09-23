const modal = document.querySelector('#modalBackdrop');
const openModal = (title, content) => {
  document.querySelector('#modalTitle').textContent = title;
  document.querySelector('#modalContent').textContent = content;
  modal.hidden = false;
};
document.querySelector('#reviewButton').addEventListener('click', () => openModal('Your tax plan is on track.', 'Your estimated liability is ₹1,08,600. Add your income, deductions and tax payments to receive a personalised, explainable estimate. Tax treatment can vary—please verify important decisions with a chartered accountant.'));
document.querySelector('#findSavings').addEventListener('click', () => openModal('Two opportunities found.', 'Consider your NPS contribution and verify eligible employer benefits. We show assumptions clearly so you can make a confident decision.'));
document.querySelector('#detailsButton').addEventListener('click', () => document.querySelector('#tax-planner').scrollIntoView({ behavior: 'smooth' }));
document.querySelector('#exportPdf').addEventListener('click', () => { document.title = 'Multitask Agent — Financial Snapshot'; window.print(); });
document.querySelector('#closeModal').addEventListener('click', () => modal.hidden = true);
document.querySelector('#modalAction').addEventListener('click', () => modal.hidden = true);
modal.addEventListener('click', (event) => { if (event.target === modal) modal.hidden = true; });
