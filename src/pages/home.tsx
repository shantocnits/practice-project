import Navbar from "../components/navbar.tsx";
import Footer from "./../components/footer";
import Icon1 from "../assets/icon/Icon1.png";
import Icon2 from "../assets/icon/Icon2.png";
import Icon3 from "../assets/icon/Icon3.png";
import Icon4 from "../assets/icon/Icon4.png";
import project1 from "../assets/img/project1.png";
import project2 from "../assets/img/project2.png";
import project3 from "../assets/img/project3.png";
import project4 from "../assets/img/project4.png";
import profile from "../assets/img/profile.png";

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Start */}
      <main className=" hero py-[50px] md:py-[100px] bg-[#e5e7eb] ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" flex items-center justify-center">
            <div className="w-full text-center">
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-semibold text-[#8447E9] leading-tight mb-8">
                Global Brandmakers
                <br className="hidden sm:block" />
                making
                <span className="relative ml-6 text-[#8447E9] inline-flex flex-col items-center">
                  Waves
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="191"
                    height="7"
                    viewBox="0 0 191 7"
                    fill="none"
                  >
                    <path
                      d="M45.4184 6.76978C43.6439 6.79016 41.896 6.3456 40.3522 5.4822C39.646 5.0548 38.9664 4.58611 38.3162 4.0793C38.0139 3.8487 37.7024 3.61811 37.342 3.39716C36.6412 2.81961 35.7566 2.50267 34.8434 2.50267C33.9295 2.50267 33.0455 2.81907 32.3442 3.39663C32.0327 3.61757 31.7402 3.84817 31.438 4.07876C30.9509 4.45362 30.4637 4.82846 29.9276 5.17436C28.2413 6.21203 26.2945 6.76272 24.3068 6.76272C22.3191 6.76272 20.3719 6.21251 18.6854 5.17489C18.1592 4.82901 17.7112 4.4638 17.1947 4.08895C16.8734 3.83905 16.5418 3.58915 16.2205 3.34891C15.5366 2.82444 14.6955 2.53969 13.8289 2.53969C12.9629 2.53969 12.1212 2.82444 11.4373 3.34891C11.0671 3.5988 10.7262 3.868 10.3756 4.13668C10.0249 4.40588 9.40137 4.87673 8.88489 5.22263C6.21497 6.82336 2.97054 7.19554 0 6.24153L0.769802 3.88739C3.0499 4.61725 5.53821 4.33303 7.5888 3.10873C8.05634 2.81056 8.4755 2.47432 8.90389 2.14774C9.33228 1.82115 9.67369 1.55195 10.0825 1.27309C11.191 0.461177 12.536 0.0225127 13.9169 0.0225127C15.2972 0.0225127 16.6417 0.461177 17.7502 1.27309C18.1204 1.53264 18.4809 1.8115 18.8315 2.08017C19.1822 2.34937 19.6888 2.74299 20.1564 3.04116C21.4334 3.81284 22.9019 4.22095 24.399 4.22095C25.8968 4.22095 27.365 3.81284 28.6421 3.04116C29.1194 2.73387 29.5484 2.3971 29.9768 2.08017C30.4052 1.76323 30.6199 1.58037 30.951 1.34012C32.0829 0.470841 33.4767 0 34.9109 0C36.3457 0 37.7389 0.471378 38.8714 1.34066C39.2123 1.58091 39.5341 1.83081 39.8456 2.07105C40.4175 2.52206 41.0161 2.93873 41.638 3.32002C43.7408 4.45422 46.2559 4.57167 48.4576 3.63695C49.4324 3.1452 50.3561 2.55905 51.2145 1.88823L51.9549 1.34982C53.0939 0.483747 54.4917 0.0134381 55.93 0.0134381C57.368 0.0134381 58.7657 0.483747 59.9047 1.34982L60.8789 2.05125C61.415 2.46471 61.9309 2.84868 62.4865 3.20422C63.65 3.92175 65.0139 4.25852 66.3834 4.16575L66.471 6.63521C64.5927 6.73603 62.7301 6.25554 61.1421 5.26127C60.499 4.84781 59.9146 4.40592 59.3594 3.98335L58.4727 3.32053C57.7584 2.76711 56.8765 2.46572 55.9687 2.46572C55.0608 2.46572 54.1791 2.76656 53.4652 3.31999L52.7444 3.83909C51.756 4.6081 50.6921 5.27783 49.5684 5.83781C48.2712 6.44647 46.8541 6.76495 45.4184 6.76978Z"
                      fill="#8447E9"
                    />
                    <path
                      d="M107.418 6.76978C105.644 6.79016 103.896 6.3456 102.352 5.4822C101.646 5.0548 100.966 4.58611 100.316 4.0793C100.014 3.8487 99.7024 3.61811 99.342 3.39716C98.6412 2.81961 97.7566 2.50267 96.8434 2.50267C95.9295 2.50267 95.0455 2.81907 94.3442 3.39663C94.0327 3.61757 93.7402 3.84817 93.438 4.07876C92.9509 4.45362 92.4637 4.82846 91.9276 5.17436C90.2413 6.21203 88.2945 6.76272 86.3068 6.76272C84.3191 6.76272 82.3719 6.21251 80.6854 5.17489C80.1592 4.82901 79.7112 4.4638 79.1947 4.08895C78.8734 3.83905 78.5418 3.58915 78.2205 3.34891C77.5366 2.82444 76.6955 2.53969 75.8289 2.53969C74.9629 2.53969 74.1212 2.82444 73.4373 3.34891C73.0671 3.5988 72.7262 3.868 72.3756 4.13668C72.0249 4.40588 71.4014 4.87673 70.8849 5.22263C68.215 6.82336 65 7.39813 62 5.4253L62.5 3.34891C65 4.43888 67.5382 4.33303 69.5888 3.10873C70.0563 2.81056 70.4755 2.47432 70.9039 2.14774C71.3323 1.82115 71.6737 1.55195 72.0825 1.27309C73.191 0.461177 74.536 0.0225127 75.9169 0.0225127C77.2972 0.0225127 78.6417 0.461177 79.7502 1.27309C80.1204 1.53264 80.4809 1.8115 80.8315 2.08017C81.1822 2.34937 81.6888 2.74299 82.1564 3.04116C83.4334 3.81284 84.9019 4.22095 86.399 4.22095C87.8968 4.22095 89.3651 3.81284 90.6421 3.04116C91.1194 2.73387 91.5484 2.3971 91.9768 2.08017C92.4052 1.76323 92.6199 1.58037 92.951 1.34012C94.0829 0.470841 95.4767 0 96.9109 0C98.3457 0 99.7389 0.471378 100.871 1.34066C101.212 1.58091 101.534 1.83081 101.846 2.07105C102.418 2.52206 103.016 2.93873 103.638 3.32002C105.741 4.45422 108.256 4.57167 110.458 3.63695C111.432 3.1452 112.356 2.55905 113.214 1.88823L113.955 1.34982C115.094 0.483747 116.492 0.0134381 117.93 0.0134381C119.368 0.0134381 120.766 0.483747 121.905 1.34982L122.879 2.05125C123.415 2.46471 123.931 2.84868 124.487 3.20422C125.65 3.92175 127.014 4.25852 128.383 4.16575L128.471 6.63521C126.593 6.73603 124.73 6.25554 123.142 5.26127C122.499 4.84781 121.915 4.40592 121.359 3.98335L120.473 3.32053C119.758 2.76711 118.877 2.46572 117.969 2.46572C117.061 2.46572 116.179 2.76656 115.465 3.31999L114.744 3.83909C113.756 4.6081 112.692 5.27783 111.568 5.83781C110.271 6.44647 108.854 6.76495 107.418 6.76978Z"
                      fill="#8447E9"
                    />
                    <path
                      d="M169.418 6.76978C167.644 6.79016 165.896 6.3456 164.352 5.4822C163.646 5.0548 162.966 4.58611 162.316 4.0793C162.014 3.8487 161.702 3.61811 161.342 3.39716C160.641 2.81961 159.757 2.50267 158.843 2.50267C157.93 2.50267 157.046 2.81907 156.344 3.39663C156.033 3.61757 155.74 3.84817 155.438 4.07876C154.951 4.45362 154.464 4.82846 153.928 5.17436C152.241 6.21203 150.294 6.76272 148.307 6.76272C146.319 6.76272 144.372 6.21251 142.685 5.17489C142.159 4.82901 141.711 4.4638 141.195 4.08895C140.873 3.83905 140.542 3.58915 140.22 3.34891C139.537 2.82444 138.696 2.53969 137.829 2.53969C136.963 2.53969 136.121 2.82444 135.437 3.34891C135.067 3.5988 134.726 3.868 134.376 4.13668C134.025 4.40588 133.401 4.87673 132.885 5.22263C130.215 6.82336 127 7.39813 124 5.4253L124.5 3.34891C127 4.43888 129.538 4.33303 131.589 3.10873C132.056 2.81056 132.475 2.47432 132.904 2.14774C133.332 1.82115 133.674 1.55195 134.083 1.27309C135.191 0.461177 136.536 0.0225127 137.917 0.0225127C139.297 0.0225127 140.642 0.461177 141.75 1.27309C142.12 1.53264 142.481 1.8115 142.831 2.08017C143.182 2.34937 143.689 2.74299 144.156 3.04116C145.433 3.81284 146.902 4.22095 148.399 4.22095C149.897 4.22095 151.365 3.81284 152.642 3.04116C153.119 2.73387 153.548 2.3971 153.977 2.08017C154.405 1.76323 154.62 1.58037 154.951 1.34012C156.083 0.470841 157.477 0 158.911 0C160.346 0 161.739 0.471378 162.871 1.34066C163.212 1.58091 163.534 1.83081 163.846 2.07105C164.418 2.52206 165.016 2.93873 165.638 3.32002C167.741 4.45422 170.256 4.57167 172.458 3.63695C173.432 3.1452 174.356 2.55905 175.214 1.88823L175.955 1.34982C177.094 0.483747 178.492 0.0134381 179.93 0.0134381C181.368 0.0134381 182.766 0.483747 183.905 1.34982L184.879 2.05125C185.415 2.46471 185.931 2.84868 186.487 3.20422C187.65 3.92175 189.014 4.25852 190.383 4.16575L190.471 6.63521C188.593 6.73603 186.73 6.25554 185.142 5.26127C184.499 4.84781 183.915 4.40592 183.359 3.98335L182.473 3.32053C181.758 2.76711 180.877 2.46572 179.969 2.46572C179.061 2.46572 178.179 2.76656 177.465 3.31999L176.744 3.83909C175.756 4.6081 174.692 5.27783 173.568 5.83781C172.271 6.44647 170.854 6.76495 169.418 6.76978Z"
                      fill="#8447E9"
                    />
                  </svg>
                </span>
              </h1>

              <div className="flex flex-col sm:flex-row justify-center items-center mt-12 space-y-4 sm:space-y-0 sm:space-x-8">
                <a
                  href="#"
                  className="inline-flex items-center justify-center 
                              bg-[#8447E9] hover:bg-purple-700 
                              text-white font-medium 
                              px-8 py-3 
                              shadow-lg transition duration-200 
                              text-lg"
                >
                  Explore our services
                  <span className="ml-2 text-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                    >
                      <path
                        d="M0.833338 4.16666H7.15834L4.40834 1.42499C4.25142 1.26807 4.16326 1.05524 4.16326 0.833325C4.16326 0.611407 4.25142 0.398578 4.40834 0.241658C4.56526 0.0847387 4.77809 -0.00341797 5 -0.00341797C5.22192 -0.00341797 5.43475 0.0847387 5.59167 0.241658L9.75834 4.40833C9.83421 4.48758 9.89368 4.58103 9.93334 4.68333C10.0167 4.88621 10.0167 5.11377 9.93334 5.31666C9.89368 5.41895 9.83421 5.51241 9.75834 5.59166L5.59167 9.75832C5.5142 9.83643 5.42203 9.89843 5.32049 9.94074C5.21894 9.98304 5.11001 10.0048 5 10.0048C4.88999 10.0048 4.78107 9.98304 4.67952 9.94074C4.57797 9.89843 4.48581 9.83643 4.40834 9.75832C4.33023 9.68086 4.26824 9.58869 4.22593 9.48714C4.18362 9.38559 4.16184 9.27667 4.16184 9.16666C4.16184 9.05665 4.18362 8.94773 4.22593 8.84618C4.26824 8.74463 4.33023 8.65246 4.40834 8.57499L7.15834 5.83333H0.833338C0.612324 5.83333 0.400362 5.74553 0.244082 5.58925C0.0878015 5.43297 4.76857e-06 5.22101 4.76857e-06 4.99999C4.76857e-06 4.77898 0.0878015 4.56702 0.244082 4.41074C0.400362 4.25446 0.612324 4.16666 0.833338 4.16666Z"
                        fill="#F5F5F5"
                      />
                    </svg>
                  </span>
                </a>

                <a
                  href="#"
                  className="inline-flex items-center 
                              text-black hover:text-purple-600 
                              font-medium text-lg transition duration-200"
                >
                  <span className="mr-2 text-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="22"
                      viewBox="0 0 21 22"
                      fill="none"
                    >
                      <path
                        d="M10.5 0.5C4.70156 0.5 0 5.20156 0 11C0 16.7984 4.70156 21.5 10.5 21.5C16.2984 21.5 21 16.7984 21 11C21 5.20156 16.2984 0.5 10.5 0.5ZM13.8773 11.1617L8.75859 14.8859C8.73053 14.9061 8.69745 14.9181 8.66299 14.9207C8.62853 14.9233 8.59403 14.9164 8.56327 14.9006C8.53251 14.8849 8.50668 14.861 8.48863 14.8315C8.47057 14.802 8.46099 14.7681 8.46094 14.7336V7.28984C8.46082 7.25522 8.4703 7.22124 8.48832 7.19167C8.50633 7.1621 8.53219 7.1381 8.56301 7.12232C8.59383 7.10654 8.62842 7.09961 8.66295 7.10229C8.69747 7.10497 8.73057 7.11716 8.75859 7.1375L13.8773 10.8594C13.9015 10.8765 13.9213 10.8991 13.9349 10.9254C13.9485 10.9517 13.9556 10.9809 13.9556 11.0105C13.9556 11.0402 13.9485 11.0694 13.9349 11.0957C13.9213 11.122 13.9015 11.1446 13.8773 11.1617Z"
                        fill="#BDB0EC"
                      />
                    </svg>
                  </span>
                  Watch our reel
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Hero End */}

      {/* Brand Slider Start */}
      <div className="brand-slider">
        <div className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl mx-auto pb-[50px] font-semibold text-black max-w-2xl leading-tight">
              We are blessed to work with amazing brands worldwide
            </h2>
          </div>

          <div className="slider overflow-hidden relative max-w-7xl mx-auto">
            <div className="absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <div className="slider-track">
              <div className="logo-item p-2">
                <div className="logo-card">
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-3.023 3-6s-1.343-6-3-6m0 12c-1.657 0-3-3.023-3-6s1.343-6 3-6m-9 6h6"
                      ></path>
                    </svg>
                    <span className="text-lg font-medium text-gray-800">
                      Logoipsum
                    </span>
                  </div>
                </div>
              </div>
              <div className="logo-item p-2">
                <div className="logo-card">
                  <span className="text-xl font-bold text-gray-800 tracking-wider">
                    LOGO IPSUM
                  </span>
                </div>
              </div>
              <div className="logo-item p-2">
                <div className="logo-card">
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 10l-2 1m0 0l-2-1m2 1v2.5M14 10l.353-.353M14 10a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5L14 10zM6.5 18a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5L6.5 18z"
                      ></path>
                    </svg>
                    <span className="text-base text-gray-700">logoipsum</span>
                  </div>
                </div>
              </div>
              <div className="logo-item p-2">
                <div className="logo-card">
                  <div className="flex items-center space-x-1">
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM6.5 9a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM13.5 9a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"></path>
                    </svg>
                    <span className="text-lg font-medium text-gray-800">
                      logoipsum
                    </span>
                  </div>
                </div>
              </div>
              <div className="logo-item p-2">
                <div className="logo-card">
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6V4m0 2v5m0 0v5m0-5h4m-4 0H8m8 0a4 4 0 11-8 0 4 4 0 018 0z"
                      ></path>
                    </svg>
                    <span className="text-lg font-medium text-gray-800">
                      logoipsum
                    </span>
                  </div>
                </div>
              </div>
              <div className="logo-item p-2">
                <div className="logo-card">
                  <div className="flex items-center space-x-1">
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8c2.167 0 4-2.167 4-4s-1.833-4-4-4-4 2.167-4 4 1.833 4 4 4zM12 10a6 6 0 00-6 6v4h12v-4a6 6 0 00-6-6z"
                      ></path>
                    </svg>
                    <span className="text-lg font-medium text-gray-800">
                      logoipsum
                    </span>
                  </div>
                </div>
              </div>
              <div className="logo-item p-2">
                <div className="logo-card">
                  <div className="flex items-center space-x-1">
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19V6l12 13V6"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="logo-item p-2">
                <div className="logo-card">
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-3.023 3-6s-1.343-6-3-6m0 12c-1.657 0-3-3.023-3-6s1.343-6 3-6m-9 6h6"
                      ></path>
                    </svg>
                    <span className="text-lg font-medium text-gray-800">
                      Logoipsum
                    </span>
                  </div>
                </div>
              </div>
              <div className="logo-item p-2">
                <div className="logo-card">
                  <span className="text-xl font-bold text-gray-800 tracking-wider">
                    LOGO IPSUM
                  </span>
                </div>
              </div>
              <div className="logo-item p-2">
                <div className="logo-card">
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 10l-2 1m0 0l-2-1m2 1v2.5M14 10l.353-.353M14 10a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5L14 10zM6.5 18a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5L6.5 18z"
                      ></path>
                    </svg>
                    <span className="text-base text-gray-700">logoipsum</span>
                  </div>
                </div>
              </div>
              <div className="logo-item p-2">
                <div className="logo-card">
                  <div className="flex items-center space-x-1">
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM6.5 9a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM13.5 9a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"></path>
                    </svg>
                    <span className="text-lg font-medium text-gray-800">
                      logoipsum
                    </span>
                  </div>
                </div>
              </div>
              <div className="logo-item p-2">
                <div className="logo-card">
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6V4m0 2v5m0 0v5m0-5h4m-4 0H8m8 0a4 4 0 11-8 0 4 4 0 018 0z"
                      ></path>
                    </svg>
                    <span className="text-lg font-medium text-gray-800">
                      logoipsum
                    </span>
                  </div>
                </div>
              </div>
              <div className="logo-item p-2">
                <div className="logo-card">
                  <div className="flex items-center space-x-1">
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8c2.167 0 4-2.167 4-4s-1.833-4-4-4-4 2.167-4 4 1.833 4 4 4zM12 10a6 6 0 00-6 6v4h12v-4a6 6 0 00-6-6z"
                      ></path>
                    </svg>
                    <span className="text-lg font-medium text-gray-800">
                      logoipsum
                    </span>
                  </div>
                </div>
              </div>
              <div className="logo-item p-2">
                <div className="logo-card">
                  <div className="flex items-center space-x-1">
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19V6l12 13V6"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slider overflow-hidden relative max-w-7xl mx-auto">
            <div className="absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <div className="slider-track-reverse">
              <div className="logo-item p-2">
                <div className="logo-card">
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5z"
                      ></path>
                    </svg>
                    <span className="text-lg font-medium text-gray-800">
                      Logoipsum
                    </span>
                  </div>
                </div>
              </div>
              <div className="logo-item p-2">
                <div className="logo-card">
                  <span className="text-xl font-bold text-gray-800 tracking-wider">
                    ZEUS UI
                  </span>
                </div>
              </div>
              <div className="logo-item p-2">
                <div className="logo-card">
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 12v.01M10 12v.01M16 12v.01M20 12v.01"
                      ></path>
                    </svg>
                    <span className="text-base text-gray-700">LOGO IPSUM</span>
                  </div>
                </div>
              </div>
              <div className="logo-item p-2">
                <div className="logo-card">
                  <div className="flex items-center space-x-1">
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM6.5 9a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM13.5 9a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"></path>
                    </svg>
                    <span className="text-lg font-medium text-gray-800">
                      Logoipsum
                    </span>
                  </div>
                </div>
              </div>
              <div className="logo-item p-2">
                <div className="logo-card">
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6V4m0 2v5m0 0v5m0-5h4m-4 0H8m8 0a4 4 0 11-8 0 4 4 0 018 0z"
                      ></path>
                    </svg>
                    <span className="text-lg font-medium text-gray-800">
                      Logoipsum
                    </span>
                  </div>
                </div>
              </div>
              <div className="logo-item p-2">
                <div className="logo-card">
                  <div className="flex items-center space-x-1">
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8c2.167 0 4-2.167 4-4s-1.833-4-4-4-4 2.167-4 4 1.833 4 4 4zM12 10a6 6 0 00-6 6v4h12v-4a6 6 0 00-6-6z"
                      ></path>
                    </svg>
                    <span className="text-lg font-medium text-gray-800">
                      Logoipsum
                    </span>
                  </div>
                </div>
              </div>
              <div className="logo-item p-2">
                <div className="logo-card">
                  <div className="flex items-center space-x-1">
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19V6l12 13V6"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="logo-item p-2">
                <div className="logo-card">
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5z"
                      ></path>
                    </svg>
                    <span className="text-lg font-medium text-gray-800">
                      Logoipsum
                    </span>
                  </div>
                </div>
              </div>
              <div className="logo-item p-2">
                <div className="logo-card">
                  <span className="text-xl font-bold text-gray-800 tracking-wider">
                    ZEUS UI
                  </span>
                </div>
              </div>
              <div className="logo-item p-2">
                <div className="logo-card">
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 12v.01M10 12v.01M16 12v.01M20 12v.01"
                      ></path>
                    </svg>
                    <span className="text-base text-gray-700">LOGO IPSUM</span>
                  </div>
                </div>
              </div>
              <div className="logo-item p-2">
                <div className="logo-card">
                  <div className="flex items-center space-x-1">
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM6.5 9a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM13.5 9a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"></path>
                    </svg>
                    <span className="text-lg font-medium text-gray-800">
                      Logoipsum
                    </span>
                  </div>
                </div>
              </div>
              <div className="logo-item p-2">
                <div className="logo-card">
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6V4m0 2v5m0 0v5m0-5h4m-4 0H8m8 0a4 4 0 11-8 0 4 4 0 018 0z"
                      ></path>
                    </svg>
                    <span className="text-lg font-medium text-gray-800">
                      Logoipsum
                    </span>
                  </div>
                </div>
              </div>
              <div className="logo-item p-2">
                <div className="logo-card">
                  <div className="flex items-center space-x-1">
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8c2.167 0 4-2.167 4-4s-1.833-4-4-4-4 2.167-4 4 1.833 4 4 4zM12 10a6 6 0 00-6 6v4h12v-4a6 6 0 00-6-6z"
                      ></path>
                    </svg>
                    <span className="text-lg font-medium text-gray-800">
                      Logoipsum
                    </span>
                  </div>
                </div>
              </div>
              <div className="logo-item p-2">
                <div className="logo-card">
                  <div className="flex items-center space-x-1">
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19V6l12 13V6"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Brand Slider End */}

      {/* Services Start */}
      <div className="services pb-[50px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#8447E9]">
              OUR SERVICES
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mt-2 max-w-2xl leading-tight">
              Our agency experts will provide you with a full stack of services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            <div className="group flex justify-content-center md:text-left flex-col items-center md:items-start text-center">
              <div className="mb-4 w-16 h-16 rounded-lg flex items-center justify-center">
                <img src={Icon1} alt="" />
              </div>
              <h3 className="text-xl font-semibold text-[#8447E9] mb-2">
                Strategy services
              </h3>
              <p className="text-sm text-[#3F3F3F] mb-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                lobortis lacus. Nunc porta ipsum et tempor euismod.
              </p>
              <a
                href="#"
                className="text-sm font-medium text-black hover:text-[#8447E9] transition duration-150"
              >
                <span className="relative inline-flex flex-col items-left">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="85"
                    height="3"
                    viewBox="0 0 85 3"
                    fill="none"
                  >
                    <path
                      d="M20.2685 2.9997C19.4766 3.00873 18.6966 2.81175 18.0077 2.42918C17.6925 2.23979 17.3892 2.03212 17.0991 1.80755C16.9642 1.70537 16.8252 1.60319 16.6643 1.50529C16.3516 1.24937 15.9568 1.10894 15.5493 1.10894C15.1415 1.10894 14.747 1.24914 14.434 1.50505C14.295 1.60295 14.1645 1.70513 14.0296 1.80731C13.8122 1.97341 13.5948 2.1395 13.3556 2.29277C12.603 2.75256 11.7342 2.99658 10.8472 2.99658C9.96018 2.99658 9.09122 2.75278 8.33859 2.29301C8.10375 2.13974 7.90384 1.97792 7.67335 1.81182C7.52997 1.70109 7.38198 1.59036 7.23859 1.48391C6.93339 1.25152 6.55807 1.12534 6.17132 1.12534C5.78484 1.12534 5.40925 1.25152 5.10405 1.48391C4.93883 1.59464 4.78672 1.71392 4.63023 1.83297C4.47375 1.95226 4.19548 2.16089 3.96499 2.31416C2.77351 3.02345 1.32564 3.18836 0 2.76564L0.343533 1.72251C1.36105 2.04591 2.47149 1.91997 3.3866 1.37748C3.59524 1.24536 3.78229 1.09638 3.97347 0.951667C4.16464 0.806957 4.317 0.687674 4.49945 0.564108C4.99413 0.204349 5.59435 0.00997542 6.21059 0.00997542C6.82658 0.00997542 7.42655 0.204349 7.92124 0.564108C8.08646 0.679115 8.24731 0.80268 8.40379 0.921726C8.56027 1.04101 8.78639 1.21542 8.99503 1.34754C9.56492 1.68948 10.2202 1.87031 10.8883 1.87031C11.5567 1.87031 12.212 1.68948 12.7819 1.34754C12.9949 1.21138 13.1863 1.06216 13.3775 0.921726C13.5687 0.781292 13.6645 0.700266 13.8123 0.593812C14.3174 0.208631 14.9394 0 15.5794 0C16.2197 0 16.8415 0.208869 17.3468 0.594049C17.499 0.700503 17.6426 0.811234 17.7816 0.917688C18.0368 1.11753 18.3039 1.30216 18.5815 1.47111C19.5199 1.97367 20.6422 2.02572 21.6248 1.61154C22.0598 1.39365 22.472 1.13392 22.8551 0.836679L23.1855 0.598107C23.6938 0.214349 24.3176 0.00595444 24.9595 0.00595444C25.6012 0.00595444 26.2249 0.214349 26.7332 0.598107L27.168 0.908915C27.4072 1.09212 27.6374 1.26226 27.8854 1.4198C28.4046 1.73774 29.0133 1.88696 29.6244 1.84585L29.6635 2.94008C28.8253 2.98475 27.9941 2.77184 27.2854 2.33128C26.9984 2.14808 26.7376 1.95227 26.4899 1.76503L26.0942 1.47133C25.7754 1.22611 25.3819 1.09256 24.9767 1.09256C24.5716 1.09256 24.1781 1.22587 23.8595 1.4711L23.5378 1.70111C23.0967 2.04186 22.622 2.33862 22.1205 2.58675C21.5416 2.85645 20.9092 2.99756 20.2685 2.9997Z"
                      fill="#BDB0EC"
                    />
                    <path
                      d="M47.9368 2.9997C47.1449 3.00873 46.3649 2.81175 45.6759 2.42918C45.3608 2.23979 45.0575 2.03212 44.7673 1.80755C44.6324 1.70537 44.4934 1.60319 44.3326 1.50529C44.0199 1.24937 43.6251 1.10894 43.2175 1.10894C42.8097 1.10894 42.4152 1.24914 42.1023 1.50505C41.9633 1.60295 41.8327 1.70513 41.6978 1.80731C41.4805 1.97341 41.2631 2.1395 41.0238 2.29277C40.2713 2.75256 39.4025 2.99658 38.5155 2.99658C37.6284 2.99658 36.7595 2.75278 36.0069 2.29301C35.772 2.13974 35.5721 1.97792 35.3416 1.81182C35.1982 1.70109 35.0502 1.59036 34.9069 1.48391C34.6016 1.25152 34.2263 1.12534 33.8396 1.12534C33.4531 1.12534 33.0775 1.25152 32.7723 1.48391C32.6071 1.59464 32.455 1.71392 32.2985 1.83297C32.142 1.95226 31.8637 2.16089 31.6333 2.31416C30.4418 3.02345 29.007 3.27813 27.6683 2.40396L27.8914 1.48391C29.007 1.96688 30.1398 1.91997 31.0549 1.37748C31.2635 1.24536 31.4506 1.09638 31.6417 0.951667C31.8329 0.806957 31.9853 0.687674 32.1677 0.564108C32.6624 0.204349 33.2626 0.00997542 33.8789 0.00997542C34.4948 0.00997542 35.0948 0.204349 35.5895 0.564108C35.7547 0.679115 35.9156 0.80268 36.0721 0.921726C36.2285 1.04101 36.4546 1.21542 36.6633 1.34754C37.2332 1.68948 37.8885 1.87031 38.5566 1.87031C39.225 1.87031 39.8802 1.68948 40.4502 1.34754C40.6632 1.21138 40.8546 1.06216 41.0458 0.921726C41.2369 0.781292 41.3328 0.700266 41.4805 0.593812C41.9856 0.208631 42.6077 0 43.2477 0C43.888 0 44.5097 0.208869 45.0151 0.594049C45.1672 0.700503 45.3108 0.811234 45.4499 0.917688C45.7051 1.11753 45.9722 1.30216 46.2497 1.47111C47.1881 1.97367 48.3105 2.02572 49.2931 1.61154C49.7281 1.39365 50.1403 1.13392 50.5234 0.836679L50.8538 0.598107C51.3621 0.214349 51.9858 0.00595444 52.6277 0.00595444C53.2694 0.00595444 53.8932 0.214349 54.4015 0.598107L54.8362 0.908915C55.0755 1.09212 55.3057 1.26226 55.5536 1.4198C56.0728 1.73774 56.6815 1.88696 57.2927 1.84585L57.3317 2.94008C56.4935 2.98475 55.6623 2.77184 54.9537 2.33128C54.6667 2.14808 54.4059 1.95227 54.1581 1.76503L53.7624 1.47133C53.4436 1.22611 53.0501 1.09256 52.645 1.09256C52.2398 1.09256 51.8463 1.22587 51.5278 1.4711L51.2061 1.70111C50.765 2.04186 50.2902 2.33862 49.7888 2.58675C49.2099 2.85645 48.5775 2.99756 47.9368 2.9997Z"
                      fill="#BDB0EC"
                    />
                    <path
                      d="M75.605 2.9997C74.8132 3.00873 74.0331 2.81175 73.3442 2.42918C73.029 2.23979 72.7258 2.03212 72.4356 1.80755C72.3007 1.70537 72.1617 1.60319 72.0008 1.50529C71.6881 1.24937 71.2934 1.10894 70.8858 1.10894C70.478 1.10894 70.0835 1.24914 69.7705 1.50505C69.6315 1.60295 69.501 1.70513 69.3661 1.80731C69.1487 1.97341 68.9313 2.1395 68.6921 2.29277C67.9395 2.75256 67.0708 2.99658 66.1837 2.99658C65.2967 2.99658 64.4277 2.75278 63.6751 2.29301C63.4403 2.13974 63.2404 1.97792 63.0099 1.81182C62.8665 1.70109 62.7185 1.59036 62.5751 1.48391C62.2699 1.25152 61.8946 1.12534 61.5078 1.12534C61.1214 1.12534 60.7458 1.25152 60.4406 1.48391C60.2754 1.59464 60.1232 1.71392 59.9668 1.83297C59.8103 1.95226 59.532 2.16089 59.3015 2.31416C58.11 3.02345 56.6753 3.27813 55.3365 2.40396L55.5597 1.48391C56.6753 1.96688 57.808 1.91997 58.7231 1.37748C58.9318 1.24536 59.1188 1.09638 59.31 0.951667C59.5012 0.806957 59.6535 0.687674 59.836 0.564108C60.3307 0.204349 60.9309 0.00997542 61.5471 0.00997542C62.1631 0.00997542 62.7631 0.204349 63.2578 0.564108C63.423 0.679115 63.5838 0.80268 63.7403 0.921726C63.8968 1.04101 64.1229 1.21542 64.3316 1.34754C64.9014 1.68948 65.5568 1.87031 66.2249 1.87031C66.8933 1.87031 67.5485 1.68948 68.1184 1.34754C68.3314 1.21138 68.5228 1.06216 68.714 0.921726C68.9052 0.781292 69.001 0.700266 69.1488 0.593812C69.6539 0.208631 70.2759 0 70.9159 0C71.5562 0 72.178 0.208869 72.6834 0.594049C72.8355 0.700503 72.9791 0.811234 73.1181 0.917688C73.3733 1.11753 73.6405 1.30216 73.918 1.47111C74.8564 1.97367 75.9788 2.02572 76.9613 1.61154C77.3963 1.39365 77.8085 1.13392 78.1916 0.836679L78.522 0.598107C79.0303 0.214349 79.6541 0.00595444 80.296 0.00595444C80.9377 0.00595444 81.5614 0.214349 82.0697 0.598107L82.5045 0.908915C82.7437 1.09212 82.9739 1.26226 83.2219 1.4198C83.7411 1.73774 84.3498 1.88696 84.9609 1.84585L85 2.94008C84.1618 2.98475 83.3306 2.77184 82.6219 2.33128C82.3349 2.14808 82.0741 1.95227 81.8264 1.76503L81.4307 1.47133C81.1119 1.22611 80.7184 1.09256 80.3132 1.09256C79.9081 1.09256 79.5146 1.22587 79.196 1.4711L78.8743 1.70111C78.4333 2.04186 77.9585 2.33862 77.457 2.58675C76.8782 2.85645 76.2458 2.99756 75.605 2.9997Z"
                      fill="#BDB0EC"
                    />
                  </svg>
                </span>
              </a>
            </div>

            <div className="group flex justify-content-center md:text-left flex-col items-center md:items-start text-center">
              <div className="mb-4 w-16 h-16 rounded-lg flex items-center justify-center">
                <img src={Icon2} alt="" />
              </div>
              <h3 className="text-xl font-semibold text-[#8447E9] mb-2">
                Marketing services
              </h3>
              <p className="text-sm text-[#3F3F3F] mb-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                lobortis lacus. Nunc porta ipsum et tempor euismod.
              </p>
              <a
                href="#"
                className="text-sm font-medium text-black hover:text-[#8447E9] transition duration-150"
              >
                <span className="relative inline-flex flex-col items-left">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="85"
                    height="3"
                    viewBox="0 0 85 3"
                    fill="none"
                  >
                    <path
                      d="M20.2685 2.9997C19.4766 3.00873 18.6966 2.81175 18.0077 2.42918C17.6925 2.23979 17.3892 2.03212 17.0991 1.80755C16.9642 1.70537 16.8252 1.60319 16.6643 1.50529C16.3516 1.24937 15.9568 1.10894 15.5493 1.10894C15.1415 1.10894 14.747 1.24914 14.434 1.50505C14.295 1.60295 14.1645 1.70513 14.0296 1.80731C13.8122 1.97341 13.5948 2.1395 13.3556 2.29277C12.603 2.75256 11.7342 2.99658 10.8472 2.99658C9.96018 2.99658 9.09122 2.75278 8.33859 2.29301C8.10375 2.13974 7.90384 1.97792 7.67335 1.81182C7.52997 1.70109 7.38198 1.59036 7.23859 1.48391C6.93339 1.25152 6.55807 1.12534 6.17132 1.12534C5.78484 1.12534 5.40925 1.25152 5.10405 1.48391C4.93883 1.59464 4.78672 1.71392 4.63023 1.83297C4.47375 1.95226 4.19548 2.16089 3.96499 2.31416C2.77351 3.02345 1.32564 3.18836 0 2.76564L0.343533 1.72251C1.36105 2.04591 2.47149 1.91997 3.3866 1.37748C3.59524 1.24536 3.78229 1.09638 3.97347 0.951667C4.16464 0.806957 4.317 0.687674 4.49945 0.564108C4.99413 0.204349 5.59435 0.00997542 6.21059 0.00997542C6.82658 0.00997542 7.42655 0.204349 7.92124 0.564108C8.08646 0.679115 8.24731 0.80268 8.40379 0.921726C8.56027 1.04101 8.78639 1.21542 8.99503 1.34754C9.56492 1.68948 10.2202 1.87031 10.8883 1.87031C11.5567 1.87031 12.212 1.68948 12.7819 1.34754C12.9949 1.21138 13.1863 1.06216 13.3775 0.921726C13.5687 0.781292 13.6645 0.700266 13.8123 0.593812C14.3174 0.208631 14.9394 0 15.5794 0C16.2197 0 16.8415 0.208869 17.3468 0.594049C17.499 0.700503 17.6426 0.811234 17.7816 0.917688C18.0368 1.11753 18.3039 1.30216 18.5815 1.47111C19.5199 1.97367 20.6422 2.02572 21.6248 1.61154C22.0598 1.39365 22.472 1.13392 22.8551 0.836679L23.1855 0.598107C23.6938 0.214349 24.3176 0.00595444 24.9595 0.00595444C25.6012 0.00595444 26.2249 0.214349 26.7332 0.598107L27.168 0.908915C27.4072 1.09212 27.6374 1.26226 27.8854 1.4198C28.4046 1.73774 29.0133 1.88696 29.6244 1.84585L29.6635 2.94008C28.8253 2.98475 27.9941 2.77184 27.2854 2.33128C26.9984 2.14808 26.7376 1.95227 26.4899 1.76503L26.0942 1.47133C25.7754 1.22611 25.3819 1.09256 24.9767 1.09256C24.5716 1.09256 24.1781 1.22587 23.8595 1.4711L23.5378 1.70111C23.0967 2.04186 22.622 2.33862 22.1205 2.58675C21.5416 2.85645 20.9092 2.99756 20.2685 2.9997Z"
                      fill="#BDB0EC"
                    />
                    <path
                      d="M47.9368 2.9997C47.1449 3.00873 46.3649 2.81175 45.6759 2.42918C45.3608 2.23979 45.0575 2.03212 44.7673 1.80755C44.6324 1.70537 44.4934 1.60319 44.3326 1.50529C44.0199 1.24937 43.6251 1.10894 43.2175 1.10894C42.8097 1.10894 42.4152 1.24914 42.1023 1.50505C41.9633 1.60295 41.8327 1.70513 41.6978 1.80731C41.4805 1.97341 41.2631 2.1395 41.0238 2.29277C40.2713 2.75256 39.4025 2.99658 38.5155 2.99658C37.6284 2.99658 36.7595 2.75278 36.0069 2.29301C35.772 2.13974 35.5721 1.97792 35.3416 1.81182C35.1982 1.70109 35.0502 1.59036 34.9069 1.48391C34.6016 1.25152 34.2263 1.12534 33.8396 1.12534C33.4531 1.12534 33.0775 1.25152 32.7723 1.48391C32.6071 1.59464 32.455 1.71392 32.2985 1.83297C32.142 1.95226 31.8637 2.16089 31.6333 2.31416C30.4418 3.02345 29.007 3.27813 27.6683 2.40396L27.8914 1.48391C29.007 1.96688 30.1398 1.91997 31.0549 1.37748C31.2635 1.24536 31.4506 1.09638 31.6417 0.951667C31.8329 0.806957 31.9853 0.687674 32.1677 0.564108C32.6624 0.204349 33.2626 0.00997542 33.8789 0.00997542C34.4948 0.00997542 35.0948 0.204349 35.5895 0.564108C35.7547 0.679115 35.9156 0.80268 36.0721 0.921726C36.2285 1.04101 36.4546 1.21542 36.6633 1.34754C37.2332 1.68948 37.8885 1.87031 38.5566 1.87031C39.225 1.87031 39.8802 1.68948 40.4502 1.34754C40.6632 1.21138 40.8546 1.06216 41.0458 0.921726C41.2369 0.781292 41.3328 0.700266 41.4805 0.593812C41.9856 0.208631 42.6077 0 43.2477 0C43.888 0 44.5097 0.208869 45.0151 0.594049C45.1672 0.700503 45.3108 0.811234 45.4499 0.917688C45.7051 1.11753 45.9722 1.30216 46.2497 1.47111C47.1881 1.97367 48.3105 2.02572 49.2931 1.61154C49.7281 1.39365 50.1403 1.13392 50.5234 0.836679L50.8538 0.598107C51.3621 0.214349 51.9858 0.00595444 52.6277 0.00595444C53.2694 0.00595444 53.8932 0.214349 54.4015 0.598107L54.8362 0.908915C55.0755 1.09212 55.3057 1.26226 55.5536 1.4198C56.0728 1.73774 56.6815 1.88696 57.2927 1.84585L57.3317 2.94008C56.4935 2.98475 55.6623 2.77184 54.9537 2.33128C54.6667 2.14808 54.4059 1.95227 54.1581 1.76503L53.7624 1.47133C53.4436 1.22611 53.0501 1.09256 52.645 1.09256C52.2398 1.09256 51.8463 1.22587 51.5278 1.4711L51.2061 1.70111C50.765 2.04186 50.2902 2.33862 49.7888 2.58675C49.2099 2.85645 48.5775 2.99756 47.9368 2.9997Z"
                      fill="#BDB0EC"
                    />
                    <path
                      d="M75.605 2.9997C74.8132 3.00873 74.0331 2.81175 73.3442 2.42918C73.029 2.23979 72.7258 2.03212 72.4356 1.80755C72.3007 1.70537 72.1617 1.60319 72.0008 1.50529C71.6881 1.24937 71.2934 1.10894 70.8858 1.10894C70.478 1.10894 70.0835 1.24914 69.7705 1.50505C69.6315 1.60295 69.501 1.70513 69.3661 1.80731C69.1487 1.97341 68.9313 2.1395 68.6921 2.29277C67.9395 2.75256 67.0708 2.99658 66.1837 2.99658C65.2967 2.99658 64.4277 2.75278 63.6751 2.29301C63.4403 2.13974 63.2404 1.97792 63.0099 1.81182C62.8665 1.70109 62.7185 1.59036 62.5751 1.48391C62.2699 1.25152 61.8946 1.12534 61.5078 1.12534C61.1214 1.12534 60.7458 1.25152 60.4406 1.48391C60.2754 1.59464 60.1232 1.71392 59.9668 1.83297C59.8103 1.95226 59.532 2.16089 59.3015 2.31416C58.11 3.02345 56.6753 3.27813 55.3365 2.40396L55.5597 1.48391C56.6753 1.96688 57.808 1.91997 58.7231 1.37748C58.9318 1.24536 59.1188 1.09638 59.31 0.951667C59.5012 0.806957 59.6535 0.687674 59.836 0.564108C60.3307 0.204349 60.9309 0.00997542 61.5471 0.00997542C62.1631 0.00997542 62.7631 0.204349 63.2578 0.564108C63.423 0.679115 63.5838 0.80268 63.7403 0.921726C63.8968 1.04101 64.1229 1.21542 64.3316 1.34754C64.9014 1.68948 65.5568 1.87031 66.2249 1.87031C66.8933 1.87031 67.5485 1.68948 68.1184 1.34754C68.3314 1.21138 68.5228 1.06216 68.714 0.921726C68.9052 0.781292 69.001 0.700266 69.1488 0.593812C69.6539 0.208631 70.2759 0 70.9159 0C71.5562 0 72.178 0.208869 72.6834 0.594049C72.8355 0.700503 72.9791 0.811234 73.1181 0.917688C73.3733 1.11753 73.6405 1.30216 73.918 1.47111C74.8564 1.97367 75.9788 2.02572 76.9613 1.61154C77.3963 1.39365 77.8085 1.13392 78.1916 0.836679L78.522 0.598107C79.0303 0.214349 79.6541 0.00595444 80.296 0.00595444C80.9377 0.00595444 81.5614 0.214349 82.0697 0.598107L82.5045 0.908915C82.7437 1.09212 82.9739 1.26226 83.2219 1.4198C83.7411 1.73774 84.3498 1.88696 84.9609 1.84585L85 2.94008C84.1618 2.98475 83.3306 2.77184 82.6219 2.33128C82.3349 2.14808 82.0741 1.95227 81.8264 1.76503L81.4307 1.47133C81.1119 1.22611 80.7184 1.09256 80.3132 1.09256C79.9081 1.09256 79.5146 1.22587 79.196 1.4711L78.8743 1.70111C78.4333 2.04186 77.9585 2.33862 77.457 2.58675C76.8782 2.85645 76.2458 2.99756 75.605 2.9997Z"
                      fill="#BDB0EC"
                    />
                  </svg>
                </span>
              </a>
            </div>

            <div className="group flex justify-content-center md:text-left flex-col items-center md:items-start text-center">
              <div className="mb-4 w-16 h-16 rounded-lg flex items-center justify-center">
                <img src={Icon3} alt="" />
              </div>
              <h3 className="text-xl font-semibold text-[#8447E9] mb-2">
                Design services
              </h3>
              <p className="text-sm text-[#3F3F3F] mb-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                lobortis lacus. Nunc porta ipsum et tempor euismod.
              </p>
              <a
                href="#"
                className="text-sm font-medium text-black hover:text-[#8447E9] transition duration-150"
              >
                <span className="relative inline-flex flex-col items-left">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="85"
                    height="3"
                    viewBox="0 0 85 3"
                    fill="none"
                  >
                    <path
                      d="M20.2685 2.9997C19.4766 3.00873 18.6966 2.81175 18.0077 2.42918C17.6925 2.23979 17.3892 2.03212 17.0991 1.80755C16.9642 1.70537 16.8252 1.60319 16.6643 1.50529C16.3516 1.24937 15.9568 1.10894 15.5493 1.10894C15.1415 1.10894 14.747 1.24914 14.434 1.50505C14.295 1.60295 14.1645 1.70513 14.0296 1.80731C13.8122 1.97341 13.5948 2.1395 13.3556 2.29277C12.603 2.75256 11.7342 2.99658 10.8472 2.99658C9.96018 2.99658 9.09122 2.75278 8.33859 2.29301C8.10375 2.13974 7.90384 1.97792 7.67335 1.81182C7.52997 1.70109 7.38198 1.59036 7.23859 1.48391C6.93339 1.25152 6.55807 1.12534 6.17132 1.12534C5.78484 1.12534 5.40925 1.25152 5.10405 1.48391C4.93883 1.59464 4.78672 1.71392 4.63023 1.83297C4.47375 1.95226 4.19548 2.16089 3.96499 2.31416C2.77351 3.02345 1.32564 3.18836 0 2.76564L0.343533 1.72251C1.36105 2.04591 2.47149 1.91997 3.3866 1.37748C3.59524 1.24536 3.78229 1.09638 3.97347 0.951667C4.16464 0.806957 4.317 0.687674 4.49945 0.564108C4.99413 0.204349 5.59435 0.00997542 6.21059 0.00997542C6.82658 0.00997542 7.42655 0.204349 7.92124 0.564108C8.08646 0.679115 8.24731 0.80268 8.40379 0.921726C8.56027 1.04101 8.78639 1.21542 8.99503 1.34754C9.56492 1.68948 10.2202 1.87031 10.8883 1.87031C11.5567 1.87031 12.212 1.68948 12.7819 1.34754C12.9949 1.21138 13.1863 1.06216 13.3775 0.921726C13.5687 0.781292 13.6645 0.700266 13.8123 0.593812C14.3174 0.208631 14.9394 0 15.5794 0C16.2197 0 16.8415 0.208869 17.3468 0.594049C17.499 0.700503 17.6426 0.811234 17.7816 0.917688C18.0368 1.11753 18.3039 1.30216 18.5815 1.47111C19.5199 1.97367 20.6422 2.02572 21.6248 1.61154C22.0598 1.39365 22.472 1.13392 22.8551 0.836679L23.1855 0.598107C23.6938 0.214349 24.3176 0.00595444 24.9595 0.00595444C25.6012 0.00595444 26.2249 0.214349 26.7332 0.598107L27.168 0.908915C27.4072 1.09212 27.6374 1.26226 27.8854 1.4198C28.4046 1.73774 29.0133 1.88696 29.6244 1.84585L29.6635 2.94008C28.8253 2.98475 27.9941 2.77184 27.2854 2.33128C26.9984 2.14808 26.7376 1.95227 26.4899 1.76503L26.0942 1.47133C25.7754 1.22611 25.3819 1.09256 24.9767 1.09256C24.5716 1.09256 24.1781 1.22587 23.8595 1.4711L23.5378 1.70111C23.0967 2.04186 22.622 2.33862 22.1205 2.58675C21.5416 2.85645 20.9092 2.99756 20.2685 2.9997Z"
                      fill="#BDB0EC"
                    />
                    <path
                      d="M47.9368 2.9997C47.1449 3.00873 46.3649 2.81175 45.6759 2.42918C45.3608 2.23979 45.0575 2.03212 44.7673 1.80755C44.6324 1.70537 44.4934 1.60319 44.3326 1.50529C44.0199 1.24937 43.6251 1.10894 43.2175 1.10894C42.8097 1.10894 42.4152 1.24914 42.1023 1.50505C41.9633 1.60295 41.8327 1.70513 41.6978 1.80731C41.4805 1.97341 41.2631 2.1395 41.0238 2.29277C40.2713 2.75256 39.4025 2.99658 38.5155 2.99658C37.6284 2.99658 36.7595 2.75278 36.0069 2.29301C35.772 2.13974 35.5721 1.97792 35.3416 1.81182C35.1982 1.70109 35.0502 1.59036 34.9069 1.48391C34.6016 1.25152 34.2263 1.12534 33.8396 1.12534C33.4531 1.12534 33.0775 1.25152 32.7723 1.48391C32.6071 1.59464 32.455 1.71392 32.2985 1.83297C32.142 1.95226 31.8637 2.16089 31.6333 2.31416C30.4418 3.02345 29.007 3.27813 27.6683 2.40396L27.8914 1.48391C29.007 1.96688 30.1398 1.91997 31.0549 1.37748C31.2635 1.24536 31.4506 1.09638 31.6417 0.951667C31.8329 0.806957 31.9853 0.687674 32.1677 0.564108C32.6624 0.204349 33.2626 0.00997542 33.8789 0.00997542C34.4948 0.00997542 35.0948 0.204349 35.5895 0.564108C35.7547 0.679115 35.9156 0.80268 36.0721 0.921726C36.2285 1.04101 36.4546 1.21542 36.6633 1.34754C37.2332 1.68948 37.8885 1.87031 38.5566 1.87031C39.225 1.87031 39.8802 1.68948 40.4502 1.34754C40.6632 1.21138 40.8546 1.06216 41.0458 0.921726C41.2369 0.781292 41.3328 0.700266 41.4805 0.593812C41.9856 0.208631 42.6077 0 43.2477 0C43.888 0 44.5097 0.208869 45.0151 0.594049C45.1672 0.700503 45.3108 0.811234 45.4499 0.917688C45.7051 1.11753 45.9722 1.30216 46.2497 1.47111C47.1881 1.97367 48.3105 2.02572 49.2931 1.61154C49.7281 1.39365 50.1403 1.13392 50.5234 0.836679L50.8538 0.598107C51.3621 0.214349 51.9858 0.00595444 52.6277 0.00595444C53.2694 0.00595444 53.8932 0.214349 54.4015 0.598107L54.8362 0.908915C55.0755 1.09212 55.3057 1.26226 55.5536 1.4198C56.0728 1.73774 56.6815 1.88696 57.2927 1.84585L57.3317 2.94008C56.4935 2.98475 55.6623 2.77184 54.9537 2.33128C54.6667 2.14808 54.4059 1.95227 54.1581 1.76503L53.7624 1.47133C53.4436 1.22611 53.0501 1.09256 52.645 1.09256C52.2398 1.09256 51.8463 1.22587 51.5278 1.4711L51.2061 1.70111C50.765 2.04186 50.2902 2.33862 49.7888 2.58675C49.2099 2.85645 48.5775 2.99756 47.9368 2.9997Z"
                      fill="#BDB0EC"
                    />
                    <path
                      d="M75.605 2.9997C74.8132 3.00873 74.0331 2.81175 73.3442 2.42918C73.029 2.23979 72.7258 2.03212 72.4356 1.80755C72.3007 1.70537 72.1617 1.60319 72.0008 1.50529C71.6881 1.24937 71.2934 1.10894 70.8858 1.10894C70.478 1.10894 70.0835 1.24914 69.7705 1.50505C69.6315 1.60295 69.501 1.70513 69.3661 1.80731C69.1487 1.97341 68.9313 2.1395 68.6921 2.29277C67.9395 2.75256 67.0708 2.99658 66.1837 2.99658C65.2967 2.99658 64.4277 2.75278 63.6751 2.29301C63.4403 2.13974 63.2404 1.97792 63.0099 1.81182C62.8665 1.70109 62.7185 1.59036 62.5751 1.48391C62.2699 1.25152 61.8946 1.12534 61.5078 1.12534C61.1214 1.12534 60.7458 1.25152 60.4406 1.48391C60.2754 1.59464 60.1232 1.71392 59.9668 1.83297C59.8103 1.95226 59.532 2.16089 59.3015 2.31416C58.11 3.02345 56.6753 3.27813 55.3365 2.40396L55.5597 1.48391C56.6753 1.96688 57.808 1.91997 58.7231 1.37748C58.9318 1.24536 59.1188 1.09638 59.31 0.951667C59.5012 0.806957 59.6535 0.687674 59.836 0.564108C60.3307 0.204349 60.9309 0.00997542 61.5471 0.00997542C62.1631 0.00997542 62.7631 0.204349 63.2578 0.564108C63.423 0.679115 63.5838 0.80268 63.7403 0.921726C63.8968 1.04101 64.1229 1.21542 64.3316 1.34754C64.9014 1.68948 65.5568 1.87031 66.2249 1.87031C66.8933 1.87031 67.5485 1.68948 68.1184 1.34754C68.3314 1.21138 68.5228 1.06216 68.714 0.921726C68.9052 0.781292 69.001 0.700266 69.1488 0.593812C69.6539 0.208631 70.2759 0 70.9159 0C71.5562 0 72.178 0.208869 72.6834 0.594049C72.8355 0.700503 72.9791 0.811234 73.1181 0.917688C73.3733 1.11753 73.6405 1.30216 73.918 1.47111C74.8564 1.97367 75.9788 2.02572 76.9613 1.61154C77.3963 1.39365 77.8085 1.13392 78.1916 0.836679L78.522 0.598107C79.0303 0.214349 79.6541 0.00595444 80.296 0.00595444C80.9377 0.00595444 81.5614 0.214349 82.0697 0.598107L82.5045 0.908915C82.7437 1.09212 82.9739 1.26226 83.2219 1.4198C83.7411 1.73774 84.3498 1.88696 84.9609 1.84585L85 2.94008C84.1618 2.98475 83.3306 2.77184 82.6219 2.33128C82.3349 2.14808 82.0741 1.95227 81.8264 1.76503L81.4307 1.47133C81.1119 1.22611 80.7184 1.09256 80.3132 1.09256C79.9081 1.09256 79.5146 1.22587 79.196 1.4711L78.8743 1.70111C78.4333 2.04186 77.9585 2.33862 77.457 2.58675C76.8782 2.85645 76.2458 2.99756 75.605 2.9997Z"
                      fill="#BDB0EC"
                    />
                  </svg>
                </span>
              </a>
            </div>

            <div className="group flex justify-content-center md:text-left flex-col items-center md:items-start text-center">
              <div className="mb-4 w-16 h-16 rounded-lg flex items-center justify-center">
                <img src={Icon4} alt="" />
              </div>
              <h3 className="text-xl font-semibold text-[#8447E9] mb-2">
                Development services
              </h3>
              <p className="text-sm text-[#3F3F3F] mb-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                consectetur adipiscing elit.
              </p>
              <a
                href="#"
                className="text-sm font-medium text-black hover:text-[#8447E9] transition duration-150"
              >
                <span className="relative inline-flex flex-col items-left">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="85"
                    height="3"
                    viewBox="0 0 85 3"
                    fill="none"
                  >
                    <path
                      d="M20.2685 2.9997C19.4766 3.00873 18.6966 2.81175 18.0077 2.42918C17.6925 2.23979 17.3892 2.03212 17.0991 1.80755C16.9642 1.70537 16.8252 1.60319 16.6643 1.50529C16.3516 1.24937 15.9568 1.10894 15.5493 1.10894C15.1415 1.10894 14.747 1.24914 14.434 1.50505C14.295 1.60295 14.1645 1.70513 14.0296 1.80731C13.8122 1.97341 13.5948 2.1395 13.3556 2.29277C12.603 2.75256 11.7342 2.99658 10.8472 2.99658C9.96018 2.99658 9.09122 2.75278 8.33859 2.29301C8.10375 2.13974 7.90384 1.97792 7.67335 1.81182C7.52997 1.70109 7.38198 1.59036 7.23859 1.48391C6.93339 1.25152 6.55807 1.12534 6.17132 1.12534C5.78484 1.12534 5.40925 1.25152 5.10405 1.48391C4.93883 1.59464 4.78672 1.71392 4.63023 1.83297C4.47375 1.95226 4.19548 2.16089 3.96499 2.31416C2.77351 3.02345 1.32564 3.18836 0 2.76564L0.343533 1.72251C1.36105 2.04591 2.47149 1.91997 3.3866 1.37748C3.59524 1.24536 3.78229 1.09638 3.97347 0.951667C4.16464 0.806957 4.317 0.687674 4.49945 0.564108C4.99413 0.204349 5.59435 0.00997542 6.21059 0.00997542C6.82658 0.00997542 7.42655 0.204349 7.92124 0.564108C8.08646 0.679115 8.24731 0.80268 8.40379 0.921726C8.56027 1.04101 8.78639 1.21542 8.99503 1.34754C9.56492 1.68948 10.2202 1.87031 10.8883 1.87031C11.5567 1.87031 12.212 1.68948 12.7819 1.34754C12.9949 1.21138 13.1863 1.06216 13.3775 0.921726C13.5687 0.781292 13.6645 0.700266 13.8123 0.593812C14.3174 0.208631 14.9394 0 15.5794 0C16.2197 0 16.8415 0.208869 17.3468 0.594049C17.499 0.700503 17.6426 0.811234 17.7816 0.917688C18.0368 1.11753 18.3039 1.30216 18.5815 1.47111C19.5199 1.97367 20.6422 2.02572 21.6248 1.61154C22.0598 1.39365 22.472 1.13392 22.8551 0.836679L23.1855 0.598107C23.6938 0.214349 24.3176 0.00595444 24.9595 0.00595444C25.6012 0.00595444 26.2249 0.214349 26.7332 0.598107L27.168 0.908915C27.4072 1.09212 27.6374 1.26226 27.8854 1.4198C28.4046 1.73774 29.0133 1.88696 29.6244 1.84585L29.6635 2.94008C28.8253 2.98475 27.9941 2.77184 27.2854 2.33128C26.9984 2.14808 26.7376 1.95227 26.4899 1.76503L26.0942 1.47133C25.7754 1.22611 25.3819 1.09256 24.9767 1.09256C24.5716 1.09256 24.1781 1.22587 23.8595 1.4711L23.5378 1.70111C23.0967 2.04186 22.622 2.33862 22.1205 2.58675C21.5416 2.85645 20.9092 2.99756 20.2685 2.9997Z"
                      fill="#BDB0EC"
                    />
                    <path
                      d="M47.9368 2.9997C47.1449 3.00873 46.3649 2.81175 45.6759 2.42918C45.3608 2.23979 45.0575 2.03212 44.7673 1.80755C44.6324 1.70537 44.4934 1.60319 44.3326 1.50529C44.0199 1.24937 43.6251 1.10894 43.2175 1.10894C42.8097 1.10894 42.4152 1.24914 42.1023 1.50505C41.9633 1.60295 41.8327 1.70513 41.6978 1.80731C41.4805 1.97341 41.2631 2.1395 41.0238 2.29277C40.2713 2.75256 39.4025 2.99658 38.5155 2.99658C37.6284 2.99658 36.7595 2.75278 36.0069 2.29301C35.772 2.13974 35.5721 1.97792 35.3416 1.81182C35.1982 1.70109 35.0502 1.59036 34.9069 1.48391C34.6016 1.25152 34.2263 1.12534 33.8396 1.12534C33.4531 1.12534 33.0775 1.25152 32.7723 1.48391C32.6071 1.59464 32.455 1.71392 32.2985 1.83297C32.142 1.95226 31.8637 2.16089 31.6333 2.31416C30.4418 3.02345 29.007 3.27813 27.6683 2.40396L27.8914 1.48391C29.007 1.96688 30.1398 1.91997 31.0549 1.37748C31.2635 1.24536 31.4506 1.09638 31.6417 0.951667C31.8329 0.806957 31.9853 0.687674 32.1677 0.564108C32.6624 0.204349 33.2626 0.00997542 33.8789 0.00997542C34.4948 0.00997542 35.0948 0.204349 35.5895 0.564108C35.7547 0.679115 35.9156 0.80268 36.0721 0.921726C36.2285 1.04101 36.4546 1.21542 36.6633 1.34754C37.2332 1.68948 37.8885 1.87031 38.5566 1.87031C39.225 1.87031 39.8802 1.68948 40.4502 1.34754C40.6632 1.21138 40.8546 1.06216 41.0458 0.921726C41.2369 0.781292 41.3328 0.700266 41.4805 0.593812C41.9856 0.208631 42.6077 0 43.2477 0C43.888 0 44.5097 0.208869 45.0151 0.594049C45.1672 0.700503 45.3108 0.811234 45.4499 0.917688C45.7051 1.11753 45.9722 1.30216 46.2497 1.47111C47.1881 1.97367 48.3105 2.02572 49.2931 1.61154C49.7281 1.39365 50.1403 1.13392 50.5234 0.836679L50.8538 0.598107C51.3621 0.214349 51.9858 0.00595444 52.6277 0.00595444C53.2694 0.00595444 53.8932 0.214349 54.4015 0.598107L54.8362 0.908915C55.0755 1.09212 55.3057 1.26226 55.5536 1.4198C56.0728 1.73774 56.6815 1.88696 57.2927 1.84585L57.3317 2.94008C56.4935 2.98475 55.6623 2.77184 54.9537 2.33128C54.6667 2.14808 54.4059 1.95227 54.1581 1.76503L53.7624 1.47133C53.4436 1.22611 53.0501 1.09256 52.645 1.09256C52.2398 1.09256 51.8463 1.22587 51.5278 1.4711L51.2061 1.70111C50.765 2.04186 50.2902 2.33862 49.7888 2.58675C49.2099 2.85645 48.5775 2.99756 47.9368 2.9997Z"
                      fill="#BDB0EC"
                    />
                    <path
                      d="M75.605 2.9997C74.8132 3.00873 74.0331 2.81175 73.3442 2.42918C73.029 2.23979 72.7258 2.03212 72.4356 1.80755C72.3007 1.70537 72.1617 1.60319 72.0008 1.50529C71.6881 1.24937 71.2934 1.10894 70.8858 1.10894C70.478 1.10894 70.0835 1.24914 69.7705 1.50505C69.6315 1.60295 69.501 1.70513 69.3661 1.80731C69.1487 1.97341 68.9313 2.1395 68.6921 2.29277C67.9395 2.75256 67.0708 2.99658 66.1837 2.99658C65.2967 2.99658 64.4277 2.75278 63.6751 2.29301C63.4403 2.13974 63.2404 1.97792 63.0099 1.81182C62.8665 1.70109 62.7185 1.59036 62.5751 1.48391C62.2699 1.25152 61.8946 1.12534 61.5078 1.12534C61.1214 1.12534 60.7458 1.25152 60.4406 1.48391C60.2754 1.59464 60.1232 1.71392 59.9668 1.83297C59.8103 1.95226 59.532 2.16089 59.3015 2.31416C58.11 3.02345 56.6753 3.27813 55.3365 2.40396L55.5597 1.48391C56.6753 1.96688 57.808 1.91997 58.7231 1.37748C58.9318 1.24536 59.1188 1.09638 59.31 0.951667C59.5012 0.806957 59.6535 0.687674 59.836 0.564108C60.3307 0.204349 60.9309 0.00997542 61.5471 0.00997542C62.1631 0.00997542 62.7631 0.204349 63.2578 0.564108C63.423 0.679115 63.5838 0.80268 63.7403 0.921726C63.8968 1.04101 64.1229 1.21542 64.3316 1.34754C64.9014 1.68948 65.5568 1.87031 66.2249 1.87031C66.8933 1.87031 67.5485 1.68948 68.1184 1.34754C68.3314 1.21138 68.5228 1.06216 68.714 0.921726C68.9052 0.781292 69.001 0.700266 69.1488 0.593812C69.6539 0.208631 70.2759 0 70.9159 0C71.5562 0 72.178 0.208869 72.6834 0.594049C72.8355 0.700503 72.9791 0.811234 73.1181 0.917688C73.3733 1.11753 73.6405 1.30216 73.918 1.47111C74.8564 1.97367 75.9788 2.02572 76.9613 1.61154C77.3963 1.39365 77.8085 1.13392 78.1916 0.836679L78.522 0.598107C79.0303 0.214349 79.6541 0.00595444 80.296 0.00595444C80.9377 0.00595444 81.5614 0.214349 82.0697 0.598107L82.5045 0.908915C82.7437 1.09212 82.9739 1.26226 83.2219 1.4198C83.7411 1.73774 84.3498 1.88696 84.9609 1.84585L85 2.94008C84.1618 2.98475 83.3306 2.77184 82.6219 2.33128C82.3349 2.14808 82.0741 1.95227 81.8264 1.76503L81.4307 1.47133C81.1119 1.22611 80.7184 1.09256 80.3132 1.09256C79.9081 1.09256 79.5146 1.22587 79.196 1.4711L78.8743 1.70111C78.4333 2.04186 77.9585 2.33862 77.457 2.58675C76.8782 2.85645 76.2458 2.99756 75.605 2.9997Z"
                      fill="#BDB0EC"
                    />
                  </svg>
                </span>
              </a>
            </div>

            <div className="group flex justify-content-center md:text-left flex-col items-center md:items-start text-center">
              <div className="mb-4 w-16 h-16 rounded-lg flex items-center justify-center">
                <img src={Icon1} alt="" />
              </div>
              <h3 className="text-xl font-semibold text-[#8447E9] mb-2">
                Strategy services
              </h3>
              <p className="text-sm text-[#3F3F3F] mb-4 leading-relaxed">
                Lorem magna aliqua. Nunc porta ipsum et tempor euismod.
              </p>
              <a
                href="#"
                className="text-sm font-medium text-black hover:text-[#8447E9] transition duration-150"
              >
                <span className="relative inline-flex flex-col items-left">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="85"
                    height="3"
                    viewBox="0 0 85 3"
                    fill="none"
                  >
                    <path
                      d="M20.2685 2.9997C19.4766 3.00873 18.6966 2.81175 18.0077 2.42918C17.6925 2.23979 17.3892 2.03212 17.0991 1.80755C16.9642 1.70537 16.8252 1.60319 16.6643 1.50529C16.3516 1.24937 15.9568 1.10894 15.5493 1.10894C15.1415 1.10894 14.747 1.24914 14.434 1.50505C14.295 1.60295 14.1645 1.70513 14.0296 1.80731C13.8122 1.97341 13.5948 2.1395 13.3556 2.29277C12.603 2.75256 11.7342 2.99658 10.8472 2.99658C9.96018 2.99658 9.09122 2.75278 8.33859 2.29301C8.10375 2.13974 7.90384 1.97792 7.67335 1.81182C7.52997 1.70109 7.38198 1.59036 7.23859 1.48391C6.93339 1.25152 6.55807 1.12534 6.17132 1.12534C5.78484 1.12534 5.40925 1.25152 5.10405 1.48391C4.93883 1.59464 4.78672 1.71392 4.63023 1.83297C4.47375 1.95226 4.19548 2.16089 3.96499 2.31416C2.77351 3.02345 1.32564 3.18836 0 2.76564L0.343533 1.72251C1.36105 2.04591 2.47149 1.91997 3.3866 1.37748C3.59524 1.24536 3.78229 1.09638 3.97347 0.951667C4.16464 0.806957 4.317 0.687674 4.49945 0.564108C4.99413 0.204349 5.59435 0.00997542 6.21059 0.00997542C6.82658 0.00997542 7.42655 0.204349 7.92124 0.564108C8.08646 0.679115 8.24731 0.80268 8.40379 0.921726C8.56027 1.04101 8.78639 1.21542 8.99503 1.34754C9.56492 1.68948 10.2202 1.87031 10.8883 1.87031C11.5567 1.87031 12.212 1.68948 12.7819 1.34754C12.9949 1.21138 13.1863 1.06216 13.3775 0.921726C13.5687 0.781292 13.6645 0.700266 13.8123 0.593812C14.3174 0.208631 14.9394 0 15.5794 0C16.2197 0 16.8415 0.208869 17.3468 0.594049C17.499 0.700503 17.6426 0.811234 17.7816 0.917688C18.0368 1.11753 18.3039 1.30216 18.5815 1.47111C19.5199 1.97367 20.6422 2.02572 21.6248 1.61154C22.0598 1.39365 22.472 1.13392 22.8551 0.836679L23.1855 0.598107C23.6938 0.214349 24.3176 0.00595444 24.9595 0.00595444C25.6012 0.00595444 26.2249 0.214349 26.7332 0.598107L27.168 0.908915C27.4072 1.09212 27.6374 1.26226 27.8854 1.4198C28.4046 1.73774 29.0133 1.88696 29.6244 1.84585L29.6635 2.94008C28.8253 2.98475 27.9941 2.77184 27.2854 2.33128C26.9984 2.14808 26.7376 1.95227 26.4899 1.76503L26.0942 1.47133C25.7754 1.22611 25.3819 1.09256 24.9767 1.09256C24.5716 1.09256 24.1781 1.22587 23.8595 1.4711L23.5378 1.70111C23.0967 2.04186 22.622 2.33862 22.1205 2.58675C21.5416 2.85645 20.9092 2.99756 20.2685 2.9997Z"
                      fill="#BDB0EC"
                    />
                    <path
                      d="M47.9368 2.9997C47.1449 3.00873 46.3649 2.81175 45.6759 2.42918C45.3608 2.23979 45.0575 2.03212 44.7673 1.80755C44.6324 1.70537 44.4934 1.60319 44.3326 1.50529C44.0199 1.24937 43.6251 1.10894 43.2175 1.10894C42.8097 1.10894 42.4152 1.24914 42.1023 1.50505C41.9633 1.60295 41.8327 1.70513 41.6978 1.80731C41.4805 1.97341 41.2631 2.1395 41.0238 2.29277C40.2713 2.75256 39.4025 2.99658 38.5155 2.99658C37.6284 2.99658 36.7595 2.75278 36.0069 2.29301C35.772 2.13974 35.5721 1.97792 35.3416 1.81182C35.1982 1.70109 35.0502 1.59036 34.9069 1.48391C34.6016 1.25152 34.2263 1.12534 33.8396 1.12534C33.4531 1.12534 33.0775 1.25152 32.7723 1.48391C32.6071 1.59464 32.455 1.71392 32.2985 1.83297C32.142 1.95226 31.8637 2.16089 31.6333 2.31416C30.4418 3.02345 29.007 3.27813 27.6683 2.40396L27.8914 1.48391C29.007 1.96688 30.1398 1.91997 31.0549 1.37748C31.2635 1.24536 31.4506 1.09638 31.6417 0.951667C31.8329 0.806957 31.9853 0.687674 32.1677 0.564108C32.6624 0.204349 33.2626 0.00997542 33.8789 0.00997542C34.4948 0.00997542 35.0948 0.204349 35.5895 0.564108C35.7547 0.679115 35.9156 0.80268 36.0721 0.921726C36.2285 1.04101 36.4546 1.21542 36.6633 1.34754C37.2332 1.68948 37.8885 1.87031 38.5566 1.87031C39.225 1.87031 39.8802 1.68948 40.4502 1.34754C40.6632 1.21138 40.8546 1.06216 41.0458 0.921726C41.2369 0.781292 41.3328 0.700266 41.4805 0.593812C41.9856 0.208631 42.6077 0 43.2477 0C43.888 0 44.5097 0.208869 45.0151 0.594049C45.1672 0.700503 45.3108 0.811234 45.4499 0.917688C45.7051 1.11753 45.9722 1.30216 46.2497 1.47111C47.1881 1.97367 48.3105 2.02572 49.2931 1.61154C49.7281 1.39365 50.1403 1.13392 50.5234 0.836679L50.8538 0.598107C51.3621 0.214349 51.9858 0.00595444 52.6277 0.00595444C53.2694 0.00595444 53.8932 0.214349 54.4015 0.598107L54.8362 0.908915C55.0755 1.09212 55.3057 1.26226 55.5536 1.4198C56.0728 1.73774 56.6815 1.88696 57.2927 1.84585L57.3317 2.94008C56.4935 2.98475 55.6623 2.77184 54.9537 2.33128C54.6667 2.14808 54.4059 1.95227 54.1581 1.76503L53.7624 1.47133C53.4436 1.22611 53.0501 1.09256 52.645 1.09256C52.2398 1.09256 51.8463 1.22587 51.5278 1.4711L51.2061 1.70111C50.765 2.04186 50.2902 2.33862 49.7888 2.58675C49.2099 2.85645 48.5775 2.99756 47.9368 2.9997Z"
                      fill="#BDB0EC"
                    />
                    <path
                      d="M75.605 2.9997C74.8132 3.00873 74.0331 2.81175 73.3442 2.42918C73.029 2.23979 72.7258 2.03212 72.4356 1.80755C72.3007 1.70537 72.1617 1.60319 72.0008 1.50529C71.6881 1.24937 71.2934 1.10894 70.8858 1.10894C70.478 1.10894 70.0835 1.24914 69.7705 1.50505C69.6315 1.60295 69.501 1.70513 69.3661 1.80731C69.1487 1.97341 68.9313 2.1395 68.6921 2.29277C67.9395 2.75256 67.0708 2.99658 66.1837 2.99658C65.2967 2.99658 64.4277 2.75278 63.6751 2.29301C63.4403 2.13974 63.2404 1.97792 63.0099 1.81182C62.8665 1.70109 62.7185 1.59036 62.5751 1.48391C62.2699 1.25152 61.8946 1.12534 61.5078 1.12534C61.1214 1.12534 60.7458 1.25152 60.4406 1.48391C60.2754 1.59464 60.1232 1.71392 59.9668 1.83297C59.8103 1.95226 59.532 2.16089 59.3015 2.31416C58.11 3.02345 56.6753 3.27813 55.3365 2.40396L55.5597 1.48391C56.6753 1.96688 57.808 1.91997 58.7231 1.37748C58.9318 1.24536 59.1188 1.09638 59.31 0.951667C59.5012 0.806957 59.6535 0.687674 59.836 0.564108C60.3307 0.204349 60.9309 0.00997542 61.5471 0.00997542C62.1631 0.00997542 62.7631 0.204349 63.2578 0.564108C63.423 0.679115 63.5838 0.80268 63.7403 0.921726C63.8968 1.04101 64.1229 1.21542 64.3316 1.34754C64.9014 1.68948 65.5568 1.87031 66.2249 1.87031C66.8933 1.87031 67.5485 1.68948 68.1184 1.34754C68.3314 1.21138 68.5228 1.06216 68.714 0.921726C68.9052 0.781292 69.001 0.700266 69.1488 0.593812C69.6539 0.208631 70.2759 0 70.9159 0C71.5562 0 72.178 0.208869 72.6834 0.594049C72.8355 0.700503 72.9791 0.811234 73.1181 0.917688C73.3733 1.11753 73.6405 1.30216 73.918 1.47111C74.8564 1.97367 75.9788 2.02572 76.9613 1.61154C77.3963 1.39365 77.8085 1.13392 78.1916 0.836679L78.522 0.598107C79.0303 0.214349 79.6541 0.00595444 80.296 0.00595444C80.9377 0.00595444 81.5614 0.214349 82.0697 0.598107L82.5045 0.908915C82.7437 1.09212 82.9739 1.26226 83.2219 1.4198C83.7411 1.73774 84.3498 1.88696 84.9609 1.84585L85 2.94008C84.1618 2.98475 83.3306 2.77184 82.6219 2.33128C82.3349 2.14808 82.0741 1.95227 81.8264 1.76503L81.4307 1.47133C81.1119 1.22611 80.7184 1.09256 80.3132 1.09256C79.9081 1.09256 79.5146 1.22587 79.196 1.4711L78.8743 1.70111C78.4333 2.04186 77.9585 2.33862 77.457 2.58675C76.8782 2.85645 76.2458 2.99756 75.605 2.9997Z"
                      fill="#BDB0EC"
                    />
                  </svg>
                </span>
              </a>
            </div>

            <div className="group flex justify-content-center md:text-left flex-col items-center md:items-start text-center">
              <div className="mb-4 w-16 h-16 rounded-lg flex items-center justify-center">
                <img src={Icon2} alt="" />
              </div>
              <h3 className="text-xl font-semibold text-[#8447E9] mb-2">
                Marketing services
              </h3>
              <p className="text-sm text-[#3F3F3F] mb-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                porta ipsum et tempor euismod.
              </p>
              <a
                href="#"
                className="text-sm font-medium text-black hover:text-[#8447E9] transition duration-150"
              >
                <span className="relative inline-flex flex-col items-left">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="85"
                    height="3"
                    viewBox="0 0 85 3"
                    fill="none"
                  >
                    <path
                      d="M20.2685 2.9997C19.4766 3.00873 18.6966 2.81175 18.0077 2.42918C17.6925 2.23979 17.3892 2.03212 17.0991 1.80755C16.9642 1.70537 16.8252 1.60319 16.6643 1.50529C16.3516 1.24937 15.9568 1.10894 15.5493 1.10894C15.1415 1.10894 14.747 1.24914 14.434 1.50505C14.295 1.60295 14.1645 1.70513 14.0296 1.80731C13.8122 1.97341 13.5948 2.1395 13.3556 2.29277C12.603 2.75256 11.7342 2.99658 10.8472 2.99658C9.96018 2.99658 9.09122 2.75278 8.33859 2.29301C8.10375 2.13974 7.90384 1.97792 7.67335 1.81182C7.52997 1.70109 7.38198 1.59036 7.23859 1.48391C6.93339 1.25152 6.55807 1.12534 6.17132 1.12534C5.78484 1.12534 5.40925 1.25152 5.10405 1.48391C4.93883 1.59464 4.78672 1.71392 4.63023 1.83297C4.47375 1.95226 4.19548 2.16089 3.96499 2.31416C2.77351 3.02345 1.32564 3.18836 0 2.76564L0.343533 1.72251C1.36105 2.04591 2.47149 1.91997 3.3866 1.37748C3.59524 1.24536 3.78229 1.09638 3.97347 0.951667C4.16464 0.806957 4.317 0.687674 4.49945 0.564108C4.99413 0.204349 5.59435 0.00997542 6.21059 0.00997542C6.82658 0.00997542 7.42655 0.204349 7.92124 0.564108C8.08646 0.679115 8.24731 0.80268 8.40379 0.921726C8.56027 1.04101 8.78639 1.21542 8.99503 1.34754C9.56492 1.68948 10.2202 1.87031 10.8883 1.87031C11.5567 1.87031 12.212 1.68948 12.7819 1.34754C12.9949 1.21138 13.1863 1.06216 13.3775 0.921726C13.5687 0.781292 13.6645 0.700266 13.8123 0.593812C14.3174 0.208631 14.9394 0 15.5794 0C16.2197 0 16.8415 0.208869 17.3468 0.594049C17.499 0.700503 17.6426 0.811234 17.7816 0.917688C18.0368 1.11753 18.3039 1.30216 18.5815 1.47111C19.5199 1.97367 20.6422 2.02572 21.6248 1.61154C22.0598 1.39365 22.472 1.13392 22.8551 0.836679L23.1855 0.598107C23.6938 0.214349 24.3176 0.00595444 24.9595 0.00595444C25.6012 0.00595444 26.2249 0.214349 26.7332 0.598107L27.168 0.908915C27.4072 1.09212 27.6374 1.26226 27.8854 1.4198C28.4046 1.73774 29.0133 1.88696 29.6244 1.84585L29.6635 2.94008C28.8253 2.98475 27.9941 2.77184 27.2854 2.33128C26.9984 2.14808 26.7376 1.95227 26.4899 1.76503L26.0942 1.47133C25.7754 1.22611 25.3819 1.09256 24.9767 1.09256C24.5716 1.09256 24.1781 1.22587 23.8595 1.4711L23.5378 1.70111C23.0967 2.04186 22.622 2.33862 22.1205 2.58675C21.5416 2.85645 20.9092 2.99756 20.2685 2.9997Z"
                      fill="#BDB0EC"
                    />
                    <path
                      d="M47.9368 2.9997C47.1449 3.00873 46.3649 2.81175 45.6759 2.42918C45.3608 2.23979 45.0575 2.03212 44.7673 1.80755C44.6324 1.70537 44.4934 1.60319 44.3326 1.50529C44.0199 1.24937 43.6251 1.10894 43.2175 1.10894C42.8097 1.10894 42.4152 1.24914 42.1023 1.50505C41.9633 1.60295 41.8327 1.70513 41.6978 1.80731C41.4805 1.97341 41.2631 2.1395 41.0238 2.29277C40.2713 2.75256 39.4025 2.99658 38.5155 2.99658C37.6284 2.99658 36.7595 2.75278 36.0069 2.29301C35.772 2.13974 35.5721 1.97792 35.3416 1.81182C35.1982 1.70109 35.0502 1.59036 34.9069 1.48391C34.6016 1.25152 34.2263 1.12534 33.8396 1.12534C33.4531 1.12534 33.0775 1.25152 32.7723 1.48391C32.6071 1.59464 32.455 1.71392 32.2985 1.83297C32.142 1.95226 31.8637 2.16089 31.6333 2.31416C30.4418 3.02345 29.007 3.27813 27.6683 2.40396L27.8914 1.48391C29.007 1.96688 30.1398 1.91997 31.0549 1.37748C31.2635 1.24536 31.4506 1.09638 31.6417 0.951667C31.8329 0.806957 31.9853 0.687674 32.1677 0.564108C32.6624 0.204349 33.2626 0.00997542 33.8789 0.00997542C34.4948 0.00997542 35.0948 0.204349 35.5895 0.564108C35.7547 0.679115 35.9156 0.80268 36.0721 0.921726C36.2285 1.04101 36.4546 1.21542 36.6633 1.34754C37.2332 1.68948 37.8885 1.87031 38.5566 1.87031C39.225 1.87031 39.8802 1.68948 40.4502 1.34754C40.6632 1.21138 40.8546 1.06216 41.0458 0.921726C41.2369 0.781292 41.3328 0.700266 41.4805 0.593812C41.9856 0.208631 42.6077 0 43.2477 0C43.888 0 44.5097 0.208869 45.0151 0.594049C45.1672 0.700503 45.3108 0.811234 45.4499 0.917688C45.7051 1.11753 45.9722 1.30216 46.2497 1.47111C47.1881 1.97367 48.3105 2.02572 49.2931 1.61154C49.7281 1.39365 50.1403 1.13392 50.5234 0.836679L50.8538 0.598107C51.3621 0.214349 51.9858 0.00595444 52.6277 0.00595444C53.2694 0.00595444 53.8932 0.214349 54.4015 0.598107L54.8362 0.908915C55.0755 1.09212 55.3057 1.26226 55.5536 1.4198C56.0728 1.73774 56.6815 1.88696 57.2927 1.84585L57.3317 2.94008C56.4935 2.98475 55.6623 2.77184 54.9537 2.33128C54.6667 2.14808 54.4059 1.95227 54.1581 1.76503L53.7624 1.47133C53.4436 1.22611 53.0501 1.09256 52.645 1.09256C52.2398 1.09256 51.8463 1.22587 51.5278 1.4711L51.2061 1.70111C50.765 2.04186 50.2902 2.33862 49.7888 2.58675C49.2099 2.85645 48.5775 2.99756 47.9368 2.9997Z"
                      fill="#BDB0EC"
                    />
                    <path
                      d="M75.605 2.9997C74.8132 3.00873 74.0331 2.81175 73.3442 2.42918C73.029 2.23979 72.7258 2.03212 72.4356 1.80755C72.3007 1.70537 72.1617 1.60319 72.0008 1.50529C71.6881 1.24937 71.2934 1.10894 70.8858 1.10894C70.478 1.10894 70.0835 1.24914 69.7705 1.50505C69.6315 1.60295 69.501 1.70513 69.3661 1.80731C69.1487 1.97341 68.9313 2.1395 68.6921 2.29277C67.9395 2.75256 67.0708 2.99658 66.1837 2.99658C65.2967 2.99658 64.4277 2.75278 63.6751 2.29301C63.4403 2.13974 63.2404 1.97792 63.0099 1.81182C62.8665 1.70109 62.7185 1.59036 62.5751 1.48391C62.2699 1.25152 61.8946 1.12534 61.5078 1.12534C61.1214 1.12534 60.7458 1.25152 60.4406 1.48391C60.2754 1.59464 60.1232 1.71392 59.9668 1.83297C59.8103 1.95226 59.532 2.16089 59.3015 2.31416C58.11 3.02345 56.6753 3.27813 55.3365 2.40396L55.5597 1.48391C56.6753 1.96688 57.808 1.91997 58.7231 1.37748C58.9318 1.24536 59.1188 1.09638 59.31 0.951667C59.5012 0.806957 59.6535 0.687674 59.836 0.564108C60.3307 0.204349 60.9309 0.00997542 61.5471 0.00997542C62.1631 0.00997542 62.7631 0.204349 63.2578 0.564108C63.423 0.679115 63.5838 0.80268 63.7403 0.921726C63.8968 1.04101 64.1229 1.21542 64.3316 1.34754C64.9014 1.68948 65.5568 1.87031 66.2249 1.87031C66.8933 1.87031 67.5485 1.68948 68.1184 1.34754C68.3314 1.21138 68.5228 1.06216 68.714 0.921726C68.9052 0.781292 69.001 0.700266 69.1488 0.593812C69.6539 0.208631 70.2759 0 70.9159 0C71.5562 0 72.178 0.208869 72.6834 0.594049C72.8355 0.700503 72.9791 0.811234 73.1181 0.917688C73.3733 1.11753 73.6405 1.30216 73.918 1.47111C74.8564 1.97367 75.9788 2.02572 76.9613 1.61154C77.3963 1.39365 77.8085 1.13392 78.1916 0.836679L78.522 0.598107C79.0303 0.214349 79.6541 0.00595444 80.296 0.00595444C80.9377 0.00595444 81.5614 0.214349 82.0697 0.598107L82.5045 0.908915C82.7437 1.09212 82.9739 1.26226 83.2219 1.4198C83.7411 1.73774 84.3498 1.88696 84.9609 1.84585L85 2.94008C84.1618 2.98475 83.3306 2.77184 82.6219 2.33128C82.3349 2.14808 82.0741 1.95227 81.8264 1.76503L81.4307 1.47133C81.1119 1.22611 80.7184 1.09256 80.3132 1.09256C79.9081 1.09256 79.5146 1.22587 79.196 1.4711L78.8743 1.70111C78.4333 2.04186 77.9585 2.33862 77.457 2.58675C76.8782 2.85645 76.2458 2.99756 75.605 2.9997Z"
                      fill="#BDB0EC"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a
              href="#"
              className="group inline-flex items-center justify-center 
                              bg-transparent border border-[#8447E9] hover:bg-purple-700 
                              text-[#8447E9] hover:text-white font-medium 
                              px-4 py-2 
                              shadow-lg transition duration-200 
                              text-md"
            >
              Contact us
              <svg
                className="ml-2"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
              >
                <path
                  className="group-hover:fill-white"
                  d="M0.833338 4.16666H7.15834L4.40834 1.42499C4.25142 1.26807 4.16326 1.05524 4.16326 0.833325C4.16326 0.611407 4.25142 0.398578 4.40834 0.241658C4.56526 0.0847387 4.77809 -0.00341797 5 -0.00341797C5.22192 -0.00341797 5.43475 0.0847387 5.59167 0.241658L9.75834 4.40833C9.83421 4.48758 9.89368 4.58103 9.93334 4.68333C10.0167 4.88621 10.0167 5.11377 9.93334 5.31666C9.89368 5.41895 9.83421 5.51241 9.75834 5.59166L5.59167 9.75832C5.5142 9.83643 5.42203 9.89843 5.32049 9.94074C5.21894 9.98304 5.11001 10.0048 5 10.0048C4.88999 10.0048 4.78107 9.98304 4.67952 9.94074C4.57797 9.89843 4.48581 9.83643 4.40834 9.75832C4.33023 9.68086 4.26824 9.58869 4.22593 9.48714C4.18362 9.38559 4.16184 9.27667 4.16184 9.16666C4.16184 9.05665 4.18362 8.94773 4.22593 8.84618C4.26824 8.74463 4.33023 8.65246 4.40834 8.57499L7.15834 5.83333H0.833338C0.612324 5.83333 0.400362 5.74553 0.244082 5.58925C0.0878015 5.43297 4.76857e-06 5.22101 4.76857e-06 4.99999C4.76857e-06 4.77898 0.0878015 4.56702 0.244082 4.41074C0.400362 4.25446 0.612324 4.16666 0.833338 4.16666Z"
                  fill="#8447E9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* Services End */}

      {/* Project Start */}
      <div className="project bg-[#8447E9] py-[50px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#F5F5F5]">
              PROJECTS
            </p>
            <h1 className="text-2xl sm:text-3xl font-semibold text-white mt-2 max-w-2xl leading-tight">
              We guide game-changing companies, across platforms & places,
              through agile design & digital experience. We make waves
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <div className="relative overflow-hidden group">
              <div className="w-full overflow-hidden">
                <img
                  className="object-cover w-full aspect-4/3"
                  src={project1}
                  alt=""
                />
              </div>
              <div className="items-center py-3 sm:py-4 flex justify-between bg-portfolio-purple">
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white uppercase">
                  BLVCK
                </h2>
                <p className="text-xs font-medium tracking-widest text-[#BDB0EC] uppercase">
                  Branding
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden group">
              <div className="w-full overflow-hidden">
                <img
                  className="object-cover w-full aspect-4/3"
                  src={project2}
                  alt=""
                />
              </div>
              <div className="items-center py-3 sm:py-4 flex justify-between bg-portfolio-purple">
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white uppercase">
                  CREAM
                </h2>
                <p className="text-xs font-medium tracking-widest text-[#BDB0EC] uppercase">
                  Branding
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden group">
              <div className="w-full overflow-hidden">
                <img
                  className="object-cover w-full aspect-4/3"
                  src={project3}
                  alt=""
                />
              </div>
              <div className="items-center py-3 sm:py-4 flex justify-between bg-portfolio-purple">
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white uppercase">
                  FRISDI
                </h2>
                <p className="text-xs font-medium tracking-widest text-[#BDB0EC] uppercase">
                  Branding
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden group">
              <div className="w-full overflow-hidden">
                <img
                  className="object-cover w-full aspect-4/3"
                  src={project4}
                  alt=""
                />
              </div>
              <div className="items-center py-3 sm:py-4 flex justify-between bg-portfolio-purple">
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white uppercase">
                  APOLLO
                </h2>
                <p className="text-xs font-medium tracking-widest text-[#BDB0EC] uppercase">
                  Branding
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-left">
            <a
              href="#"
              className="group inline-flex items-center justify-center 
                              bg-transparent border border-white hover:border-transparent hover:bg-black
                              text-white font-medium 
                              px-4 py-2 
                              transition duration-200 
                              text-md"
            >
              Contact us
              <svg
                className="ml-2"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
              >
                <path
                  d="M0.833338 4.16666H7.15834L4.40834 1.42499C4.25142 1.26807 4.16326 1.05524 4.16326 0.833325C4.16326 0.611407 4.25142 0.398578 4.40834 0.241658C4.56526 0.0847387 4.77809 -0.00341797 5 -0.00341797C5.22192 -0.00341797 5.43475 0.0847387 5.59167 0.241658L9.75834 4.40833C9.83421 4.48758 9.89368 4.58103 9.93334 4.68333C10.0167 4.88621 10.0167 5.11377 9.93334 5.31666C9.89368 5.41895 9.83421 5.51241 9.75834 5.59166L5.59167 9.75832C5.5142 9.83643 5.42203 9.89843 5.32049 9.94074C5.21894 9.98304 5.11001 10.0048 5 10.0048C4.88999 10.0048 4.78107 9.98304 4.67952 9.94074C4.57797 9.89843 4.48581 9.83643 4.40834 9.75832C4.33023 9.68086 4.26824 9.58869 4.22593 9.48714C4.18362 9.38559 4.16184 9.27667 4.16184 9.16666C4.16184 9.05665 4.18362 8.94773 4.22593 8.84618C4.26824 8.74463 4.33023 8.65246 4.40834 8.57499L7.15834 5.83333H0.833338C0.612324 5.83333 0.400362 5.74553 0.244082 5.58925C0.0878015 5.43297 4.76857e-06 5.22101 4.76857e-06 4.99999C4.76857e-06 4.77898 0.0878015 4.56702 0.244082 4.41074C0.400362 4.25446 0.612324 4.16666 0.833338 4.16666Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* Project End */}
 
      {/* Testimonials Start */}
      <div className="Testimonials bg-white pt-[50px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full lg:max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold text-center lg:text-left text-black mt-2 max-w-2xl leading-tight">
                What our great customers say
              </h2>
            </div>
            <div className="px-6 w-full lg:max-w-4xl bg-[#E1DBF6] py-8 md:py-12 mx-auto">
              <div className="flex flex-col md:flex-row gap-3 justify-center items-center text-center lg:text-left overflow-hidden">
                <div className="profile">
                  <img
                    className="w-[180px] h-[180px] rounded-full"
                    src={profile}
                    alt=""
                  />
                </div>

                <div className="flex flex-col pr-4 sm:pr-8">
                  <p className="text-lg sm:text-xl font-normal text-black leading-relaxed mb-6 max-w-xl">
                    Waves demonstrates an excellent understanding of user needs
                    and all of their designs are creative and elegant in their
                    simplicity.
                  </p>

                  <p className="text-base font-semibold text-[#8447E9]">
                    Jerome Bell
                  </p>
                  <p className="text-sm text-black">
                    President of Sales |{" "}
                    <span className="text-black">Stanford Ltd</span>
                  </p>
                </div>

                <div className="wavy-border h-full hidden sm:block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="220"
                    viewBox="0 0 15 420"
                    fill="none"
                  >
                    <path
                      d="M0.00148335 100.15C-0.0434527 96.2375 0.936829 92.3833 2.84066 88.979C3.78312 87.4218 4.8166 85.9233 5.93415 84.4896C6.44263 83.823 6.95111 83.1361 7.43831 82.3413C8.71185 80.7961 9.41071 78.8456 9.41071 76.8318C9.41071 74.8166 8.71303 72.8674 7.43949 71.321C6.95229 70.6341 6.44382 69.9892 5.93534 69.3226C5.10876 68.2485 4.28222 67.1744 3.51948 65.9923C1.23135 62.2737 0.0170482 57.9809 0.0170484 53.598C0.0170486 49.215 1.23029 44.9213 3.5183 41.2025C4.28101 40.0421 5.0863 39.0542 5.91288 37.9154C6.46392 37.2069 7.01496 36.4757 7.54472 35.7672C8.7012 34.2591 9.3291 32.4046 9.3291 30.4936C9.3291 28.5839 8.7012 26.7281 7.54472 25.22C6.99368 24.4036 6.40007 23.652 5.80762 22.8788C5.21402 22.1056 4.17578 20.7306 3.41305 19.5917C-0.116664 13.7044 -0.937333 6.55021 1.1663 -6.01598e-07L6.35733 1.69746C4.74795 6.7252 5.37467 12.2121 8.07433 16.7338C8.73181 17.7647 9.47323 18.689 10.1934 19.6336C10.9135 20.5782 11.5071 21.3311 12.122 22.2326C13.9123 24.6769 14.8796 27.6427 14.8796 30.6876C14.8796 33.7313 13.9123 36.6959 12.122 39.1402C11.5497 39.9566 10.9348 40.7514 10.3424 41.5246C9.74876 42.2978 8.8808 43.4151 8.22333 44.446C6.52171 47.262 5.62181 50.5 5.62181 53.8012C5.62181 57.1039 6.52171 60.3416 8.22333 63.1576C8.9009 64.2101 9.6435 65.1559 10.3424 66.1006C11.0412 67.0452 11.4444 67.5187 11.9742 68.2488C13.891 70.7447 14.9293 73.8182 14.9293 76.9807C14.9293 80.1444 13.8898 83.2166 11.973 85.7138C11.4433 86.4654 10.8922 87.1751 10.3625 87.862C9.36797 89.1231 8.44918 90.443 7.60841 91.8144C5.10743 96.4512 4.84845 101.997 6.90955 106.852C7.99389 109.001 9.28638 111.038 10.7656 112.931L11.9528 114.564C13.8626 117.075 14.8996 120.157 14.8996 123.329C14.8996 126.5 13.8626 129.582 11.9528 132.094L10.4061 134.242C9.49441 135.424 8.64773 136.561 7.86375 137.787C6.28156 140.352 5.53895 143.36 5.74353 146.379L0.29821 146.572C0.0758996 142.431 1.13541 138.324 3.32783 134.822C4.23953 133.404 5.21392 132.115 6.14572 130.891L7.60729 128.936C8.82761 127.361 9.4922 125.416 9.4922 123.414C9.4922 121.412 8.82882 119.468 7.60847 117.894L6.46382 116.305C4.76811 114.125 3.29132 111.779 2.05653 109.301C0.71439 106.441 0.0121386 103.316 0.00148335 100.15Z"
                      fill="#8447E9"
                      fill-opacity="0.75"
                    />
                    <path
                      d="M0.00147738 236.864C-0.0434586 232.951 0.936823 229.097 2.84066 225.693C3.78312 224.136 4.8166 222.637 5.93415 221.203C6.44263 220.537 6.9511 219.85 7.4383 219.055C8.71184 217.51 9.4107 215.559 9.4107 213.546C9.4107 211.53 8.71303 209.581 7.43948 208.035C6.95229 207.348 6.44381 206.703 5.93533 206.036C5.10876 204.962 4.28221 203.888 3.51948 202.706C1.23134 198.987 0.0170422 194.695 0.0170424 190.312C0.0170426 185.929 1.23028 181.635 3.5183 177.916C4.281 176.756 5.08629 175.768 5.91287 174.629C6.46391 173.921 7.01495 173.189 7.54471 172.481C8.70119 170.973 9.32909 169.118 9.32909 167.207C9.32909 165.298 8.70119 163.442 7.54471 161.934C6.99367 161.117 6.40007 160.366 5.80761 159.593C5.21401 158.819 4.17577 157.444 3.41304 156.305C-0.11667 150.418 -1.38408 143.329 2.96614 136.714L7.54471 137.816C5.14125 143.329 5.37467 148.926 8.07432 153.448C8.7318 154.478 9.47322 155.403 10.1934 156.347C10.9135 157.292 11.5071 158.045 12.122 158.946C13.9123 161.391 14.8796 164.356 14.8796 167.401C14.8796 170.445 13.9123 173.41 12.122 175.854C11.5497 176.67 10.9348 177.465 10.3424 178.238C9.74875 179.012 8.8808 180.129 8.22332 181.16C6.5217 183.976 5.6218 187.214 5.6218 190.515C5.6218 193.818 6.5217 197.055 8.22332 199.871C8.9009 200.924 9.6435 201.87 10.3424 202.814C11.0412 203.759 11.4444 204.232 11.9742 204.963C13.891 207.458 14.9293 210.532 14.9293 213.694C14.9293 216.858 13.8898 219.93 11.973 222.428C11.4433 223.179 10.8922 223.889 10.3625 224.576C9.36796 225.837 8.44917 227.157 7.6084 228.528C5.10742 233.165 4.84845 238.711 6.90954 243.566C7.99388 245.715 9.28638 247.752 10.7656 249.645L11.9528 251.278C13.8626 253.789 14.8996 256.871 14.8996 260.043C14.8996 263.214 13.8626 266.296 11.9528 268.807L10.4061 270.956C9.49441 272.138 8.64773 273.275 7.86374 274.5C6.28155 277.066 5.53895 280.073 5.74352 283.093L0.298204 283.286C0.0758936 279.144 1.1354 275.037 3.32782 271.536C4.23952 270.118 5.21392 268.829 6.14572 267.605L7.60728 265.65C8.8276 264.074 9.49219 262.13 9.49219 260.128C9.49219 258.126 8.82882 256.182 7.60846 254.608L6.46382 253.018C4.7681 250.839 3.29132 248.493 2.05652 246.015C0.714384 243.155 0.0121326 240.03 0.00147738 236.864Z"
                      fill="#8447E9"
                      fill-opacity="0.75"
                    />
                    <path
                      d="M0.0014714 373.578C-0.0434646 369.665 0.936817 365.811 2.84065 362.407C3.78311 360.849 4.81659 359.351 5.93414 357.917C6.44262 357.251 6.9511 356.564 7.4383 355.769C8.71184 354.224 9.4107 352.273 9.4107 350.259C9.4107 348.244 8.71302 346.295 7.43948 344.749C6.95228 344.062 6.4438 343.417 5.93533 342.75C5.10875 341.676 4.2822 340.602 3.51947 339.42C1.23134 335.701 0.0170363 331.408 0.0170364 327.025C0.0170366 322.643 1.23027 318.349 3.51829 314.63C4.28099 313.47 5.08629 312.482 5.91286 311.343C6.46391 310.634 7.01494 309.903 7.5447 309.195C8.70118 307.687 9.32909 305.832 9.32909 303.921C9.32909 302.011 8.70118 300.156 7.5447 298.648C6.99366 297.831 6.40006 297.079 5.80761 296.306C5.21401 295.533 4.17577 294.158 3.41303 293.019C-0.116676 287.132 -1.38409 280.043 2.96614 273.428L7.54471 274.53C5.14125 280.043 5.37466 285.64 8.07432 290.161C8.73179 291.192 9.47321 292.116 10.1934 293.061C10.9135 294.006 11.5071 294.759 12.122 295.66C13.9123 298.104 14.8796 301.07 14.8796 304.115C14.8796 307.159 13.9123 310.123 12.122 312.568C11.5497 313.384 10.9348 314.179 10.3424 314.952C9.74875 315.725 8.88079 316.843 8.22331 317.874C6.5217 320.69 5.6218 323.927 5.6218 327.229C5.6218 330.531 6.5217 333.769 8.22331 336.585C8.90089 337.638 9.64349 338.583 10.3424 339.528C11.0412 340.473 11.4444 340.946 11.9742 341.676C13.891 344.172 14.9292 347.246 14.9292 350.408C14.9292 353.572 13.8898 356.644 11.973 359.141C11.4432 359.893 10.8922 360.603 10.3624 361.29C9.36795 362.551 8.44917 363.871 7.60839 365.242C5.10742 369.879 4.84844 375.424 6.90954 380.279C7.99388 382.429 9.28637 384.466 10.7656 386.359L11.9528 387.991C13.8626 390.503 14.8996 393.585 14.8996 396.757C14.8996 399.927 13.8626 403.01 11.9528 405.521L10.4061 407.669C9.4944 408.851 8.64772 409.989 7.86374 411.214C6.28154 413.78 5.53894 416.787 5.74352 419.807L0.298198 420C0.0758876 415.858 1.1354 411.751 3.32782 408.25C4.23952 406.831 5.21391 405.543 6.14571 404.319L7.60728 402.363C8.8276 400.788 9.49219 398.844 9.49219 396.842C9.49219 394.84 8.82881 392.896 7.60846 391.322L6.46381 389.732C4.7681 387.553 3.29131 385.207 2.05652 382.729C0.714378 379.869 0.0121267 376.744 0.0014714 373.578Z"
                      fill="#8447E9"
                      fill-opacity="0.75"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials End */}

      {/* News Start */}
      <div className="News bg-white pt-[50px] pb-[90px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mt-2 max-w-2xl leading-tight">
              News & Insights
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="relative overflow-hidden group">
              <div className="w-full overflow-hidden">
                <img
                  className="object-cover w-full aspect-4/3"
                  src={project1}
                  alt=""
                />
              </div>
              <div className="items-center pt-3 sm:pt-4 flex justify-start bg-portfolio-purple">
                <p className="text-xs font-semibold tracking-widest text-[#8447E9] uppercase">
                  Business
                </p>
                <span className="h-[16px] mx-2 w-[1px] bg-[#8447E9]"></span>
                <p className="text-xs font-semibold tracking-widest text-[#8447E9] uppercase">
                  April 25, 2022
                </p>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-black mt-2 max-w-2xl leading-tight">
                Twitter board meets Musk to discuss bid - Reports
              </h3>
            </div>

            <div className="relative overflow-hidden group">
              <div className="w-full overflow-hidden">
                <img
                  className="object-cover w-full aspect-4/3"
                  src={project2}
                  alt=""
                />
              </div>
              <div className="items-center pt-3 sm:pt-4 flex justify-start bg-portfolio-purple">
                <p className="text-xs font-semibold tracking-widest text-[#8447E9] uppercase">
                  Technology
                </p>
                <span className="h-[16px] mx-2 w-[1px] bg-[#8447E9]"></span>
                <p className="text-xs font-semibold tracking-widest text-[#8447E9] uppercase">
                  June 10, 2022
                </p>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-black mt-2 max-w-2xl leading-tight">
                Actors launch campaign against AI 'show stealers
              </h3>
            </div>

            <div className="relative overflow-hidden group">
              <div className="w-full overflow-hidden">
                <img
                  className="object-cover w-full aspect-4/3"
                  src={project3}
                  alt=""
                />
              </div>
              <div className="items-center pt-3 sm:pt-4 flex justify-start bg-portfolio-purple">
                <p className="text-xs font-semibold tracking-widest text-[#8447E9] uppercase">
                  Science
                </p>
                <span className="h-[16px] mx-2 w-[1px] bg-[#8447E9]"></span>
                <p className="text-xs font-semibold tracking-widest text-[#8447E9] uppercase">
                  May 10, 2022
                </p>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-black mt-2 max-w-2xl leading-tight">
                OneWeb: UK satellite firm does deal to use Indian rockets
              </h3>
            </div>
          </div>

          <div className="mt-12 text-left">
            <a
              href="#"
              className="group inline-flex items-center justify-center 
                              bg-transparent border border-[#8447E9] hover:bg-purple-700 
                              text-[#8447E9] hover:text-white font-medium 
                              px-4 py-2 
                              shadow-lg transition duration-200 
                              text-md"
            >
              Contact us
              <svg
                className="ml-2"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
              >
                <path
                  className="group-hover:fill-white"
                  d="M0.833338 4.16666H7.15834L4.40834 1.42499C4.25142 1.26807 4.16326 1.05524 4.16326 0.833325C4.16326 0.611407 4.25142 0.398578 4.40834 0.241658C4.56526 0.0847387 4.77809 -0.00341797 5 -0.00341797C5.22192 -0.00341797 5.43475 0.0847387 5.59167 0.241658L9.75834 4.40833C9.83421 4.48758 9.89368 4.58103 9.93334 4.68333C10.0167 4.88621 10.0167 5.11377 9.93334 5.31666C9.89368 5.41895 9.83421 5.51241 9.75834 5.59166L5.59167 9.75832C5.5142 9.83643 5.42203 9.89843 5.32049 9.94074C5.21894 9.98304 5.11001 10.0048 5 10.0048C4.88999 10.0048 4.78107 9.98304 4.67952 9.94074C4.57797 9.89843 4.48581 9.83643 4.40834 9.75832C4.33023 9.68086 4.26824 9.58869 4.22593 9.48714C4.18362 9.38559 4.16184 9.27667 4.16184 9.16666C4.16184 9.05665 4.18362 8.94773 4.22593 8.84618C4.26824 8.74463 4.33023 8.65246 4.40834 8.57499L7.15834 5.83333H0.833338C0.612324 5.83333 0.400362 5.74553 0.244082 5.58925C0.0878015 5.43297 4.76857e-06 5.22101 4.76857e-06 4.99999C4.76857e-06 4.77898 0.0878015 4.56702 0.244082 4.41074C0.400362 4.25446 0.612324 4.16666 0.833338 4.16666Z"
                  fill="#8447E9"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* News End */}

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </div>
  );
};

export default Home;
