_NUMBER_WORD_PAIRS = [
    (3, 'fizz'),
    (5, 'buzz'),
    (7, 'bizz'),
    (11, 'bazz'),
    (13, 'boom'),
    (17, 'bing'),
    (19, 'bang'),
    (23, 'bong'),
    (29, 'fozz'),
    (31, 'fazz'),
    (37, 'woof'),
]

def fizzBuzz(n):
    s  = ''

    for (num, word) in _NUMBER_WORD_PAIRS:
        if n % num == 0:
            s += word

    # functional approach. ended up feeling much harder to read to me.
    # words = map(lambda numberWordPair: numberWordPair[1] if n % numberWordPair[0] == 0 else None, _NUMBER_WORD_PAIRS)
    # filtered_words = filter(lambda x: x, words)
    # s = ''.join(filtered_words)
    
    return s or n