import rpyc

conn = rpyc.classic.connect('ev3dev')
ev3 = conn.modules['ev3dev.ev3']
