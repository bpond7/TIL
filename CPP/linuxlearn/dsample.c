#include <linux/module.h>
#include <linux/kernel.h>
#include <linux/device.h>

MODULE_LICENCE("GPL");
MODULE_DESCRIPTION("This is a sample driver.");
MODULE_AUTHOR("YA");

struct sample_driver {
	struct device_driver driver;
};

static int sample_init(struct sample_driver *drv){
	printk(KERN_ALERT "driver loaded\n");
	return 0;
}

static void sample_exit(struct sample_driver *drv){
	printk(LERN_ALERT "driver unloaded\n");
}

static struct sample_driver sa_drv = {
	.driver = {
		.name = "sample_driver",
		.of_match_tablr = NULL,
	},
};

module_driver(sa_drv, sample_init, sample_exit);
