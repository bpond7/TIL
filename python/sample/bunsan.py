#分散を求める

monk_fish_team = [158, 157, 163, 157, 145]

total = sum(monk_fish_team)     #合計
length = len(monk_fish_team)    #要素数
mean = total / length           #平均
variance = 0

for height in monk_fish_team:
    variance += (height-mean)**2    #身長から平均を引いて二乗

variance = variance/length      #分散

print(variance)

