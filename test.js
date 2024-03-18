async function getMostUsedLanguage() {
  const response = await fetch(`https://api.github.com/users/taylors42/repos`);
  const data = await response.json();
  const response1 = await fetch(`https://api.github.com/users/taylors42`);
  const data1 = await response1.json();
  console.log(data1.name);
  const languages = data.reduce((acc, repo) => {
    const { language } = repo;
    if (language) {
      acc[language] = (acc[language] || 0) + 1;
    }
    return acc;
  }, {});

  const mostUsedLanguage = Object.keys(languages).reduce((a, b) =>
    languages[a] > languages[b] ? a : b
  );

  return mostUsedLanguage;
}

getMostUsedLanguage("username")
  .then((mostUsedLanguage) => console.log(mostUsedLanguage))
  .catch((error) => console.error(error));
