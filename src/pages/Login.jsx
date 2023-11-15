import React from "react";

const Login = () => {
  return (
    <div>
      <div className="flex android:flex-col md:flex-row w-full max-w-full h-screen">
        <div className="bg-[#1B294D] px-20 py-6 w-full md:max-w-xl flex flex-col android:max-w-full android:h-full ">
          <div className="flex flex-row gap-x-3 items-center">
            <img
              className=" w-14 h-14 object-cover"
              src="public/logo.png"
            ></img>
            <div className="text-white flex flex-col font-bold">
              <span>INSTITUT TEKNOLOGI DAN BISNIS</span>
              <span>SWADHARMA</span>
            </div>
          </div>

          <div className="flex flex-col justify-center items-start gap-10 h-full">
            <div className="flex flex-col gap-3">
              <h1 className="font-normal text-white">
                Sign In<span className="text-[#A0EDF7]">.</span>
              </h1>
              <span className="text-white font-normal tracking-wide text-sm">
                Investasikan di Masa Depan Anda <br></br>
                Bergabunglah dalam Perjalanan Menuju Kesuksesan
              </span>
            </div>

            <div className="flex flex-col gap-y-6 w-full">
              <div className="flex flex-col gap-2">
                <label className="text-white">Username</label>
                <div className="relative flex flex-row-reverse items-center justify-end bg-white w-full h-fit rounded-lg px-4 py-3 gap-x-2">
                  <input
                    className="w-full focus:outline-0"
                    type="text"
                    name="username"
                    placeholder="Silahkan isi Username"
                  ></input>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="18"
                    viewBox="0 0 21 18"
                    fill="none"
                  >
                    <path
                      d="M10.801 9.22C11.311 8.75813 11.7201 8.18688 12.0005 7.54502C12.2809 6.90316 12.426 6.20571 12.426 5.5C12.426 4.17392 11.9224 2.90215 11.0262 1.96447C10.1299 1.02678 8.91427 0.5 7.64675 0.5C6.37922 0.5 5.16361 1.02678 4.26733 1.96447C3.37105 2.90215 2.86753 4.17392 2.86753 5.5C2.86752 6.20571 3.01263 6.90316 3.293 7.54502C3.57337 8.18688 3.98245 8.75813 4.49246 9.22C3.15442 9.85388 2.01919 10.8775 1.2225 12.1685C0.425824 13.4596 0.00140686 14.9633 0 16.5C0 16.7652 0.100705 17.0196 0.27996 17.2071C0.459215 17.3946 0.702338 17.5 0.955843 17.5C1.20935 17.5 1.45247 17.3946 1.63173 17.2071C1.81098 17.0196 1.91169 16.7652 1.91169 16.5C1.91169 14.9087 2.51591 13.3826 3.59145 12.2574C4.66698 11.1321 6.12571 10.5 7.64675 10.5C9.16778 10.5 10.6265 11.1321 11.702 12.2574C12.7776 13.3826 13.3818 14.9087 13.3818 16.5C13.3818 16.7652 13.4825 17.0196 13.6618 17.2071C13.841 17.3946 14.0841 17.5 14.3377 17.5C14.5912 17.5 14.8343 17.3946 15.0135 17.2071C15.1928 17.0196 15.2935 16.7652 15.2935 16.5C15.2921 14.9633 14.8677 13.4596 14.071 12.1685C13.2743 10.8775 12.1391 9.85388 10.801 9.22ZM7.64675 8.5C7.0796 8.5 6.5252 8.32405 6.05363 7.99441C5.58207 7.66476 5.21453 7.19623 4.99749 6.64805C4.78046 6.09987 4.72367 5.49667 4.83432 4.91473C4.94496 4.33279 5.21807 3.79824 5.6191 3.37868C6.02013 2.95912 6.53107 2.6734 7.08732 2.55764C7.64357 2.44189 8.22013 2.5013 8.7441 2.72836C9.26807 2.95542 9.71592 3.33994 10.031 3.83329C10.3461 4.32664 10.5143 4.90666 10.5143 5.5C10.5143 6.29565 10.2122 7.05871 9.6744 7.62132C9.13663 8.18393 8.40726 8.5 7.64675 8.5ZM16.9567 8.82C17.5684 8.09933 17.968 7.20905 18.1073 6.25634C18.2467 5.30362 18.1199 4.32907 17.7421 3.45C17.3644 2.57093 16.7519 1.8248 15.9783 1.30142C15.2047 0.77805 14.3031 0.499742 13.3818 0.5C13.1283 0.5 12.8852 0.605357 12.7059 0.792893C12.5267 0.98043 12.426 1.23478 12.426 1.5C12.426 1.76522 12.5267 2.01957 12.7059 2.20711C12.8852 2.39464 13.1283 2.5 13.3818 2.5C14.1423 2.5 14.8717 2.81607 15.4095 3.37868C15.9472 3.94129 16.2493 4.70435 16.2493 5.5C16.248 6.02524 16.1148 6.5409 15.8632 6.99542C15.6116 7.44994 15.2504 7.82738 14.8156 8.09C14.6739 8.17552 14.5555 8.29766 14.4718 8.44474C14.3881 8.59182 14.3419 8.7589 14.3377 8.93C14.3337 9.09976 14.371 9.2678 14.4463 9.41826C14.5215 9.56872 14.6322 9.69665 14.7678 9.79L15.1406 10.05L15.2648 10.12C16.417 10.6917 17.389 11.596 18.0664 12.7263C18.7437 13.8566 19.0983 15.1659 19.0882 16.5C19.0882 16.7652 19.1889 17.0196 19.3682 17.2071C19.5474 17.3946 19.7905 17.5 20.044 17.5C20.2975 17.5 20.5407 17.3946 20.7199 17.2071C20.8992 17.0196 20.9999 16.7652 20.9999 16.5C21.0077 14.9654 20.6403 13.4543 19.9326 12.1101C19.225 10.7659 18.2005 9.63331 16.9567 8.82Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white">Password</label>
                <div className="relative flex flex-row-reverse items-center justify-end bg-white w-full h-fit rounded-lg px-4 py-3 gap-x-2">
                  <input
                    className="w-full focus:outline-0"
                    type="password"
                    name="password"
                    placeholder="Password"
                  ></input>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="18"
                      viewBox="0 0 14 18"
                      fill="none"
                    >
                      <path
                        d="M12.7275 7.86667H11.4548V5.6C11.4548 3.39 9.48204 1.63333 7.00022 1.63333C4.5184 1.63333 2.54568 3.39 2.54568 5.6V7.86667H1.27295V5.6C1.27295 2.76667 3.8184 0.5 7.00022 0.5C10.182 0.5 12.7275 2.76667 12.7275 5.6V7.86667Z"
                        fill="black"
                      />
                      <path
                        d="M12.0909 17.5H1.90909C0.827273 17.5 0 16.7633 0 15.8V8.99998C0 8.03665 0.827273 7.29998 1.90909 7.29998H12.0909C13.1727 7.29998 14 8.03665 14 8.99998V15.8C14 16.7633 13.1727 17.5 12.0909 17.5ZM1.90909 8.43331C1.52727 8.43331 1.27273 8.65998 1.27273 8.99998V15.8C1.27273 16.14 1.52727 16.3666 1.90909 16.3666H12.0909C12.4727 16.3666 12.7273 16.14 12.7273 15.8V8.99998C12.7273 8.65998 12.4727 8.43331 12.0909 8.43331H1.90909Z"
                        fill="black"
                      />
                      <path
                        d="M6.99929 11.8333C7.7022 11.8333 8.27202 11.3259 8.27202 10.7C8.27202 10.0741 7.7022 9.56667 6.99929 9.56667C6.29638 9.56667 5.72656 10.0741 5.72656 10.7C5.72656 11.3259 6.29638 11.8333 6.99929 11.8333Z"
                        fill="black"
                      />
                      <path
                        d="M7.31838 10.7H6.68202L6.04565 14.1H7.95475L7.31838 10.7Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
                <div className=" italic font-normal text-xs text-white tracking-wide">
                  <span>Forgot Password ?</span>
                </div>
              </div>
            </div>

            <button
              className="bg-gradient-to-t from-[#0EA5C680] to-[#0EA5C680]/100 w-full py-2 rounded-lg"
              onClick={() => {
                window.location.href = "/mahasiswa/jadwal";
              }}
            >
              <span className="text-white font-semibold text-center uppercase">
                Login
              </span>
            </button>
          </div>
        </div>

        <div className="android:hidden md:block w-full h-full">
          <img
            className="w-full h-full object-fill"
            src="public/bg-kampus.png"
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Login;
