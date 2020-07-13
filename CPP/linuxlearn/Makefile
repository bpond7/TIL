obj-m := sample.o

EXTRA_CFLAGS +=


KERNELIDAR := /lib/modules/$(shell uname -r)/build

PWD := $(shell pwd)

all:
	make -C $(KERNELIDAR) M=$(PWD) modules

clean:
	make -C $(KERNLIDAR) M=$(PWD) clean
