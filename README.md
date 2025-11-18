🌐 TypeScript Blog — Bangla
Answered Any 2 Questions from the Given List
<br>
✨ 1. TypeScript এ Interface এবং Type এর মধ্যে পার্থক্য

TypeScript-এ interface এবং type alias দেখতে একই হলেও এদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে। নিচে সহজভাবে আলোচনা করা হলো—

<br>
🔹 Difference 1: Declaration Merging

interface → merge হয়
type → কখনও merge হয় না

✔️ Interface Example (merge হয়):

interface User {
  name: string;
}

interface User {
  age: number;
}
// Final → { name: string; age: number }


❌ Type Example (merge হয় না):

type User = { name: string };
// type User = { age: number }; // Error

<br>
🔹 Difference 2: Extend করার নিয়ম

interface → সহজে extend করা যায়
type → extend করতে হলে intersection (&) ব্যবহার করতে হয়

✔️ Interface Example:

interface A {
  x: number;
}
interface B extends A {
  y: number;
}


✔️ Type Example (intersection):

type A = { x: number };
type B = A & { y: number };

<br>
