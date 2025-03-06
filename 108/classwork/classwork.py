def get_size(w,h,d):
    arr = []
    arr.append(2*(h*d+d*w+h*w))
    arr.append(w*h*d)
    return arr

print(get_size(2,3,7)) # [94, 42]