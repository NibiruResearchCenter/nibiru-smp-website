export default function (s: string) {
  const { locale } = useI18n();
  const d = new Date(s);
  return d.toLocaleDateString(useRealLocaleCode(locale.value));
}
