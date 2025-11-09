'use client'
import React from 'react'
import { Timeline } from "@/components/ui/timeline";
import { IconBrandLinkedin, IconBrandGithub, IconBrandFacebook, IconBrandInstagram, IconBrandWhatsapp } from '@tabler/icons-react';
import {motion} from "motion/react"

const About = () => {
 const data = [
    {
      key: "get-to-know",
      title: "Get to know me!",
      content: (
        <div className='pb-28'>
          <motion.p 
          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:.8}}
          className="mb-8 text-lg font-normal text-slate-200 md:text-base drop-shadow-lg leading-relaxed bg-linear-to-r from-slate-300 via-cyan-200 to-slate-300 bg-clip-text ">
I'm a passionate developer who thrives on creating accessible, pixel-perfect user interfaces that seamlessly blend thoughtful design with robust engineering. My expertise lies at the intersection of design and development, where I craft experiences that not only captivate visually but are also meticulously built for optimal performance and usability. With a keen eye for detail and a commitment to innovation, I transform ideas into digital realities that delight users and drive results. </motion.p>
          <div className="mb-8">
            <motion.div 
            initial={{opacity:0,x:-60}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:.8}}
            className="flex space-x-4">
              <a key="linkedin" href="https://linkedin.com/in/beshoi-salama" target="_blank" rel="noopener noreferrer" className="p-2 md:p-3 bg-linear-to-br from-slate-800 to-slate-900 hover:bg-cyan-400 text-cyan-300 hover:text-slate-900 rounded-full border border-cyan-500/20 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                <IconBrandLinkedin className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a key="github" href="https://github.com/BOSHASALAMA" target="_blank" rel="noopener noreferrer" className="p-2 md:p-3 bg-linear-to-br from-slate-800 to-slate-900 hover:bg-cyan-400 text-cyan-300 hover:text-slate-900 rounded-full border border-cyan-500/20 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                <IconBrandGithub className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a key="facebook" href="https://facebook.com/share/1A3iCR589A" target="_blank" rel="noopener noreferrer" className="p-2 md:p-3 bg-linear-to-br from-slate-800 to-slate-900 hover:bg-cyan-400 text-cyan-300 hover:text-slate-900 rounded-full border border-cyan-500/20 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                <IconBrandFacebook className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a key="instagram" href="https://instagram.com/beshoi_salama" target="_blank" rel="noopener noreferrer" className="p-2 md:p-3 bg-linear-to-br from-slate-800 to-slate-900 hover:bg-cyan-400 text-cyan-300 hover:text-slate-900 rounded-full border border-cyan-500/20 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                <IconBrandInstagram className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a key="whatsapp" href="https://wa.me/01225587869" target="_blank" rel="noopener noreferrer" className="p-2 md:p-3 bg-linear-to-br from-slate-800 to-slate-900 hover:bg-cyan-400 text-cyan-300 hover:text-slate-900 rounded-full border border-cyan-500/20 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                <IconBrandWhatsapp className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </motion.div>
          </div>
          <div className="grid grid-cols-2 gap-4">

          </div>
        </div>
      ),
    },
    {
      key: "tooling",
      title: "TOOLING",
      content: (
        <div>
          <motion.p 
          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:.8}}
          className="mb-8 text-lg font-normal text-neutral-300 md:text-sm dark:text-neutral-200 drop-shadow-lg">
            Here are the technologies and tools I work with to bring ideas to life:
          </motion.p>
         <motion.div 
         initial={{opacity:0,x:-60}}
         whileInView={{opacity:1,x:0}}
         transition={{duration:.8}}
         className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-5 justify-items-center">
      <div key="html5" className="flex flex-row items-center justify-center gap-3 w-36 p-3 bg-slate-800 rounded-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 50 50" fill='#00d3f3'>
        <path d="M 45.273438 2.324219 C 45.085938 2.117188 44.816406 2 44.535156 2 L 5.464844 2 C 5.183594 2 4.914063 2.117188 4.726563 2.324219 C 4.535156 2.53125 4.441406 2.808594 4.46875 3.089844 L 7.988281 42.515625 C 8.023438 42.929688 8.3125 43.273438 8.710938 43.390625 L 24.722656 47.960938 C 24.808594 47.988281 24.902344 48 24.996094 48 C 25.089844 48 25.179688 47.988281 25.269531 47.960938 L 41.292969 43.390625 C 41.691406 43.273438 41.976563 42.929688 42.015625 42.515625 L 45.53125 3.089844 C 45.558594 2.808594 45.464844 2.53125 45.273438 2.324219 Z M 36.847656 15.917969 L 18.035156 15.917969 L 18.484375 21.007813 L 36.394531 21.007813 L 35.050781 36.050781 L 24.992188 39.089844 L 24.894531 39.058594 L 14.953125 36.046875 L 14.410156 29.917969 L 19.28125 29.917969 L 19.492188 32.296875 L 25.050781 33.460938 L 30.507813 32.296875 L 31.089844 25.859375 L 14.046875 25.859375 L 12.722656 11.054688 L 37.28125 11.054688 Z"></path>
        </svg>
        <span className="text-sm font-medium text-neutral-200">HTML5</span>
           </div>
        <div key="css3" className="flex flex-row items-center justify-center gap-3 w-36 p-3 bg-slate-800 rounded-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 50 50" fill='#00d3f3'>
        <path fillRule="evenodd" d="M 42 6 L 39 40 L 25 44 L 11 40 L 8 6 Z M 16.800781 28 L 20.800781 28 L 20.898438 30.5 L 25 31.898438 L 29.101563 30.5 L 29.398438 26 L 20.601563 26 L 20.398438 22 L 29.601563 22 L 29.898438 18 L 16.101563 18 L 15.800781 14 L 34.101563 14 L 33.601563 22 L 32.898438 33.5 L 25 36.101563 L 17.101563 33.5 Z"></path>
        </svg><span className="text-sm font-medium text-neutral-200">CSS3</span>
        </div>
        <div key="javascript" className="flex flex-row items-center justify-center gap-3 w-36 p-3 bg-slate-800 rounded-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 50 50" fill='#00d3f3'>
        <path d="M 43.335938 4 L 6.667969 4 C 5.195313 4 4 5.195313 4 6.667969 L 4 43.332031 C 4 44.804688 5.195313 46 6.667969 46 L 43.332031 46 C 44.804688 46 46 44.804688 46 43.335938 L 46 6.667969 C 46 5.195313 44.804688 4 43.335938 4 Z M 27 36.183594 C 27 40.179688 24.65625 42 21.234375 42 C 18.140625 42 15.910156 39.925781 15 38 L 18.144531 36.097656 C 18.75 37.171875 19.671875 38 21 38 C 22.269531 38 23 37.503906 23 35.574219 L 23 23 L 27 23 Z M 35.675781 42 C 32.132813 42 30.121094 40.214844 29 38 L 32 36 C 32.816406 37.335938 33.707031 38.613281 35.589844 38.613281 C 37.171875 38.613281 38 37.824219 38 36.730469 C 38 35.425781 37.140625 34.960938 35.402344 34.199219 L 34.449219 33.789063 C 31.695313 32.617188 29.863281 31.148438 29.863281 28.039063 C 29.863281 25.179688 32.046875 23 35.453125 23 C 37.878906 23 39.621094 23.84375 40.878906 26.054688 L 37.910156 27.964844 C 37.253906 26.789063 36.550781 26.328125 35.453125 26.328125 C 34.335938 26.328125 33.628906 27.039063 33.628906 27.964844 C 33.628906 29.109375 34.335938 29.570313 35.972656 30.28125 L 36.925781 30.691406 C 40.171875 32.078125 42 33.496094 42 36.683594 C 42 40.117188 39.300781 42 35.675781 42 Z"></path>
        </svg>
        <span className="text-xs font-medium text-neutral-200">JavaScript</span>
        </div>
        <div key="bootstrap" className="flex flex-row items-center justify-center gap-3 w-36 p-3 bg-slate-800 rounded-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 48 48">
        <path fill='#00d3f3' d="M7.373,11.443C7.293,9.132,9.094,7,11.529,7h24.946c2.435,0,4.236,2.132,4.155,4.443	c-0.077,2.221,0.023,5.097,0.747,7.443c0.726,2.353,1.951,3.84,3.957,4.031v2.167c-2.006,0.191-3.23,1.678-3.957,4.031	c-0.724,2.345-0.824,5.222-0.747,7.443C40.71,38.868,38.909,41,36.475,41H11.529c-2.434,0-4.236-2.132-4.155-4.443	c0.077-2.221-0.023-5.097-0.747-7.443c-0.726-2.353-1.954-3.84-3.96-4.031v-2.167c2.006-0.191,3.233-1.678,3.96-4.031	C7.35,16.54,7.451,13.664,7.373,11.443z"></path><path fill="#fff" d="M27.073,23.464v-0.028c1.853-0.32,3.299-2.057,3.299-3.97c0-1.352-0.52-2.498-1.504-3.312	c-0.981-0.812-2.357-1.241-3.981-1.241H17.45V33.08h7.475c1.942,0,3.555-0.474,4.663-1.372c1.109-0.899,1.696-2.207,1.696-3.783	C31.283,25.544,29.593,23.756,27.073,23.464z M23.59,22.608h-3.181V17.29h3.784c2.076,0,3.219,0.911,3.219,2.565	C27.413,21.63,26.055,22.608,23.59,22.608z M20.409,24.834h3.759c2.716,0,4.092,0.981,4.092,2.916c0,1.932-1.357,2.953-3.925,2.953	h-3.926V24.834z"></path>
        </svg>
        <span className="text-xs font-medium text-neutral-200">Bootstrap</span>
        </div>
        <div key="react" className="flex flex-row items-center justify-center gap-3 w-36 p-3 bg-slate-800 rounded-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
        <svg fill='#00d3f3' className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 48 48">
            <path d="M 34.554688 3.984375 C 33.775003 3.9581582 32.958884 4.0940926 32.140625 4.359375 C 30.504109 4.889941 28.789203 5.9238848 27.029297 7.3554688 C 26.339589 7.9165071 25.643623 8.5578288 24.945312 9.2382812 C 24.262398 8.5751039 23.580733 7.9509974 22.90625 7.4023438 C 21.147758 5.9719089 19.4375 4.9375672 17.804688 4.4082031 C 16.171878 3.8788386 14.547223 3.8624356 13.212891 4.6328125 C 11.878558 5.4031893 11.080619 6.8173558 10.722656 8.4960938 C 10.364693 10.174832 10.404125 12.173992 10.763672 14.412109 C 10.888559 15.189511 11.066671 16.005078 11.269531 16.835938 C 10.507095 17.067004 9.7666767 17.309955 9.0800781 17.578125 C 7.0079817 18.387438 5.2934468 19.355663 4.0449219 20.507812 C 2.7963969 21.659962 1.9902344 23.058304 1.9902344 24.59375 C 1.9902344 26.129196 2.7963969 27.525585 4.0449219 28.677734 C 5.2934468 29.829884 7.0079817 30.800062 9.0800781 31.609375 C 9.8142516 31.896126 10.609118 32.154326 11.429688 32.398438 C 11.134531 33.501278 10.895394 34.571467 10.732422 35.585938 C 10.372587 37.825853 10.334588 39.825265 10.693359 41.507812 C 11.052134 43.19036 11.850478 44.612534 13.191406 45.386719 C 14.532336 46.160905 16.164264 46.141894 17.800781 45.611328 C 19.437297 45.080762 21.15025 44.048772 22.910156 42.617188 C 23.593512 42.061316 24.284757 41.427206 24.976562 40.753906 C 25.671996 41.431263 26.366006 42.068338 27.052734 42.626953 C 28.811227 44.057387 30.523438 45.089776 32.15625 45.619141 C 33.789061 46.148505 35.413715 46.164908 36.748047 45.394531 C 38.082379 44.624154 38.878366 43.209988 39.236328 41.53125 C 39.59429 39.852512 39.554857 37.855304 39.195312 35.617188 C 39.031899 34.599965 38.792614 33.526227 38.496094 32.419922 C 39.343769 32.169866 40.163744 31.904721 40.919922 31.609375 C 42.992018 30.800062 44.706553 29.829884 45.955078 28.677734 C 47.203603 27.525585 48.009766 26.129196 48.009766 24.59375 C 48.009766 23.058304 47.203603 21.659963 45.955078 20.507812 C 44.706553 19.355663 42.992018 18.387438 40.919922 17.578125 C 40.22347 17.306107 39.471688 17.059992 38.697266 16.826172 C 38.901775 15.990221 39.083345 15.168805 39.208984 14.386719 C 39.568819 12.146804 39.606825 10.145439 39.248047 8.4628906 C 38.889279 6.7803434 38.088976 5.3601244 36.748047 4.5859375 C 36.077582 4.1988452 35.334372 4.0105918 34.554688 3.984375 z M 34.462891 6.0195312 C 34.952154 6.03291 35.369535 6.1493386 35.726562 6.3554688 C 36.440618 6.7677287 36.968419 7.5700924 37.25 8.890625 C 37.531581 10.211156 37.521848 11.99533 37.189453 14.064453 C 37.075647 14.772878 36.910402 15.52369 36.722656 16.292969 C 34.677151 15.800695 32.435744 15.435401 30.046875 15.220703 C 28.847638 13.559329 27.615404 12.045781 26.373047 10.703125 C 27.030182 10.061662 27.683063 9.4617259 28.320312 8.9433594 C 29.946026 7.6209332 31.485126 6.7210962 32.769531 6.3046875 C 33.411734 6.0964824 33.973627 6.0061525 34.462891 6.0195312 z M 15.486328 6.0253906 C 15.978419 6.0116533 16.541491 6.1017415 17.185547 6.3105469 C 18.473657 6.7281576 20.015452 7.6275969 21.642578 8.9511719 C 22.267037 9.4591336 22.905298 10.047651 23.548828 10.673828 C 22.297283 12.027473 21.054862 13.55414 19.847656 15.230469 C 17.468889 15.449074 15.236606 15.81635 13.201172 16.310547 C 13.014826 15.545537 12.849558 14.798586 12.736328 14.09375 C 12.403642 12.02283 12.39534 10.238404 12.677734 8.9140625 C 12.960128 7.5897208 13.492238 6.7813032 14.212891 6.3652344 C 14.573216 6.1572002 14.994237 6.0391279 15.486328 6.0253906 z M 24.976562 12.142578 C 25.791172 13.029071 26.605956 13.99916 27.414062 15.042969 C 26.620033 15.009861 25.816288 14.990234 25 14.990234 C 24.167457 14.990234 23.34841 15.010498 22.539062 15.044922 C 23.347352 14.000306 24.16175 13.029737 24.976562 12.142578 z M 25 17.009766 C 26.359894 17.009766 27.685348 17.065647 28.974609 17.160156 C 29.86173 18.434311 30.728648 19.786055 31.554688 21.216797 C 32.280504 22.473948 32.937328 23.729163 33.535156 24.96875 C 32.931017 26.224782 32.263184 27.496972 31.527344 28.771484 C 30.879609 29.893393 30.20319 30.958949 29.515625 31.986328 C 28.059313 32.10805 26.550303 32.175781 25 32.175781 C 23.412375 32.175781 21.869462 32.104031 20.380859 31.976562 C 19.704742 30.963955 19.039735 29.91454 18.402344 28.810547 C 17.668186 27.538949 17.003577 26.269079 16.400391 25.015625 C 17.006106 23.755092 17.673701 22.47818 18.412109 21.199219 C 19.233818 19.775977 20.098207 18.432055 20.980469 17.164062 C 22.283609 17.067424 23.62445 17.009766 25 17.009766 z M 31.548828 17.410156 C 33.197299 17.615841 34.745083 17.901405 36.185547 18.244141 C 35.758129 19.645287 35.231654 21.108808 34.59375 22.619141 C 34.179567 21.820719 33.750599 21.019585 33.287109 20.216797 C 32.725422 19.243926 32.140408 18.316416 31.548828 17.410156 z M 18.34375 17.425781 C 17.764654 18.315097 17.194836 19.224578 16.644531 20.177734 C 16.175094 20.990823 15.737221 21.802736 15.318359 22.611328 C 14.68596 21.110075 14.162654 19.654877 13.738281 18.261719 C 15.168002 17.918363 16.706766 17.633813 18.34375 17.425781 z M 38.164062 18.775391 C 38.872944 18.989877 39.557566 19.21371 40.185547 19.458984 C 42.0957 20.205046 43.60665 21.088493 44.585938 21.992188 C 45.565224 22.895882 45.990234 23.757696 45.990234 24.59375 C 45.990234 25.429804 45.565225 26.291619 44.585938 27.195312 C 43.60665 28.099007 42.0957 28.982454 40.185547 29.728516 C 39.487698 30.001079 38.72096 30.248243 37.923828 30.482422 C 37.355199 28.723643 36.629408 26.888772 35.765625 25.015625 C 36.758785 22.865083 37.561088 20.768289 38.164062 18.775391 z M 11.802734 18.785156 C 12.398803 20.758169 13.190811 22.834118 14.169922 24.962891 C 13.30047 26.846955 12.571087 28.692254 12 30.460938 C 11.23096 30.232919 10.490212 29.992451 9.8144531 29.728516 C 7.9042995 28.982454 6.39335 28.099007 5.4140625 27.195312 C 4.434775 26.291618 4.0097656 25.429804 4.0097656 24.59375 C 4.0097656 23.757696 4.434775 22.895882 5.4140625 21.992188 C 6.39335 21.088493 7.9042995 20.205046 9.8144531 19.458984 C 10.432774 19.217483 11.105915 18.996837 11.802734 18.785156 z M 25 20 C 22.250421 20 20 22.250421 20 25 C 20 27.749579 22.250421 30 25 30 C 27.749579 30 30 27.749579 30 25 C 30 22.250421 27.749579 20 25 20 z M 15.341797 27.365234 C 15.762496 28.177853 16.200028 28.993283 16.671875 29.810547 C 17.041048 30.449973 17.418073 31.072393 17.800781 31.683594 C 16.457817 31.497372 15.181231 31.261605 13.982422 30.982422 C 14.363652 29.81481 14.819744 28.602796 15.341797 27.365234 z M 34.619141 27.365234 C 35.143284 28.605725 35.599609 29.819681 35.982422 30.990234 C 34.779808 31.269089 33.499292 31.504052 32.152344 31.689453 C 32.540071 31.070779 32.922982 30.44057 33.296875 29.792969 C 33.765252 28.981717 34.201083 28.171917 34.619141 27.365234 z M 13.40625 32.923828 C 15.216074 33.352568 17.177716 33.681912 19.257812 33.896484 C 20.64638 35.904859 22.092967 37.709497 23.548828 39.287109 C 22.897813 39.921859 22.252566 40.517583 21.621094 41.03125 C 19.99538 42.353677 18.454326 43.251559 17.169922 43.667969 C 15.885516 44.084378 14.926946 44.029446 14.212891 43.617188 C 13.498835 43.204927 12.972987 42.402563 12.691406 41.082031 C 12.409825 39.761499 12.417606 37.979279 12.75 35.910156 C 12.900793 34.971492 13.12615 33.966374 13.40625 32.923828 z M 36.560547 32.931641 C 36.842987 33.980548 37.069013 34.98935 37.220703 35.933594 C 37.553389 38.004513 37.56169 39.788939 37.279297 41.113281 C 36.996903 42.437623 36.468699 43.247993 35.748047 43.664062 C 35.027395 44.080132 34.059594 44.13441 32.771484 43.716797 C 31.483374 43.299186 29.941578 42.399747 28.314453 41.076172 C 27.678439 40.558811 27.028726 39.958258 26.373047 39.318359 C 27.838664 37.73459 29.295467 35.920758 30.693359 33.900391 C 32.778701 33.687251 34.745791 33.359875 36.560547 32.931641 z M 21.867188 34.101562 C 22.893951 34.157518 23.934244 34.195312 25 34.195312 C 26.030504 34.195312 27.037063 34.159787 28.03125 34.107422 C 27.014961 35.478593 25.979034 36.725149 24.947266 37.847656 C 23.916125 36.722751 22.882144 35.473968 21.867188 34.101562 z" clipRule="evenodd" fillRule="evenodd"></path>
        </svg>
        <span className="text-xs font-medium text-neutral-200">React.js</span>

          </div>
          <div key="nextjs" className="flex flex-row items-center justify-center gap-3 w-36 p-3 bg-slate-800 rounded-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          <svg width="25" height="25" fill='#00d3f3' viewBox="0 0 394 79"><path d="M261.919 0.0330722H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330722Z"></path><path d="M149.052 0.0330722V12.7H94.0421V33.0772H138.281V45.7441H94.0421V66.6721H149.052V79.339H80.43V12.7H80.4243V0.0330722H149.052Z"></path><path d="M183.32 0.0661486H165.506L229.312 79.3721H247.178L215.271 39.7464L247.127 0.126654L229.312 0.154184L206.352 28.6697L183.32 0.0661486Z"></path><path d="M201.6 56.7148L192.679 45.6229L165.455 79.4326H183.32L201.6 56.7148Z"></path><path clipRule="evenodd" d="M80.907 79.339L17.0151 0H0V79.3059H13.6121V16.9516L63.8067 79.339H80.907Z" fillRule="evenodd"></path><path d="M333.607 78.8546C332.61 78.8546 331.762 78.5093 331.052 77.8186C330.342 77.1279 329.991 76.2917 330 75.3011C329.991 74.3377 330.342 73.5106 331.052 72.8199C331.762 72.1292 332.61 71.7838 333.607 71.7838C334.566 71.7838 335.405 72.1292 336.115 72.8199C336.835 73.5106 337.194 74.3377 337.204 75.3011C337.194 75.9554 337.028 76.5552 336.696 77.0914C336.355 77.6368 335.922 78.064 335.377 78.373C334.842 78.6911 334.252 78.8546 333.607 78.8546Z"></path><path d="M356.84 45.4453H362.872V68.6846C362.863 70.8204 362.401 72.6472 361.498 74.1832C360.585 75.7191 359.321 76.8914 357.698 77.7185C356.084 78.5364 354.193 78.9546 352.044 78.9546C350.079 78.9546 348.318 78.6001 346.75 77.9094C345.182 77.2187 343.937 76.1826 343.024 74.8193C342.101 73.456 341.649 71.7565 341.649 69.7207H347.691C347.7 70.6114 347.903 71.3838 348.29 72.0291C348.677 72.6744 349.212 73.1651 349.895 73.5105C350.586 73.8559 351.38 74.0286 352.274 74.0286C353.243 74.0286 354.073 73.8286 354.746 73.4196C355.419 73.0197 355.936 72.4199 356.296 71.6201C356.646 70.8295 356.831 69.8479 356.84 68.6846V45.4453Z"></path><path d="M387.691 54.5338C387.544 53.1251 386.898 52.0254 385.773 51.2438C384.638 50.4531 383.172 50.0623 381.373 50.0623C380.11 50.0623 379.022 50.2532 378.118 50.6258C377.214 51.0075 376.513 51.5164 376.033 52.1617C375.554 52.807 375.314 53.5432 375.295 54.3703C375.295 55.061 375.461 55.6608 375.784 56.1607C376.107 56.6696 376.54 57.0968 377.103 57.4422C377.656 57.7966 378.274 58.0874 378.948 58.3237C379.63 58.56 380.313 58.76 380.995 58.9236L384.14 59.6961C385.404 59.9869 386.631 60.3778 387.802 60.8776C388.973 61.3684 390.034 61.9955 390.965 62.7498C391.897 63.5042 392.635 64.413 393.179 65.4764C393.723 66.5397 394 67.7848 394 69.2208C394 71.1566 393.502 72.8562 392.496 74.3285C391.491 75.7917 390.043 76.9369 388.143 77.764C386.252 78.582 383.965 79 381.272 79C378.671 79 376.402 78.6002 374.493 77.8004C372.575 77.0097 371.08 75.8463 370.001 74.3194C368.922 72.7926 368.341 70.9294 368.258 68.7391H374.235C374.318 69.8842 374.687 70.8386 375.314 71.6111C375.95 72.3745 376.78 72.938 377.795 73.3197C378.819 73.6923 379.962 73.8832 381.226 73.8832C382.545 73.8832 383.707 73.6832 384.712 73.2924C385.708 72.9016 386.492 72.3564 387.055 71.6475C387.627 70.9476 387.913 70.1206 387.922 69.1754C387.913 68.312 387.654 67.5939 387.156 67.0304C386.649 66.467 385.948 65.9944 385.053 65.6127C384.15 65.231 383.098 64.8856 381.899 64.5857L378.081 63.6223C375.323 62.9225 373.137 61.8592 371.541 60.4323C369.937 59.0054 369.143 57.115 369.143 54.7429C369.143 52.798 369.678 51.0894 370.758 49.6261C371.827 48.1629 373.294 47.0268 375.148 46.2179C377.011 45.4 379.114 45 381.456 45C383.836 45 385.92 45.4 387.719 46.2179C389.517 47.0268 390.929 48.1538 391.952 49.5897C392.976 51.0257 393.511 52.6707 393.539 54.5338H387.691Z"></path></svg>
          <span className="text-sm font-medium text-neutral-200">Next.js</span>
          </div>
          <div key="typescript" className="flex flex-row items-center justify-center w-36 gap-3 p-3 bg-slate-800 rounded-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          <svg width="25" height="25" fill='#00d3f3' viewBox="0 0 50 50">
          <path d="M45,4H5C4.447,4,4,4.448,4,5v40c0,0.552,0.447,1,1,1h40c0.553,0,1-0.448,1-1V5C46,4.448,45.553,4,45,4z M29,26.445h-5V42h-4	V26.445h-5V23h14V26.445z M30.121,41.112v-4.158c0,0,2.271,1.712,4.996,1.712c2.725,0,2.62-1.782,2.62-2.026	c0-2.586-7.721-2.586-7.721-8.315c0-7.791,11.25-4.717,11.25-4.717l-0.14,3.704c0,0-1.887-1.258-4.018-1.258s-2.9,1.013-2.9,2.096	c0,2.795,7.791,2.516,7.791,8.141C42,44.955,30.121,41.112,30.121,41.112z"></path>
          </svg>
          <span className="text-sm font-medium text-neutral-200">TypeScript</span>
          </div>
          <div key="tailwind" className="flex flex-row items-center justify-center gap-3 w-36 p-3 bg-slate-800 rounded-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          <svg width="25" height="25" viewBox="0 0 48 48">
          <path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"></path>
          </svg>
          <span className="text-sm font-medium text-neutral-200">Tailwind CSS</span>
          </div>
          </motion.div>
        </div>
      ),
    },
    {
      key: "services",
      title:"My Services",
      content:(
        <div key="servicesTitle">
          <motion.p 
          initial={{opacity:0,x:90}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:.8}}
          className="mb-8 text-lg font-normal text-neutral-300 md:text-sm dark:text-neutral-200 drop-shadow-lg">
            Here are the services I offer to bring your ideas to life:
          </motion.p>
          <motion.div 
           initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:1.3}}
          className="space-y-6">
            <div key="front-end" className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 shrink-0"></div>
              <div>
                <h3 className="text-cyan-300 font-semibold text-lg mb-2">Front-End Development</h3>
                <p className="text-neutral-200 text-sm leading-relaxed">Building fast, responsive, and scalable interfaces using React and Next.js with clean, maintainable code.</p>
              </div>
            </div>
            <div key="ui-ux" className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 shrink-0"></div>
              <div>
                <h3 className="text-cyan-300 font-semibold text-lg mb-2">UI/UX Implementation</h3>
                <p className="text-neutral-200 text-sm leading-relaxed">Translating designs into pixel-perfect, user-friendly interfaces using Tailwind CSS.</p>
              </div>
            </div>
            <div key="performance" className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 shrink-0"></div>
              <div>
                <h3 className="text-cyan-300 font-semibold text-lg mb-2">Performance Optimization</h3>
                <p className="text-neutral-200 text-sm leading-relaxed">Improving website speed, SEO, and overall performance for Next.js applications.</p>
              </div>
            </div>
            <div key="responsive" className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 shrink-0"></div>
              <div>
                <h3 className="text-cyan-300 font-semibold text-lg mb-2">Responsive Design</h3>
                <p className="text-neutral-200 text-sm leading-relaxed">Ensuring seamless layouts and smooth experiences across all devices.</p>
              </div>
            </div>
            <div key="api" className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 shrink-0"></div>
              <div>
                <h3 className="text-cyan-300 font-semibold text-lg mb-2">API Integration</h3>
                <p className="text-neutral-200 text-sm leading-relaxed">Connecting front-end interfaces with APIs and handling data efficiently using TypeScript.</p>
              </div>
            </div>
            <div key="reusable" className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 shrink-0"></div>
              <div>
                <h3 className="text-cyan-300 font-semibold text-lg mb-2">Reusable Components</h3>
                <p className="text-neutral-200 text-sm leading-relaxed">Creating modular, reusable components with a well-structured project architecture.</p>
              </div>
            </div>
          </motion.div>
        </div>
      )
    }
    
  ];

  return (
<div id="about" className='min-h-screen w-full overflow-x-hidden pt-32 px-4 md:px-8 lg:px-32 bg-slate-950'>
  <Timeline data={data} />
</div>
  )
}

export default About
