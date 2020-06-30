#複利の計算

savings = 100                   #元金
for i in range(15):             #15年分
    savings += savings*0.05

print(savings)

#207.89281794113666
#なんと5％の利子で元金の2倍