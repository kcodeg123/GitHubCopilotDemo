#   GitHub Copilot Inline Chat

In Visual Studio, right click in your editor window and select Ask Copilot to bring up the inline chat view of Copilot Chat in the editor itself.

You can use the `Alt + /` shortcut to open the inline chat and refine code in the editor

Work on the following code:

        using System;
        
        class BubbleSortExample
        {
            static void Main(string[] args)
            {
                int[] arr = { 78, 55, 45, 98, 13 };
                BubbleSort(arr);
                Console.WriteLine("Sorted array:");
                foreach (int p in arr)
                    Console.Write(p + " ");
                Console.Read();
            }
        
            static void BubbleSort(int[] arr)
            {
                int temp;
                for (int j = 0; j <= arr.Length - 2; j++)
                {
                    // The outer loop runs n times
                    for (int i = 0; i <= arr.Length - 2; i++)
                    {
                        // The inner loop runs n times
                        if (arr[i] > arr[i + 1])
                        {
                            // Swap the elements
                            temp = arr[i + 1];
                            arr[i + 1] = arr[i];
                            arr[i] = temp;
                        }
                    }
                }
            }
        }


Enter the the inline chat the following prompt:

        Implement a better algorithm with lower space and time complexity
