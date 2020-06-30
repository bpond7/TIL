#!/usr/bin/env python3
import ev3dev.ev3 as ev3
import time

m = ev3.LargeMotor('outA')
m.run_timed(time_sp=100, speed_sp=500)
