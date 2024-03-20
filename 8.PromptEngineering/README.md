# Copilot Prompt Crafting

## Learning Objectives

Practice some Prompt Crafting with GitHub Copilot Chat.

---

## Prerequisites

- Copilot 
- Copilot Chat

---

## DEMO 1

Open `calculator.js` on VS Code and then use the Copilot Chat Window for the below prompts. We are using `jest` for our tests which you can run on the terminal using `npm test`. Simply update the **UnitTest.js** file with the Unit Tests before testing.

### Zero-shot 

```
Write me unit tests for all the operations in my calculator.js file
```

### One-Shot
 ```
 Write me unit tests for all the operations in my calculator.js file
Use the following example: test(‘adds 1 + 2 to equal 3’, () => ( expect(calculate(1, 2 ‘+’)).toBe(3); });
```
---

## DEMO 2 

### Zero-shot 
```
Can you create an HTML calculator for me?
```

### One-Shot

```
Can you create an HTML calculator for me? Use the following example:  
<!DOCTYPE html>
<html>
  <head>
    <title>Calculator</title>
    <link rel="stylesheet" href="style.css">
  </head>
<body> 
```

---

## DEMO 3

### Zero-shot 

```
Can you write me the code for a snake game?
```

### One-Shot

```
Can you write me the code for a snake game? 
Example: Ensure that there is a leaderboard mechanic
```