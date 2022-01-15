// https://www.digitalocean.com/community/tutorials/javascript-functional-programming-explained-partial-application-and-currying

function buildUri(scheme, domain, path) {
  return `${scheme}://${domain}/${path}`;
}

const twitterFavicon = buildUri("https", "twitter.com", "favicon.ico");
const googleHome = buildUri("https", "google.com", "");

console.log(
  `Normal calls withs repition "https": ${twitterFavicon} ${googleHome}`
);

//==== PARTICAL APPLICATION: FIXING ARGUMENTS

/*
  What we write: const twitterFavicon = buildUri('https', 'twitter.com', 'favicon.ico')
  What we want to write: const twitterFavicon =  buildHttpsUri('twitter.com', 'favicon.ico')

  We can use closures to give inner function a memory of argument passed into
  wrapping function
*/

function fixUriScheme(scheme) {
  return function buildUriWithProvidedScheme(domain, path) {
    return buildUri(scheme, domain, path);
  };
}

const buildHttpsUri = fixUriScheme("https");

console.log(
  `Call with first argument filled: ${buildHttpsUri(
    "twitter.com",
    "favicon.ico"
  )}`
);

const buildHttpsUri2 = _.partial(buildHttpsUri, ["https"]);

console.log(
  `Fixed first arg via Lodash: ${buildHttpsUri2("twitter.com", "favicon.ico")}`
);

//==== DESIGN CONSIDERATION

/*
  const twitterFavicon = buildUri('https', 'twitter.com', 'favicon.ico')
  const googleHome = buildUri('https', 'google.com', '')

  const twitterHome = buildUri('https', 'twitter.com', '')
  const googleHome = buildUri('https', 'google.com', '')

  Note: https and path are repeated. What if we want to fix first and last argument?
  We can do this by first fixing from the left and then right, however
  a cleaner solution would be to re-arrange our parameters and using
  a utility function such as _.partialRight and passing in the two
  arguements we want to fix in an array ['fixedArg1', 'fixedArg2']
*/

function buildUrl2(scheme, path, domain) {
  return `${scheme}://${domain}/${path}`;
}

const buildHttpsHomeUrl = _.partial(buildUrl2, "https", "");

console.log(`2 fixed arguments: ${buildHttpsHomeUrl("twitter.com")}`);
