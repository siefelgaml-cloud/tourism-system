  function openTab(evt, tabId) {
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
      tabContents[i].classList.remove("active");
    }
    const tabBtns = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabBtns.length; i++) {
      tabBtns[i].classList.remove("active");
    }
    document.getElementById(tabId).classList.add("active");
    evt.currentTarget.classList.add("active");
  }

  function openSubTab(evt, subTabId, parentTabId) {
    if (parentTabId) {
      const tabContents = document.getElementsByClassName("tab-content");
      for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
      }
      document.getElementById(parentTabId).classList.add("active");
    }

    const currentTab = document.getElementById(parentTabId) || evt.currentTarget.closest('.tab-content');
    const subContents = currentTab.getElementsByClassName("sub-tab-content");
    for (let i = 0; i < subContents.length; i++) {
      subContents[i].classList.remove("active");
    }

    const subBtns = evt.currentTarget.parentElement.getElementsByClassName("sub-tab-btn");
    for (let i = 0; i < subBtns.length; i++) {
      subBtns[i].classList.remove("active");
    }

    document.getElementById(subTabId).classList.add("active");
    evt.currentTarget.classList.add("active");
  }

  function toggleAccountsMenu(evt) {
    const menu = document.getElementById("accountsSubMenu");
    const isHidden = menu.style.display === "none" || menu.style.display === "";
    menu.style.display = isHidden ? "flex" : "none";
    document.getElementById("accountsArrowIcon").innerText = isHidden ? "▲" : "▼";
  }

  function toggleTaxDiscountMenu(evt) {
    const menu = document.getElementById("taxDiscountSubMenu");
    const isHidden = menu.style.display === "none" || menu.style.display === "";
    menu.style.display = isHidden ? "flex" : "none";
    document.getElementById("taxArrowIcon").innerText = isHidden ? "▲" : "▼";
    openTab(evt, "taxDiscountTab");
  }

  function toggleCreditMenu(evt) {
    const menu = document.getElementById("creditSubMenu");
    const isHidden = menu.style.display === "none" || menu.style.display === "";
    menu.style.display = isHidden ? "flex" : "none";
    document.getElementById("creditArrowIcon").innerText = isHidden ? "▲" : "▼";
    openTab(evt, "creditTab");
  }

  function toggleAviationMenu(evt) {
    const menu = document.getElementById("aviationSubMenu");
    const isHidden = menu.style.display === "none" || menu.style.display === "";
    menu.style.display = isHidden ? "flex" : "none";
    document.getElementById("aviationArrowIcon").innerText = isHidden ? "▲" : "▼";
    openTab(evt, "aviationTab");
  }

  function toggleTicketsMenu(evt) {
    const menu = document.getElementById("ticketsSubMenu");
    const isHidden = menu.style.display === "none" || menu.style.display === "";
    menu.style.display = isHidden ? "flex" : "none";
    document.getElementById("ticketsArrowIcon").innerText = isHidden ? "▲" : "▼";
    openTab(evt, "ticketsTab");
  }

  function toggleSettlementMenu(evt) {
    const menu = document.getElementById("settlementSubMenu");
    const isHidden = menu.style.display === "none" || menu.style.display === "";
    menu.style.display = isHidden ? "flex" : "none";
    document.getElementById("settlementArrowIcon").innerText = isHidden ? "▲" : "▼";
    openTab(evt, "settlementTab");
  }

  function filterSuppliersTable() {
    const input = document.getElementById("searchSupplier");
    const filter = input ? input.value.toLowerCase() : "";
    const trs = document.querySelectorAll("#suppliersTable tbody tr");
    trs.forEach(tr => {
      if (tr.children.length === 1) return;
      tr.style.display = tr.innerText.toLowerCase().includes(filter) ? "" : "none";
    });
  }

  function filterCreditTable() {
    const input = document.getElementById("searchCredit");
    const filter = input ? input.value.toLowerCase() : "";
    const trs = document.querySelectorAll("#creditTable tbody tr");
    trs.forEach(tr => {
      if (tr.children.length === 1) return;
      tr.style.display = tr.innerText.toLowerCase().includes(filter) ? "" : "none";
    });
  }

  function filterEntitySummaryTable() {
    const input = document.getElementById("searchEntitySummary");
    const filter = input ? input.value.toLowerCase() : "";
    const trs = document.querySelectorAll("#entitySummaryTable tbody tr");
    trs.forEach(tr => {
      if (tr.children.length === 1) return;
      tr.style.display = tr.innerText.toLowerCase().includes(filter) ? "" : "none";
    });
  }

  function filterAviationTable() {
    const input = document.getElementById("searchAviation");
    const filter = input ? input.value.toLowerCase() : "";
    const trs = document.querySelectorAll("#aviationTable tbody tr");
    trs.forEach(tr => {
      if (tr.children.length === 1) return;
      tr.style.display = tr.innerText.toLowerCase().includes(filter) ? "" : "none";
    });
  }

  function filterAviationCommissionTable() {
    const input = document.getElementById("searchAviationCommission");
    const filter = input ? input.value.toLowerCase() : "";
    const trs = document.querySelectorAll("#aviationCommissionTable tbody tr");
    trs.forEach(tr => {
      if (tr.children.length === 1) return;
      tr.style.display = tr.innerText.toLowerCase().includes(filter) ? "" : "none";
    });
  }

  function filterTicketsTable() {
    const guideInput = document.getElementById("searchTicketsGuide");
    const fileCodeInput = document.getElementById("searchTicketsFileCode");
    const guideFilter = guideInput ? guideInput.value.toLowerCase() : "";
    const fileCodeFilter = fileCodeInput ? fileCodeInput.value.toLowerCase() : "";

    const trs = document.querySelectorAll("#ticketsTable tbody tr");
    trs.forEach(tr => {
      if (tr.children.length === 1) return;
      // ترتيب الأعمدة: #(0) الحركة(1) رقم الملف(2) اسم المزار(3) المندوب/المرشد(4) ...
      const fileCodeText = (tr.children[2] ? tr.children[2].innerText : "").toLowerCase();
      const guideText = (tr.children[4] ? tr.children[4].innerText : "").toLowerCase();

      const matchesGuide = !guideFilter || guideText.includes(guideFilter);
      const matchesFileCode = !fileCodeFilter || fileCodeText.includes(fileCodeFilter);

      tr.style.display = (matchesGuide && matchesFileCode) ? "" : "none";
    });
  }

  function filterTicketsBalanceTable() {
    const input = document.getElementById("searchTicketsBalance");
    const filter = input ? input.value.toLowerCase() : "";
    const trs = document.querySelectorAll("#ticketsBalanceTable tbody tr");
    trs.forEach(tr => {
      if (tr.children.length === 1) return;
      tr.style.display = tr.innerText.toLowerCase().includes(filter) ? "" : "none";
    });
  }

  function filterSettlementsTable() {
    const input = document.getElementById("searchSettlements");
    const filter = input ? input.value.toLowerCase() : "";
    const select = document.getElementById("operatorFilterSelect");
    const selectedOperator = select ? select.value.toLowerCase().trim() : "";

    const printFilterElem = document.getElementById("settlementPrintFilter");
    if (printFilterElem) {
      printFilterElem.innerText = selectedOperator ? `${select.value}` : 'جميع الأوبريتورز';
    }

    const trs = document.querySelectorAll("#settlementsTable tbody tr");
    trs.forEach(tr => {
      if (tr.children.length === 1) return;
      const guideName = (tr.getAttribute("data-guide") || "").toLowerCase().trim();
      const textMatch = tr.innerText.toLowerCase().includes(filter);
      const operatorMatch = !selectedOperator || guideName === selectedOperator;

      tr.style.display = (textMatch && operatorMatch) ? "" : "none";
    });

    if (window.App && window.App.updateSettlementTotalCommission) {
      window.App.updateSettlementTotalCommission();
    }
  }

  function filterArchiveSettlementsTable() {
    const input = document.getElementById("searchArchiveSettlements");
    const filter = input ? input.value.toLowerCase() : "";
    const select = document.getElementById("archiveOperatorFilterSelect");
    const selectedOperator = select ? select.value.toLowerCase().trim() : "";

    const archivePrintFilterElem = document.getElementById("archiveSettlementPrintFilter");
    if (archivePrintFilterElem) {
      archivePrintFilterElem.innerText = selectedOperator ? `${select.value}` : 'جميع الأوبريتورز';
    }

    const trs = document.querySelectorAll("#settlementsArchiveTable tbody tr");
    trs.forEach(tr => {
      if (tr.children.length === 1) return;
      const guideName = (tr.getAttribute("data-guide") || "").toLowerCase().trim();
      const textMatch = tr.innerText.toLowerCase().includes(filter);
      const operatorMatch = !selectedOperator || guideName === selectedOperator;

      tr.style.display = (textMatch && operatorMatch) ? "" : "none";
    });

    if (window.App && window.App.updateArchiveSettlementTotalCommission) {
      window.App.updateArchiveSettlementTotalCommission();
    }
  }

  function printArchiveSettlementsList() { window.print(); }
  function downloadArchiveSettlementsPDF() {
    const element = document.getElementById('printableSettlementArchiveArea');
    const opt = {
      margin:       0.5,
      filename:     'Settlement_Archive_Report.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, ignoreElements: (el) => el.classList && el.classList.contains('no-print') },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'landscape' }
    };
    html2pdf().set(opt).from(element).save();
  }

  function printSuppliersList() { window.print(); }
  function downloadSuppliersPDF() {
    const element = document.getElementById('printableSuppliersArea');
    html2pdf().set({ margin: 0.5, filename: 'Suppliers_Report.pdf', jsPDF: { unit: 'in', format: 'a4', orientation: 'landscape' }, html2canvas: { ignoreElements: (el) => el.classList && el.classList.contains('no-print') } }).from(element).save();
  }
  function printDashboard() { window.print(); }
  function downloadDashboardPDF() {
    const element = document.getElementById('printableArea');
    html2pdf().set({ margin: 0.5, filename: 'Credit_Dashboard.pdf', jsPDF: { unit: 'in', format: 'a4', orientation: 'landscape' }, html2canvas: { ignoreElements: (el) => el.classList && el.classList.contains('no-print') } }).from(element).save();
  }
  function downloadMasterDashboardPDF() {
    const element = document.getElementById('printableMasterDashboard');
    html2pdf().set({ margin: 0.5, filename: 'Master_Dashboard.pdf', jsPDF: { unit: 'in', format: 'a4', orientation: 'landscape' }, html2canvas: { ignoreElements: (el) => el.classList && el.classList.contains('no-print') } }).from(element).save();
  }
  function downloadAviationPDF() {
    const element = document.getElementById('printableAviationArea');
    html2pdf().set({ margin: 0.5, filename: 'Aviation_Report.pdf', jsPDF: { unit: 'in', format: 'a4', orientation: 'landscape' }, html2canvas: { ignoreElements: (el) => el.classList && el.classList.contains('no-print') } }).from(element).save();
  }
  function downloadTicketsPDF() {
    const element = document.getElementById('printableTicketsArea');
    html2pdf().set({
      margin: 0.5, filename: 'Tickets_Report.pdf', jsPDF: { unit: 'in', format: 'a4', orientation: 'landscape' },
      html2canvas: { ignoreElements: (el) => el.classList && el.classList.contains('no-print') }
    }).from(element).save();
  }
  function downloadTicketsBalancePDF() {
    const element = document.getElementById('printableTicketsBalanceArea');
    html2pdf().set({
      margin: 0.5, filename: 'Tickets_Balance_Report.pdf', jsPDF: { unit: 'in', format: 'a4', orientation: 'landscape' },
      html2canvas: { ignoreElements: (el) => el.classList && el.classList.contains('no-print') }
    }).from(element).save();
  }
  function printSettlementsList() { window.print(); }
  function downloadSettlementsPDF() {
    const element = document.getElementById('printableSettlementArea');
    html2pdf().set({ margin: 0.5, filename: 'Settlements_Report.pdf', jsPDF: { unit: 'in', format: 'a4', orientation: 'landscape' }, html2canvas: { ignoreElements: (el) => el.classList && el.classList.contains('no-print') } }).from(element).save();
  }
  function downloadStatementPDF() {
    const element = document.getElementById('printableStatementArea');
    html2pdf().set({ margin: 0.5, filename: 'Account_Statement.pdf', jsPDF: { unit: 'in', format: 'a4', orientation: 'landscape' }, html2canvas: { ignoreElements: (el) => el.classList && el.classList.contains('no-print') } }).from(element).save();
  }
  function exportStatementToExcel() {
    const table = document.getElementById('statementRunningTable');
    if (!table) return;
    const wb = XLSX.utils.table_to_book(table, {sheet: "كشف الحساب"});
    XLSX.writeFile(wb, "Account_Statement.xlsx");
  }
  function resetStatementFilters() {
    document.getElementById('stEntityName').value = '';
    document.getElementById('stFileCode').value = '';
    document.getElementById('stFromDate').value = '';
    document.getElementById('stToDate').value = '';
    document.getElementById('statementRunningTbody').innerHTML = '<tr><td colspan="5" style="text-align:center; color:#64748b;">قم باختيار الفندق/الجهة والضغط على (🔍 بحث) لعرض كشف الحساب</td></tr>';
  }
  function searchStatementEntities() {
    const queryVal = document.getElementById('stEntityName').value.trim().toLowerCase();
    const dropdown = document.getElementById('stEntitySuggestions');
    if (!queryVal || !window.App) { dropdown.style.display = 'none'; return; }
    
    const matched = [...new Set(window.App.currentCredit.map(c => c.entity))]
      .filter(e => e && e.toLowerCase().includes(queryVal));

    if (matched.length === 0) { dropdown.style.display = 'none'; return; }

    dropdown.innerHTML = matched.map(m => `<div class="suggestion-item" onclick="selectStatementEntity('${escapeHTML(m)}')"><span>${escapeHTML(m)}</span></div>`).join('');
    dropdown.style.display = 'block';
  }
  function selectStatementEntity(name) {
    document.getElementById('stEntityName').value = name;
    document.getElementById('stEntitySuggestions').style.display = 'none';
  }
  function searchCreditEntitySuggestions() {
    const queryVal = document.getElementById('creditEntity').value.trim().toLowerCase();
    const dropdown = document.getElementById('creditEntitySuggestions');
    if (!queryVal || !window.App) { dropdown.style.display = 'none'; return; }

    // نبحث في أسماء الفنادق/الجهات المسجلة فعليًا في سجل عمليات الكريديت (أرصدة الكريديت)
    const matched = [...new Set(window.App.currentCredit.map(c => c.entity))]
      .filter(e => e && e.toLowerCase().includes(queryVal));

    if (matched.length === 0) { dropdown.style.display = 'none'; return; }

    dropdown.innerHTML = matched.map(m => `<div class="suggestion-item" onclick="selectCreditEntitySuggestion('${escapeHTML(m)}')"><span>${escapeHTML(m)}</span></div>`).join('');
    dropdown.style.display = 'block';
  }
  function selectCreditEntitySuggestion(name) {
    document.getElementById('creditEntity').value = name;
    document.getElementById('creditEntitySuggestions').style.display = 'none';
  }
  function renderRunningStatement() {
    const entity = document.getElementById('stEntityName').value.trim();
    const currency = document.getElementById('stCurrency').value;
    const fileCode = document.getElementById('stFileCode').value.trim().toLowerCase();
    const fromDate = document.getElementById('stFromDate').value;
    const toDate = document.getElementById('stToDate').value;

    if (!entity) { alert('يرجى اختيار اسم الجهة أو الفندق أولاً'); return; }

    document.getElementById('stInfoEntity').innerText = entity;
    document.getElementById('stInfoCurrency').innerText = currency;
    document.getElementById('pdfStatementSub').innerText = `اسم الجهة: ${entity} | العملة: ${currency}`;

    const records = (window.App ? window.App.currentCredit : []).filter(c => {
      if (c.isDeleted) return false;
      if (c.entity.trim().toLowerCase() !== entity.toLowerCase()) return false;
      if ((c.currency || 'EGP').toUpperCase() !== currency) return false;
      if (fileCode && !(c.fileCode || '').toLowerCase().includes(fileCode)) return false;
      if (fromDate && c.arrivalDate && c.arrivalDate < fromDate) return false;
      if (toDate && c.arrivalDate && c.arrivalDate > toDate) return false;
      return true;
    }).sort((a,b) => new Date(a.arrivalDate || 0) - new Date(b.arrivalDate || 0));

    let runningBalance = 0;
    let totalDebit = 0;
    let totalCredit = 0;
    let html = '';

    records.forEach((r) => {
      const amt = parseFloat(r.amount) || 0;
      const isDeposit = r.type === 'deposit';
      const debitVal = isDeposit ? amt : 0;
      const creditVal = !isDeposit ? amt : 0;

      totalDebit += debitVal;
      totalCredit += creditVal;
      runningBalance += (debitVal - creditVal);

      html += `
        <tr>
          <td>${formatDateDMY(r.arrivalDate)}</td>
          <td>${escapeHTML(r.description || r.fileCode || '-')}</td>
          <td style="color:#16a34a; font-weight:700;">${debitVal ? debitVal.toLocaleString() : '-'}</td>
          <td style="color:#dc2626; font-weight:700;">${creditVal ? creditVal.toLocaleString() : '-'}</td>
          <td style="color:#2563eb; font-weight:800;">${runningBalance.toLocaleString()}</td>
        </tr>
      `;
    });

    if (records.length === 0) {
      html = '<tr><td colspan="5" style="text-align:center; color:#64748b;">لا توجد حركات مطابقة للبحث</td></tr>';
    }

    document.getElementById('statementRunningTbody').innerHTML = html;
    document.getElementById('stCardDebit').innerText = totalDebit.toLocaleString();
    document.getElementById('stCardCredit').innerText = totalCredit.toLocaleString();
    document.getElementById('stCardBalance').innerText = runningBalance.toLocaleString();
    document.getElementById('stTotalCount').innerText = records.length;
  }

  function formatDateDMY(iso) {
    if (!iso) return '-';
    const parts = iso.split('-');
    if (parts.length === 3) return `${parts[2]}/${parts[1]}/${parts[0]}`;
    return iso;
  }

  function escapeHTML(str) {
    if (typeof str !== 'string') return str ?? '';
    return str.replace(/[&<>'"]/g, 
      tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
  }
