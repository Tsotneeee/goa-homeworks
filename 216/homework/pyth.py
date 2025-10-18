import random
# 1
def binary_search(nums, target):
    left = 0
    right = len(nums) - 1
    while left <= right:
        middle = left + (right - left) // 2
        if nums[middle] == target: return middle
        elif nums[middle] < target: left = middle + 1
        else: right = middle - 1
    return -1

print(binary_search([1,3,5,6],7))

# 7
def reverse_binary_search(nums, target):
    left = 0
    right = len(nums) - 1
    while left <= right:
        middle = left + (right - left) // 2
        if nums[middle] == target: return middle
        elif nums[middle] > target: left = middle + 1
        else: right = middle - 1
    return -1

print(reverse_binary_search([6,5,3,1],6))

# 8
def guesser():
    inp = int(input("num 1-100: "))
    num = random.randint(1,100)
    tries = 0
    while inp != num:
        if inp < num:
            print("higher")
            inp = int(input("num 1-100: "))
            tries += 1
        elif inp > num:
            print("lower")
            inp = int(input("num 1-100: "))
            tries += 1
    return "correct! -( " + str(tries) + " )- tries"
 
print(guesser())