import itertools

nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

l = []
summ = 0
for i in range(1, len(nums) + 1):
    for j in list(itertools.combinations(nums, i)):
        if summ < sum(j):
            summ = sum(j)
            print(j)

print(summ)
