import rpyc

conn = rpyc.classic.connect('ev3dev.local')
ev3 = conn.modules['ev3dev.ev3']
