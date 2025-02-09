def stringer(str):
    c1 = 0
    for i in range(len(str)):
        if str[i] == str[0]:
            c1 += 1
    return c1





print(stringer("hello hhhi")) # number of the letter on 0 index : 2 without count method