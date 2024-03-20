# GitHub Copilot Chat

GitHub Copilot Chat brings Context to a conversation, which wasn't possible with only GitHub Copilot Code Completions with inline comments.

## 1. Make the codebase more readable

Let's review a poorly documented regex code. Instead of pulling up some regex documentation, let's see what copilot chat can do.

        import re
            
        e_regex = r'^[\w\.\+\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$'
        p_regex = r'^(\+)?1?\d{9,15}$'
        s_regex = r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'
            
        def checkvalid(text, regex):
            if re.search(regex, text):
                return True
            else:
                return False
            
        if __name__	== '__main__':
            # call the checkvalid function with user input
            email = input("Enter your email: ")
            print(checkvalid(email, e_regex))
            phone = input("Enter your phone: ")
            print(checkvalid(phone, p_regex))
            password = input("Enter your password: ")
            print(checkvalid(password, s_regex))

Now try these prompts

        Explain the selected regex code
        Make this code more readable
        Seperate out the validation functions and add more comments

Code is now in separate functions with comments and the variables now have much more meaningful names

## 2. Create entire classes just based on a dialog

Save the following data in a CSV file

        ﻿David;47;Tacos
        Johan;32;Pizza
        Mia;38;Burgers
        Lena;26;Sushi

Select the data as the context, open up GitHub Copilot Chat and enter the following prompts:

* `I have a .csv file containing information in the following structure. Please help me setup a class in C# to handle CRUD operations for this file.`
* `I need this class to be very resilient. What can I do for that?`
* `Looks great, could you also help me to add logging? We usually log to the console in my project.`

## 3. Slash Commands

[Reference](https://learn.microsoft.com/en-us/visualstudio/ide/copilot-chat-context?view=vs-2022#slash-commands)

Slash commands in Copilot Chat help you set the intent quickly for common development tasks. By using specific slash commands to form your question, you can get better answers without having to write out long questions. Commands that help modify or add to the code file you have open in the editor will work both in the inline code assistant and the chat windows whereas commands for more general coding questions work only in the chat pane.

![image](https://github.com/kcodeg123/GitHubCopilotDemo/assets/3813135/6085b197-cd10-46b1-b06c-63fee101927a)

### 3.1. Optimize Code Complexity using `/optimize`

Create a new **C# Console App** with the name **ComplexityOptimization** and the following code:

        using System;
        
        public class ComplexityOptimization
        {
            // Function to find the nth Fibonacci number using recursion
            // This implementation has high time complexity O(2^n) and high space complexity O(n) due to recursion and call stack
            public static int FibonacciRecursive(int n)
            {
                if (n <= 1)
                    return n;
                else
                    return FibonacciRecursive(n - 1) + FibonacciRecursive(n - 2);
            }
        
            public static void Main(string[] args)
            {
                int n = 10;
        
                // Calculating nth Fibonacci number using recursive approach
                Console.WriteLine("Using Recursive Approach:");
                Console.WriteLine($"Fibonacci({n}) = {FibonacciRecursive(n)}");
        
            }
        }

In the Copilot Chat window, try the slash command `/optimize` after selecting the above code.

## 4. Scope Copilot results to a particular file

* Select the specific scope you want GitHub Copilot to use for answering the prompts
* Form better questions easily without having to write out or paste long pieces of information
* Get more relevant answers

![image](https://github.com/kcodeg123/GitHubCopilotDemo/assets/3813135/07ff5c96-f0b0-407b-bce2-be9684b55281)


Use `#` to select a file and try to prompt `Optimize this code`
