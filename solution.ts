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


class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}';`;
  }
}



function filterByRating(
  items: {
    title: string;
    rating: number;
  }[]
): {
  title: string;
  rating: number;
}[] {
  return items.filter((item) => item.rating >= 4);
}



function filterActiveUsers(users: {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}[]): {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}[] {
  return users.filter((user) => user.isActive === true);
}





interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): any {
  const availability = book.isAvailable ? "Yes" : "No";
  console.log(
    "Title: " + book.title +
    ", Author: " + book.author +
    ", Published: " + book.publishedYear +
    ", Available: " + availability
  );
}


