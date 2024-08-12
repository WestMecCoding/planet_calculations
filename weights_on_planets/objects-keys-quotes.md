## Questions

1. When do we need quotes around keys and values?

- if an object name does not contain spaces or special characters, and does not start with a number, you can use it without quotes.

```js
const someObj = {
  name: "Alice",
  age: 30,
};
```

Here, name and age are called 'valid javascript identifiers'.

- if an object name contains spaces, special characters or starts with a number you must use quotes. You can use ' single, " double, or ` backticks.

```js
const obj = {
  "first name": "Alice",
  "age-in-years": 30,
  "3rdkey": "some value",
};
```

- For values, strings always require quotes. Numbers, booleans, null, undefined and objects do not require quotes.

```js
const someObj = {
    age: 30,
    isActive: true,
    "weather data": null,
    "nested object": { somekey: 'string value', "new obj": {}}
}
```