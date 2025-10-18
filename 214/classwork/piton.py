import random

list1 = [4,2,7,9,5,4]

def bogosSort(lst):
    while not isSorted(lst):
        random.shuffle(lst)
    return lst

def isSorted(lst):
    for i in range(len(lst)-1):
        if lst[i] > lst[i+1]:
            return False
    return True

print(bogosSort(list1))