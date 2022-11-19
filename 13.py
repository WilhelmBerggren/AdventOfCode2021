# maxX = 0
# maxY = 0
# pointCoords = []
# folds = []

# with open("13.txt", 'r') as f:
#     for line in f.readlines():
#         if len(line.strip()) == 0:
#             continue
#         if line.find(',') != -1:
#             x, y = line.strip().split(',')
#             x = int(x)
#             y = int(y)
#             if x >= maxX:
#                 maxX = x + 1
#             if y >= maxY:
#                 maxY = y + 1
#             pointCoords.append((x, y))
#             continue
#         a = line.strip().split(' ')
#         foldAlong, nr = a[2].split('=')
#         folds.append((foldAlong, int(nr)))

# paper = [[0 * y for y in range(0, maxY)] for x in range(0, maxX)]
# for point in pointCoords:
#     paper[point[0]][point[1]] = 1

# for fold in folds:
#     if fold[0] == 'x':
#         for x in range(fold[1], maxX):
#             for y in range(0, maxY):
#                 newX = fold[1] - (x - fold[1])
#                 paper[newX][y] += paper[x][y]
#                 paper[x][y] = 0
#         maxX = fold[1]
#     if fold[0] == 'y':
#         for x in range(0, maxX):
#             for y in range(fold[1], maxY):
#                 newY = fold[1] - (y - fold[1])
#                 paper[x][newY] += paper[x][y]
#                 paper[x][y] = 0
#         maxY = fold[1]

# # counting visible dots and "writing" the letters
# visibleDots = 0
# rows = ['' for y in range(0, len(paper[0]))]
# for x in range(0, len(paper)):
#     for y in range(0, len(paper[x])):
#         if paper[x][y] > 0:
#             rows[y] = rows[y] + '#'
#         else:
#             rows[y] = rows[y] + ' '
#         if paper[x][y] > 0:
#             visibleDots += 1

# for i in range(0,6):
#     print(rows[i][0:40])
# print(visibleDots)

# def f3(el, ar):
#     z, w = int(el[1]), el[0] == 'y'
#     h = [a for a in ar if a[w] < z]
#     add_these = [(s[not w], 2*z-s[w])[::-1+2*w] for s in ar if s[w] > z]
#     for a in add_these:
#         if (a not in h):
#             h.append(a)
#     return(h)

# for row in folds:
#   data = f3(row,data)

# print(data)

data = [(int(x),int(y)) for [x,y] in [row.split(',') for row in open('data.txt').read().splitlines()]]
folds = [row.split(' ')[2].split('=') for row in open('folds.txt').read().splitlines()]

#draw the initial state based on data
ncols = max([x for (x,_) in data])+1
nrows = max([y for (_,y) in data])+1
p = [['.' for j in range(ncols)] for i in range(nrows)]
for i in data:
    p[i[1]][i[0]] = '#'

def getstars(arr):
    #Returns a list of current stars
    stars_list = []
    for i in range(len(arr[0])):
        for j in range(len(arr)):
            if arr[j][i] == '#':
                stars_list.append((i,j))
    return(stars_list)

def fold(el, stars_list, arr):
    #Using a folding instruction and stars list, move the stars

    if el[0] == 'y':
        add_these = [(star[0],2*int(el[1])-star[1]) for star in stars_list if star[1] > int(el[1])]
        for i in add_these:
            arr[i[1]][i[0]] = '#'
        arr = arr[:int(el[1])]
    if el[0] == 'x':
        add_these = [(2 * int(el[1]) - star[0],star[1]) for star in stars_list if star[0] > int(el[1])]
        print(add_these)
        for i in add_these:
            arr[i[1]][i[0]] = '#'
        arr = [row[0:int(el[1])] for row in arr]

    return(arr)


slist = getstars(p)

mp = fold(['x', '655'],slist,p)
for row in mp:
    print(''.join(row))
slist = getstars(mp)

for f in folds[1::]:
    slist = getstars(mp)
    mp = fold(f, slist, mp)

for row in mp:
    print(''.join(row))