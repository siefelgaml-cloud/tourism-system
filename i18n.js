// ============================================================
// نظام الترجمة (عربي / إنجليزي) — المرحلة الأولى
// يغطي: القائمة الجانبية، الـ Dashboard الرئيسية، وعناوين كل الأقسام.
// باقي نصوص كل صفحة (الفورمات، الجداول، الرسائل، التقارير) هتتغطى في مراحل تانية.
// ملاحظة: البيانات اللي الموظفين بيدخلوها بنفسهم (أسماء، ملاحظات...) لا تُترجم تلقائيًا حاليًا.
// ============================================================

const translations = {
  ar: {
    header_title: "📊 منظومة الحسابات والتصفية السياحية المتقدمة",
    header_subtitle: "🔓 وضع المستقل | الإدارة العامة",

    nav_dashboard: "📈 Dashboard الرئيسية",
    nav_accounts: "🧮 الحسابات",
    nav_tax_discount: "📋 الخصم والإضافة",
    nav_credit: "💳 أرصدة الكريديت",
    nav_settlement: "📄 تصفية الأوبريتور",
    nav_tickets: "🎟️ مخزون التذاكر",
    nav_aviation: "✈️ حجوزات الطيران",

    sub_add_supplier: "1- إضافة مورد",
    sub_suppliers_list: "2- قائمة الموردين",

    sub_add_credit: "1- تسجيل حركة",
    sub_credit_records: "2- سجل العمليات",
    sub_credit_summary: "3- الملخص والـ Dashboard",
    sub_credit_statement: "4- كشف الحساب المستقل",

    sub_add_settlement: "1- إضافة تصفية ملف",
    sub_settlement_list: "2- سجل تصفيات الملفات",
    sub_settlement_archive: "3- الأرشيف (التصفيات المعتمدة)",

    sub_add_ticket: "1- إضافة تذكرة مزار",
    sub_tickets_list: "2- سجل التذاكر والمخزون",
    sub_tickets_balance: "3- أرصدة التذاكر",

    sub_add_aviation: "1- إضافة حجز طيران",
    sub_aviation_list: "2- سجل حجوزات الطيران",
    sub_aviation_commission: "3- العمولة",

    dash_title: "📈 Dashboard العامة المتقدمة",
    dash_pdf_btn: "📄 تقرير PDF شامل",
    dash_report_h2: "التقرير المالي العام والمؤشرات العامة",
    dash_report_p: "منظومة الحسابات السياحية الشاملة",
    dash_card_suppliers: "🏢 إجمالي الموردين المسجلين",
    dash_card_credit_egp: "💳 صافي رصيد الكريديت (EGP)",
    dash_card_credit_usd: "💵 صافي رصيد الكريديت (USD)",
    dash_card_credit_eur: "💶 صافي رصيد الكريديت (EUR)",
    dash_card_aviation: "✈️ إجمالي مصروفات الطيران",
    dash_card_tickets: "🎟️ إجمالي عدد التذاكر الفعلية",
    dash_card_commissions: "💵 اجمالي العمولات المصروفه",
    dash_summary_h4: "📋 ملخص القطاعات والعمليات بالحاسبة اللحظية",
    dash_th_sector: "القطاع",
    dash_th_records: "عدد السجلات",
    dash_th_in: "إجمالي الوارد / المدين",
    dash_th_out: "إجمالي الصادر / المصروفات",
    dash_th_net: "الصافي والتراكمي",

    h_add_supplier: "تسجيل مورد جديد",
    h_import_suppliers: "📥 استيراد عدة موردين دفعة واحدة (ملف إكسيل)",
    h_suppliers_list: "سجل الموردين",

    h_add_credit: "تسجيل حركة كريديت",
    h_import_credit: "📥 استيراد عدة حركات دفعة واحدة (ملف إكسيل)",
    h_credit_records: "سجل العمليات",
    h_credit_summary: "ملخص Dashboard الكريديت",

    h_add_settlement: "إضافة تصفية ملف جديد",
    h_import_settlement: "📥 استيراد عدة تصفيات دفعة واحدة (ملف إكسيل)",
    h_settlement_list: "سجل تصفيات الملفات (الجارية)",
    h_settlement_archive: "📁 أرشيف التصفيات المعتمدة",

    h_add_aviation: "تسجيل حجز طيران جديد",
    h_aviation_list: "سجل حجوزات الطيران",
    h_aviation_commission: "عمولة حجوزات الطيران",

    h_add_ticket: "إضافة حركة تذاكر / مزارات",
    h_import_tickets: "📥 استيراد عدة مزارات دفعة واحدة (ملف إكسيل)",
    h_tickets_list: "سجل مخزون التذاكر والمزارات",
    h_tickets_balance: "أرصدة التذاكر (المخزون المتبقي لكل مزار)",

    h_edit_supplier: "تعديل المورد",
    h_edit_aviation: "تعديل حجز الطيران",
    h_edit_ticket: "تعديل تذكرة المزار",
    h_edit_settlement: "تعديل تصفية الملف",

    lang_toggle: "EN"
  },

  en: {
    header_title: "📊 Advanced Tourism Accounts & Settlement System",
    header_subtitle: "🔓 Freelance Mode | General Management",

    nav_dashboard: "📈 Main Dashboard",
    nav_accounts: "🧮 Accounts",
    nav_tax_discount: "📋 Discounts & Additions",
    nav_credit: "💳 Credit Balances",
    nav_settlement: "📄 Operator Settlement",
    nav_tickets: "🎟️ Ticket Inventory",
    nav_aviation: "✈️ Flight Bookings",

    sub_add_supplier: "1- Add Supplier",
    sub_suppliers_list: "2- Suppliers List",

    sub_add_credit: "1- Record Transaction",
    sub_credit_records: "2- Transaction Log",
    sub_credit_summary: "3- Summary & Dashboard",
    sub_credit_statement: "4- Independent Statement",

    sub_add_settlement: "1- Add File Settlement",
    sub_settlement_list: "2- Settlements Log",
    sub_settlement_archive: "3- Archive (Approved Settlements)",

    sub_add_ticket: "1- Add Attraction Ticket",
    sub_tickets_list: "2- Tickets & Inventory Log",
    sub_tickets_balance: "3- Ticket Balances",

    sub_add_aviation: "1- Add Flight Booking",
    sub_aviation_list: "2- Flight Bookings Log",
    sub_aviation_commission: "3- Commission",

    dash_title: "📈 Advanced General Dashboard",
    dash_pdf_btn: "📄 Full PDF Report",
    dash_report_h2: "General Financial Report & Overall Indicators",
    dash_report_p: "Comprehensive Tourism Accounts System",
    dash_card_suppliers: "🏢 Total Registered Suppliers",
    dash_card_credit_egp: "💳 Net Credit Balance (EGP)",
    dash_card_credit_usd: "💵 Net Credit Balance (USD)",
    dash_card_credit_eur: "💶 Net Credit Balance (EUR)",
    dash_card_aviation: "✈️ Total Flight Expenses",
    dash_card_tickets: "🎟️ Total Actual Ticket Count",
    dash_card_commissions: "💵 Total Commissions Paid",
    dash_summary_h4: "📋 Sectors & Live Calculated Operations Summary",
    dash_th_sector: "Sector",
    dash_th_records: "Records Count",
    dash_th_in: "Total In / Debit",
    dash_th_out: "Total Out / Expenses",
    dash_th_net: "Net & Cumulative",

    h_add_supplier: "Register New Supplier",
    h_import_suppliers: "📥 Import Multiple Suppliers at Once (Excel File)",
    h_suppliers_list: "Suppliers Log",

    h_add_credit: "Record Credit Transaction",
    h_import_credit: "📥 Import Multiple Transactions at Once (Excel File)",
    h_credit_records: "Transaction Log",
    h_credit_summary: "Credit Dashboard Summary",

    h_add_settlement: "Add New File Settlement",
    h_import_settlement: "📥 Import Multiple Settlements at Once (Excel File)",
    h_settlement_list: "Files Settlement Log (Ongoing)",
    h_settlement_archive: "📁 Approved Settlements Archive",

    h_add_aviation: "Register New Flight Booking",
    h_aviation_list: "Flight Bookings Log",
    h_aviation_commission: "Flight Bookings Commission",

    h_add_ticket: "Add Ticket / Attraction Transaction",
    h_import_tickets: "📥 Import Multiple Attractions at Once (Excel File)",
    h_tickets_list: "Ticket & Attraction Inventory Log",
    h_tickets_balance: "Ticket Balances (Remaining Stock per Attraction)",

    h_edit_supplier: "Edit Supplier",
    h_edit_aviation: "Edit Flight Booking",
    h_edit_ticket: "Edit Attraction Ticket",
    h_edit_settlement: "Edit File Settlement",

    lang_toggle: "AR"
  }
};

let currentLang = localStorage.getItem('appLang') || 'ar';

function t(key) {
  return (translations[currentLang] && translations[currentLang][key])
    || translations.ar[key]
    || key;
}

function applyTranslations() {
  const dict = translations[currentLang] || translations.ar;

  document.documentElement.setAttribute('lang', currentLang);
  document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });

  const langBtn = document.getElementById('langToggleBtn');
  if (langBtn) langBtn.textContent = dict.lang_toggle;
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('appLang', lang);
  applyTranslations();
}

function toggleLanguage() {
  setLanguage(currentLang === 'ar' ? 'en' : 'ar');
}

document.addEventListener('DOMContentLoaded', applyTranslations);
