 TypeScript Concepts 

**Answered 2 Selected Questions from the Given List**

---

##  ১) TypeScript এ Interface এবং Type-এর মধ্যে মূল পার্থক্য

TypeScript-এ **interface** এবং **type alias**—উভয়ই object structure define করতে ব্যবহৃত হয়।  
তাদের মধ্যে প্রধান পার্থক্যগুলো নিচে সংক্ষেপে দেখানো হলো।

** Declaration Merging**

- **interface →** বারবার declare করলে merge হয়।  
- **type →** duplicate declare করলে error দেয়।  

**উদাহরণ (interface merge):**  
<p><code>interface User {</code></p>
<p><code>  name: string;</code></p>
<p><code>}</code></p>
<p><code>interface User {</code></p>
<p><code>  age: number;</code></p>
<p><code>}</code></p>

**উদাহরণ (type duplicate → error):**  
<p><code>type User = { name: string };</code></p>
<p><code>// type User = { age: number }; // Error</code></p>

---

** Extend করার পদ্ধতি**

- **interface →** `extends` ব্যবহার করে।  
- **type →** intersection (`&`) ব্যবহার করে।

**Interface extend:**  
<p><code>interface A { x: number }</code></p>
<p><code>interface B extends A { y: number }</code></p>

**Type (intersection):**  
<p><code>type A = { x: number }</code></p>
<p><code>type B = A & { y: number }</code></p>

---

** Union support**

- **type →** union সমর্থন করে (`type ID = number | string`)  
- **interface →** direct union তৈরি করেনা

---

---

##  ২) `keyof` কীওয়ার্ডের ব্যবহার

`keyof` একটি powerful operator — এটি কোনো interface/type-এর সব key-গুলোর **union of literal types** রিটার্ন করে।  
এটা ব্যবহার করলে compile-time এ invalid key access আটকানো যায়।

**উদাহরণ (keyof):**  
<p><code>interface User {</code></p>
<p><code>  name: string;</code></p>
<p><code>  age: number;</code></p>
<p><code>  isAdmin: boolean;</code></p>
<p><code>}</code></p>

<p><code>type UserKeys = keyof User; // "name" | "age" | "isAdmin"</code></p>

**Practical function (শুধুমাত্র valid key গ্রহণ করবে):**  
<p><code>function getValue(obj: User, key: keyof User) {</code></p>
<p><code>  return obj[key];</code></p>
<p><code>}</code></p>

---

##  solution.ts — (Ready to paste into your file)

<p><code>// Q1: Difference Example (type vs interface)</code></p>
<p><code>interface Person {</code></p>
<p><code>  name: string;</code></p>
<p><code>}</code></p>
<p><code>interface Person {</code></p>
<p><code>  age: number;</code></p>
<p><code>}</code></p>

<p><code>// Type cannot merge</code></p>
<p><code>type Car = { model: string };</code></p>
<p><code>// type Car = { year: number }; //  Error</code></p>

<p><code>// Q2: keyof example</code></p>
<p><code>interface User {</code></p>
<p><code>  name: string;</code></p>
<p><code>  age: number;</code></p>
<p><code>  isAdmin: boolean;</code></p>
<p><code>}</code></p>

<p><code>function getValue(obj: User, key: keyof User) {</code></p>
<p><code>  return obj[key];</code></p>
<p><code>}</code></p>

---
