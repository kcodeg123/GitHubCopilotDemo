# GitHub Copilot Chat

GitHub Copilot Chat brings Context to a conversation, which wasn't possible with only GitHub Copilot Code Completions with inline comments.

## Make the codebase more readable

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
            print(("valid", "invalid")[checkvalid('',e_regex)])
            print(("valid", "invalid")[checkvalid('',p_regex)])
            print(("valid", "invalid")[checkvalid('',s_regex)])

Now try these prompts

        Explain the selected regex code
        Make this code more readable
        Seperate out the validation functions and add more comments

Code is now in separate functions with comments and the variables now have much more meaningful names
