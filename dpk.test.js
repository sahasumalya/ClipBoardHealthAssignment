const { deterministicPartitionKey, refactoredDeterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    const refactoredTrivialKey = refactoredDeterministicPartitionKey();
    expect(trivialKey).toBe("0");
    expect(refactoredTrivialKey).toBe("0");

  });

  it("When input is event string", () => {
    const trivialKey = deterministicPartitionKey("test");
    const refactoredTrivialKey = refactoredDeterministicPartitionKey("test");
    expect(trivialKey).toBe(refactoredTrivialKey);

  });

  it("When input is event object containing partition key", () => {
    const event = {
      partitionKey: "123",
    }
    const trivialKey = deterministicPartitionKey(event);
    const refactoredTrivialKey = refactoredDeterministicPartitionKey(event);
    expect(trivialKey).toBe(refactoredTrivialKey);

  });

  it("When input is event object without partition key", () => {
    const event = {
      testKey: "123",
    }
    const trivialKey = deterministicPartitionKey(event);
    const refactoredTrivialKey = refactoredDeterministicPartitionKey(event);
    expect(trivialKey).toBe(refactoredTrivialKey);

  });

  it("When input is event object with big partition key", () => {
    const event = {
      testKey: "sfdtgdttdtgdfbrdtgbkhbskvwbrfkwbsvdkwsbvkwhvskrhvshvdkvkrvjgvwgjkwgvwjgdvksgkcvsjkvckseekhhvckevdhvwdkwhvwdckvhcdkckacsvkaakskavkacvakvshckavakjkjakcvjakvjjacvajjjajvavckvchdkvcadkvhckahvcdkckahvkvckkdhdhhhhdhddkhcvdakvhdkdhbdkhbkhabkhvbkhbvkhvkhvkhvkkcdvkckavsdegerfgedfgtr",
    }
    const trivialKey = deterministicPartitionKey(event);
    const refactoredTrivialKey = refactoredDeterministicPartitionKey(event);
    expect(trivialKey).toBe(refactoredTrivialKey);

  });

  it("When input is event object with partition key as an object", () => {
    const event = {
      partitionKey: {
        testKey: "123",
      },
    }
    const trivialKey = deterministicPartitionKey(event);
    const refactoredTrivialKey = refactoredDeterministicPartitionKey(event);
    expect(trivialKey).toBe(refactoredTrivialKey);

  });


});

