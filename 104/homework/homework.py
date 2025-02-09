def sum_digits(n):
    result = 0
    while n > 0:
        result += n % 10
        n //= 10
    return result

print(sum_digits(123))  # მოსალოდნელი შედეგი: 6 (1 + 2 + 3)
print(sum_digits(405))  # მოსალოდნელი შედეგი: 9 (4 + 0 + 5)

# 2
def sum_two_largest(lst):
    if len(lst) < 2:
        return None

    max1 = max(lst)
    lst.remove(max1)
    max2 = max(lst)

    return max1 + max2

print(sum_two_largest([3, 7, 2, 9, 5]))  # მოსალოდნელი შედეგი: 16 (9 + 7)
print(sum_two_largest([10, 10, 5, 3]))   # მოსალოდნელი შედეგი: 20 (10 + 10)