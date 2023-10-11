export default function () {
  const getAvatar = (uuid: string): string => {
    return "https://crafatar.com/avatars/" + uuid;
  };

  return {
    getAvatar,
  };
}
