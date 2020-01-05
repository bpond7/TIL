;; Auto-generated. Do not edit!


(when (boundp 'pimouse_ros::LightSensorValues)
  (if (not (find-package "PIMOUSE_ROS"))
    (make-package "PIMOUSE_ROS"))
  (shadow 'LightSensorValues (find-package "PIMOUSE_ROS")))
(unless (find-package "PIMOUSE_ROS::LIGHTSENSORVALUES")
  (make-package "PIMOUSE_ROS::LIGHTSENSORVALUES"))

(in-package "ROS")
;;//! \htmlinclude LightSensorValues.msg.html


(defclass pimouse_ros::LightSensorValues
  :super ros::object
  :slots (_right_forward _right_side _left_side _left_forward _sum_all _sum_forward ))

(defmethod pimouse_ros::LightSensorValues
  (:init
   (&key
    ((:right_forward __right_forward) 0)
    ((:right_side __right_side) 0)
    ((:left_side __left_side) 0)
    ((:left_forward __left_forward) 0)
    ((:sum_all __sum_all) 0)
    ((:sum_forward __sum_forward) 0)
    )
   (send-super :init)
   (setq _right_forward (round __right_forward))
   (setq _right_side (round __right_side))
   (setq _left_side (round __left_side))
   (setq _left_forward (round __left_forward))
   (setq _sum_all (round __sum_all))
   (setq _sum_forward (round __sum_forward))
   self)
  (:right_forward
   (&optional __right_forward)
   (if __right_forward (setq _right_forward __right_forward)) _right_forward)
  (:right_side
   (&optional __right_side)
   (if __right_side (setq _right_side __right_side)) _right_side)
  (:left_side
   (&optional __left_side)
   (if __left_side (setq _left_side __left_side)) _left_side)
  (:left_forward
   (&optional __left_forward)
   (if __left_forward (setq _left_forward __left_forward)) _left_forward)
  (:sum_all
   (&optional __sum_all)
   (if __sum_all (setq _sum_all __sum_all)) _sum_all)
  (:sum_forward
   (&optional __sum_forward)
   (if __sum_forward (setq _sum_forward __sum_forward)) _sum_forward)
  (:serialization-length
   ()
   (+
    ;; int16 _right_forward
    2
    ;; int16 _right_side
    2
    ;; int16 _left_side
    2
    ;; int16 _left_forward
    2
    ;; int16 _sum_all
    2
    ;; int16 _sum_forward
    2
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; int16 _right_forward
       (write-word _right_forward s)
     ;; int16 _right_side
       (write-word _right_side s)
     ;; int16 _left_side
       (write-word _left_side s)
     ;; int16 _left_forward
       (write-word _left_forward s)
     ;; int16 _sum_all
       (write-word _sum_all s)
     ;; int16 _sum_forward
       (write-word _sum_forward s)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; int16 _right_forward
     (setq _right_forward (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; int16 _right_side
     (setq _right_side (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; int16 _left_side
     (setq _left_side (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; int16 _left_forward
     (setq _left_forward (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; int16 _sum_all
     (setq _sum_all (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; int16 _sum_forward
     (setq _sum_forward (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;;
   self)
  )

(setf (get pimouse_ros::LightSensorValues :md5sum-) "c174e6891a013b1ba6a929fcc020e0a3")
(setf (get pimouse_ros::LightSensorValues :datatype-) "pimouse_ros/LightSensorValues")
(setf (get pimouse_ros::LightSensorValues :definition-)
      "int16 right_forward
int16 right_side
int16 left_side
int16 left_forward
int16 sum_all
int16 sum_forward

")



(provide :pimouse_ros/LightSensorValues "c174e6891a013b1ba6a929fcc020e0a3")


