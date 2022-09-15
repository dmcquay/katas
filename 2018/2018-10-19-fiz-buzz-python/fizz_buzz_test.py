import unittest
from fizz_buzz import fizzBuzz

class TestFizzBuzz(unittest.TestCase):

    def test_other(self):
        self.assertEqual(fizzBuzz(1), 1)
        self.assertEqual(fizzBuzz(2), 2)
    
    def test_3(self):
        self.assertEqual(fizzBuzz(3), 'fizz')
        self.assertEqual(fizzBuzz(6), 'fizz')
        self.assertEqual(fizzBuzz(9), 'fizz')
    
    def test_5(self):
        self.assertEqual(fizzBuzz(5), 'buzz')
        self.assertEqual(fizzBuzz(10), 'buzz')

    def test_7(self):
        self.assertEqual(fizzBuzz(7), 'bizz')
        self.assertEqual(fizzBuzz(7 * 2), 'bizz')
    
    def test_3_7(self):
        self.assertEqual(fizzBuzz(3 * 7), 'fizzbizz')
        self.assertEqual(fizzBuzz(3 * 7 * 2), 'fizzbizz')

    def test_5_7(self):
        self.assertEqual(fizzBuzz(5 * 7), 'buzzbizz')
        self.assertEqual(fizzBuzz(5 * 7 * 2), 'buzzbizz')
    
    def test_3_5_7(self):
        self.assertEqual(fizzBuzz(3 * 5 * 7), 'fizzbuzzbizz')
        self.assertEqual(fizzBuzz(3 * 5 * 7 * 2), 'fizzbuzzbizz')
    
    def test_everything(self):
        self.assertEqual(fizzBuzz(3 * 5 * 7 * 11 * 13 * 17 * 19 * 23 * 29 * 31 * 37), 'fizzbuzzbizzbazzboombingbangbongfozzfazzwoof')
        self.assertEqual(fizzBuzz(3 * 5 * 7 * 11 * 13 * 17 * 19 * 23 * 29 * 31 * 37 * 2), 'fizzbuzzbizzbazzboombingbangbongfozzfazzwoof')