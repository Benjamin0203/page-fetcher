const args = process.argv.slice(2);
if (args.length !== 2) {
  console.log("Wrong Input! Please Enter Again")
}

const url = args[0];
const filePath = args[1];

// console.log(args);
const request = require("request");
const fs = require("fs")

const fetcher = (url, filePath) => {
  request(url, (error, response, content) => {
    if (error) {
      console.log('error', error);
    }
    fs.writeFile(filePath, content, err => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${filePath}`);
      }
    });
  });
  
};

fetcher(url, filePath);