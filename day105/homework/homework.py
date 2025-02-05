def points(games):
    pointas = 0
    for i in range(len(games)):
        interized1 = games[i][0]
        interized2 = games[i][-1]
        if interized1 > interized2:
            pointas+=3
        elif interized1 == interized2:
            pointas +=1
    return pointas

# for codewars