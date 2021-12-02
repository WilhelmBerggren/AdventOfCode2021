import fileinput

aim = h = d = 0

for l in fileinput.input():
    cmd, x = l.strip().split()
    x = int(x)

    if cmd == "down": aim += x
    elif cmd == "up": aim -= x
    else: h += x; d += aim * x  # cmd == "forward"

print(h * aim)
print(h * d)