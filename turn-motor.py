import explorerhat
from time import sleep

explorerhat.motor.two.forward(100)

sleep(5)

explorerhat.motor.two.stop()