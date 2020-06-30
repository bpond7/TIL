#include <ros.h>
#include <std_msgs/Empty.h>

const int LED=13;

ros::NodeHandle nh;

void msgCallBack(const std_msgs::Empty& toggle_msg){
  digitalWrite(LED, HIGH);
}

ros::Subscriber<std_msgs::Empty> sub("toggle_led", &msgCallBack);

void setup() {
  pinMode(LED, OUTPUT);
  nh.initNode();
  nh.subscribe(sub);
}

void loop() {
  nh.spinOnce();
  delay(1);
}
