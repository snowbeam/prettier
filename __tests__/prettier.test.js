const prettier = require("prettier");

const prettierConfig = require("../prettier-config");

const config = {
  ...prettierConfig,
  parser: "babel",
};

test("validate semicolon", async () => {
  const source = `const foo = 'bar';\n`;

  expect(await prettier.format(source, config)).toEqual(source);
});

test("validate trailing commas in array", async () => {
  const source = `const foo = ['milk', 'eggs', 'butter', 'Pepsi', 'cinnamon bears'];\n`;
  expect(await prettier.format(source, config)).toEqual(source);
});

test("validate function parameter commas", async () => {
  const source = `function foo(parameter1, parameter2, parameter3) {}\n`;

  expect(await prettier.format(source, config)).toEqual(source);
});
