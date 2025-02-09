def manual_index(numbers_list,search_value):
    if search_value not in numbers_list:
        return -1
    for i in range(0,len(numbers_list)):
        if search_value == numbers_list[i]:
            return i
        
print(manual_index([1,2,3,4,5,6,7,8,9],int(input())))
