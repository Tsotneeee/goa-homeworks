side1 = int(input("enter triangle side: "))
side2 = int(input("enter triangle side: "))
side3 = int(input("enter triangle side: "))

if side1 + side2 > side3 and side1 + side3 > side2 and side2 + side3 > side1:
    print("this is a triangle")
else:
    print("it isnt a triangle")