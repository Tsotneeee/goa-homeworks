import random

def bubbleSort(lst):
    for i in range(len(lst)):
        for j in range(len(lst)-1):
            if lst[j] > lst[j+1]:
                lst[j], lst[j+1] = lst[j+1], lst[j]

def selectionSort(lst):
    for i in range(len(lst)):
        minIndex = i
        for j in range(i+1, len(lst)):
            if lst[j] < lst[minIndex]:
                minIndex = j
        lst[i], lst[minIndex] = lst[minIndex], lst[i]

lst1 = [1,8,9,7,5,6]
# selectionSort(lst1)


def insertionSort(lst):
    for i in range(1, len(lst)):
        key = lst[i]
        j = i - 1
        while j >= 0 and key < lst[j]:
            lst[j + 1] = lst[j]
            j -= 1
        lst[j + 1] = key

insertionSort(lst1)
print(lst1)

def is_sorted(lst):
    for i in range(1,len(lst)):
        if lst[i] < lst[i-1]:
            return False
    return True

def bogoSort(lst):
    while not is_sorted(lst):
        random.shuffle(lst)
    return lst





