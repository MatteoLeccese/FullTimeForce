const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const dateUTCToFormattedDate = (date: string): string | null => {
  if (!date) return null;
  const regex = new RegExp("^(\\d{4})-(\\d{2})-(\\d{2})T.*$");
  const match = regex.exec(date);

  if (match) {
    const year = Number(match[1]);
    const month = Number(match[2]);
    const day = Number(match[3]);
    const newDate = `${months[month - 1]} ${day}, ${year}`;
    return newDate;
  }
  return date;
}