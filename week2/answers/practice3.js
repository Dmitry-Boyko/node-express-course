const fs = require("fs").promises;

const myFile = async () => {
  try {
    const text = await fs.readFile("./practice2.js", "utf8");
    await fs.writeFile("./content/practice2.txt", text);
  } catch (err) {
    console.error(err);
  }
};

myFile();
