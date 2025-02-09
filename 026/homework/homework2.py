def num_checker():
    nums = 5 # <--this is a picked number
    if nums %2!=0:
        nums = "number is an odd number"
    else:
        nums = "number is an even number"
    return nums

print(num_checker())