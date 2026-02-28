lst = [1,3,5,4,9,8,7,2] # 3, 5, -1, 9, -1, -1, -1, -1

def func(lst):
    new_lst = []
    for i in range(len(lst)):
        if i < len(lst) - 1:
            if lst[i] < lst[i+1]:
                new_lst.append(lst[i+1])
            else: new_lst.append(-1)
    new_lst.append(-1)
    return new_lst

print(func(lst))

# 3
