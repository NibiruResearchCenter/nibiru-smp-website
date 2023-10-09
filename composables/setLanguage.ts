export default function (language: string) {
  const languageStorage = useLocalStorage("prefered_language", "");
  languageStorage.value = language;
}
