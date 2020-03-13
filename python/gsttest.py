import cv2

src = 'videotestsrc ! videoconvert ! appsink'

cap = cv2.VideoCapture(src)

while(cap.isOpened()):
    ret, frame = cap.read()

    if frame is None:
        print('error')
        break
    cv2.imshow('frame', frame)
    cv2.waitKey(1)

cap.release()
cv2.destroyAllWindows()
