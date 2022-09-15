using System;
using Xunit;
using DotNetKata;

namespace DotNetKata.Tests
{
    public class ApplicationTests
    {
        [Fact]
        public void TestOtherNums()
        {
            Assert.Equal("1", Application.FizzBuzz(1));
            Assert.Equal("2", Application.FizzBuzz(2));
        }

        [Fact]
        public void Test3()
        {
            Assert.Equal("fizz", Application.FizzBuzz(3));
            Assert.Equal("fizz", Application.FizzBuzz(6));
            Assert.Equal("fizz", Application.FizzBuzz(9));
        }

        [Fact]
        public void Test5()
        {
            Assert.Equal("buzz", Application.FizzBuzz(5));
            Assert.Equal("buzz", Application.FizzBuzz(10));
        }

        [Fact]
        public void Test3_5()
        {
            Assert.Equal("fizzbuzz", Application.FizzBuzz(15));
            Assert.Equal("fizzbuzz", Application.FizzBuzz(30));
        }

        [Fact]
        public void Test7()
        {
            Assert.Equal("bizz", Application.FizzBuzz(7));
        }

        [Fact]
        public void Test3_7()
        {
            Assert.Equal("fizzbizz", Application.FizzBuzz(3 * 7));
        }

        [Fact]
        public void Test5_7()
        {
            Assert.Equal("buzzbizz", Application.FizzBuzz(5 * 7));
        }

        [Fact]
        public void Test3_5_7()
        {
            Assert.Equal("fizzbuzzbizz", Application.FizzBuzz(3 * 5 * 7));
        }

        [Fact]
        public void Test11()
        {
            Assert.Equal("bazz", Application.FizzBuzz(11));
        }
    }
}
