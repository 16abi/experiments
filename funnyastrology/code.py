print("Birth year in -> Funny message out.")
year = int(input("Enter your birth year:"))
b = year % 10
c = int(year/10)
d = b +(c % 10)
e = int (c/10)
f = d + (e % 10)
g = int (e/10)
h = f + g
i = h % 10
j = int( i + ( h/10))
if (j==1):
    print("Snack first, plan later")
elif (j==2):
    print("Peaceful vibe until someone eats your fries.Then its a war")
elif (j==3):
    print("Look mysterious, but just forgot to reply")
elif (j==4):
    print("Passionately debating pizza toppings like it's a life-or-death issue")
elif (j==5):
    print("Eating snacks at midnight and regretting it by morning")
elif (j==6):
    print("Your future holds success, but only after 27 distractions")
elif (j==7):
    print("Your future is bright mostly because your phone screen is on max brightness")
elif (j==8):
    print("Destiny calls you legendary but your bed calls you louder")
elif (j==9):
    print("The universe reveals your life full of 'just 5 more minutes' naps.")


