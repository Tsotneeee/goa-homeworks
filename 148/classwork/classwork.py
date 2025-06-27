def bmuli(st):
    count = 0
    vocals = "aeiouy"
    for i in range(len(st)):
        if st[i] in vocals:
            temp += 1
        else:
            temp = 0
        if temp > count:
            count = temp
    return count

# შექმენით ფუნქცია რომელიც დააბრუნებს ყველაზე გრძელ ხმოვნების ბრმულს (რაოდენობა)
print(bmuli("jaaba"))  # 2
print(bmuli("ghjup")) # 1
print(bmuli("heeeelo")) # 4