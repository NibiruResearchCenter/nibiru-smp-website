export default function () {
  const { locale } = useI18n();
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const getDateOnly = (s: string) => {
    const d = new Date(s);
    return d.toLocaleDateString(useRealLocaleCode(locale.value));
  };

  const getTimeOnly = (s: string) => {
    const d = new Date(s);
    return d.toLocaleTimeString(useRealLocaleCode(locale.value), {
      timeZone: tz,
    });
  };

  const getDateTime = (s: string) => {
    return getDateOnly(s) + " " + getTimeOnly(s);
  };

  return { getDateOnly, getTimeOnly, getDateTime };
}
