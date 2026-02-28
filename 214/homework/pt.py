# buble sort O(n**2)
def bubbleSort(lst):
    for i in range(len(lst)):
        for j in range(len(lst)-1):
            if lst[j] > lst[j+1]:
                t = lst[j]
                lst[j] = lst[j+1]
                lst[j+1] = t

lst1 = [2,5,3,7,8,5,3]
bubbleSort(lst1)
print(lst1)

# sele sort O(n**2)
def selectionSort(lst):
    for i in range(len(lst)):
        minIndex = i
        for j in range(i+1, len(lst)):
            if lst[j] < lst[minIndex]:
                minIndex = j
        lst[i], lst[minIndex] = lst[minIndex], lst[i]

lst2 = [5,7,3,9,5,3,1]
selectionSort(lst2)
print(lst2)

# insertion sort O(n**2) or best O(n)
def insertionSort(lst):
    for i in range(1, len(lst)):
        key = lst[i]
        j = i - 1
        while j >= 0 and key < lst[j]:
            lst[j + 1] = lst[j]
            j -= 1
        lst[j + 1] = key
        # https://www.google.com/search?q=insertion+sort&sca_esv=64c82b2b08ea075f&sxsrf=AE3TifMUl4glT1TVQDuE9jSzbqH2nyY_og%3A1759479158954&ei=doXfaI75OfiChbIPuobJ0Qs&ved=0ahUKEwiOjInSyoeQAxV4QUEAHTpDMroQ4dUDCBA&uact=5&oq=insertion+sort&gs_lp=Egxnd3Mtd2l6LXNlcnAiDmluc2VydGlvbiBzb3J0MgsQABiABBiRAhiKBTIGEAAYBxgeMgsQABiABBiRAhiKBTIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARI_A9QAFjCDHAAeAGQAQCYAZ0DoAH3FKoBBzItNi4yLjG4AQPIAQD4AQGYAgKgAu4EmAMAkgcFMi0xLjGgB6NBsgcFMi0xLjG4B-4EwgcFMC4xLjHIBwc&sclient=gws-wiz-serp#fpstate=ive&vld=cid:4c72ba1b,vid:nZHNwb_evBg,st:0

#9 binary search

def alphaSort(lst1):
    lst2 = []
    lst3 = []
    for i in lst1:
        lst2.append(ord(i))
    insertionSort(lst2)
    for i in lst2:
        lst3.append(chr(i))
    
    return lst3

lst5 = "ავრნინწნბგდზ"
lst5 = alphaSort(lst5)
print(lst5)

# my sorting idea O(n**2)
def deleteSort(lst):
    lst2 = []
    while len(lst) > 0:
        theMin = min(lst)
        lst2.append(theMin)
        lst.remove(theMin)
    return lst2

lst6 = [6,3,6,7,1,2]
lst6 = deleteSort(lst6)
print(lst6)