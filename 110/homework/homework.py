lst = [[1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36],
    [37, 38, 39, 40, 41, 42]]

def row_avarge(lists):
    list2 = []
    sum = 0
    for i in range(len(lists)):
        sum = 0
        for j in range(len(lists[i])):
            sum += lists[i][j]
        list2.append(sum / len(lists[i]))
    return list2

def col_avarge(lists):
    list2 = []
    sum = 0
    for i in range(len(lists[0])):
        sum = 0
        for j in range(len(lists)):
            sum += lists[j][i]
        list2.append(sum / len(lists))
    return list2

print(row_avarge(lst))
print(col_avarge(lst))

#2
def ajgabajga(lists):
    list2 = []
    for i in range(len(lists)):

        for j in range(len(lists[i])):
            if j % 2 == 0:
                list2.append(lists[i][j]/2)
            else:
                list2.append(lists[i][j] % 13)
    return list2

print(ajgabajga(lst))