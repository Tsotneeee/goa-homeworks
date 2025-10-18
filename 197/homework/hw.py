# O(1)
def firstEl(lst):
    return lst[0]

# O(n)
def sumer(lst):
    return sum(lst)

# O(n)
def num_in_lst(lst, n):
    return n in lst

# O(n^2)
def pair_sum(lst, n):
    for i in range(len(lst)):
        for j in range(i + 1, len(lst)):
            if lst[i] + lst[j] == n:
                return True
    return False

# O(log n)
def binary_search(lst, n):
    low = 0
    high = len(lst) - 1
    while low <= high:
        mid = (low + high) // 2
        if lst[mid] == n:
            return True
        elif lst[mid] < n:
            low = mid + 1
        else:
            high = mid - 1
    return False