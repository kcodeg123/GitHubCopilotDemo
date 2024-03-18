# Get Copilot to debug your App

[Reference](https://learn.microsoft.com/en-us/visualstudio/debugger/debug-with-copilot?view=vs-2022)

1. Open Visual Studio
2. Create a new project > Console App
3. Name it **ConsoleApp_Copilot**
4. Replace the default code in _Program.cs_ with the following code:

        using System;
        using System.Collections.Generic;
        
        public class Example
        {
            public static void Main(string[] args)
            {
                int value = Int32.Parse(args[0]);
                List<String> names = null;
                if (value > 0)
                    names = new List<String>();
        
                names.Add("Major Major Major");
            }
        }

5. Right-click the following statement and choose **Breakpoint > Insert Breakpoint**

        int value = Int32.Parse(args[0]);
6. Press F5 or select **Start Debugging** from the Debug menu.\
    The app pauses at the breakpoint. The Autos window shows that the args variable has a value of `string[0]`.

7. Right-click in the code and choose Ask Copilot to open the inline Chat view.
8. Type the following question in the inline Chat view:

        Why does the args variable have a value of string[0]?
If Copilot has a suggested fix for your code, it shows you. If not, you can ask Copilot for a code suggestion.


