// 日期格式化工具
function formatDate(date, format = 'YYYY-MM-DD') {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return format.replace('YYYY', year).replace('MM', month).replace('DD', day);
}

// 导出工具（供浏览器/Node.js使用）
if (typeof module !== 'undefined') module.exports = { formatDate };
if (typeof window !== 'undefined') window.Utils = { formatDate };
