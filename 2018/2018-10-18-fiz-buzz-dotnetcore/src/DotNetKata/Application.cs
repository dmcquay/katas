using System;

namespace DotNetKata
{
    public static class Application
    {
        public static string FizzBuzz(int n)
        {
            var numberWordPairs = new Tuple<int, string>[] {
                new Tuple<int, string> (3, "fizz" ),
                new Tuple<int, string> (5, "buzz" ),
                new Tuple<int, string> (7, "bizz" ),
                new Tuple<int, string> (11, "bazz" ),
            };

            string s = "";

            foreach (var numberWordPair in numberWordPairs)
            {
                if (n % numberWordPair.Item1 == 0)
                {
                    s += numberWordPair.Item2;
                }
            }

            if (s == "")
                return n.ToString();
            else
                return s;
        }
    }
}