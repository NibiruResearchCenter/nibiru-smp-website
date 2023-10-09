export default function () {
  const languageStorage = useLocalStorage("prefered_language", "");
  let language = "";

  if (languageStorage.value === undefined || languageStorage.value === null) {
    const preferedLanguages = usePreferredLanguages();
    language = getSupportedLanguage(preferedLanguages.value);
  } else {
    language = getSupportedLanguage([languageStorage.value]);
  }

  return language;
}

export const supportedLanguages = ["en-US", "zh-CN"];

const getSupportedLanguage = (languages: readonly string[]) => {
  for (const language of languages) {
    if (supportedLanguages.includes(language)) {
      return language;
    }

    if (language.startsWith("zh")) {
      return "zh-CN";
    }
    if (language.startsWith("en")) {
      return "en-US";
    }
  }
  return "en-US";
};
