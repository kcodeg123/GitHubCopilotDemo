[Reference](https://learn.microsoft.com/en-us/visualstudio/debugger/debug-with-copilot?view=vs-2022)

# 1. Get Copilot to debug your App

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
        
                names.Add("La Ley");
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

**Cancel the changes so that we can continue with this demo.**

# 2. Get Copilot to help with an exception

1. Remove the breakpoint
2. Run Debug > **Start Debugging**
3. Ask Copilot to fix the issue in the code

![image](https://github.com/kcodeg123/GitHubCopilotDemo/assets/3813135/c80c4d9e-b4eb-4400-9ca0-7571d77e3d4b)

5. Debug the code again

# 3. Get Copilot to expand the codebase

1. Now use Copilot to add some print statement 'n' number of times where 'n' is the length of the parameter
2. Add a parameter by going to Debug > "ConsoleAppName" Debug Properties and add an integer value like **5** in the **command line arguments**.
3. Run the debug again and see the output

# 4. Get AI assistance for auto insights

> TESTING PENDING

Use this code:

        using System;
        using System.Threading;
        
        class HighCPUUsage
        {
            static void Main()
            {
                Console.WriteLine("Running high CPU load for 10 seconds...");
                DateTime endTime = DateTime.Now.AddSeconds(10); // Run for 10 seconds
        
                while (DateTime.Now < endTime)
                {
                    // Perform some meaningless computation to keep CPU busy
                    double result = Math.Pow(Math.PI, Math.E) * Math.Sqrt(Math.Log10(Math.PI * Math.E));
                }
        
                Console.WriteLine("High CPU load complete.");
            }
        }

Run Debug > **Performance Profiler**

In the Top Insights, select the **Ask Copilot** option to get recommendations.

![image](https://github.com/kcodeg123/GitHubCopilotDemo/assets/3813135/51c63eee-85b9-492e-b77e-9e15a8988d5c)

