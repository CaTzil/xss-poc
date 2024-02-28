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
          '@zettle-bo/bootstrapper': 'https://www.googletagmanager.com/gtm.js?id=GTM-MWX3S387',
        },
      },
    ])
  );
  location.href = 'https://account-d.docusign.com/'
}
