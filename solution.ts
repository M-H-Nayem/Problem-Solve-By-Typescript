
type Value = string | number | boolean

function formatValue(value:Value ): Value {

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

// Sample Input
console.log(formatValue("hello")); // HELLO
console.log(formatValue(5));       // 50
console.log(formatValue(true));    // false


