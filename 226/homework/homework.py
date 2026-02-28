def arr_flatter(lst):
    st = ""
    for i in lst:
        if not isinstance(i , list):
            st += str(i)
        else:
            st += arr_flatter(i)
    return st

lst = [1,[1,2,[1,5]],2,[5,[8,9,7]]]
print(arr_flatter(lst))

def arr_spinner(lst, dir) -> list:
    final_dir = 0
    for i in dir: final_dir += i

    while final_dir != 0:
        s1 = lst[0]
        s2 = lst[1]
        s3 = lst[2]
        if final_dir > 0:

            lst[0] = [s3[0], s2[0], s1[0]]
            lst[1][2] = s1[1]
            lst[2] = [s3[2], s2[2], s1[2]]
            lst[1][0] = s3[1]

            final_dir -= 1
        else:

            lst[0] = [s1[2],s2[2],s3[2]]
            lst[2] = [s1[0],s2[0],s3[0]]
            lst[1][2] = s3[1]
            lst[1][0] = s1[1]

            final_dir += 1
    return lst


lst = [ [ 10,21,13 ], 
        [ 7 , 9, 8 ], 
        [ 12,14,23 ] ]

print(arr_spinner(lst,[1,1,-1]))
# [ [ 12,7,10 ] 
#   [ 14,9,21 ]
#   [ 23,8,13 ] ]