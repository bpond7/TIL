import rpyc

conn = rpyc.classic.connect('172.20.10.2')
ev3 = conn.modules['ev3dev.ev3']
m = ev3.LargeMoter('outA')
ts = ev3.TouchSensor('in1')

m.run_forever(speed_sp=300)

while(True):
    if ts.value() == 0:
        m.stop(stop_action="hold")
    else:
        m.run_forever(speed_sp=300)
