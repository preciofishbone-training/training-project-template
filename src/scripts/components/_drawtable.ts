const DrawTable = () => {
  const btn = document.querySelector('button');
  const Mytable = document.querySelector('#table');
// const data = [
//   { id: 0, name: 'ahihi', md: '01/10/2012', md_by: 'noone' },
//   { id: 1, name: 'ahihi', md: '01/10/2012', md_by: 'noone' },
//   { id: 2, name: 'ahihi', md: '01/10/2012', md_by: 'noone' }
// ];
  const header = ['ID', 'Name', 'Modified', 'Modified by'];
  btn?.addEventListener('click', () => {
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    header.forEach(headerText => {
      // eslint-disable-next-line no-shadow
      const header = document.createElement('th');
      const textNode = document.createTextNode(headerText);
      header.appendChild(textNode);
      headerRow.appendChild(header);
    });
    table.appendChild(headerRow);
    Mytable?.appendChild(table);
  });
};
export default DrawTable;
