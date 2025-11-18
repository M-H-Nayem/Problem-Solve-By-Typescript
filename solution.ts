function formatValue(
  value: string | number | boolean
): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }
  if (typeof value === "boolean") {
    return !value;
  }
  // fallback (should never happen)
  return value;
}


function getLength(value: string | number[]): number {
  if (typeof value === "string") {
    return value.length;
  }

  // if (Array.isArray(value))
  else {
    return value.length;
  }

}




