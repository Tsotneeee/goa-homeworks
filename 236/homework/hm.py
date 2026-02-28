# 217. contains duplicates

# class Solution(object):
#     def containsDuplicate(self, nums):
#         freq = {}
#         for i in nums:
#             freq.update({i:(freq.get(i) or 0)+1})
#         for i in freq.values():
#             if i > 1: return True
#         return False

print()

# def firstUniqChar(self, s):
#     dict1 = {}
#     for i in s:
#         dict1[i] = (dict1.get(i) or 0) + 1
#     for [key, value] in dict1.items():
#         if value < 2: return s.index(key)
#     return -1

class Solution(object):
    def findTheDifference(self, s, t):
        count = {}
        for i in t:
            count[i] = count.get(i, 0) + 1

        for i in s:
            count[i] -= 1
            if count[i] == 0:
                del count[i]

        return list(count.keys())[0]