import math
n = int(input())
for i in range(n):
    firtRectangle = list(map(int, input().split()))
    secondRectangle = list(map(int, input().split()))

   
    pro = (firtRectangle[0] * firtRectangle[1]) + (secondRectangle[0]* secondRectangle[1])

    if (pro **(1/2)).is_integer() and max(firtRectangle) == max(secondRectangle):
        print("YES")
    else:
        print("NO")





