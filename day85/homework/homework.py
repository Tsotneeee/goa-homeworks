# 1
ch = input("enter character: ")
vocals = ["a","o","u","e","i"]

if ch in vocals:
    print("vocal")
else:
    print("not vocal")

# 2
nums_lst = [int(input("num1: ")),int(input("num2: ")),int(input("num3: ")),int(input("num1: "))]
num1 = max(nums_lst)
lst2 = []

for i in nums_lst:
    lst2.append(i)

lst2.remove(num1)

num2 = max(lst2)

print(num1*num2)
