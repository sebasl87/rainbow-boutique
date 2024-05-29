/**
 * Muestra en principio menos caracteres.
 *
 */

export const truncateText = (text, maxChars) => {
  return text?.length > maxChars ? `${text.substring(0, maxChars)}...` : text;
};
