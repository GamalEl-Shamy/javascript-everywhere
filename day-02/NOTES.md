# Day 02 Notes

## 1. const vs let

`const` is used when the variable will not be reassigned, while `let` is used when its value needs to change. A `const` array can still be changed with methods like `push()` because the array itself is not being reassigned.

```js
const numbers = [1, 2];
numbers.push(3);

2. The 7 primitive types
String: used for text such as "Hello".
Number: used for numbers such as 42.
BigInt: used for very large integers such as 123n.
Boolean: contains either true or false.
Undefined: means a variable has no assigned value.
Null: represents an intentional empty value.
Symbol: creates a unique value that can be used as an identifier.

3. Why typeof null returns "object"

typeof null returns "object" because of an old JavaScript behavior that was kept for compatibility. To check for null correctly, I use value === null.

4. The 8 falsy values

The eight falsy values are false, 0, -0, 0n, "", null, undefined, and NaN.

5. === vs ==

=== compares both the value and the type without converting them, while == can convert the types before comparing. For example, "5" == 5 is true, but "5" === 5 is false, and using == can cause bugs when different types are compared unexpectedly.

6. ?? vs ||

I use ?? when I only want a fallback for null or undefined. || treats all falsy values as missing, so ?? is better when values such as 0 or "" are valid.

7. The five loops
for: useful when I know how many times I need to repeat something.
for...of: useful when I want to loop through the values of an array or another iterable.
for...in: useful when I want to loop through the keys of an object.
while: useful when I want to repeat code while a condition is true.
do...while: useful when the code must run at least once before checking the condition.
8. break vs continue

break stops the entire loop, while continue skips the current iteration and moves to the next one.

9. A bug I hit today

I tried to change a variable that was declared with const, which caused this error:

TypeError: Assignment to constant variable.

I fixed it by changing the declaration to let because the value needed to change.