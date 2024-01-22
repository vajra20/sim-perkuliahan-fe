import React, { Component } from "react";

class VideoPlayer extends Component {
	constructor(props) {
		super(props);
		this.videoRef = React.createRef();
		this.state = {
			isPlaying: false,
		};
	}

	playVideo = () => {
		const video = this.videoRef.current;

		if (!this.state.isPlaying) {
			video.play();
			this.setState({ isPlaying: true });
		} else {
			video.pause();
			this.setState({ isPlaying: false });
		}
	};

	render() {
		return (
      <div className=" relative">
        <video
          controls={this.state.isPlaying ? true : false}
          ref={this.videoRef}
          className="w-full h-full relative z-20 sm:rounded-xl android:rounded-lg"
          onClick={this.playVideo}
        >
          <source src="/public/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 z-20 cursor-pointer ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="85"
            height="86"
            viewBox="0 0 85 86"
            fill="none"
            onClick={this.playVideo}
          >
            <path
              d={
                this.state.isPlaying
                  ? "M0 0"
                  : "M31.2884 1.62238C9.28519 7.48989 -4.36807 30.8471 1.27377 52.8503C8.15683 79.367 36.8174 92.7946 61.5287 80.9467C69.7658 76.9974 78.9056 66.955 82.1778 58.3794C91.2048 34.3451 77.7772 7.94124 53.2916 1.50954C45.1673 -0.52153 39.4127 -0.52153 31.2884 1.62238ZM47.7626 31.5242C55.4355 37.166 61.7544 42.1308 61.7544 42.695C61.7544 43.5977 34.335 64.134 33.0938 64.134C32.7553 64.134 32.4168 54.4301 32.4168 42.695C32.4168 30.8471 32.7553 21.256 33.0938 21.256C33.4323 21.256 40.0897 25.8823 47.7626 31.5242Z"
              }
              fill="white"
            />
          </svg>
        </div>
      </div>
    );
	}
}

export default VideoPlayer;
