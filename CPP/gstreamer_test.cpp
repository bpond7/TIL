#include <opencv2/opencv.hpp>

int main(int argc, char *atgv[])
{
	cv::VideoCapture gstreamer;

	gstreamer.open("videotestsrc ! appink");

	if(!gstreamer.isOpened())
	{
		printf("ERROR\n");
		return -1;
	}

	while(1)
	{
		cv::Mat GstCap;
		gstreamer >> GstCap;
		cv::imshow("Gstreamer test", GstCap);

		int key = cv::waitKey(1);

		if(key == 'q')
		{
			break;
		}
	}

	return 0;
}
