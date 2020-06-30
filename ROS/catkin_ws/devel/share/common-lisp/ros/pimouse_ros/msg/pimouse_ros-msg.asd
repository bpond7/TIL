
(cl:in-package :asdf)

(defsystem "pimouse_ros-msg"
  :depends-on (:roslisp-msg-protocol :roslisp-utils )
  :components ((:file "_package")
    (:file "LightSensorValues" :depends-on ("_package_LightSensorValues"))
    (:file "_package_LightSensorValues" :depends-on ("_package"))
  ))