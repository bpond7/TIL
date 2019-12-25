#include <ros/ros.h>
#include <geometry_msgs/Twist.h>
#include <tf/transform_broadcaster.h>

#include <string>
#include <math.h>

void robot_pose_publish(float *position){
	static tf::TransformBroadcaster br;
	tf::Transform transform;
	transform.setOrigin(tf::Vector3(position[0], position[1], 0.0));
	tf::Quaternion q;
	q.setRPY(0, 0, position[2]);
	transform.setRotation(q);
	br.sendTransform(tf::StampedTransform(transform, ros::Time::now(), "world", "base_link"));
}
