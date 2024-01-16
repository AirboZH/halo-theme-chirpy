export function addClassToTable() {
  // 获取所有 content 下的 table 元素
  const tables = document.querySelectorAll('.content table');

  // 遍历所有 table 元素
  tables.forEach((table) => {
    // 创建一个 div 元素
    const wrapper = document.createElement('div');
    // 添加 class 属性
    wrapper.classList.add('table-wrapper');
    // 添加 text-align: cneter
    wrapper.style.textAlign = 'center';
    // 将 table 元素包裹在 div 元素内
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });
}
