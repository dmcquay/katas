const fs = require("fs");

const data = [
  {
    group: "group1",
    rows: [
      [1, 2, 3],
      [4, 5, 6],
    ],
  },
  {
    group: "group2",
    rows: [
      [7, 8, 9],
      [10, 11, 12],
    ],
  },
  { group: "group3", rows: [[13, 14, 15]] },
];

let previousFrameSize = 0;

// Write the data to a binary file
const writeData = (filePath) => {
  const fd = fs.openSync(filePath, "w");

  data.forEach((group) => {
    const frameData = Buffer.from(JSON.stringify(group)); // Convert group data to buffer
    const currentFrameSize = frameData.length;

    const header = Buffer.alloc(8);
    header.writeUInt32BE(currentFrameSize, 0); // Current frame size
    header.writeUInt32BE(previousFrameSize, 4); // Previous frame size

    fs.writeSync(fd, header);
    fs.writeSync(fd, frameData);

    previousFrameSize = currentFrameSize;
  });

  fs.closeSync(fd);
};

writeData("data.bin");
