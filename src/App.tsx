import { motion } from 'framer-motion'
import './App.css'
import Collapse from './collapse'
import { useInView } from 'react-intersection-observer';
function App() {
  const [refTitle, inViewTitle] = useInView({
    triggerOnce: true, // 仅触发一次动画
    threshold: 0.1, // 元素进入可见区域的阈值
  });
  const [refTitle2, inViewTitle2] = useInView({
    triggerOnce: true, // 仅触发一次动画
    threshold: 0.1, // 元素进入可见区域的阈值
  });
  const [refTitle3, inViewTitle3] = useInView({
    triggerOnce: true, // 仅触发一次动画
    threshold: 0.1, // 元素进入可见区域的阈值
  });
  const [refHead, inViewHead] = useInView({
    triggerOnce: true, // 仅触发一次动画
    threshold: 0.1, // 元素进入可见区域的阈值
  });
  const [refQA, inViewQA] = useInView({
    triggerOnce: true, // 仅触发一次动画
    threshold: 0.1, // 元素进入可见区域的阈值
  });

  return (
    <>
      <div
        className="bg-[#010310] text-white p-[25px] lg:px-[100px] w-screen overflow-hidden relative transform-gpu tracking-[0.02em]">
        <nav className="flex flex-row items-center justify-between mt-[10px] lg:mt-[39px]" id="start">
          <img
            src="/assets/logo.c0c67abd.png" className="h-[25px] lg:h-[30px] w-auto z-50" />
          <div
            className="flex flex-col items-center justify-center gap-[3px] w-[42px] h-[28px] border-[2px] border-white rounded-[15px] lg:hidden z-50 active:bg-white lg:hover:bg-white transition-all duration-300 group false">
            <div
              className="w-[20px] h-[3px] bg-white rounded-full lg:group-hover:bg-black transition-all duration-300 false">
            </div>
            <div
              className="w-[20px] h-[3px] bg-white rounded-full lg:group-hover:bg-black transition-all duration-300 false">
            </div>
            <div
              className="w-[20px] h-[3px] bg-white rounded-full lg:group-hover:bg-black transition-all duration-300 false">
            </div>
          </div>
          <a
            className="font-bold text-[14.7px] ml-auto lg:text-[18px] cursor-pointer hidden lg:block"
            href="https://docs.TODO:.xyz/" target="_blank">Docs</a>
          <a
            href="https://twitter.com/TODO:xyz" target="_blank"
            className="ml-[25px] cursor-pointer hidden lg:block">
            <svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24" className="w-[30px] h-auto fill-white lg:w-[23px] lg:h-[23px]">
              <path
                d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z">
              </path>
            </svg></a><button
              className="hidden font-bold text-[15px] text-black bg-white text-center tracking-[0.02em] h-[30px] w-[117px] rounded-[8px] border-[1.5px] border-white lg:text-[18px] lg:w-[165px] lg:h-[42px] lg:border-[1px] hover:bg-black hover:text-white transition-all duration-300 lg:ml-[20px] z-50">Launch
            App</button>
          <div
            className="fixed top-0 left-0 w-screen h-screen bg-black z-40 flex flex-col gap-[40px] px-[59px] text-[36px] text-white font-medium pt-[100px] transition-all duration-300 -z-50 -translate-y-20 opacity-0">
            <a href="#faq">FAQ</a>
            <a href="https://docs.TODO:.xyz/" target="_blank">Docs</a>
            <a
              href="https://twitter.com/TODO:xyz" target="_blank">Twitter</a>
            <a
              href="https://medium.com/@TODO:xyz" target="_blank">Blog</a>
          </div>
        </nav>


        <h1
          className="font-medium text-[32px] leading-[40px] max-w-[220px] relative mt-[58px] lg:mt-[83px] lg:text-[42px] lg:leading-[55px] lg:w-[600px] capitalize sm:max-w-fit">
          <div
            className="relative z-10 flex flex-row items-center justify-start gap-[5px] lg:gap-[10px] flex-wrap leading-[31.68px] lg:leading-[55px] max-w-fit">
            <div className="head-motion-span">
                
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: inViewHead ? 0 : 40 }}
                transition={{ duration: 0.1 }}
              >
                Enhance
              </motion.div>
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: inViewHead ? 0 : 40 }}
                transition={{ duration: 0.2 }}
              >
                Capital
              </motion.div>
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: inViewHead ? 0 : 40 }}
                transition={{ duration: 0.3 }}
              >
                Efficiency
              </motion.div>
            </div>

            <div className="absolute w-full h-[13px] -bottom-[3px] -left-[2px] blur-[10px] lg:w-[285px] lg:h-[22px] lg:left-[63%] lg:bottom-[2px] specialAnimationUnderline -z-10"
              style={{ opacity: 1, transform: "none" }}></div>
            <div className="absolute w-full h-[13px] -bottom-[3px] -left-[2px] lg:w-[285px] lg:h-[22px] lg:left-[63%] lg:bottom-[2px] specialAnimationUnderline -z-10 "
              style={{ opacity: 1, transform: "none" }}></div>
          </div>
        </h1>
        <p className="text-[#999AA1] w-10/12 font-normal text-[16px] leading-[20px]  mt-[24px] lg:text-[24px] lg:w-[509px] lg:leading-[27.5px] z-20 relative"
          style={{ opacity: 1 }}>Crebit is an SVB model on-chain lending protocol which enable liquidity flow between LPs and projects.</p>
        <motion.div
          initial={{ y: -40 }}
          animate={{ y: inViewHead ? 0 : -40 }}
          transition={{ duration: 0.5 }}
          ref={refHead}
        >
        <div className="flex flex-row mt-[25px] gap-[25px] lg:mt-[30px]">
          <a href="https://arbitrum.TODO:.xyz/lending"
            target="_blank">
            <button
              className="font-bold text-white text-[15px] leading-[13px] text-center h-[36px] w-[140px] bg-gradient-to-r from-[#0021F5] rounded-md relative lg:w-[148px] lg:h-[48px] lg:text-[16px] z-30 group"
              style={{ opacity: 1, transform: "none" }}>
              Lend
              <div
                className="bg-gradient-to-l from-[#0021F5] rounded-md absolute top-0 left-0 h-full w-full -z-10 opacity-[.2] group-hover:opacity-100 transition-all duration-500">
              </div>
            </button>
          </a>
          <a href="https://arbitrum.TODO:.xyz/lending" target="_blank"
            className="special-button relative rounded-lg overflow-hidden z-10 w-[147px] p-[3px] grid place-items-center lg:w-[154px] cursor-pointer select-none"
            style={{ opacity: 1, transform: "none" }}>
            <div
              className="bg-[#02061c] lg:bg-[#010310] relative z-10 h-[36px] w-[140px] grid place-items-center font-bold text-white text-[15px] text-center rounded-lg lg:w-[148px] lg:h-[48px] lg:text-[16px] ">
              Borrow</div>
          </a>
        </div>
        </motion.div>
        <div className="relative">
          <div
            className="w-[120vw] h-full max-h-[400px] absolute top-0 left-0 bg-gradient-to-b from-transparent via-[#002dff]/40 blur-3xl  -translate-y-[30%] -translate-x-[10vw] transform-gpu transition-all duration-300 lg:hidden">
          </div>
          <div className="lg:flex flex-row items-center justify-between mt-[380px] lg:mt-[500px] z-50 relative overflow-visible"
            style={{ opacity: 1 }}>
            <div>
              <motion.div
                initial={{ x: -150 }}
                animate={{ x: inViewTitle ? 0 : -150 }}
                transition={{ duration: 0.5 }}
                ref={refTitle}
              >
                <h1 className="font-bold text-[34px] leading-[32px]  relative lg:text-[42px] capitalize"
                ><span className="relative z-10 w-fit ">
                    Benefit to Projects<span
                      className="absolute w-[calc(100%+5px)] h-[13px] bottom-0 -left-[2px] lg:h-[22px] specialAnimationUnderline -z-10"></span><span
                        className="absolute w-[calc(100%+5px)] h-[13px] bottom-0 -left-[2px] lg:h-[22px] specialAnimationUnderline -z-10 blur-[10px]"></span>
                  </span></h1>
              </motion.div>
              <motion.div
                initial={{ x: -150 }}
                transition={{ duration:1 }}
                animate={{ x: inViewTitle ? 0 : -150 }}
              >
                <p className="text-[#999AA1]  font-normal text-[16px] leading-[20px]  mt-[24px] lg:text-[24px] lg:w-5/6 lg:leading-[36px] lg:mt-[37px]"
                  style={{ opacity: 1, transform: "none" }}>Early stage projects are lack of liquidity and willing to pay alpha token + interest
                  DeFi rates</p>
              </motion.div>
              <motion.div
                initial={{ x: 50 }}
                animate={{ x: inViewTitle ? 0 : 100 }}
                transition={{ duration:1 }}
              >
                <div className="flex"><a href="https://docs.TODO:" target="_blank"
                  className="font-semibold text-white text-[12px] leading-[12px] text-center  h-[36px] w-[135px] rounded-md border-[2px] border-white mt-[25px] lg:text-[16px] lg:w-[185px] lg:h-[48px] lg:mt-[37px] lg:border-[1px] lg:rounded-[8px] relative group overflow-hidden"
                  style={{ opacity: 1, transform: "none" }}>
                  <div
                    className="absolute top-0 left-0 w-full h-full group-hover:bg-white transition-all duration-300 hover:text-black grid place-items-center">
                    Learn more</div>
                </a></div>
              </motion.div>

            </div>
            <div style={{ transform: " translateY(14.3834px) translateZ(0px)" }}><img src="/assets/blob1.4a904ed6.png"
              className="lg:min-w-[447px] lg:h-auto lg:object-cover" style={{ opacity: 1, transform: "none" }} /></div>
          </div>
          <div className="lg:flex flex-row-reverse items-center justify-between mt-[175px] z-10 relative overflow-visible"
            style={{ opacity: 1 }}>
            <div className="w-screen h-[300px] absolute top-[25%] left-0 bg-[#002dff]/30 blur-3xl z-0 lg:hidden"></div>
            <div className="absolute -top-[950px] transition-all duration-300 z-0 w-[120vw] h-[650px] -left-[10vw] blur-3xl opacity-20 hidden lg:block transform-gpu"
              style={{ background: "radial-gradient(rgb(0, 45, 255), rgb(0, 0, 0))" }}></div>
            <div className="absolute top-[300px] transition-all duration-300 z-0 w-[40vw] h-[650px] -right-[20vw] rotate-90 blur-3xl opacity-20 hidden lg:block transform-gpu"
              style={{ background: "radial-gradient(rgb(0, 45, 255), rgb(0, 0, 0))" }}></div>
            <div className="absolute -top-[500px] transition-all duration-300 z-0 w-[120vw] h-[650px] -left-[10vw] blur-3xl opacity-20 hidden lg:block transform-gpu"
              style={{ background: "radial-gradient(rgb(0, 45, 255), rgb(0, 0, 0))" }}></div>
            <div className="lg:flex-1 relative z-10">
              <motion.div
                initial={{ x: 150 }}
                animate={{ x: inViewTitle2 ? 0 : 150 }}
                transition={{ duration: 0.5 }}
                ref={refTitle2}
              >
                <h1 className="font-bold text-[34px] leading-[32px]  relative  text-right lg:text-[42px] capitalize"
                  style={{ opacity: 1, transform: "none" }}><span className="relative z-10 w-fit">
                    Benefit to Liquidity Providers
                    <span
                      className="absolute w-[calc(100%+5px)] h-[13px] bottom-0 -left-[2px] lg:h-[22px] specialAnimationUnderline -z-10"></span><span
                        className="absolute w-[calc(100%+5px)] h-[13px] bottom-0 -left-[2px] lg:h-[22px] specialAnimationUnderline -z-10 blur-[10px]"></span>
                  </span></h1>
              </motion.div>
              <motion.div
                initial={{ x: 150 }}
                animate={{ x: inViewTitle2 ? 0 : 150 }}
                transition={{ duration:1 }}
              >


                <p className="text-[#999AA1]  font-normal text-[16px] leading-[20px] mt-[24px] text-right lg:text-[24px] lg:w-5/6 lg:max-w-[500px] lg:leading-[36px] lg:ml-auto lg:mt-[37px] relative z-10"
                  style={{ opacity: 1, transform: "none" }}>Get interest while earn alpha token</p>
              </motion.div>
              <motion.div
                initial={{ x: 150 }}
                animate={{ x: inViewTitle2 ? 0 : 150 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-row justify-end"><a
                  href="https://docs.TODO:" target="_blank"
                  className="font-semibold text-white text-[12px] leading-[12px] text-center  h-[36px] w-[135px] rounded-md border-[2px] border-white mt-[25px] lg:text-[16px] lg:w-[185px] lg:h-[48px] lg:mt-[37px] lg:border-[1px] lg:rounded-[8px] relative group overflow-hidden"
                  style={{ opacity: 1, transform: "none" }}>
                  <div
                    className="absolute top-0 left-0 w-full h-full group-hover:bg-white transition-all duration-300 hover:text-black grid place-items-center">
                    Learn more</div>
                </a></div>
              </motion.div>
            </div>
            <div className="lg:flex-1" style={{ transform: "translateY(14.3834px) translateZ(0px)" }}><img
              src="/assets/token1.50af6c92.png" className="lg:w-full lg:max-w-[450px] lg:h-auto lg:object-cover"
              style={{ opacity: 1, transform: "none" }} /></div>
          </div>
          <div className="lg:flex flex-row items-center justify-between mt-[280px] lg:gap-[50px] relative w-full"
            style={{ opacity: 1 }}>
            <div className="w-screen h-[350px] absolute top-[50%] left-0 bg-[#002dff]/30 blur-3xl z-0 lg:hidden"></div>
            <div className="relative z-10 lg:flex-1">
              <motion.div
                initial={{ x: -150 }}
                animate={{ x: inViewTitle3 ? 0 : -150 }}
                transition={{ duration: 0.5 }}
                ref={refTitle3}
              >
                <h1 className="font-bold text-[34px] leading-[32px]  relative lg:text-[42px] capitalize"
                  style={{ opacity: 1, transform: "none" }}><span className="relative z-10 w-fit">
                    Benefit to Public Chain<span
                      className="absolute w-[calc(100%+5px)] h-[13px] bottom-0 -left-[2px] lg:h-[22px] specialAnimationUnderline -z-10"></span><span
                        className="absolute w-[calc(100%+5px)] h-[13px] bottom-0 -left-[2px] lg:h-[22px] specialAnimationUnderline -z-10 blur-[10px]"></span>
                  </span></h1>
              </motion.div>
              <motion.div
                initial={{ x: -150 }}
                animate={{ x: inViewTitle3 ? 0 : -150 }}
                transition={{ duration:1 }}
              >
                <p className="text-[#999AA1]  font-normal text-[16px] leading-[20px]  mt-[24px] lg:text-[24px] lg:min-w-[350px] lg:max-w-[576px] lg:leading-[36px] lg:mt-[37px]"
                  style={{ opacity: 1, transform: "none" }}>A new tool to help the ecosystem growth</p>
              </motion.div>
              <motion.div
                initial={{ x: -150 }}
                animate={{ x: inViewTitle3 ? 0 : -150 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex"><a href="https://docs.TODO:" target="_blank"
                  className="font-semibold text-white text-[12px] leading-[12px] text-center  h-[36px] w-[135px] rounded-md border-[2px] border-white mt-[25px] lg:text-[16px] lg:w-[185px] lg:h-[48px] lg:mt-[37px] lg:border-[1px] lg:rounded-[8px] relative group overflow-hidden"
                  style={{ opacity: 1, transform: "none" }}>
                  <div
                    className="absolute top-0 left-0 w-full h-full group-hover:bg-white transition-all duration-300 hover:text-black grid place-items-center">
                    Learn more</div>
                </a></div>
              </motion.div>
            </div>
            <div className="" style={{ transform: "translateY(14.3834px) translateZ(0px)" }}><img
              src="/assets/cubes1.1fe2b0b8.png"
              className="mt-[20px] lg:w-full lg:min-w-[450px] lg:max-w-[490px] lg:h-auto lg:object-cover md:mt-[100px]"
              style={{ opacity: 1, transform: "none" }} /></div>
          </div>
        </div>
        <div className="lg:flex lg:flex-row lg:justify-between lg:mt-[132px] gap-[30px] lg:max-w-full">
          <motion.div
            initial={{ x: -150 }}
            animate={{ x: inViewQA ? 0 : -150 }}
            transition={{ duration: 0.5 }}
            ref={refQA}
          >
          <div className="relative z-20 lg:w-fit" style={{ opacity: 1, transform: "none" }}>
            <h1 className="mt-[108px] font-bold text-[32px] leading-[55px]  text-left lg:text-[42px] lg:mt-0">FAQ</h1><a
              href="https://docs.TODO:.xyz" target="_blank"
              className="font-semibold text-white text-[16px] text-center  h-[34px] w-[177px] rounded-md border-[2px] border-white mt-[6px] grid place-items-center mr-auto lg:w-[186px] lg:mt-[13px] lg:h-[48px] hover:bg-white hover:text-black transition-all duration-300">Documentation</a>
          </div>
          </motion.div>
          <motion.div
            initial={{ x: 150 }}
            animate={{ x: inViewQA ? 0 : 150 }}
            transition={{ duration: 0.5 }}
            ref={refQA}
          >
          <div className="flex flex-col mt-[57px] lg:mt-0 relative z-10 w-fill" style={{ opacity: 1, transform: "none" }}>
            <Collapse quest="How to mitigate the risk?" anwser='Crebit set transparent rules to manage liquidity risk and credit risk. For details, pls refer to our documents.' css="flex flex-col lg:min-w-fit lg:w-full lg:max-w-[793px]" />
            <Collapse quest="How the reserve pool works?" anwser='The reserve pool is used to mitigate the default risk of the lending.' css="flex flex-col mt-[32px] lg:mt-[57px] lg:max-w-[793px]" />
            <Collapse quest="What is the role of the voters?" anwser='Voters are the key successful factor in crebit ecosystem, they have the voting rights to approve the funds in the lending pool to borrowers' css="flex flex-col mt-[32px] lg:mt-[57px] lg:max-w-[793px]" />
            <Collapse quest="Who can be the voters?" anwser='Only the token owner can be the voters. How to get the token, pls refer to tokenomics.' css="flex flex-col mt-[32px] lg:mt-[57px] lg:max-w-[793px] relative z-50" />
          </div>
          </motion.div>
        </div>
        <footer className="flex flex-row items-center mt-[310px] lg:mb-[62px]"><a
          className="font-bold text-[18px]  lg:text-[24px]" href="#start"
          style={{ opacity: 1, transform: "none" }}>TODO:</a>
          <a className="font-bold text-[18px]  lg:text-[24px]"
            href="#start" style={{ opacity: 1, transform: "none" }}>
            <div className="invisible lg:visible">
              <a href="#">
                <img id="badge-button"
                  src="https://static.alchemyapi.io/images/marketing/badge.png" alt="Alchemy Supercharged"
                  style={{ width: "150px", height: "31.5px", marginLeft: " 24px" }} /></a></div>
          </a><a className="font-normal text-[14.7px] ml-auto lg:text-[21px]" href="https://blog.TODO:.xyz/"
            target="_blank" style={{ opacity: 1, transform: "none" }}>Blog</a><a
              className="font-normal text-[14.7px] ml-[40px] lg:text-[21px]" href="https://docs.TODO:.xyz/"
              target="_blank" style={{ opacity: 1, transform: "none" }}>Docs</a><a className="ml-[42px]"
                href="https://twitter.com/TODO:xyz" target="_blank" style={{ opacity: 1, transform: "none" }}><svg
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  className="w-[30px] h-auto fill-white lg:w-[42px] lg:h-[45px]">
              <path
                d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z">
              </path>
            </svg></a></footer>
      </div>

    </>
  )
}

export default App
