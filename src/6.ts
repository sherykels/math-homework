  const generateRandomTsCode = () => {
    let code = "";
  
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
  
    // Generate a random boolean value
    const isTrue = Math.round(Math.random()) === 1;
  
    // Generate a random string
    const randomString = Math.random().toString(36).substring(7);
  
    // Add the code to the return statement
    code += `const randomNumber = ${randomNumber};`;
    code += `const isTrue = ${isTrue};`;
    code += `const randomString = "${randomString}";`;
  
    // Return the generated code
    return code;
  }