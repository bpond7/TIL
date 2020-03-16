import sys
sys.path.remove('/opt/ros/kinetic/lib/python2.7/dist-packages')
import cv2
 
src = 'videotestsrc ! videoconvert ! appsink'
 
cap = cv2.VideoCapture(src)
 
while(cap.isOpened()):
    ret, frame = cap.read()
 
    if frame is None:
        break
    cv2.imshow('frame',frame)
    k=cv2.waitKey(1)
    if k==27:
	break
 
cap.release()
cv2.destroyAllWindows()
