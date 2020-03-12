gst-launch-1.0 v4l2src ! h264parse ! rtph264pay pt=96 config-interval=1 ! udpsink host=$1 port=$2
