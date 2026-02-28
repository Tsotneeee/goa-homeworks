# https://leetcode.com/problems/remove-duplicates-from-sorted-array/

def removeDuplicates(self, nums):
    lst = []
    st = 0
    for i in nums:
        if i not in lst:
            lst.append(i)
        else: st += 1
    length = len(lst)
    
    nums[:] = lst
    return length

def lengthOfLastWord(self, s: str) -> int:
    words = s.split(" ")

    while words[-1] == "":
        words.pop()
    print(words)
    return len(words[-1])

def climbStairs(self, n: int) -> int: # ეს არ ჩათვალოთ
    if n <= 2:
        return n
    a, b = 1, 2
    for i in range(3, n + 1):
        a, b = b, a + b
    return b

def singleNumber(self, nums) -> int:
    dict1 = {}
    for i in nums:
        dict1.update({i: (dict1.get(i) or 0) + 1})
    
    for [key,value] in dict1.items():
        if value == 1: return key