# Code Completions Panel

Let's refer to the original high CPU usage code snippet we created earlier.

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

Select the class and do `CNTRL + ALT + ENTER` to get suggestions for improvements on your code using GitHub Copilot Completions Panel.


