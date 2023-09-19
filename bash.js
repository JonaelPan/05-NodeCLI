process.stdout.write("prompt>");
const commands = require("./commands");
process.stdin.on("data", function (data) {
  let cmd = data.toString().trim();
  //let cara = data.toString();
  //process.stdout.write(casa);

  if (cmd == "pwd") {
    commands.pwd();
  } else if (cmd == "date") {
    commands.date();
  } else if (cmd == "ls") {
    commands.ls();
  } else if (cmd.includes("echo")) {
    commands.echo(cmd.slice(5));
    //process.stdout.write("bien guachin!!\n");
  } else if (cmd.includes("cat")) {
    commands.cat(cmd.slice(4));
    //process.stdout.write("bien guachin!!\n");
  } else if (cmd.includes("head")) {
    commands.head(cmd.slice(5));
  } else if (cmd.includes("tail")) {
    commands.tail(cmd.slice(5));
  } else if (cmd.includes("curl")) {
    commands.curl(cmd.slice(5));
  } else {
    process.stdout.write("You typed:" + cmd + "\n");
    process.stdout.write("prompt >");
  }
});
//console.log(process);
