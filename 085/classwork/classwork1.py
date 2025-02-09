# 1
nums = [2,5,3,4,9]

print(nums[2])
print(nums[4])
  

#2
n1 = int(input("number of numbers: "))
numsN = []
for i in range(n1):
    numsN.append(int(input("numbers: ")))

for j in range(n1):
    if j%2!=0:
        print(numsN[j])

# 3
nums22 = []

for i in range(10):
    nums22.append(int(input("nums: ")))

for j in range(10):
    print(nums22[j]*2)

# 4
n2 = int(input("number of nums: "))
nLst2 = []
for i in range(n2):
    nLst2.append(int(input("nums: ")))

for j in range(n2-1,-1,-1):
    print(nLst2[j])

# 5
n3 = int(input("number of nums: "))
nlst3 = []


for i in range(n3):
    nlst3.append(int(input("nums: ")))
    
auxN = nlst3[0]
auxN2 = nlst3[n3-1]    

nlst3.remove(auxN)
nlst3.remove(auxN2)
nlst3.insert(0,auxN2)
nlst3.append(auxN)

print(nlst3)