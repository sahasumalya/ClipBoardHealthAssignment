const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  if (event) {
    if (event.partitionKey) {
      candidate = event.partitionKey;
    } else {
      candidate = crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex");
    }
  }

  if (candidate) {
    if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
    }
  } else {
    candidate = TRIVIAL_PARTITION_KEY;
  }
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }
  return candidate;
  
};

exports.refactoredDeterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  const createHash = (input)=>{
    if(typeof input !== "string" || !event?.partitionKey) { // for event objects excluding obejcts coming from partitionKey
      input = JSON.stringify(input);
    }
    let output = input;
    if(!event?.partitionKey) { // for event objects without partionkey
      output = crypto.createHash("sha3-512").update(input).digest("hex");
    }
    if(output.length > MAX_PARTITION_KEY_LENGTH) {
      output =  crypto.createHash("sha3-512").update(output).digest("hex");
    }
    return output;
  }

  let candidate = event?.partitionKey; // if partiton key availabe set input to partionKey
  candidate = candidate?candidate:event;// if partitionKey not found set input to event
  candidate = candidate?createHash(candidate):TRIVIAL_PARTITION_KEY; // if input is set, hashit otherwise set it to trivial
  return candidate;
  
};
