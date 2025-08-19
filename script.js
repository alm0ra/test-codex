const projects = [
  { name: 'Motoko', url: 'https://github.com/dfinity/motoko' },
  { name: 'Internet Identity', url: 'https://github.com/dfinity/internet-identity' },
  { name: 'nns-dapp', url: 'https://github.com/dfinity/nns-dapp' },
  { name: 'ic-js', url: 'https://github.com/dfinity/ic-js' },
  { name: 'ic', url: 'https://github.com/dfinity/ic' }
];

const list = document.getElementById('project-list');
projects.forEach((p) => {
  const li = document.createElement('li');
  const link = document.createElement('a');
  link.href = p.url;
  link.textContent = p.name;
  link.target = '_blank';
  li.appendChild(link);
  list.appendChild(li);
});
