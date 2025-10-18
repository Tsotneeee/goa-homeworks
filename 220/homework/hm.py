def printNums(n):
    if n <= 0: return
    printNums(n-1)
    print(n)

printNums(25)

def reverseprint(n):
    if n <= 0: return
    print(n)
    reverseprint(n-1)

reverseprint(25)

def arrSum(arr, n):
    if n <= 0: return 0
    return arr[n-1] + arrSum(arr, n-1)

lst = [10,10,10]
n = 3
print(arrSum(lst, n))

def lengthArr(lst):
    if not lst: return 0
    return 1 + lengthArr(lst[1:])

print(lengthArr([1,2,4,3,4,4,5,6,7,8,9,10]))

def reverseString(st, n):
    if n <= 1: return st[0]
    return st[n-1] + reverseString(st, n-1)

print(reverseString("tsotne", 6))

def maxArr(arr, n):
    if n == 1: return arr[0]
    return max(arr[n-1], maxArr(arr, n-1))

def vocals(st, n):
    if n == 0: return 0
    count = vocals(st, n-1)
    if st[n-1] in 'aeiouAEIOU':
        count += 1
    return count